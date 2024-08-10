const { Page } = require("@playwright/test");

export class InventoryPage {
  page: typeof Page;
  productsContainer: any;

  /**
   * @param {import("@playwright/test").Page} page
   */
  constructor(page: typeof Page) {
    this.page = page;
    this.productsContainer = page.getByTestId("inventory-container");
  }

  /**
   * Asynchronously adds an item to the cart.
   *
   * @param {string} itemName - The name of the item to add.
   * @return {Promise<void>} A promise that returns after adding the item to the cart.
   */
  async addItemToCartAsync(itemName: string): Promise<void> {
    let item = this.page
      .getByTestId("inventory-item-description")
      .filter({ hasText: itemName });

    await item.getByRole("button", { name: "Add to cart" }).click();
  }

  /**
   * Asynchronously returns the number of items in the cart.
   *
   * @return {Promise<number>} Returns the number of items in the cart.
   */
  async getCartCount(): Promise<number> {
    let cartCount = await this.page
      .getByTestId("shopping-cart-badge")
      .innerText();

    // Parse the cart count into an integer.
    return parseInt(cartCount);
  }

  /**
   * Asynchronously navigates to the cart page.
   *
   * @return {Promise<void>} A promise that waits until the navigation is complete.
   */
  async goToCartAsync(): Promise<void> {
    await this.page.getByTestId("shopping-cart-link").click();
  }
}
