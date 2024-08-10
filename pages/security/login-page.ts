// @ts-check
export class LoginPage {
  /**
   * @param {import("@playwright/test").Page} page
   */
  constructor(page) {
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
  async loginAsync(username, password) {
    await this.usernameTextbox.fill(username);
    await this.passwordTextbox.fill(password);
    await this.loginButton.click();
  }
}