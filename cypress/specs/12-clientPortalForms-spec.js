const ui = require('../pages/ui-spec');
const D = require('../fixtures/data');
const C = require('../fixtures/constants');

context('Client Portal - Forms', () => {



    beforeEach(function () {
        Cypress.Cookies.debug(true)
        Cypress.Cookies.defaults({
            preserve: /secure|ntercom|XSRF-TOKEN|__hssc|hubspotutk|__hstc|_fbp|cognito|__Secure-next-auth.callback-url|__Secure-next-auth.session-token|__Host-next-auth.csrf-token/,
        })
    });



    it('1. Direct user to “Forms” page', function () {
        ui.login.open_base_url()
            .verify_login_menu(D.user)
            .enter_credentials_and_click_Sign_In(D.user.username, D.user.password)
        ui.clientPortal.click_forms_link()
    })

    it('2. Check Form Page', function () {
        ui.clientPortal.verify_form_page()
        cy.saveLocalStorage()
    })

    it('3. Expand Superannuation Forms', function () {
       ui.clientPortal.expand_superannuation_forms()
            .verify_text_on_visit_download_page_of_SuperAnnuationForms(D.superannuationForms)
            .verify_number_of_documents(7)
            .collapse_superannuation_forms()
    })


    it('4. Expand Personal Investment Forms', function () {
        ui.clientPortal.expand_personal_investment_forms()
            .verify_text_on_visit_download_page_of_PersonalInvestmentForms(D.personalInvestmentForms)
            .verify_number_of_documents(2)
    })
})
