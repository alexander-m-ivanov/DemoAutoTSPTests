import { Page } from '@playwright/test';
import { Navigation } from '../components/navigation.component';

export abstract class BasePage {

  readonly navigation: Navigation;
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;

    this.navigation = new Navigation(this.page);
  }
}