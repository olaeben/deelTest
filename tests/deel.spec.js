// import { test, expect } from '@playwright/test';

const {test, expect} = require('@playwright/test');

test.only('test', async ({page}) => {

    // Go to https://app.deel.training/login
    await page.goto('https://app.deel.training/login');

    // Click [placeholder="Type your email"]
    await page.locator('[placeholder="Type your email"]').click();

    // Fill [placeholder="Type your email"]
    await page.locator('[placeholder="Type your email"]').fill('swheeler@mailinator.com');

    // Fill input[name="password"]
    await page.locator('input[name="password"]').fill('Okuro234$@ant');

    // Click form button:has-text("log in")
    await Promise.all([
        page.waitForNavigation( /*{ url: 'https://app.deel.training/' }*/ ),
        page.locator('form button:has-text("log in")').click()
    ]);

    // Click .button.button-close
    await page.locator('.button.button-close').click();

    await page.locator('xpath=//html/body/div[1]/div[1]/div[4]/a[2]').click();

    // Click text=Create A Contract
    await page.locator('text=Create A Contract').click();
    await expect(page).toHaveURL('https://app.deel.training/create');

    // Click h4:has-text("Fixed Rate")
    await page.locator('h4:has-text("Fixed Rate")').click();
    await expect(page).toHaveURL('https://app.deel.training/create/fixed');

    // Click input[name="name"]
    await page.locator('input[name="name"]').click();

    // Fill input[name="name"]
    await page.locator('input[name="name"]').fill('deel');

    // Click .deel-ui__select.select .deel-ui__select__input-container .deel-ui__select__control .deel-ui__select__value-container >> nth=0
    await page.locator('.deel-ui__select.select .deel-ui__select__input-container .deel-ui__select__control .deel-ui__select__value-container').first().click();

    // Click #react-select-3-option-1-2 >> text=United States
    await page.locator('#react-select-3-option-1-2 >> text=United States').click();

    // Click .deel-ui__stack .deel-ui__stack.deel-ui__stack_vertical div:nth-child(2) .deel-ui__select__input-container .deel-ui__select__control .deel-ui__select__value-container
    await page.locator('.deel-ui__stack .deel-ui__stack.deel-ui__stack_vertical div:nth-child(2) .deel-ui__select__input-container .deel-ui__select__control .deel-ui__select__value-container').click();

    // Fill #react-select-5-input
    await page.locator('#react-select-5-input').fill('col');

    // Click #react-select-5-option-5 >> text=Colorado
    await page.locator('#react-select-5-option-5 >> text=Colorado').click();

    // Click input[name="jobTitle"]
    await page.locator('input[name="jobTitle"]').click();

    // Fill input[name="jobTitle"]
    await page.locator('input[name="jobTitle"]').fill('qua');

    // Click text=Quality Assurance Engineer
    await page.locator('text=Quality Assurance Engineer').click();

    // Click .deel-ui__stack div:nth-child(4) .flex .deel-ui__select .deel-ui__select__input-container .deel-ui__select__control .deel-ui__select__value-container
    await page.locator('.deel-ui__stack div:nth-child(4) .flex .deel-ui__select .deel-ui__select__input-container .deel-ui__select__control .deel-ui__select__value-container').click();

    // Click #react-select-4-option-3 >> text=Senior (Individual Contributor Level 3)
    await page.locator('#react-select-4-option-3 >> text=Senior (Individual Contributor Level 3)').click();

    // Click textarea[name="scope"]
    await page.locator('textarea[name="scope"]').click();

    // Fill textarea[name="scope"]
    await page.locator('textarea[name="scope"]').fill('Test');

    // Click text=Today - Apr 04, 2022
    await page.locator('text=Today - Apr 04, 2022').click();

    // Click button:has-text("03")
    await page.locator('button:nth-child(7)').click();
        
    // Click button:has-text("next")
    await page.locator('button:has-text("next")').click();

    // Click .deel-ui__select__value-container >> nth=0
    await page.locator('.deel-ui__select__value-container').first().click();

    // Fill text=CurrencyUSD - US Dollar >> input[type="text"]
    await page.locator('text=CurrencyUSD - US Dollar >> input[type="text"]').fill('gb');

    // Click #react-select-6-option-37
    await page.locator('#react-select-6-option-37').click();

    // Click input[name="rate"]
    await page.locator('input[name="rate"]').click();

    // Fill input[name="rate"]
    await page.locator('input[name="rate"]').fill('1000');

    // Click text=Monthly >> nth=0
    await page.locator('text=Monthly').first().click();

    // Click #react-select-7-option-0 >> text=Weekly
    await page.locator('#react-select-7-option-0 >> text=Weekly').click();

    // Click button:has-text("next")
    await page.locator('button:has-text("next")').click();

    // Click button:has-text("next")
    await page.locator('button:has-text("next")').click();

    // Expect some text to be visible on the page.
    await expect(page.locator('text=Add a Special Clause').first()).toBeVisible();

    const handle = await page.$('text=Add a Special Clause');
    // ...
    await handle.hover();
    await handle.click();

    const element = await page.$('textarea');
    await element.type('This a Create Contract Test');

    // Click button:has-text("next")
    await page.locator('button:has-text("next")').click();

    // Expect some text to be visible on the page.
    await expect(page.locator('text=Create Contract').first()).toBeVisible();

    // Click button:has-text("Contract")
    await page.locator('button:has-text("Contract")').click();


});