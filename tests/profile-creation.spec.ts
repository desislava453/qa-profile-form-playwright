import { test, expect } from './fixtures';
import { ProfileCreationPage } from './pages/ProfileCreationPage';
import {
  getAlertMessageAfterAction,
  validRequiredUser,
} from './utils/helpers';


test.beforeEach(async ({ basePage }) => {
  await expect(basePage).toHaveTitle(/User Profile Creation/);
});


test('Submit form with valid required data', { tag: '@smoke' }, async ({ page }) => {
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

test('Shows error when first name is empty', { tag: '@smoke' }, async ({ page }) => {
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
  const invalidFirstNames = ['John123', 'John@'];

  for (const firstName of invalidFirstNames) {
    await test.step(`First name: ${firstName}`, async () => {
      const user = {
        ...validRequiredUser(),
        firstName,
      };

      await profilePage.fillMandatoryFields(user);

      const alertMessage = await getAlertMessageAfterAction(page, async () => {
        await profilePage.clickSubmit();
      });

      expect(alertMessage).toBe('First name must contain alphabetical characters only');
    });
  }
});

test.fail('Shows error when last name is empty - BUG-005', async ({ page }) => {
  const profilePage = new ProfileCreationPage(page);
  const user = {
  ...validRequiredUser(),
  lastName: '',
  };

  await profilePage.fillMandatoryFields(user);

  const alertMessage = await getAlertMessageAfterAction(page, async () => {
    await profilePage.clickSubmit();
  });

  expect(alertMessage).toBe('Last name must be filled out');
});

test('Shows error when last name contains invalid characters', async ({ page }) => {
  const profilePage = new ProfileCreationPage(page);
  const invalidLastNames = ['Smith123', 'Smith@'];

  for (const lastName of invalidLastNames) {
    await test.step(`Last name: ${lastName}`, async () => {
      const user = {
        ...validRequiredUser(),
        lastName,
      };

      await profilePage.fillMandatoryFields(user);

      const alertMessage = await getAlertMessageAfterAction(page, async () => {
        await profilePage.clickSubmit();
      });

      expect(alertMessage).toBe('Last name must contain alphabetical characters only');
    });
  }
});

test('Shows error when email is empty', { tag: '@smoke' }, async ({ page }) => {
  const profilePage = new ProfileCreationPage(page);
  const user = {
  ...validRequiredUser(),
  email: '',
  };

  await profilePage.fillMandatoryFields(user);

  const alertMessage = await getAlertMessageAfterAction(page, async () => {
    await profilePage.clickSubmit();
  });

  expect(alertMessage).toBe('Email must be filled out');
});

test('Shows error when email misses @ symbol', { tag: '@smoke' }, async ({ page, browserName }) => {
  const profilePage = new ProfileCreationPage(page);
  const user = {
  ...validRequiredUser(),
  email: 'john.smithexample.com',
  };

  await profilePage.fillMandatoryFields(user);

  const validationMessage = await profilePage.getFieldValidationMessage(profilePage.emailInput);

// The validation message differs across browsers, so we check for the expected message based on the browser being used.
  if (browserName === 'chromium') {
    expect(validationMessage).toContain("Please include an '@'");
  } else if (browserName === 'firefox') {
    expect(validationMessage).toContain('Please enter an email address.');
  } else {
    expect(validationMessage).toContain('Enter an email address');
  }
});

test('Shows error when email misses domain', { tag: '@smoke' }, async ({ page, browserName }) => {
  const profilePage = new ProfileCreationPage(page);
  const user = {
  ...validRequiredUser(),
  email: 'john.smith@',
  };

  await profilePage.fillMandatoryFields(user);

  const validationMessage = await profilePage.getFieldValidationMessage(profilePage.emailInput);

// The validation message differs across browsers, so we check for the expected message based on the browser being used.
  if (browserName === 'chromium') {
    expect(validationMessage).toContain("Please enter a part following '@'");
  } else if (browserName === 'firefox') {
    expect(validationMessage).toContain('Please enter an email address.');
  } else {
    expect(validationMessage).toContain('Enter an email address');
  }
});

test.fail('Shows error when password is empty - BUG-003', async ({ page }) => {
  const profilePage = new ProfileCreationPage(page);
  const user = {
  ...validRequiredUser(),
  password: '',
  };

  await profilePage.fillMandatoryFields(user);

  const alertMessage = await getAlertMessageAfterAction(page, async () => {
    await profilePage.clickSubmit();
  });

  expect(alertMessage).toBe('Password must be filled out');
});

test('Shows error when confirm password is empty', { tag: '@smoke' }, async ({ page }) => {
  const profilePage = new ProfileCreationPage(page);
  const user = {
  ...validRequiredUser(),
  confirmPassword: '',
  };

  await profilePage.fillMandatoryFields(user);

  const alertMessage = await getAlertMessageAfterAction(page, async () => {
    await profilePage.clickSubmit();
  });

  expect(alertMessage).toBe('Confirm password must be filled out');
});

test('Shows error when passwords do not match', { tag: '@smoke' }, async ({ page }) => {
  const profilePage = new ProfileCreationPage(page);
  const confirmPassword = `Test${Date.now()}!`;
  const user = {
  ...validRequiredUser(),
  confirmPassword: confirmPassword,
  };

  await profilePage.fillMandatoryFields(user);

  const alertMessage = await getAlertMessageAfterAction(page, async () => {
    await profilePage.clickSubmit();
  });

  expect(alertMessage).toBe('Passwords do not match');
});

test.fixme('Shows error when date of birth is future date', async ({ page }) => {
// Test to be implemented when BUG-009 is fixed.
});

test('Shows error when phone number is invalid', async ({ page, browserName }) => {
  const profilePage = new ProfileCreationPage(page);
  const user = validRequiredUser();
  const invalidPhoneNumbers = ['12345', 'qwerty', '12345678901'];

  await profilePage.fillMandatoryFields(user);

  for (const phoneNumber of invalidPhoneNumbers) {
    await test.step(`Phone number: ${phoneNumber}`, async () => {
      await profilePage.fillPhone(phoneNumber);

      const validationMessage = await profilePage.getFieldValidationMessage(profilePage.phoneInput);

// The validation message differs across browsers, so we check for the expected message based on the browser being used.
      if (browserName === 'webkit') {
        expect(validationMessage).toEqual('Match the requested format');
      } else  {
        expect(validationMessage).toEqual('Please match the requested format.');
      }
    });
  }
});

test('Shows error when LinkedIn URL is invalid', async ({ page, browserName }) => {
  const profilePage = new ProfileCreationPage(page);
  const user = {
  ...validRequiredUser(),
  linkedIn: 'invalid-url',
  };

  await profilePage.fillMandatoryFields(user);

  const validationMessage = await profilePage.getFieldValidationMessage(profilePage.linkedInInput);

// The validation message differs across browsers, so we check for the expected message based on the browser being used.
  if (browserName === 'webkit') {
    expect(validationMessage).toEqual('Enter a URL');
  } else  {
  expect(validationMessage).toEqual('Please enter a URL.');
  }
});

test('Shows error when GitHub URL is invalid', async ({ page, browserName }) => {
  const profilePage = new ProfileCreationPage(page);
  const user = validRequiredUser();

  await profilePage.fillMandatoryFields(user);
  await profilePage.fillGitHub('invalid-url');

  const validationMessage = await profilePage.getFieldValidationMessage(profilePage.githubInput);

// The validation message differs across browsers, so we check for the expected message based on the browser being used.
  if (browserName === 'webkit') {
    expect(validationMessage).toEqual('Enter a URL');
  } else  {
    expect(validationMessage).toEqual('Please enter a URL.');
  }
});

test('Gender selection works correctly', async ({ page }) => {
  const profilePage = new ProfileCreationPage(page);
  const genders = ['male', 'female', 'preferNotToSay'] as const;

  for (const gender of genders) {
    await test.step(`Gender: ${gender}`, async () => {
      const user = validRequiredUser();

      await profilePage.fillMandatoryFields(user);
      await profilePage.selectGender(gender);
      await profilePage.clickSubmit();

      const submittedUrl = new URL(page.url());

      expect(submittedUrl.searchParams.get('gender')).toBe(gender);
    });
  }
});

