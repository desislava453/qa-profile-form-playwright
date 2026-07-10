import { test as base, Page } from '@playwright/test';
import { ProfileCreationPage } from './pages/ProfileCreationPage';

export type TestFixtures = {
  basePage: Page;
  profileCreationPage: ProfileCreationPage;
};

export const test = base.extend<TestFixtures>({
  basePage: async ({ page }, use) => {
    await page.goto('');
    await use(page);
  },
  profileCreationPage: async ({ basePage }, use) => {  
    const profileCreationPage = new ProfileCreationPage(basePage);
    await use(profileCreationPage);
  }
});

export { expect } from '@playwright/test';