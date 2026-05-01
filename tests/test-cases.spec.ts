import { test, expect } from '../src/fixtures/fixtures';
import { EXPECTED_DOMAINS } from '../src/test-data/domain.data';
import { verifyAndSelectDomain } from '../src/utils/domain-dropdown.helper';

test.beforeEach(async ({ page }) => {
  await page.goto('');
});

test('TC#1 Add an email account', async ({ home, emailAccounts }) => {

  const accountName = 'test_account';
  const expectedEmailAddress = `${accountName}@${EXPECTED_DOMAINS[3]}`;

  await home.navigation.goToEmailAccounts();
  await verifyAndSelectDomain(emailAccounts, EXPECTED_DOMAINS);

  await emailAccounts.enterAccountName(accountName);
  await emailAccounts.clickGeneratePassword();
  expect.soft(await emailAccounts.getPasswordInputValue()).toMatch(/.+/);

  await emailAccounts.createSubmitButton.clickCreateButton();
  await expect.soft(emailAccounts.getSuccessMessage()).toBeVisible();
  expect.soft(await emailAccounts.getCreateEmailNotificationMessage()).toEqual(`Email account ${expectedEmailAddress} is created.`)
  expect(await emailAccounts.doesTableContainsEmailAddress(expectedEmailAddress)).toBe(true);
});

test('TC#2 Add an empty email Forwarder', async ({ home, emailForwarders }) => {

  await home.navigation.goToEmailForwarders();
  await verifyAndSelectDomain(emailForwarders, EXPECTED_DOMAINS);

  await emailForwarders.createSubmitButton.clickCreateButton();
  await expect.soft(emailForwarders.getRequiredFieldValidation()).toBeVisible();
  expect(await emailForwarders.getRequiredFieldValidationMessage()).toEqual('Required field.');
});