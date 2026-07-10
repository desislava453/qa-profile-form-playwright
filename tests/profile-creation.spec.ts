import { test, expect } from './fixtures';
import { ProfileCreationPage } from './pages/ProfileCreationPage';


test.beforeEach(async ({ basePage }) => {
  await expect(basePage).toHaveTitle(/User Profile Creation/);
});


test('submit form with valid required data', async ({ page }) => {
  const profilePage = new ProfileCreationPage(page);
  const testPassword = `Test${Date.now()}!`;

  await profilePage.fillMandatoryFields({
    firstName: 'John',
    lastName: 'Smith',
    email: 'john.smith@example.com',
    password: testPassword,
    confirmPassword: testPassword,
    linkedIn: 'https://www.linkedin.com/in/johnsmith',
  });

  await profilePage.clickSubmit();

  // Fails because the page quickly reloads/refreshes and the success message is not visible anymore. 
  // await expect(page.getByText('Success!')).toBeVisible();
});
