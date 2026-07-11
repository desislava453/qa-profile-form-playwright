import { Page, Locator } from '@playwright/test';


export class ProfileCreationPage {
  readonly page: Page;

  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly confirmPasswordInput: Locator;
  readonly maleRadio: Locator;
  readonly femaleRadio: Locator;
  readonly preferNotToSayRadio: Locator;
  readonly dateOfBirthInput: Locator;
  readonly phoneInput: Locator;
  readonly addressInput: Locator;
  readonly linkedInInput: Locator;
  readonly githubInput: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInput = page.locator('#firstName');
    this.lastNameInput = page.locator('#lastName');
    this.emailInput = page.locator('#email');
    this.passwordInput = page.locator('#password');
    this.confirmPasswordInput = page.locator('#confirmPassword');
    this.maleRadio = page.locator('#male');
    this.femaleRadio = page.locator('#female');
    this.preferNotToSayRadio = page.locator('#preferNotToSay');
    this.dateOfBirthInput = page.locator('#dob');
    this.phoneInput = page.locator('#phone');
    this.addressInput = page.locator('#address');
    this.linkedInInput = page.locator('#linkedIn');
    this.githubInput = page.locator('#github');
    this.submitButton = page.getByRole('button', { name: 'Submit' });
  }

  async fillFirstName(firstName: string) {
    await this.firstNameInput.fill(firstName);
  }

  async fillLastName(lastName: string) {
    await this.lastNameInput.fill(lastName);
  }

  async fillEmail(email: string) {
    await this.emailInput.fill(email);
  }

  async fillPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async fillConfirmPassword(confirmPassword: string) {
    await this.confirmPasswordInput.fill(confirmPassword);
  }

  async selectGender(gender: 'male' | 'female' | 'preferNotToSay') {
    await this.page.locator(`#${gender}`).check();
  }

  async fillLinkedIn(linkedIn: string) {
    await this.linkedInInput.fill(linkedIn);
  }

  async fillMandatoryFields(data: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    linkedIn?: string;
   }) {
    await this.fillFirstName(data.firstName);
    await this.fillLastName(data.lastName);
    await this.fillEmail(data.email);
    await this.fillPassword(data.password);
    await this.fillConfirmPassword(data.confirmPassword);
// See BUG-001 - LinkedIn URL is mandatory although requirement says optional
    if (data.linkedIn !== undefined) {
      await this.fillLinkedIn(data.linkedIn);
    }
  }

  async fillDateOfBirth(date: string) {
    await this.dateOfBirthInput.fill(date);
  }

  async fillPhone(phone: string) {
    await this.phoneInput.fill(phone);
  }

  async fillAddress(address: string) {
    await this.addressInput.fill(address);
  }

  async fillGitHub(github: string) {
    await this.githubInput.fill(github);
  }

  async clickSubmit() {
    await this.submitButton.click();
  }

// Method for catpuring browser alert messages after clicking the submit button.
  async submitAndGetAlertMessage(): Promise<string> {
    const alertMessagePromise = new Promise<string>((resolve) => {
      this.page.once('dialog', async (dialog) => {
        const message = dialog.message();
        await dialog.accept();
        resolve(message);
      });
    });

    await this.clickSubmit();

    return alertMessagePromise;
  }

// Generic method for capturing browser-native validation messages for any input field.
  async getFieldValidationMessage(field: Locator): Promise<string> {
    return await field.evaluate((input: HTMLInputElement) => input.validationMessage);
  }
}