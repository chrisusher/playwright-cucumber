import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/security/login-page";

require("dotenv").config();

test.describe("Login", () => {
  test.beforeEach(async ({ page }) => {
    // Load the Site under Test.
    await page.goto(
      process.env.BASE_URL ? process.env.BASE_URL : "https://www.saucedemo.com"
    );
  });

  test("Cannot Login with Invalid Credentials", async ({ page }) => {
    test.info().annotations.push({
      description:
        "Given I have incorrect username and password, when I log in, then I should see an error message indicating that Login is not valid.",
      type: "",
    });

    // Create a Login Page.
    const loginPage = new LoginPage(page);

    // Log in with invalid credentials.
    await loginPage.loginAsync("standard_user", "invalid_password");

    // Expect an error message to be displayed.
    await expect(loginPage.errorMessage).toBeVisible();
  });
});
