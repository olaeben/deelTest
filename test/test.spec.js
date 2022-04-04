const { chromium } = require('@playwright/test');
const assert = require('assert');
const expect = require('expect');
let browser;
before(async() => {
  browser = await chromium.launch();
});
after(async () => {
  await browser.close();
});
let page;
beforeEach(async() => {
  page = await browser.newPage();
});
// afterEach(async () => {
//   await page.close();
// });

it('page title', async () => {
  await page.goto('https://app.deel.training/login');
  assert.equal(await page.title(), 'Deel - Payroll for remote teams');
});

it('email field is visible', async () => {
const locator = page.locator('[placeholder="Type your email"]');
await expect(locator).toBeVisible();

});

it('password field is visible', async () => {
  const locator = page.locator('input[name="password"]');
  await expect(locator).toBeVisible();
  
  });

it('Login button has text Login', async () => {
const locator = page.locator('form button:has-text("log in")');
await expect(locator).toContainText('login');

});


afterEach(async () => {
  await page.close();
});