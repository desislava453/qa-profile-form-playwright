# Test Cases

## TC-001 - Submit form with all mandatory fields valid

**Type:** Positive

**Test Data:**
- First Name: John
- Last Name: Smith
- Email: john.smith@example.com
- Password: P@ssw0rd
- Confirm Password: P@ssw0rd

**Steps:**
1. Open the user profile form.
2. Fill all mandatory fields with valid data.
3. Click Submit.

**Expected Result:**
Success message is shown.

---

## TC-002 - Submit form with all fields valid

**Type:** Positive

**Test Data:**
- First Name: John
- Last Name: Smith
- Email: john.smith@example.com
- Password: P@ssw0rd
- Confirm Password: P@ssw0rd
- Gender: Male
- Date of Birth: 01/01/1990
- Phone Number: 1234567890
- Address: 123 Main St, Apt 1
- LinkedIn URL: https://www.linkedin.com/in/johnsmith
- GitHub URL: https://github.com/johnsmith

**Steps:**
1. Open the user profile form.
2. Fill all fields with valid data.
3. Click Submit.

**Expected Result:**
Success message is shown.

---

## TC-003 - Submit form with empty first name

**Type:** Negative

**Test Data:**
- First Name: empty
- Other mandatory fields: valid

**Steps:**
1. Open the user profile form.
2. Leave First Name empty.
3. Fill the other mandatory fields with valid data.
4. Click Submit.

**Expected Result:**
Error message is shown that first name is required.

---

## TC-004 - Submit first name with numbers

**Type:** Negative

**Test Data:**
- First Name: John123

**Steps:**
1. Open the user profile form.
2. Enter `John123` in the First Name field.
3. Fill the other mandatory fields with valid data.
4. Click Submit.

**Expected Result:**
Error message is shown that first name accepts alphabetical characters only.

---

## TC-005 - Submit first name with symbols

**Type:** Negative

**Test Data:**
- First Name: John@

**Steps:**
1. Open the user profile form.
2. Enter `John@` in the First Name field.
3. Fill the other mandatory fields with valid data.
4. Click Submit.

**Expected Result:**
Error message is shown that first name accepts alphabetical characters only.

---

## TC-006 - Submit form with empty last name

**Type:** Negative

**Test Data:**
- Last Name: empty
- Other mandatory fields: valid

**Steps:**
1. Open the user profile form.
2. Leave Last Name empty.
3. Fill the other mandatory fields with valid data.
4. Click Submit.

**Expected Result:**
Error message is shown that last name is required.

---

## TC-007 - Submit last name with numbers

**Type:** Negative

**Test Data:**
- Last Name: Smith123

**Steps:**
1. Open the user profile form.
2. Enter `Smith123` in the Last Name field.
3. Fill the other mandatory fields with valid data.
4. Click Submit.

**Expected Result:**
Error message is shown that last name accepts alphabetical characters only.

---

## TC-008 - Submit last name with symbols

**Type:** Negative

**Test Data:**
- Last Name: Smith!

**Steps:**
1. Open the user profile form.
2. Enter `Smith!` in the Last Name field.
3. Fill the other mandatory fields with valid data.
4. Click Submit.

**Expected Result:**
Error message is shown that last name accepts alphabetical characters only.

---

## TC-009 - Submit form with empty email

**Type:** Negative

**Test Data:**
- Email: empty
- Other mandatory fields: valid

**Steps:**
1. Open the user profile form.
2. Leave Email empty.
3. Fill the other mandatory fields with valid data.
4. Click Submit.

**Expected Result:**
Error message is shown that email is required.

---

## TC-010 - Submit invalid email without @

**Type:** Negative

**Test Data:**
- Email: john.smithexample.com

**Steps:**
1. Open the user profile form.
2. Enter `john.smithexample.com` in the Email field.
3. Fill the other mandatory fields with valid data.
4. Click Submit.

**Expected Result:**
Error message is shown that email is missing an '@'.

---

## TC-011 - Submit invalid email without domain

**Type:** Negative

**Test Data:**
- Email: john@

**Steps:**
1. Open the user profile form.
2. Enter `john@` in the Email field.
3. Fill the other mandatory fields with valid data.
4. Click Submit.

**Expected Result:**
Error message is shown that email is incomplete.

---

## TC-012 - Submit form with empty password

**Type:** Negative

**Test Data:**
- Password: empty
- Confirm Password: empty
- Other mandatory fields: valid

**Steps:**
1. Open the user profile form.
2. Leave Password empty.
3. Fill the other mandatory fields.
4. Click Submit.

**Expected Result:**
Error message is shown that password is required.

---

## TC-013 - Submit form with empty confirm password

**Type:** Negative

**Test Data:**
- Password: P@ssw0rd
- Confirm Password: empty

**Steps:**
1. Open the user profile form.
2. Enter a valid password.
3. Leave Confirm Password empty.
4. Fill the other mandatory fields.
5. Click Submit.

**Expected Result:**
Error message is shown that confirm password is required.

---

## TC-014 - Submit form with password mismatch

**Type:** Negative

**Test Data:**
- Password: P@ssw0rd
- Confirm Password: Password123

**Steps:**
1. Open the user profile form.
2. Enter a password.
3. Enter a different value in Confirm Password.
4. Fill the other mandatory fields.
5. Click Submit.

**Expected Result:**
Error message is shown that passwords do not match.

---

## TC-015 - Select gender male

**Type:** Positive

**Test Data:**
- Gender: Male

**Steps:**
1. Open the user profile form.
2. Select Male.
3. Fill mandatory fields with valid data.
4. Click Submit.

**Expected Result:**
Form accepts the selected gender.

---

## TC-016 - Select gender female

**Type:** Positive

**Test Data:**
- Gender: Female

**Steps:**
1. Open the user profile form.
2. Select Female.
3. Fill mandatory fields with valid data.
4. Click Submit.

**Expected Result:**
Form accepts the selected gender.

---

## TC-017 - Select 'Prefer not to say'

**Type:** Positive

**Test Data:**
- Gender: Prefer not to say

**Steps:**
1. Open the user profile form.
2. Check the available gender options.
3. Select 'Prefer not to say'.
4. Fill mandatory fields with valid data.
5. Click Submit.

**Expected Result:**
Form accepts the selected gender.

---

## TC-018 - Submit form without gender

**Type:** Positive

**Test Data:**
- Gender: not selected
- Mandatory fields: valid

**Steps:**
1. Open the user profile form.
2. Leave Gender unselected.
3. Fill mandatory fields with valid data.
4. Click Submit.

**Expected Result:**
Form is submitted successfully because gender is optional.

---

## TC-019 - Submit valid date of birth

**Type:** Positive

**Test Data:**
- Date of Birth: 01/01/1990

**Steps:**
1. Open the user profile form.
2. Enter or select a valid date of birth.
3. Fill mandatory fields with valid data.
4. Click Submit.

**Expected Result:**
Date of birth is accepted.

---

## TC-020 - Submit future date

**Type:** Negative

**Test Data:**
- Date of Birth: future date

**Steps:**
1. Open the user profile form.
2. Enter future date.
3. Fill mandatory fields with valid data.
4. Click Submit.

**Expected Result:**
Date is rejected or an error message is shown.

---

## TC-021 - Submit valid phone number

**Type:** Positive

**Test Data:**
- Phone: 1234567890

**Steps:**
1. Open the user profile form.
2. Enter a 10-digit phone number.
3. Fill mandatory fields with valid data.
4. Click Submit.

**Expected Result:**
Phone number is accepted.

---

## TC-022 - Submit phone number with letters

**Type:** Negative

**Test Data:**
- Phone: 12345abcde

**Steps:**
1. Open the user profile form.
2. Enter letters in the Phone field.
3. Fill mandatory fields with valid data.
4. Click Submit.

**Expected Result:**
Error message is shown that phone doesn't match the requested format.

---

## TC-023 - Submit phone number with fewer than 10 digits

**Type:** Negative

**Test Data:**
- Phone: 12345

**Steps:**
1. Open the user profile form.
2. Enter fewer than 10 digits in the Phone field.
3. Fill mandatory fields with valid data.
4. Click Submit.

**Expected Result:**
Error message is shown that phone doesn't match the requested format.

---

## TC-024 - Submit phone number with more than 10 digits

**Type:** Negative

**Test Data:**
- Phone: 12345678901

**Steps:**
1. Open the user profile form.
2. Enter more than 10 digits in the Phone field.
3. Fill mandatory fields with valid data.
4. Click Submit.

**Expected Result:**
Error message is shown that phone doesn't match the requested format.

---

## TC-025 - Submit valid address

**Type:** Positive

**Test Data:**
- Address: 123 Main St, Apt #1

**Steps:**
1. Open the user profile form.
2. Enter a valid address.
3. Fill mandatory fields with valid data.
4. Click Submit.

**Expected Result:**
Address is accepted.

---

## TC-026 - Submit valid LinkedIn URL

**Type:** Positive

**Test Data:**
- LinkedIn: https://www.linkedin.com/in/johnsmith

**Steps:**
1. Open the user profile form.
2. Enter a valid LinkedIn profile URL.
3. Fill mandatory fields with valid data.
4. Click Submit.

**Expected Result:**
LinkedIn URL is accepted.

---

## TC-027 - Submit invalid LinkedIn URL

**Type:** Negative

**Test Data:**
- LinkedIn: https://example.com/johnsmith

**Steps:**
1. Open the user profile form.
2. Enter a non-LinkedIn URL in the LinkedIn field.
3. Fill mandatory fields with valid data.
4. Click Submit.

**Expected Result:**
Error message is shown that a valid LinkedIn profile URL is required.

---

## TC-028 - Submit form with empty LinkedIn URL

**Type:** Positive

**Test Data:**
- LinkedIn: empty
- Mandatory fields: valid

**Steps:**
1. Open the user profile form.
2. Leave LinkedIn URL empty.
3. Fill mandatory fields with valid data.
4. Click Submit.

**Expected Result:**
Form is submitted successfully because LinkedIn URL is optional.

---

## TC-029 - Submit valid GitHub URL

**Type:** Positive

**Test Data:**
- GitHub: https://github.com/johnsmith

**Steps:**
1. Open the user profile form.
2. Enter a valid GitHub profile URL.
3. Fill mandatory fields with valid data.
4. Click Submit.

**Expected Result:**
GitHub URL is accepted.

---

## TC-030 - Submit invalid GitHub URL

**Type:** Negative

**Test Data:**
- GitHub: https://example.com/johnsmith

**Steps:**
1. Open the user profile form.
2. Enter a non-GitHub URL in the GitHub field.
3. Fill mandatory fields with valid data.
4. Click Submit.

**Expected Result:**
Error message is shown that a valid GitHub profile URL is required.

---

## TC-031 - Submit form with empty GitHub URL

**Type:** Positive

**Test Data:**
- GitHub: empty
- Mandatory fields: valid

**Steps:**
1. Open the user profile form.
2. Leave GitHub URL empty.
3. Fill mandatory fields with valid data.
4. Click Submit.

**Expected Result:**
Form is submitted successfully because GitHub URL is optional.

---

## TC-032 - Submit button shows success message

**Type:** Positive

**Test Data:**
- All mandatory fields: valid

**Steps:**
1. Open the user profile form.
2. Fill mandatory fields with valid data.
3. Click Submit.

**Expected Result:**
One success message is displayed.

---

## TC-033 - Submit valid form multiple times

**Type:** Negative

**Test Data:**
- All mandatory fields: valid

**Steps:**
1. Open the user profile form.
2. Fill mandatory fields with valid data.
3. Click Submit multiple times.

**Expected Result:**
Success message should not be duplicated unnecessarily.

---

## TC-034 - Check that sensitive data is not exposed

**Type:** Security

**Test Data:**
- N/A

**Steps:**
1. Open the user profile form.
2. Inspect the page source or DOM.
3. Search for sensitive data such as passwords, admin credentials, or hidden secrets.

**Expected Result:**
No sensitive data is exposed in the client-side HTML or DOM.

---

## TC-035 - Check form labels and spelling

**Type:** UI

**Test Data:**
- N/A

**Steps:**
1. Open the user profile form.
2. Review all visible labels.
3. Compare labels with the provided requirements.

**Expected Result:**
All labels match the requirements and contain no spelling mistakes.