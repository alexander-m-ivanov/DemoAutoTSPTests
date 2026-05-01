import { Page, Locator } from '@playwright/test';

export class DomainDropdown {

    private readonly page: Page;
    private readonly domainDropdown: Locator;
    private readonly domainDropdownOptions: Locator;

    constructor(page: Page) {
        this.page = page;
        this.domainDropdown = this.page.locator('input[data-e2e="dropdown"]');
        this.domainDropdownOptions = this.page.locator('.sg-dropdown__option.sg-dropdown__option');
    }

    async clickDomainDropdown() {
        await this.domainDropdown.click();
    }

    async getDomainOptions(): Promise<string[]> {
        return this.domainDropdownOptions.allTextContents();
    }

    async selectDomain(domain: string) {
        await this.domainDropdownOptions.getByText(domain, { exact: true }).click();
    }
}