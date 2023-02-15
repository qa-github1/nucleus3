const ui = require('../pages/ui-spec');
const D = require('../fixtures/data');
const C = require('../fixtures/constants');

context('Client Portal - Administration', () => {

    before(function () {
        ui.app.clear_gmail_inbox()
    })

    beforeEach(function () {
        Cypress.Cookies.debug(true)
        Cypress.Cookies.defaults({
            preserve: /secure|ntercom|XSRF-TOKEN|__hssc|hubspotutk|__hstc|_fbp|cognito|__Secure-next-auth.callback-url|__Secure-next-auth.session-token|__Host-next-auth.csrf-token/,
        })
    });



    it('1. Direct user to “Administration” page', function () {
        ui.login.open_base_url()
            .verify_login_menu(D.user)
            .enter_credentials_and_click_Sign_In(D.user.username, D.user.password)
        ui.clientPortal.click_administration_link()
    })

    it('2. Check Administration Page', function () {
        ui.clientPortal.verify_administration_page()
        cy.saveLocalStorage()
    })

    it('3. Check Upload Verification Documents', function () {
        ui.clientPortal.verify_upload_verification_documents()

    })

    it('4. Check Administration Page', function () {
        ui.clientPortal.upload_verification_document()
            .verify_text_is_present_on_main_container('Successfully Uploaded!')
        cy.wait(35000)
        ui.onboarding.verify_email_arrives_to_specified_address(D.gmailAccount, C.emailTemplates.uploadedDocument)
            .verify_text_is_present_on_main_container('Verification Document Uploaded')
    })


})

