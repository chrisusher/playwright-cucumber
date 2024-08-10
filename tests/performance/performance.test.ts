import { test, chromium, expect, Page } from "@playwright/test";
import { LoginPage } from "../../pages/security/login-page";

require("dotenv").config();

const baseUrl = process.env.BASE_URL
  ? process.env.BASE_URL
  : "https://www.saucedemo.com";

const pageUnderTest = `${baseUrl}/inventory.html?id=4`;

test.describe("Product Page Concurrency Test", () => {
  test("5 Concurrent Sessions should load in under 2 seconds", async () => {
    test.info().annotations.push({
      description:
        "If we have 5 concurrent sessions, then all attempts to load the inventory page should load in less than 2 seconds.",
      type: "",
    });

    let numberOfSessions = 5;
    const browser = await chromium.launch();

    const pagePromises = Array.from(
      { length: numberOfSessions },
      async (_, i) => {
        const context = await browser.newContext();
        const page = await context.newPage();

        await loginAsync(page);

        let now = Date.now();
        console.log(`Start: ${now}`);

        await page.goto(pageUnderTest, { waitUntil: "networkidle" });

        let duration = Date.now() - now;
        console.log(`End: ${duration}`);

        expect(duration).toBeLessThan(2000);
      }
    );

    await Promise.all(pagePromises);
    await browser.close();
  });

  async function loginAsync(page: Page) {
    await page.goto(
      process.env.BASE_URL ? process.env.BASE_URL : "https://www.saucedemo.com"
    );

    const loginPage = new LoginPage(page);
    await loginPage.loginAsync(
      "standard_user",
      process.env.DEFAULT_PASSWORD
        ? process.env.DEFAULT_PASSWORD
        : "secret_sauce"
    );
  }
});
