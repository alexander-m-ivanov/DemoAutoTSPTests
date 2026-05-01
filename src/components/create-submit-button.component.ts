import { Page, Locator } from '@playwright/test';

export class CreateSubmitButton {

    private readonly page: Page;
    private readonly createSubmitButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.createSubmitButton = this.page.getByTestId('create-box-submit');
    }

    async clickCreateButton() {
        await this.createSubmitButton.click();
    }
}