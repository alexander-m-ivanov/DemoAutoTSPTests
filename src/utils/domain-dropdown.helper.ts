import { expect } from '@playwright/test';
import { DomainDropdown } from '../components/domain-dropdown.component';

interface HasDomainDropdown {
    domainDropdown: DomainDropdown;
}

export async function verifyAndSelectDomain(page: HasDomainDropdown, expectedDomains: string[]) {

    await page.domainDropdown.clickDomainDropdown();
    expect.soft(await page.domainDropdown.getDomainOptions()).toEqual(expectedDomains);

    await page.domainDropdown.selectDomain(expectedDomains[3]);
}