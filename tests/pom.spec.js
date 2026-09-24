import { test } from '@playwright/test'
import { LoginPage } from '../page/LoginPage'

test('Page Object Model', async ({ page }) => {
    const login = new LoginPage(page)
    await login.visitUrl()
    await login.enterUsername('Ashwin99')
    await login.enterPassword('12345678')
    await login.clickLoginButton()
})
