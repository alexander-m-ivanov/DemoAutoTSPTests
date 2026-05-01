import { test, expect } from '@playwright/test';
import { EmailAccountsPage } from '../src/pages/email-accounts.page';
import { LandingPage } from '../src/pages/landing.page';
import { EmailForwardersPage } from '../src/pages/email-forwarders.page';
import { EXPECTED_DOMAINS } from '../src/test-data/domain.data';
import { verifyAndSelectDomain } from '../src/utils/domain-dropdown.helper';

test('TC#1 Add an email account', async ({ page }) => {

  const emailAccountsPage = new EmailAccountsPage(page);
  const accountName = 'test_account';
  const expectedEmailAddress = `${accountName}@${EXPECTED_DOMAINS[3]}`;

  await page.goto('');
  await new LandingPage(page).navigation.goToEmailAccounts();
  await verifyAndSelectDomain(emailAccountsPage, EXPECTED_DOMAINS);

  await emailAccountsPage.enterAccountName(accountName);
  await emailAccountsPage.clickGeneratePassword();
  expect.soft(await emailAccountsPage.getPasswordInputValue()).toMatch(/.+/);

  await emailAccountsPage.createSubmitButton.clickCreateButton();
  await expect.soft(emailAccountsPage.getSuccessMessage()).toBeVisible();
  expect.soft(await emailAccountsPage.getCreateEmailNotificationMessage()).toEqual(`Email account ${expectedEmailAddress} is created.`)
  expect(await emailAccountsPage.doesTableContainsEmailAddress(expectedEmailAddress)).toBe(true);
});

test('TC#2 Add an empty email Forwarder', async ({ page }) => {

  const emailForwardersPage = new EmailForwardersPage(page);

  await page.goto('');
  await new LandingPage(page).navigation.goToEmailForwarders();
  await verifyAndSelectDomain(emailForwardersPage, EXPECTED_DOMAINS);

  await emailForwardersPage.createSubmitButton.clickCreateButton();
  await expect.soft(emailForwardersPage.getRequiredFieldValidation()).toBeVisible();
  expect(await emailForwardersPage.getRequiredFieldValidationMessage()).toEqual('Required field.');
});