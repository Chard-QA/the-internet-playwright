# The Internet Playwright Automation

[![Playwright Tests](https://github.com/Chard-QA/the-internet-playwright/actions/workflows/playwright.yaml/badge.svg)](https://github.com/Chard-QA/the-internet-playwright/actions/workflows/playwright.yaml)

Playwright + TypeScript automation project for practicing **UI testing** against The Internet Heroku application and **API testing** against JSONPlaceholder.

---

## Project Overview

This project demonstrates UI and API automation using **Playwright Test** with **TypeScript**.

The UI automation suite targets **The Internet** application and follows the **Page Object Model (POM)** to separate page-specific locators, reusable actions, and validation methods from the test scenarios.

The current UI coverage includes:

- Login validation
- Dynamic content validation
- Checkbox interaction

The API automation suite targets **JSONPlaceholder** and covers:

- Retrieving all users
- Retrieving a single user by ID
- Creating a new user
- Response status validation
- Response body validation
- Field type validation
- Nested object validation

The UI suite runs across **Chromium, Firefox, and WebKit**, while API tests execute separately through a dedicated Playwright API project.

The project also includes **GitHub Actions Continuous Integration (CI)** for automatic test execution on pushes and pull requests to the `main` branch.

---

## Framework Used

This project uses **Playwright Test** with **TypeScript**.

### Playwright Test

Playwright Test is used for both UI and API automation.

For UI testing, the framework provides:

- Cross-browser support
- Built-in locators
- Auto-waiting
- Web-first assertions
- Browser-context isolation
- HTML reporting
- Screenshots on failure
- Video recording for failed tests
- Trace collection for retried tests

For API testing, Playwright's built-in `request` fixture is used to send and validate REST API requests.

### TypeScript

TypeScript is used for:

- Test scripts
- Page Object classes
- Test data
- API payloads
- Type-safe automation development

Its static typing and editor support help identify coding issues during development and improve framework maintainability.

---

## Design Pattern

The UI automation follows the **Page Object Model (POM)**.

Page classes contain:

- UI locators
- Reusable actions
- Navigation methods
- Validation methods

This separates page-specific implementation from the test scenarios and reduces duplicated code.

The project is organized into:

- `pages/` — reusable Page Object classes
- `tests/ui/` — UI automation test specifications
- `tests/api/` — API automation test specifications
- `test-data/` — reusable UI and API test data
- `.github/workflows/` — GitHub Actions CI workflow

---

## Tech Stack

| Technology               | Purpose                                                    |
| ------------------------ | ---------------------------------------------------------- |
| Playwright Test          | UI automation, API testing, assertions, and test execution |
| TypeScript               | Test scripts, Page Objects, and test data                  |
| Node.js 24               | JavaScript runtime environment                             |
| npm                      | Dependency installation and project scripts                |
| Git                      | Source control                                             |
| GitHub                   | Repository hosting and version control                     |
| GitHub Actions           | Continuous Integration and automated test execution        |
| Playwright HTML Reporter | Test execution reporting and failure investigation         |
| Playwright Trace Viewer  | Detailed debugging of retried and failed tests             |

---

## Applications Under Test

### UI Testing

**The Internet**

```text
https://the-internet.herokuapp.com
```

Current UI modules:

- Login
- Dynamic Content
- Checkboxes

### API Testing

**JSONPlaceholder**

```text
https://jsonplaceholder.typicode.com
```

Current API resource:

```text
/users
```

---

## Project Structure

```text
the-internet-playwright/
│
├── .github/
│   └── workflows/
│       └── playwright.yaml          # GitHub Actions CI workflow
│
├── pages/
│   ├── LoginPage.ts
│   ├── DynamicContentPage.ts
│   └── CheckboxesInteractionPages.ts
│
├── test-data/
│   ├── login.ts
│   └── newUser.ts
│
├── tests/
│   ├── ui/
│   │   ├── login.spec.ts
│   │   ├── dynamicContent.spec.ts
│   │   └── checkboxesInteraction.spec.ts
│   │
│   └── api/
│       └── user.spec.ts
│
├── playwright.config.ts
├── package.json
├── package-lock.json
├── README.md
└── .gitignore
```

### Folder Responsibilities

`pages/`

Contains Page Object classes used by the UI tests.

`test-data/`

Contains reusable test inputs and API request payloads.

`tests/ui/`

Contains browser-based UI automation scenarios.

`tests/api/`

Contains REST API automation scenarios.

`.github/workflows/`

Contains the GitHub Actions workflow used for automated test execution.

---

## Test Data Handling

Reusable test data is stored separately from the test logic.

### `login.ts`

Contains the data used by the parameterized login tests, including:

- Test ID
- Test name
- Username
- Password
- Expected validation message
- Expected URL path

The login suite currently contains **6 parameterized scenarios**.

### `newUser.ts`

Contains the request payload used by:

```text
API-003: Create a New User
```

This keeps the POST request data separate from the API test logic.

---

## Test Coverage

The project currently contains **11 unique automated test cases**.

### UI Test Coverage

| Module               | Tests | Coverage                                                                                                     |
| -------------------- | ----: | ------------------------------------------------------------------------------------------------------------ |
| Login                |     6 | Valid credentials, invalid username, invalid password, empty credentials, empty username, and empty password |
| Dynamic Content      |     1 | Verify that displayed text changes after refreshing the page                                                 |
| Checkbox Interaction |     1 | Check the first checkbox, uncheck the second checkbox, and verify their states                               |

### API Test Coverage

| Test ID | Method | Scenario                                                      |
| ------- | ------ | ------------------------------------------------------------- |
| API-001 | GET    | Retrieve all users and validate field data types              |
| API-002 | GET    | Retrieve user ID `1` and validate expected user details       |
| API-003 | POST   | Create a new user and validate returned data and generated ID |

### API Validation Coverage

The API tests currently validate:

- HTTP status codes
- Array responses
- Response object properties
- Primitive data types
- Nested address properties
- Geographic data
- Company properties
- Exact response values
- POST request payload matching
- Generated user IDs

---

## Playwright Projects

The framework separates UI and API execution through Playwright projects.

| Project  | Test Scope     |
| -------- | -------------- |
| Chromium | UI tests       |
| Firefox  | UI tests       |
| WebKit   | UI tests       |
| API      | API tests only |

The UI suite is executed across all three browser engines.

The API suite runs only once because it uses Playwright's `request` fixture and does not require browser execution.

---

## Prerequisites

Before running the project, make sure you have:

- Node.js 24.x
- npm
- Git
- Internet access

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/KingChard/the-internet-playwright.git
cd the-internet-playwright
```

### 2. Install Dependencies

```bash
npm ci
```

### 3. Install Playwright Browsers

```bash
npx playwright install
```

For Linux or CI environments:

```bash
npx playwright install --with-deps
```

---

## Running the Tests

### Run the Complete Test Suite

```bash
npm test
```

This runs:

```text
UI tests
├── Chromium
├── Firefox
└── WebKit

API tests
└── API project
```

### Run UI Tests Only

```bash
npm run test:ui
```

### Run API Tests Only

```bash
npm run test:api
```

### Run UI Tests in Headed Mode

```bash
npm run test:ui -- --headed
```

### Run a Specific Browser

Chromium:

```bash
npx playwright test --project=chromium
```

Firefox:

```bash
npx playwright test --project=firefox
```

WebKit:

```bash
npx playwright test --project=webkit
```

### Run a Specific UI Test

Example:

```bash
npx playwright test --project=chromium -g "TC-001"
```

### Run a Specific API Test

Example:

```bash
npm run test:api -- -g "API-001"
```

---

## Available npm Scripts

| Command            | Purpose                                       |
| ------------------ | --------------------------------------------- |
| `npm test`         | Run the complete UI and API test suite        |
| `npm run test:ui`  | Run UI tests                                  |
| `npm run test:api` | Run API tests using the dedicated API project |
| `npm run report`   | Open the latest Playwright HTML report        |

---

## Test Reporting and Debugging Artifacts

The project uses Playwright's built-in **HTML Reporter**.

The HTML reporter is configured with:

```text
open: never
```

so the report is generated without automatically opening after execution.

The report provides information such as:

- Test status
- Test duration
- Browser/project
- Failure details
- Error messages
- Test steps
- Execution information

To open the latest report manually:

```bash
npm run report
```

### Failure Artifacts

The framework also captures debugging artifacts when tests fail.

**Screenshots**

```text
only-on-failure
```

Screenshots are captured automatically when a test fails.

**Videos**

```text
retain-on-failure
```

Videos are retained only when a test fails.

**Traces**

```text
on-first-retry
```

A Playwright trace is collected when a failed test is retried for the first time.

Generated artifacts are stored locally under folders such as:

```text
playwright-report/
test-results/
```

These generated folders are excluded from Git tracking.

---

## Continuous Integration

The project uses **GitHub Actions** for Continuous Integration.

The workflow is located at:

```text
.github/workflows/playwright.yaml
```

The workflow runs automatically when:

- Changes are pushed to the `main` branch
- A pull request targets the `main` branch

### CI Pipeline

```text
Push / Pull Request
        ↓
Checkout repository
        ↓
Setup Node.js 24
        ↓
Install dependencies using npm ci
        ↓
Install Playwright browsers and dependencies
        ↓
Run the complete Playwright test suite
        ↓
Generate Playwright reports and artifacts
        ↓
Upload Playwright artifacts
```

The GitHub Actions environment executes:

```text
UI
├── Chromium
├── Firefox
└── WebKit

API
└── Dedicated API project
```

### CI Artifacts

After execution, GitHub Actions uploads:

```text
playwright-report/
test-results/
```

These artifacts can be downloaded from the workflow run for test analysis and debugging.

---

## Test Execution Results

The current complete test suite finishes with:

```text
27 passed
0 failed
```

The project contains **11 unique test cases**.

UI tests are executed across Chromium, Firefox, and WebKit, while API tests execute once through the dedicated API project.

| Test Module          | Unique Test Cases | Executions |
| -------------------- | ----------------: | ---------: |
| Login                |                 6 |         18 |
| Dynamic Content      |                 1 |          3 |
| Checkbox Interaction |                 1 |          3 |
| API Validation       |                 3 |          3 |
| **Total**            |            **11** |     **27** |

The test suite has also been successfully executed through **GitHub Actions CI**.

---

## Current Framework Capabilities

- Playwright + TypeScript
- Page Object Model
- Reusable Page Object methods
- Parameterized login testing
- Centralized test data
- Cross-browser UI automation
- Chromium testing
- Firefox testing
- WebKit testing
- Dedicated API project
- REST API GET testing
- REST API POST testing
- Request payload validation
- Response body validation
- Nested JSON validation
- Data type assertions
- Playwright HTML reporting
- Screenshots on test failure
- Video retention on test failure
- Playwright traces on retry
- Separate UI and API execution
- npm test scripts
- Node.js 24 environment
- Git source control
- GitHub repository hosting
- GitHub Actions CI
- Automated test execution on pushes to `main`
- Automated test execution for pull requests targeting `main`
- CI artifact upload for Playwright reports and test results

---
