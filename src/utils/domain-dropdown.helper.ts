import { expect } from '@playwright/test';
import { DomainDropdown } from '../components/domain-dropdown.component';

// NOTE: In a larger/enterprise project, this interface would be extracted
// into a shared types or page-object contract file.
interface HasDomainDropdown {
    domainDropdown: DomainDropdown;
}

export async function verifyAndSelectDomain(page: HasDomainDropdown, expectedDomains: string[]) {

    await page.domainDropdown.clickDomainDropdown();
    expect.soft(await page.domainDropdown.getDomainOptions()).toEqual(expectedDomains);

    await page.domainDropdown.selectDomain(expectedDomains[3]);
}