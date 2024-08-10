const { Page } = require("@playwright/test");

export class CheckoutPage {
  page: typeof Page;
  firstNameTextbox: any;
  lastNameTextbox: any;
  postalCodeTextbox: any;
  continueButton: any;
  
  /**
   * @param {import("@playwright/test").Page} page
   */
  constructor(page: typeof Page) {
    this.page = page;
    this.firstNameTextbox = page.getByTestId("firstName");
    this.lastNameTextbox = page.getByTestId("lastName");
    this.postalCodeTextbox = page.getByTestId("postalCode");
    this.continueButton = page.getByTestId("continue");
  }

  /**
   * Returns true if the Browser is on the checkout step 1 page.
   * @returns {boolean}
   */
  onPage() {
    return this.page.url().toLowerCase().includes("/checkout-step-one.html");
  }

  /**
   * Populates the customer details and clicks continue on the checkout page.
   *
   * @param {string} firstName - The First Name of the Customer to populate on the checkout page.
   * @param {string} lastName - The Last Name of the Customer to populate on the checkout page.
   * @param {string} postCode - The Post Code to populate on the checkout page.
   */
  async completeCheckoutAsync(firstName: string, lastName: string, postCode: string) {
    await this.firstNameTextbox.fill(firstName);
    await this.lastNameTextbox.fill(lastName);
    await this.postalCodeTextbox.fill(postCode);

    await this.continueButton.click();
  }
}
