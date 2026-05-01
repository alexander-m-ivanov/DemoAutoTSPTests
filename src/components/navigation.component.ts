import { Page, Locator } from '@playwright/test';

export class Navigation {

    private readonly page: Page;
    private readonly emailSectionMain: Locator;
    private readonly emailAccountsSubsection: Locator;
    private readonly emailForwardersSubsection: Locator;

    constructor(page: Page) {

        this.page = page;
        this.emailSectionMain = this.page.locator('li').getByTestId('navigation-group-mail');
        this.emailAccountsSubsection = this.page.getByTestId('navigation-list-item-email');
        this.emailForwardersSubsection = this.page.getByTestId('navigation-list-item-email-forward');
    }

    async goToEmailAccounts() {
        await this.emailSectionMain.click();
        await this.emailAccountsSubsection.click();
    }

    async goToEmailForwarders() {
        await this.emailSectionMain.click();
        await this.emailForwardersSubsection.click();
    }
}