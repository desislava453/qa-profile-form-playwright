import { Page } from '@playwright/test';

export async function getAlertMessageAfterAction(
  page: Page,
  action: () => Promise<void>
): Promise<string> {
  const alertMessagePromise = new Promise<string>((resolve) => {
    page.once('dialog', async (dialog) => {
      const message = dialog.message();
      await dialog.accept();
      resolve(message);
    });
  });

  await action();

  return alertMessagePromise;
}

export function generateTestPassword(): string {
  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const specialChars = '!@#$%^&*';
  const allChars = letters + numbers + specialChars;

  const getRandomChar = (chars: string): string =>
    chars[Math.floor(Math.random() * chars.length)];

  let password = '';

  password += getRandomChar(letters);
  password += getRandomChar(numbers);
  password += getRandomChar(specialChars);

  for (let i = password.length; i < 12; i++) {
    password += getRandomChar(allChars);
  }

  return password
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('');
}

export function validRequiredUser() {
  const password = generateTestPassword();

  return {
    firstName: 'John',
    lastName: 'Smith',
    email: `john.smith@example.com`,
    password: password,
    confirmPassword: password,
    linkedIn: 'https://www.linkedin.com/in/johnsmith',
  };
}