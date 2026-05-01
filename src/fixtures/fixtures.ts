import { test as base } from '@playwright/test';
import { EmailAccountsPage } from '../pages/email-accounts.page';
import { EmailForwardersPage } from '../pages/email-forwarders.page';
import { HomePage } from '../pages/home.page';

type TestFixtures = {
    emailAccounts: EmailAccountsPage;
    emailForwarders: EmailForwardersPage;
    home: HomePage;
};

export const test = base.extend<TestFixtures>({
    emailAccounts: async ({ page }, use) => {
        const emailAccountsPage = new EmailAccountsPage(page);
        await use(emailAccountsPage);
    },

    emailForwarders: async ({ page }, use) => {
        const emailForwardersPage = new EmailForwardersPage(page);
        await use(emailForwardersPage);
    },

    home: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },
});

export const expect = test.expect;