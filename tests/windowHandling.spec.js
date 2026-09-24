import { test } from '@playwright/test'

test('Window Hanlding', async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto('https://www.amazon.in/')
    await page.locator('//input[@id="twotabsearchtextbox"]').fill('iphone 17 pro')
    await page.keyboard.press('Enter')
    // await page.pause()

    const [newPage] = await Promise.all([context.waitForEvent('page')], page.click('//h2[text()="Results"]//ancestor::div[@data-cel-widget="search_result_0"]//following-sibling::div[@data-asin="B0DGJ8DP1M"]//descendant::h2[contains(@aria-label,"iPhone 16 Plus 256 GB: 5G Mobile Phone with Camera Control")]'))


    await newPage.waitForLoadState()
    const title = await newPage.title()
    console.log(title)
    // await page.pause()  

    //const arr=[10,20,30,40,50]
    // const [a,b]=arr

    //Dynamic Xpath

    //ancestor
    //parent
    //preceeding-sibling
    //child
    //following-sibling
    //descendant

    //h2[text()="Results"]//ancestor::div[@data-cel-widget="search_result_0"]
    //following-sibling::div[@data-asin="B0DGJ8DP1M"]
    //descendant::h2[contains(@aria-label,"iPhone 16 Plus 256 GB: 5G Mobile Phone with Camera Control")]


})