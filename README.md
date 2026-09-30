# The Internet-Heroku Automation

## Project Overview

This project uses Playwright and TypeScript to automate UI testing for The Internet website and API testing for JSONPlaceholder.

The project follows the **Page Object Model (POM)** for UI tests, with reusable page objects, separate test data files, and parameterized login tests. It covers successful and unsuccessful login attempts, dynamic content changes, checkbox interactions, and API requests for retrieving and creating users.

The framework uses Playwright’s built-in HTML reporter to display test results and provides separate configurations for UI and API tests.

## Framework Used

This project uses **Playwright Test** with **TypeScript**.

**Playwright Test** was selected because it supports both browser-based UI testing and API testing within a single framework. Its built-in locators and auto-waiting help make UI interactions reliable, while isolated browser contexts prevent tests from sharing browser state. Built-in assertions and HTML reporting support result verification and failure investigation.

**TypeScript** was selected because I am familiar with using it for test automation. Its static typing and editor support help identify coding errors during development and make page objects, test data, and test scripts easier to maintain.

## Design Pattern

The project follows the **Page Object Model (POM)** for UI testing. Page classes contain UI locators, reusable actions, and validation methods. This keeps page-specific logic separate from test scenarios and makes UI changes easier to maintain.

- **pages/** contains the page classes used by the UI tests.
- **tests/** contains test cases grouped into UI and API folders. UI tests call page-object methods to perform actions and verify results, while API tests use Playwright’s `request` fixture directly.
- **test-data/** contains login test data and the new-user payload, keeping reusable input data separate from test logic.

## Tech Stack

| Technology               | Purpose                                                    |
| ------------------------ | ---------------------------------------------------------- |
| Playwright Test          | UI automation, API testing, assertions, and test execution |
| TypeScript               | Typed test scripts, page objects, and test data            |
| Node.js                  | Runtime for executing Playwright and project tooling       |
| npm                      | Dependency installation and command execution              |
| Playwright HTML Reporter | Test results, execution details, and failure reporting     |

## Project Structure

The project follows the **Page Object Model (POM)** for UI testing, separating test scenarios from page-specific locators, actions, and validation methods. This reduces duplication and makes page changes easier to maintain.

UI and API tests are organized into separate folders. Login test data and the POST request payload are stored separately from the test scripts.

```text
internet-heroku/
├── pages/
│   ├── LoginPage.ts                    # Login actions and validations
│   ├── DynamicContentPage.ts           # Capture and compare dynamic text
│   └── CheckboxesInteractionPages.ts   # Checkbox actions and state validations
├── test-data/
│   ├── login.ts                       # Login inputs and expected results
│   └── newUser.ts                     # POST request payload
├── tests/
│   ├── ui/
│   │   ├── login.spec.ts               # Login scenarios
│   │   ├── dynamicContent.spec.ts      # Content changes after refresh
│   │   └── checkboxesInteraction.spec.ts # Checkbox state changes
│   └── api/
│       └── user.spec.ts                # GET and POST user API tests
├── playwright-report/                 # Generated HTML test report
├── playwright.config.ts               # UI and API project configuration
├── package.json                       # Project metadata and dependencies
├── package-lock.json                  # Locked dependency versions
├── README.md                          # Project documentation and run instructions
└── .gitignore                         # Files excluded from Git tracking
```

## Test Data Handling

Test data is stored in the `test-data` folder to keep reusable inputs separate from test logic.

- **login.ts** stores credentials, expected messages, and expected URL paths for the six login scenarios.
- **newUser.ts** contains the user payload sent in the POST request for API-003.

Tests import these files to access the data, making it easier to update inputs without changing the test steps. API-002’s expected user details are defined directly in the test for comparison with the response.

## Test Coverage

The project contains 11 unique automated test cases covering four functional areas.

| Scenario        | Tests | Coverage                                                                                                                                 |
| --------------- | ----: | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Login           |     6 | Valid credentials, invalid username, invalid password, both fields empty, empty username, and empty password                             |
| Dynamic Content |     1 | Verify that three text blocks are captured before and after refreshing and that the combined text content differs after refreshing.      |
| Checkboxes      |     1 | Check the first checkbox, uncheck the second, and verify both states                                                                     |
| API Validation  |     3 | Retrieve all users and validate field types, retrieve one user and verify its details, and create a user with response and ID validation |

Login tests verify feedback messages and destination URLs. API tests verify response status codes and response bodies. The POST test also checks that the returned ID is a positive number and is not present in the existing user list.

## Prerequisites

- Node.js and npm installed.
- Internet access to download dependencies and access the test websites.

## Installation

1. Extract the project ZIP.
2. Open a terminal in the project root—the folder containing `package.json`.
3. Install the project dependencies:

   ```bash
   npm ci
   ```

4. Install the supported browsers (Chromium, Firefox, and WebKit):

   ```bash
   npx playwright install
   ```

The `node_modules` folder is generated during dependency installation and is not included in the submission.

## Running the Tests

Run these commands from the project root.

### Run all tests

```bash
npx playwright test
```

Runs UI tests on Chromium, Firefox, and WebKit, plus API tests under the API project.

### Run tests with visible browsers

```bash
npx playwright test --headed
```

### Run a specific browser

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Run API tests only

```bash
npx playwright test --project=api
```

### Run a specific test

```bash
npx playwright test --project=chromium -g "TC-001"
```

## Test Reporting

The project uses Playwright’s built-in HTML reporter to display test results, execution times, and failure details.

To open the latest report:

```bash
npx playwright show-report
```

Reports are saved in the `playwright-report` folder. Run the complete suite before submission so the report includes all configured projects.

## Test Execution Results

The latest complete test run finished with **27 passed and 0 failed**.

The project contains **11 unique test cases**: 8 UI cases executed across Chromium, Firefox, and WebKit, plus 3 API cases executed once under the API project.

| Test Module          | Unique Test Cases | Executions |
| -------------------- | ----------------: | ---------: |
| Login                |                 6 |         18 |
| Dynamic Content      |                 1 |          3 |
| Checkbox Interaction |                 1 |          3 |
| API Validation       |                 3 |          3 |
| **Total**            |            **11** |     **27** |

The complete HTML report is included in the `playwright-report` folder.
