# Cucumber Playwright JS Challenge

## Introduction

This repo is an example of how to use Playwright to test an e-commerce site as part of a Playwright in JavaScript as a challenge.

### Test Choice

This section describes the tests that have been chosen for Automation and why I felt they were the most important to implement first.

#### 1. An End-to-End Checkout Transaction

As an E-commerce application if Users cannot purchase goods or services through the website, the business cannot generate revenue, so this test should always be prioritised.

This test uses a successful login, so naturally covers the positive test of being able to login to the website.

#### 2. Unauthorised Users can't access the Website

Blocking unauthorised access to a website is critical to all businesses.  

We only want to allow valid users to be able to place orders as malicious users might be trying to exploit or gather other user's data from the website.

#### 3. A Performance test measuring how long parallel users take to login and load a Product

An E-commerce site that is slow and its' users have to wait a long time to be able to place an order, this is extremely likely to impact the business' reputation and revenue.

A performance test, especially concurrency, is a good indicator that we have the right underlying architecture in order to support future growth plans of the business and often can help prove the Software Under Test is fit for the future plans of the business.

In my experience, this also drives good conversations with Engineering Managers and Product Owners to define the *Key Performance Indicators* our Software should continually be able to attain.

## Run the Tests

1. Run `npm install` to install the dependencies.
1. Run `npx playwright install` to install the Browsers, if not already on the local system.
1. Copy the `.env.example` file to `.env`.

    - `BASE_URL` is the URL of the website you want to test.
    - `DEFAULT_PASSWORD` is the correct password for the standard_user, which can be found on [the Sauce Demo website](https://www.saucedemo.com).

1. Run `npx playwright test` to run the tests.
1. Run `npx playwright show-report` to open the Test Report after the tests have run.

## Future Scope

Given more time I would consider:

- Having a GitHub Action that scores the Website using common accessibility tools.

- Investigate why using Playwright's authentication state mechanism is not supported by the Sauce Demo website.

- Make sure we have the right artifacts i.e. traces taken, ready for inspection on GitHub Actions when Tests fail.

## Thanks

Thanks for reviewing!
