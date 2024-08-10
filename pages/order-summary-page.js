// @ts-check
export class OrderSummaryPage {
  /**
   * @param {import("@playwright/test").Page} page
   */
  constructor(page) {
    this.page = page;
  }

  /**
   * Returns true if the Browser is on the order summary page.
   * @returns {boolean}
   */
  onPage() {
    return this.page.url().toLowerCase().includes("/checkout-step-two.html");
  }

  /**
   * Completes the order.
   *
   * @returns {Promise<void>} A promise that waits until the finish navigation is complete.
   */
  async completeOrderAsync() {
    await this.page.getByTestId("finish").click();
  }
}
