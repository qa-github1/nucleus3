# Cypress -Nucleus Wealth-- Test Automation Framework

## Installation
- Node.js
- on the root 'cypress-sample-test-automation-framework' folder, where the package.json resides, run the command:
  ###### npm install
  _______________________________________________
 ## Quick steps for adding API calls in tests:
 1. Make a copy of folder 'cypress/api-utils/endpoints/template-api-folder'
      (e.g. cypress/api-utils/endpoints/pricing)
 2. Adjust methods, data and properties in the sub-folders
      (e.g. cypress/api-utils/endpoints/pricing/collection.js &
            cypress/api-utils/endpoints/pricing/payload.js)
3. Make a new variable and object property for the newly created collection in the 'cypress/api-utils/api-spec.js'
4. Open any spec file - start typing "api.", find the reference to your endpoint and the method you want to use
(Make sure you call api.auth.get_token() before any other endpoint that requires authentication);
 _______________________________________________

- to open Cypress native runner, use the command:
  ###### npm run openRunner
 _______________________________________________

- to run all Tests and open Allure Report afterwards use the command
  ###### npm run allTestsAndReport
 _______________________________________________

- to open an Allure Report, navigate to folder report and run the command
  ###### allure serve allure-results
 _______________________________________________



