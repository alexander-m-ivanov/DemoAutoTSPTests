import { CreateSubmitButton } from '../components/create-submit-button.component';
import { DomainDropdown } from '../components/domain-dropdown.component';
import { BasePage } from './base.page';
import { Page, Locator } from '@playwright/test';

export class EmailAccountsPage extends BasePage {

    readonly domainDropdown: DomainDropdown;
    readonly createSubmitButton: CreateSubmitButton;
    private readonly accountNameInput: Locator;
    private readonly generatePasswordButton: Locator;
    private readonly passwordInput: Locator;
    private readonly successMessage: Locator;
    private readonly emailAccountsTableRows: Locator;

    constructor(page: Page) {
        super(page);

        this.domainDropdown = new DomainDropdown(page);
        this.createSubmitButton = new CreateSubmitButton(page);

        this.accountNameInput = this.page.getByTestId('text-input-name');
        this.generatePasswordButton = this.page.getByTestId('password-generate').last();
        this.passwordInput = this.page.getByTestId('form-password-password');
        this.successMessage = this.page.getByTestId('box-notification').getByTestId('title');
        this.emailAccountsTableRows = this.page.getByTestId('table-body').getByTestId('text');
    }

    async enterAccountName(accountName: string) {
        await this.accountNameInput.fill(accountName);
    }

    async clickGeneratePassword() {
        await this.generatePasswordButton.click();
    }

    async getPasswordInputValue(): Promise<string> {
        return this.passwordInput.inputValue();
    }

    public getSuccessMessage(): Locator {
        return this.successMessage;
    }

    async getCreateEmailNotificationMessage(): Promise<string | null> {
        return this.successMessage.textContent();
    }

    async doesTableContainsEmailAddress(expectedEmailAccountName: string): Promise<boolean> {
        const rows = await this.emailAccountsTableRows.allTextContents();
        for (const row of rows) {
            if (row === expectedEmailAccountName) {
                return true;
            }
        }
        return false;
    }
}