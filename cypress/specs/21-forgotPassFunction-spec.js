const ui = require('../pages/ui-spec');
const D = require('../fixtures/data');
const C = require('../fixtures/constants');


context('Forgot password function', () => {

    before(function () {
        ui.app.clear_gmail_inbox()
    })

    beforeEach(function () {
        Cypress.Cookies.debug(true)
        Cypress.Cookies.defaults({
            preserve: /secure|ntercom|XSRF-TOKEN|__hssc|hubspotutk|__hstc|_fbp|cognito|__Secure-next-auth.callback-url|__Secure-next-auth.session-token|__Host-next-auth.csrf-token/,
        })
    });



    it('1. Direct to forgot password page', function () {
        ui.login.open_base_url()
            .verify_login_menu()
            .click_forgot_password_button()
            .verify_text_is_visible('Enter your Email below and we will send a message to reset your password')
    })

    it('2. Reset password', function () {
        ui.login.enter_email_for_reset_password('testing+forgotpassword@nucleuswealth.com')
            .click_reset_password_button()
        ui.app.verify_email_and_save_values(D.gmailAccount,
            'code', 'Your password reset code is', 'You received this message because you are subscribed to the Google Groups')

        cy.url().should(() => {
            expect(localStorage.getItem("code")).to.exist;
            D.gmailAccount.code = localStorage.getItem("code");
            cy.wait(5000); //wait for assertion to finish - because this is async part of code
            ui.login.enter_code_for_reset_password(D.gmailAccount.code)
                .enter_and_confirm_new_password(D.gmailAccount.newPass)
                .click_change_password_button()
            ui.login.enter_credentials_and_click_Sign_In('testing+forgotpassword@nucleuswealth.com', D.gmailAccount.newPass)
            ui.onboarding.verify_account_selection()
        })
    })


})

