import { test, expect } from './fixtures';
import { ProfileCreationPage } from './pages/ProfileCreationPage';
import {
  getAlertMessageAfterAction,
  validRequiredUser,
} from './utils/helpers';


test.beforeEach(async ({ basePage }) => {
  await expect(basePage).toHaveTitle(/User Profile Creation/);
});


test('Submit form with valid required data', async ({ page }) => {
  const profilePage = new ProfileCreationPage(page);
  const user = validRequiredUser();

  await profilePage.fillMandatoryFields(user);

  await profilePage.clickSubmit();
  // The current app reloads after submit, so the success message is not reliably visible.
  // See BUG-015.
  await expect(page).toHaveURL(/firstName=John/);
});

test('Submit form with all fields valid', async ({ page }) => {
  const profilePage = new ProfileCreationPage(page);
  const user = validRequiredUser();

  await profilePage.fillMandatoryFields(user);
  await profilePage.selectGender('male');
  // The DoB input format is mm/dd/yyyy, but the stored value is yyyy-mm-dd. The app converts the format on submit.
  await profilePage.fillDateOfBirth('1990-01-01');
  await profilePage.fillPhone('1234567890');
  await profilePage.fillAddress('123 Main St, Anytown, USA');
  await profilePage.fillGitHub('https://github.com/johnsmith');
  await profilePage.clickSubmit();
  // The current app reloads after submit, so the success message is not reliably visible.
  // See BUG-015.
  await expect(page).toHaveURL(/firstName=John/);
});

test('Shows error when first name is empty', async ({ page }) => {
  const profilePage = new ProfileCreationPage(page);
  const user = {
  ...validRequiredUser(),
  firstName: '',
  };

  await profilePage.fillMandatoryFields(user);

  const alertMessage = await getAlertMessageAfterAction(page, async () => {
    await profilePage.clickSubmit();
  });

  expect(alertMessage).toBe('First name must be filled out');
});

test('Shows error when first name contains invalid characters', async ({ page }) => {
  const profilePage = new ProfileCreationPage(page);
  const user = {
  ...validRequiredUser(),
  firstName: 'John123',
  };

  await profilePage.fillMandatoryFields(user);

  expect(await profilePage.submitAndGetAlertMessage()).toBe('First name must contain alphabetical characters only');
});

test.fail('Shows error when last name is empty - BUG-005', async ({ page }) => {
  const profilePage = new ProfileCreationPage(page);
  const user = {
  ...validRequiredUser(),
  lastName: '',
  };

  await profilePage.fillMandatoryFields(user);

  expect(await profilePage.submitAndGetAlertMessage()).toBe('Last name must be filled out');
});

test('Shows error when last name contains invalid characters', async ({ page }) => {
  const profilePage = new ProfileCreationPage(page);
  const user = {
  ...validRequiredUser(),
  lastName: 'Smith@',
  };

  await profilePage.fillMandatoryFields(user);

  expect(await profilePage.submitAndGetAlertMessage()).toBe('Last name must contain alphabetical characters only');
});

test('Shows error when email is empty', async ({ page }) => {
  const profilePage = new ProfileCreationPage(page);
  const user = {
  ...validRequiredUser(),
  email: '',
  };

  await profilePage.fillMandatoryFields(user);

  expect(await profilePage.submitAndGetAlertMessage()).toBe('Email must be filled out');
});

test('Shows error when email misses @ symbol', async ({ page }) => {
  const profilePage = new ProfileCreationPage(page);
  const user = {
  ...validRequiredUser(),
  email: 'john.smithexample.com',
  };

  await profilePage.fillMandatoryFields(user);

  const validationMessage = await profilePage.getFieldValidationMessage(profilePage.emailInput);

  expect(validationMessage).toContain("Please include an '@'");
});

test('Shows error when email misses domain', async ({ page }) => {
  const profilePage = new ProfileCreationPage(page);
  const user = {
  ...validRequiredUser(),
  email: 'john.smith@',
  };

  await profilePage.fillMandatoryFields(user);

  const validationMessage = await profilePage.getFieldValidationMessage(profilePage.emailInput);

  expect(validationMessage).toContain("Please enter a part following '@'");
});

test.fail('Shows error when password is empty - BUG-003', async ({ page }) => {
  const profilePage = new ProfileCreationPage(page);
  const user = {
  ...validRequiredUser(),
  password: '',
  };

  await profilePage.fillMandatoryFields(user);

  expect(await profilePage.submitAndGetAlertMessage()).toBe('Password must be filled out');
});

test('Shows error when confirm password is empty', async ({ page }) => {
  const profilePage = new ProfileCreationPage(page);
  const user = {
  ...validRequiredUser(),
  confirmPassword: '',
  };

  await profilePage.fillMandatoryFields(user);

  expect(await profilePage.submitAndGetAlertMessage()).toBe('Confirm password must be filled out');
});

test('Shows error when passwords do not match', async ({ page }) => {
  const profilePage = new ProfileCreationPage(page);
  const confirmPassword = `Test${Date.now()}!`;
  const user = {
  ...validRequiredUser(),
  confirmPassword: confirmPassword,
  };

  await profilePage.fillMandatoryFields(user);

  expect(await profilePage.submitAndGetAlertMessage()).toBe('Passwords do not match');
});

test.fixme('Shows error when date of birth is future date', async ({ page }) => {
// Test to be implemented when BUG-009 is fixed.
});

test('Shows error when phone number is invalid', async ({ page }) => {
  const profilePage = new ProfileCreationPage(page);
  const user = validRequiredUser();

  await profilePage.fillMandatoryFields(user);
  await profilePage.fillPhone('12345');

  const validationMessage = await profilePage.getFieldValidationMessage(profilePage.phoneInput);

  expect(validationMessage).toContain('Please match the requested format');
});

test('Shows error when LinkedIn URL is invalid', async ({ page }) => {
  const profilePage = new ProfileCreationPage(page);
  const user = {
  ...validRequiredUser(),
  linkedIn: 'invalid-url',
  };

  await profilePage.fillMandatoryFields(user);

  const validationMessage = await profilePage.getFieldValidationMessage(profilePage.linkedInInput);

  expect(validationMessage).toContain('Please enter a URL');
});

test('Shows error when GitHub URL is invalid', async ({ page }) => {
  const profilePage = new ProfileCreationPage(page);
  const user = validRequiredUser();

  await profilePage.fillMandatoryFields(user);
  await profilePage.fillGitHub('invalid-url');

  const validationMessage = await profilePage.getFieldValidationMessage(profilePage.githubInput);

  expect(validationMessage).toContain('Please enter a URL');
});
