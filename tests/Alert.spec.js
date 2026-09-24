import { test } from '@playwright/test'

test('Alert Handling', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Alerts.html')

    await page.on('dialog', async (dialog) => {
        await dialog.accept()
        console.log("Simple Alert:", dialog.message())
    })

    await page.locator('//button[@class="btn btn-danger"]').click()

    await page.locator('(//a[@class="analystic"])[2]').click()//show alert button

    // await page.once('dialog', async (dialog) => {
    //     await dialog.dismiss()
    //     console.log("Confirmation Alert:", dialog.message())
    // })

    await page.locator('//button[@class="btn btn-primary"]').click()

    await page.locator('(//a[@class="analystic"])[3]').click() //show alert button

    // await page.once('dialog', async (dialog) => {
    //     await dialog.accept('Hii Buddy')
    //     console.log("Prompt Alert:", dialog.message())
    // })

    await page.locator('//button[@class="btn btn-info"]').click()
})