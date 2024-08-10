import { Page } from "@playwright/test";

export class OrderSummaryPage {
  page: Page;

  /**
   * @param {import("@playwright/test").Page} page
   */
  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Returns true if the Browser is on the order summary page.
   * @returns {boolean}
   */
  onPage(): boolean {
    return this.page.url().toLowerCase().includes("/checkout-step-two.html");
  }

  /**
   * Completes the order.
   *
   * @returns {Promise<void>} A promise that waits until the finish navigation is complete.
   */
  async completeOrderAsync(): Promise<void> {
    await this.page.getByTestId("finish").click();
  }
}
