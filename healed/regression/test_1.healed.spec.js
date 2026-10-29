const { test, expect } = require('../../fixtures/walker_fixture.js');
import testData from '../../test-data.json';

test("sign in with email and remember me @regression", async ({ page }) => {
  await page.goto(testData.url);
  await page.waitForLoadState('domcontentloaded');

  const signInWithEmailButton = page.getByRole('button', { name: 'Sign in with Email' });
  await expect(signInWithEmailButton).toBeEnabled();
  await signInWithEmailButton.click();

  const emailInput = page.locator("xpath=//input[@name='email']");
  await expect(emailInput).toBeEnabled();
  await emailInput.click();

  const passwordInput = page.locator("xpath=//input[@name='password']");
  await expect(passwordInput).toBeEnabled();
  await passwordInput.click();

  const rememberMeCheckbox = page.getByRole('checkbox', { name: 'Remember me' });
  await expect(rememberMeCheckbox).toBeEnabled();
  await rememberMeCheckbox.click();

  const signInWithEmailButtonAfterRememberMe = page.getByRole('button', { name: 'Sign in with Email' });
  await expect(signInWithEmailButtonAfterRememberMe).toBeEnabled();
  await signInWithEmailButtonAfterRememberMe.click();

});
