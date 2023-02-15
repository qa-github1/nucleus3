const ui = require('../pages/ui-spec');
const D = require('../fixtures/data');
const C = require('../fixtures/constants');
const S = require('../fixtures/settings')
const {currentDate} = require("../support/e2e-helper");

context('Create Test User on Live Portal', () => {

    before(function () {
        ui.app.clear_gmail_inbox()
    })

    beforeEach(function () {
        Cypress.Cookies.debug(true)
        Cypress.Cookies.defaults({
            preserve: /secure|ntercom|XSRF-TOKEN|__hssc|hubspotutk|__hstc|_fbp|cognito|__Secure-next-auth.callback-url|__Secure-next-auth.session-token|__Host-next-auth.csrf-token/,
        })
    });



    it('1. Create a new user on Live Portal', function () {
        S.baseUrl = 'https://portal.nucleuswealth.com/register'
        ui.login.open_base_url()
            .verify_sign_up_login_menu()
            .enter_credentials_for_sign_up(D.newUserLivePortal)
            .click_submit_sign_up_button()
        ui.onboarding.verify_account_selection()
        cy.wait(25000)
        C.emailTemplates.signUpNewUser.subject = 'Welcome to Nucleus Wealth'
        ui.onboarding.verify_email_arrives_to_specified_address(D.gmailAccount, C.emailTemplates.signUpNewUser)
    })

    it('2. Subscribe to Nucleus Wealth mailing list', function () {
        ui.production.open_production_url()
            .verify_production_home_page()
            .click_subscribe_button()
            .verify_hubspot_form()
            .enter_email_on_HS_form('testing+' + 'website' + currentDate + '/' + D.getNewRandomNumber() + '@nucleuswealth.com')
            .click_subscribe()
            .verify_text_is_visible('Thanks for subscribing to email updates from nucleus wealth')
    })


    it('3. Subscribe user via Investment Suitability Calculator', function () {
        S.baseUrl = 'https://nucleuswealth.com/investment-suitability-calculator'
        ui.production.open_base_url()
            .verify_calculator_page()
            .answerAllQuestionsWithSpecificOption(7, 1)
            .enter_First_Name('testing')
            .click_OK_on_Calculator_wizard()
            .enter_Last_Name('testing')
            .click_OK_on_Calculator_wizard()
             .enter_email_on_last_question('testing+' + 'suitabilitycalculator' + currentDate + '/' + D.getNewRandomNumber() + '@nucleuswealth.com')
             .click_submit_on_Calculator_wizard()
            .verify_text_is_visible('Investment Suitability')
    })


    it('4. Subscribe user via Suitability Calculator', function () {
        S.baseUrl = 'https://nucleuswealth.com/ethical-investment-calculator'
        ui.production.open_base_url()
            .verify_ethical_calculator_page()
            .click_get_started_button()
            .click_next()
            .click_next()
            .enter_gender_and_date_of_birth()
            .click_next()
            .enter_First_Name('testing')
            .click_OK_on_Calculator_wizard()
            .enter_Last_Name('testing')
            .click_OK_on_Calculator_wizard()
            .enter_email_on_last_question('testing+' + 'ethicalcalculator' + currentDate + '/' + D.getNewRandomNumber() + '@nucleuswealth.com')
            .click_submit_on_Calculator_wizard()
            .verify_text_is_visible('How do your ethics compare?')
    })

    it('5. Create a new user for Walk The World', function () {
        S.baseUrl = 'https://walktheworld.nucleuswealth.com/register'
        ui.login.open_base_url()
            .verify_sign_up_login_menu()
            D.newUserLivePortal.email = 'testing+' + 'walktheworld' + currentDate + '/' + D.getNewRandomNumber() + '@nucleuswealth.com'
            ui.login.enter_credentials_for_sign_up(D.newUserLivePortal)
            .click_submit_sign_up_button()
        ui.onboarding.verify_account_selection()
        cy.wait(25000)
        C.emailTemplates.signUpNewUser.subject = 'Welcome to Nucleus Wealth'
        ui.onboarding.verify_email_arrives_to_specified_address(D.gmailAccount, C.emailTemplates.signUpNewUser)
    })

    it('6. Create a new user for Macro business', function () {
        S.baseUrl = 'https://mb.nucleuswealth.com/register'
        ui.login.open_base_url()
            .verify_sign_up_login_menu()
            D.newUserLivePortal.email = 'testing+' + 'macrobusiness' + currentDate + '/' + D.getNewRandomNumber() + '@nucleuswealth.com'
            ui.login.enter_credentials_for_sign_up(D.newUserLivePortal)
            .click_submit_sign_up_button()
        ui.onboarding.verify_account_selection()
        cy.wait(25000)
        C.emailTemplates.signUpNewUser.subject = 'Welcome to Nucleus Wealth'
        ui.onboarding.verify_email_arrives_to_specified_address(D.gmailAccount, C.emailTemplates.signUpNewUser)
    })
})