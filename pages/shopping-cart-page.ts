const { Page } = require("@playwright/test");

export class ShoppingCartPage {
  page: typeof Page;

  /**
   * @param {import("@playwright/test").Page} page
   */
  constructor(page: typeof Page) {
    this.page = page;
  }

  /**
   * Returns true if the Browser is on the shopping cart page.
   * @returns {boolean}
   */
  onPage(): boolean {
    return this.page.url().toLowerCase().includes("/cart.html");
  }

  /**
   * Start the checkout process.
   *
   * @return {Promise<void>} A promise that waits until checkout navigation is complete.
   */
  async checkoutAsync(): Promise<void> {
    await this.page.getByTestId("checkout").click();
  }
}
