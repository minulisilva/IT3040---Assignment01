# IT3040 – Assignment 01  
## Playwright Automation Testing Project

This repository contains a complete **Playwright automation testing project(Singlish to Sinhala)** developed as part of  
**IT3040 – IT Project Management**.

The project automates functional and UI test scenarios for the **SwiftTranslator** web application.

🔗 https://www.swifttranslator.com/

---

## 🧪 Project Overview
The automation suite includes:
- Positive functional test cases
- Negative / robustness test cases
- UI behavior tests (real-time output updates)
- Long input handling tests
- Data-driven test execution

All test cases are implemented using the **Playwright Test Runner**.

---

## 🛠️ Technologies Used
- Node.js  
- Playwright  
- JavaScript  
- Git & GitHub  
- GitHub Actions (CI)

---

## ✅ Prerequisites
Before running this project, ensure the following are installed:

- **Node.js** (version 16 or higher recommended)  
- **npm** (included with Node.js)

Verify installation by running:
```bash
node -v
npm -v
```

---

## ⚙️ Installation Steps

## 1️⃣ Clone the Repository
```bash
git clone https://github.com/minulisilva/IT3040---Assignment01.git
cd IT3040---Assignment01
```

## 2️⃣ Install Dependencies
```bash
npm install
```

## 3️⃣ Install Playwright Browsers
```bash
npx playwright install
```

## ▶️ Running the Tests

## Run all tests
```bash
npx playwright test
```

## Run tests in headed mode (browser visible)
```bash
npx playwright test --headed
```

## Run specific test files
```bash
npx playwright test tests/it23213258_Pos_Fun.spec.js
npx playwright test tests/it23213258_Neg_Fun.spec.js
npx playwright test tests/it23213258_Pos_UI.spec.js
```

## 📊 View Test Report
```bash
npx playwright show-report
```
