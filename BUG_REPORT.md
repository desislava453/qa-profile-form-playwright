# Defect Report

## BUG-001 - LinkedIn URL is mandatory although requirement says optional

**Severity:** High  
**Priority:** High

**Steps to Reproduce:**
1. Open the user profile form.
2. Fill all mandatory fields with valid data.
3. Leave LinkedIn URL empty.
4. Click Submit.

**Expected Result:**
Form should be submitted successfully because LinkedIn URL is optional.

**Actual Result:**
Validation message says `LinkedIn must be filled out`.

---

## BUG-002 - Confirm password field is visible text instead of password field

**Severity:** High  
**Priority:** High

**Steps to Reproduce:**
1. Open the user profile form.
2. Type any value into the Confirm Password field.

**Expected Result:**
The entered value should be masked, the same as the Password field.

**Actual Result:**
The entered value is visible as plain text.

---

## BUG-003 - Wrong validation message for empty password field

**Severity:** Medium  
**Priority:** Medium

**Case 1 - with Confirm Password filled**
**Steps to Reproduce:**
1. Open the user profile form.
2. Fill First Name, Last Name, Email, and Confirm Password with valid data.
3. Leave Password empty.
4. Click Submit.

**Expected Result:**
Validation message should be shown that password must be filled out.

**Actual Result:**
Message says that passwords do not match.

**Case 2 - with empty Confirm Password**
**Steps to Reproduce:**
1. Open the user profile form.
2. Fill First Name, Last Name and Email with valid data.
3. Leave Password empty.
4. Click Submit.

**Expected Result:**
Validation message should be shown that password must be filled out.

**Actual Result:**
Message says that only confirm password must be filled out.

---

## BUG-004 - Password accepts weak values because there's no minimum length or complexity rule

**Severity:** Medium  
**Priority:** Medium

**Steps to Reproduce:**
1. Open the user profile form.
2. Fill First Name, Last Name, and Email with valid data.
3. Enter a weak password, for example `abc`.
4. Enter the same value in Confirm Password.
5. Click Submit.

**Expected Result:**
The form should reject weak passwords and show a validation message. Password should have a defined minimum length and should require a combination of letters, numbers and special characters.

**Actual Result:**
The form accepts weak passwords such as `abc`. No minimum length or complexity validation is enforced.

---

## BUG-005 - Last name required validation shows wrong message

**Severity:** Medium  
**Priority:** Medium

**Steps to Reproduce:**
1. Open the user profile form.
2. Fill First Name with valid data.
3. Leave Last Name empty.
4. Fill Email, Password, and Confirm Password with valid data.
5. Click Submit.

**Expected Result:**
Validation message should say that last name must be filled out.

**Actual Result:**
Validation message says `First name must be filled out`.

---

## BUG-006 - GitHub URL accepts any valid URL instead of only GitHub profile URLs

**Severity:** Medium  
**Priority:** Medium

**Steps to Reproduce:**
1. Open the user profile form.
2. Enter `https://example.com/test` in the GitHub URL field.
3. Fill mandatory fields with valid data.
4. Click Submit.

**Expected Result:**
Validation message should be shown that a valid GitHub profile URL is required.

**Actual Result:**
The field only checks generic URL format and does not validate that the URL belongs to GitHub.

---

## BUG-007 - LinkedIn URL accepts any valid URL instead of only LinkedIn profile URLs

**Severity:** Medium  
**Priority:** Medium

**Steps to Reproduce:**
1. Open the user profile form.
2. Enter `https://example.com/test` in the LinkedIn URL field.
3. Fill mandatory fields with valid data.
4. Click Submit.

**Expected Result:**
Validation message should be shown that a valid LinkedIn profile URL is required.

**Actual Result:**
The field does not validate that the URL belongs to LinkedIn.

---

## BUG-008 - Phone number field does not prevent more than 10 digits while typing

**Severity:** Medium  
**Priority:** Medium

**Steps to Reproduce:**
1. Open the user profile form.
2. Enter more than 10 digits in the Phone Number field.

**Expected Result:**
The field should prevent more than 10 digits or show clear validation that the maximum length is 10 digits.

**Actual Result:**
The field allows more than 10 digits to be entered.

---

## BUG-009 - Form submitted successfully with future date of birth

**Severity:** Medium  
**Priority:** Medium

**Steps to Reproduce:**
1. Open the user profile form.
2. Enter future date.

**Expected Result:**
There should be validation message that future date is not allowed.

**Actual Result:**
The form is submitted successfully.

---

## BUG-010 - Hidden admin password is exposed in the page HTML

**Severity:** Critical  
**Priority:** High

**Steps to Reproduce:**
1. Open the user profile form.
2. Inspect the page source or DOM.
3. Search for hidden sensitive data.

**Expected Result:**
Sensitive data should not be present in the client-side HTML or DOM.

**Actual Result:**
The page contains hidden text: `admin123 - You should not see this`.

---

## BUG-011 - Address label contains typo

**Severity:** Low  
**Priority:** Low

**Steps to Reproduce:**
1. Open the user profile form.
2. Review the Address label.

**Expected Result:**
The label should say `Address (optional)`.

**Actual Result:**
The label says `Address (optioal)`.

---

## BUG-012 - Date of birth label has typo

**Severity:** Low  
**Priority:** Low

**Steps to Reproduce:**
1. Open the user profile form.
2. Review the Date of Birth label.

**Expected Result:**
The label should say `Date of Birth (optional)`.

**Actual Result:**
The label says `Date ofBirth (optional)`.

---

## BUG-013 - Success message can be displayed multiple times

**Severity:** Low  
**Priority:** Medium

**Steps to Reproduce:**
1. Open the user profile form.
2. Fill the form with valid data.
3. Click Submit multiple times.

**Expected Result:**
Only one success message should be displayed.

**Actual Result:**
Multiple `Success!` messages may be added to the page.

---

## BUG-014 - Some validation messages are shown as browser alerts instead of field-level messages

**Severity:** Medium  
**Priority:** Low

**Steps to Reproduce:**
1. Open the user profile form.
2. Submit the form with one empty mandatory field.

**Expected Result:**
Field-level validation messages should be shown near the affected fields.

**Actual Result:**
Validation messages are shown as browser alert popups.