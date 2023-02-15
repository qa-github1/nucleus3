import BasePage from "./base-page";
import S from "../fixtures/settings";
import {currentDate} from "../support/e2e-helper";
import D from "../fixtures/data";

// *************************** ELEMENTS ***************************
const getIframeBody = () => {
    return cy
        .get('iframe[data-qa="iframe"]')
        .its('0.contentDocument.body').should('not.be.empty')
        .then(cy.wrap)
}

let
    header = e => cy.get('#masthead'),
    mainContainer = e => cy.get('#main'),
    footer = e => cy.get('#footer'),
    navbarOptions = option => header().contains(option),
    doc1 = e => cy.get('[href="Praemium-SMA-Product-Disclosure-Statement-and-Investment-Menu-extract.pdf"]'),
    doc2 = e => cy.get('[href="Praemium-SuperSMA-Product-Disclosure-Statement-and-Investment-Guide-extract.pdf"]'),
    docDate = e => doc1().parent().parent(),
    subscribeButton = e => cy.get('#block_widget-21 > .button'),
    HSForm = e => cy.get('[id="form-target"]'),
    emailInputForm = e => cy.get('#email-input'),
    subscribe = e => cy.get('[name="Subscribe"]'),
    ethicsGroups = e => cy.get('[data-testid="ethic-groups"]'),
    ethicsPageTitle = e => cy.get('[data-testid="page-1-title-1"]'),
    getStartedButton = e => cy.get('[class="ant-btn ant-btn-ghost ant-btn-round ant-btn-lg"]'),
    nextButton = e => cy.contains('Next'),
    gender = e => cy.get('[id="ethic-groups_Gender"]'),
    male = e => cy.get('[title="Male"]'),
    DOB = e => cy.get('[id="ethic-groups_DOB"]'),
    name = e => cy.get('[name="name"]'),
    calculatorWrapper = e => cy.get('[class="jsx-3121283116 calculator-wrapper"]'),
    nameOnLastQuestion = e => getIframeBody().find('[data-qa-focused="true"]').find('[placeholder="Type your answer here..."]'),
    emailOnLastQuestion = e => getIframeBody().find('[data-qa-focused="true"]').find('[placeholder="name@example.com"]'),
    specificAnswer = (questionNumber, answerNumber) => getIframeBody().find('[data-qa-index="' + (answerNumber - 1) + '"]').eq(questionNumber)

export default class ProductionPage extends BasePage {

    constructor() {
        super()
    }

    // *************************** ACTIONS ***************************


    open_production_url() {
        cy.visit(S.productionUrl)
        if (Cypress.env('onGithubActions')) {
            this.pause(10)
        } else {
            this.pause(5)
        }
        return this;
    };


    verify_production_home_page() {
        cy.url().should('include', 'nucleuswealth');
        header().should('be.visible');
        mainContainer().should('be.visible');
        footer().should('be.visible');
        return this;
    }

    verify_calculator_page() {
        cy.url().should('include', 'investment-suitability-calculator');
        calculatorWrapper().should('be.visible');
        return this;
    }


    answerAllQuestionsWithSpecificOption(numberOfQuestions, optionToSelect) {
        for (let i = 0; i < numberOfQuestions; i++) {
            this.pause(1)
            getIframeBody()
                .find('[data-qa-focused="true"]')
                .find('[data-qa-index="' + (optionToSelect - 1) + '"]')
                .parents('[class="radio-list__Radio-sc-16rzvkh-1 fvLhU"]')
                .invoke('attr', 'aria-checked').then(function (value) {
                if (value === 'true') {
                    getIframeBody()
                        .find('[data-qa-focused="true"]')
                        .find('[data-qa="ok-button-visible deep-purple-ok-button-visible"]').click()
                } else {
                    getIframeBody()
                        .find('[data-qa-focused="true"]')
                        .find('[data-qa-index="' + (optionToSelect - 1) + '"]')
                        .click()
                }
            })
        }
        this.pause(1)
        return this;
    }

    enter_First_Name(name) {
        getIframeBody().contains('What\'s your first name?')
        nameOnLastQuestion().clear();
        nameOnLastQuestion().type(name);
        this.pause(0.5)
        return this;
    }

    enter_Last_Name(name) {
        getIframeBody().contains('What\'s your last name?')
        nameOnLastQuestion().clear();
        nameOnLastQuestion().type(name);
        this.pause(0.5)
        return this;
    }

    enter_email_on_last_question(email) {
        emailOnLastQuestion().clear();
        emailOnLastQuestion().type(email);
        this.pause(0.5)
        return this;
    }

    verify_ethical_calculator_page() {
        cy.url().should('include', 'ethical-investment-calculator');
        ethicsGroups().should('be.visible');
        ethicsPageTitle().should('have.text', 'How do your ethics compare?')
        return this;
    }

    click_OK_on_Calculator_wizard() {
        getIframeBody()
            .find('[data-qa-focused="true"]')
            .find('[data-qa="ok-button-visible deep-purple-ok-button-visible"]').click()
        this.pause(0.5)
        return this;
    }

    click_submit_on_Calculator_wizard() {
        getIframeBody()
            .find('[data-qa-focused="true"]')
           // .contains('Submit').click()
            .find('[data-qa="submit-button deep-purple-submit-button"]').scrollIntoView().click()
        this.pause(1)
        return this;
    }

    click_option_from_navbar(option) {
        navbarOptions(option).click();
        return this;
    }

    click_get_started_button() {
        getStartedButton().click();
        return this;
    }

    click_next() {
        nextButton().click();
        return this;
    }

    enter_gender_and_date_of_birth() {
        gender().click();
        male().click();
        DOB().click();
        DOB().type('1980{enter}');
        return this;
    }



    click_ok(answer) {

        const iframe = cy.get('[data-qa="iframe"]')
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap)
        iframe.find('[data-qa="question-wrapper"]').should('be.visible')

        for (let i = 0; i < 1; i++) {
            iframe.find('[data-qa="choice-0-readable-element"]').eq(answer).click()
            this.pause(0.3)
            iframe.find('[data-qa="ok-button-visible deep-purple-ok-button-visible"]').click()

        }
    }

    verify_option_from_navbar(optionName, textHeader) {
        cy.url().should('include', optionName);
        mainContainer().should('be.visible');
        cy.get('h1').should('have.text', textHeader);
        return this;
    }

    verify_uploaded_date_for_documents() {
        doc1().should('have.text', 'Praemium-SMA-Product-Disclosure-Statement-and-Investment-Menu-extract.pdf');
        docDate().should('contain', '2022-12-07');
        doc2().should('have.text', 'Praemium-SuperSMA-Product-Disclosure-Statement-and-Investment-Guide-extract.pdf');
        docDate().should('contain', '2022-12-07');
        return this;
    }

    click_subscribe_button() {
        subscribeButton().click();
        return this;
    }

    verify_hubspot_form() {
        cy.url().should('include', 'share.hsforms.com')
        cy.get('h1').should('have.text', 'Subscribe to market insights & investment resources from Nucleus Wealth');
        HSForm().should('be.visible');
        return this;
    }

    enter_email_on_HS_form(email) {
        emailInputForm().type(email);
        return this;
    }

    click_subscribe() {
        subscribe().click();
        return this;
    }
}