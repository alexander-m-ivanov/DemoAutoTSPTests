# UI Test Automation Project

## 📌 Overview

This project demonstrates a UI test automation setup using Playwright with a Page Object Model (POM) architecture.

It includes:

* A working **dummy test** for validating page navigation and URL
* Additional test scenarios implemented for demonstrating structure and POM usage (currently not executable due to external dependency unavailability)

The purpose of this project is to showcase:

* Clean test architecture
* Maintainable test design using POM
* Environment configuration
* Basic Playwright capabilities

---------------------------------------------------------------------------------------------------------------------------------------------------------

## 🧰 Tech Stack

* Node.js
* Playwright
* TypeScript

---------------------------------------------------------------------------------------------------------------------------------------------------------

## 📁 Project Structure

```bash
├── src/
│   ├── fixtures/        # Custom test fixtures
│   ├── pages/           # Page Object Models
│   ├── test-data/       # Test data and constants
│   └── utils/           # Helper functions
│
├── tests/               # Test specifications
│   └── test-cases.spec.ts
│
├── playwright.config.ts
├── package.json
└── README.md
```

---------------------------------------------------------------------------------------------------------------------------------------------------------

## ⚙️ Setup & Installation

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---------------------------------------------------------------------------------------------------------------------------------------------------------

## 🔧 Environment Configuration

The project uses environment variables.

Create a `.env` file in the root directory:

```bash
BASE_URL=https://the-internet.herokuapp.com/
```

Environment variables are loaded via the Playwright configuration and are accessible throughout the project.

---------------------------------------------------------------------------------------------------------------------------------------------------------

## ▶️ Running Tests

Run all tests:

```bash
npm run test
```

Run in headed mode:

```bash
npm run test:headed
```

Run in debug mode:

```bash
npm run test:debug
```

Open HTML report:

```bash
npm run report
```

---------------------------------------------------------------------------------------------------------------------------------------------------------

## 🧪 Test Scenarios

### ✅ Working Test

* Opens a web page
* Validates that the correct URL is loaded

### ⚠️ Demonstration Tests

* Additional scenarios are included to demonstrate:

  * Page Object Model usage
  * Test structure and abstraction
  * Interaction with page components

These tests are **not expected to pass**, as they depend on an external system that is currently unavailable. They are intentionally kept for architectural demonstration purposes.

---------------------------------------------------------------------------------------------------------------------------------------------------------

## 🏗️ Architecture Highlights

### Page Object Model (POM)

* Encapsulates page logic inside dedicated classes
* Promotes reusability and maintainability
* Separates test logic from UI interaction

### Custom Fixtures

* Extends Playwright test capabilities
* Provides reusable setup and page instances

### Test Data Management

* Centralized test data
* Easy to modify and reuse across tests

---------------------------------------------------------------------------------------------------------------------------------------------------------

## 📊 Reporting

Playwright provides built-in HTML reporting.

After test execution, run:

```bash
npx playwright show-report
```

---------------------------------------------------------------------------------------------------------------------------------------------------------

## ✅ Notes

* The project is intended for demonstration purposes
* Focus is on structure and code organization rather than full coverage
* Only the basic navigation test is expected to pass
* Other tests exist to showcase design patterns and scalability

---------------------------------------------------------------------------------------------------------------------------------------------------------

## 🚀 Possible Improvements

* Add more stable and independent test scenarios
* Integrate CI/CD pipeline
* Add test tagging and filtering
* Enhance error handling and logging
* Introduce API testing layer

---------------------------------------------------------------------------------------------------------------------------------------------------------
