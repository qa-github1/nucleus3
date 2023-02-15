// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

const compareSnapshotCommand = require('cypress-visual-regression/dist/command');
compareSnapshotCommand();

Cypress.Commands.add("setResolution", (size) => {
    if (Cypress._.isObject(size)) {
        cy.viewport(size.width, size.height);
        cy.setLocalStorage("width", JSON.stringify(size.width))
        cy.setLocalStorage("height", JSON.stringify(size.height))
        cy.saveLocalStorage();

    } else {
        cy.viewport(size);
    }
});



Cypress.Commands.overwrite('clearLocalStorage', () => {
    cy.on('window:before:load', window => {
        window.localStorage.clear();
    });
});

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
});

//cy.generate_excel_file('Users_Import', usersObject)  == usage example
Cypress.Commands.add('generate_excel_file', (filename, dataObject) => {
    return cy.task('generate_excel_file', {
        filename: filename,
        dataObject: dataObject
    });
});

