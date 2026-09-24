import { test } from '@playwright/test'

test('Frame Handling', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Frames.html')
    const singleFrame = await page.frameLocator('//iframe[@id="singleframe"]')
    await singleFrame.locator('//input[@type="text"]').fill("Hii Buddy")
    // await page.waitForTimeout(3000)

    await page.locator('(//a[@class="analystic"])[2]').click() //Show Frame Button

    const outerFrame = await page.frameLocator('//iframe[@src="MultipleFrames.html"]')
    const innerFrame = await outerFrame.frameLocator('//iframe[@src="SingleFrame.html"]')
    await innerFrame.locator('//input[@type="text"]').fill("Hello Buddy")
    // await page.waitForTimeout(3000)
})