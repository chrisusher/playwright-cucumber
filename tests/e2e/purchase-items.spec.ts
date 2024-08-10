import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { LoginPage } from "../../pages/security/login-page";
import { InventoryPage } from "../../pages/inventory-page";
import { ShoppingCartPage } from "../../pages/shopping-cart-page";
import { CheckoutPage } from "../../pages/checkout-page";
import { OrderSummaryPage } from "../../pages/order-summary-page";

require("dotenv").config();

test.describe("Purchase Flow", () => {
  test.beforeEach(async ({ page }) => {
    // Load the Site under Test.
    await page.goto(
      process.env.BASE_URL ? process.env.BASE_URL : "https://www.saucedemo.com"
    );

    // Create a Login Page object.
    const loginPage = new LoginPage(page);
    await loginPage.loginAsync(
      "standard_user",
      process.env.DEFAULT_PASSWORD
        ? process.env.DEFAULT_PASSWORD
        : "secret_sauce"
    );
  });

  test("Purchase Items", async ({ page }) => {
    test.info().annotations.push({
      description: "Given I have logged in, when I purchase items and complete the purchase, then I should see an order confirmation.",
      type: ""
    });

    // Create a Products Page.
    const productsPage = new InventoryPage(page);
    await productsPage.addItemToCartAsync("Sauce Labs Backpack");

    expect(await productsPage.getCartCount()).toBe(1);

    // Go to the Shopping Cart.
    await productsPage.goToCartAsync();

    const cartPage = new ShoppingCartPage(page);
    expect(cartPage.onPage()).toBe(true);

    // Complete the purchase.
    await cartPage.checkoutAsync();

    const checkoutPage = new CheckoutPage(page);
    expect(checkoutPage.onPage()).toBe(true);

    await checkoutPage.completeCheckoutAsync(
      faker.person.firstName(),
      faker.person.lastName(),
      faker.location.zipCode()
    );

    const orderSummaryPage = new OrderSummaryPage(page);
    expect(orderSummaryPage.onPage()).toBe(true);

    await orderSummaryPage.completeOrderAsync();

    let completeHeader = page.getByTestId("complete-header");
    await expect(completeHeader).toHaveText("Thank you for your order!");
  });
});
