// @ts-check
export class ShoppingCartPage {
  /**
   * @param {import("@playwright/test").Page} page
   */
  constructor(page) {
    this.page = page;
  }

  /**
   * Returns true if the Browser is on the shopping cart page.
   * @returns {boolean}
   */
  onPage() {
    return this.page.url().toLowerCase().includes("/cart.html");
  }

  /**
   * Start the checkout process.
   *
   * @return {Promise<void>} A promise that waits until checkout navigation is complete.
   */
  async checkoutAsync() {
    await this.page.getByTestId("checkout").click();
  }
}
