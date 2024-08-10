import { Page } from "@playwright/test";

export class LoginPage {
  page: Page;
  usernameTextbox: any;
  passwordTextbox: any;
  loginButton: any;
  errorMessage: any;

  /**
   * @param {import("@playwright/test").Page} page
   */
  constructor(page: Page) {
    this.page = page;
    this.usernameTextbox = page.locator("#user-name");
    this.passwordTextbox = page.locator("#password");
    this.loginButton = page.locator("#login-button");
    this.errorMessage = page.locator(".error-message-container");
  }

  /**
   * Asynchronously logs in with the provided username and password.
   *
   * @param {string} username - The username to log in with.
   * @param {string} password - The password to log in with.
   * @return {Promise<void>} A promise that resolves when the login is complete.
   */
  async loginAsync(username: string, password: string): Promise<void> {
    await this.usernameTextbox.fill(username);
    await this.passwordTextbox.fill(password);
    await this.loginButton.click();
  }
}
