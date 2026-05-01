import { CreateSubmitButton } from '../components/create-submit-button.component';
import { DomainDropdown } from '../components/domain-dropdown.component';
import { BasePage } from './base.page';
import { Page, Locator } from '@playwright/test';

export class EmailForwardersPage extends BasePage {

    readonly domainDropdown: DomainDropdown;
    readonly createSubmitButton: CreateSubmitButton;
    private readonly requiredFieldValidation: Locator;

    constructor(page: Page) {
        super(page);

        this.domainDropdown = new DomainDropdown(page);
        this.createSubmitButton = new CreateSubmitButton(page);
        this.requiredFieldValidation = this.page.getByTestId('validation');
    }

    public getRequiredFieldValidation(): Locator {
        return this.requiredFieldValidation;
    }

    async getRequiredFieldValidationMessage(): Promise<string | null> {
        return this.requiredFieldValidation.textContent();
    }
}