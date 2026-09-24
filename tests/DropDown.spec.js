import { test } from '@playwright/test'

test('Dropdown Handling', async ({ page }) => {
    await page.goto('https://letcode.in/dropdowns/')
    const fruite = await page.locator('//select[@id="fruits"]')
    await fruite.selectOption({ label: "Orange" })
    const text = await fruite.locator('option:checked').textContent()
    console.log(text)

    const superHeros = await page.locator('//select[@id="superheros"]')
    await superHeros.selectOption([{ index: 1 }, { label: "Captain America" }, { value: "hb" }])
    const heros = await superHeros.locator('option:checked').allTextContents()
    console.log(heros)


})

//Dropdown Methods

//index---------------------------------------->{index:1}
//value ------->Attribute represent in dropdown-->{value:"1"}
//label -------->visible text---------->{label:"Orange"}
