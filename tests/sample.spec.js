import { test } from '@playwright/test'

test('validate instagram', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/')
    await page.locator('//input[@id="username"]').fill('student')
    await page.locator('//input[@name="password"]').fill('Password123')
    await page.locator('//button[text()="Submit"]').click()
})

//Locator --------> x-path

//id-------------->//input[@id="username"]
//name------------>//input[@name="username"]
//class----------->//button[@class="btn"]
//atrribute and value------>//input[@type="text"]
//text---------->//button[text()="Submit"]