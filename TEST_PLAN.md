# Test Plan - User Profile Creation Form

## Objective

Verify that the User Profile Creation form works according to the provided requirements, including field validation, error handling, successful submission, and basic UI/security checks.

Application URL: https://qa-assessment.pages.dev/

## Scope

### In Scope

- Mandatory field validation
- Optional field behavior
- Positive and negative input scenarios
- Password confirmation validation
- Gender options
- Date, phone, address, LinkedIn, and GitHub field validation
- Success message after valid submission
- Basic UI checks for labels and field types
- Basic check for sensitive data exposed in the page

### Out of Scope

- Backend/database testing
- Performance or load testing
- Authentication/authorization testing

## Test Approach

Testing will be based on the requirements and behavior of the webpage.

The main techniques used are:

- Positive testing
- Negative testing
- Boundary value testing
- Equivalence partitioning
- Exploratory testing

Automated tests will be written with Playwright using TypeScrypt. The tests will be organized so that critical checks can run separately from the full regression suite.

## Test Environment

- Web application: https://qa-assessment.pages.dev/
- Automation tool: Playwright
- Browsers: Chromium, Firefox, WebKit
- CI/CD: GitHub Actions

## Test Data

Example of valid data:

| Field | Value |
|---|---|
| First Name | John |
| Last Name | Smith |
| Email | john.smith@example.com |
| Password | P@ssw0rd |
| Confirm Password | P@ssw0rd |
| Date of Birth | 01/01/1990 |
| Phone | 1234567890 |
| Address | 123 Main St, Apt 1 |
| LinkedIn | https://www.linkedin.com/in/johnsmith |
| GitHub | https://github.com/johnsmith |

Invalid examples include empty mandatory fields, names with numbers/symbols, invalid email format, password mismatch, phone numbers with letters or more than 10 digits, and non-LinkedIn/GitHub URLs.

## Automation Strategy

The automated tests will have two profiles:

### Smoke Profile

- Happy path
- Required field validation
- Invalid email validation
- Password mismatch validation

### Full Profile

- Run all tests.

## CI/CD

GitHub Actions will be used to run the automated tests.

Planned setup:

- Full tests run automatically on push/pull request
- Smoke tests can be run manually or before final review
- Playwright report is generated after test execution

## Deliverables

- `TEST_PLAN.md`
- `TEST_CASES.md`
- `BUG_REPORT.md`
- Playwright automated tests
- GitHub Actions workflow
- `README.md` with setup and execution instructions

## Entry Criteria

- Application is accessible
- Requirements are available

## Exit Criteria

- Test cases are documented
- Main scenarios are automated
- Defects are reported
- Test results are generated from Playwright
- README contains setup and run instructions

## Risks / Notes

- Some validation is handled with browser alerts, which can make field-level error handling less clear.
- The page is client-side only, so no backend validation can be verified.
- Browser-native validation may behave slightly differently between browsers.