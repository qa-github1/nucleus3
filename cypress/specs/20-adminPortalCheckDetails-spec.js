const ui = require('../pages/ui-spec');
const D = require('../fixtures/data');
const C = require('../fixtures/constants');
const S = require('../fixtures/settings')
const {currentDate} = require("../support/e2e-helper");

context('Admin Portal - Check details', () => {



    beforeEach(function () {
        Cypress.Cookies.debug(true)
        Cypress.Cookies.defaults({
            preserve: /secure|ntercom|XSRF-TOKEN|__hssc|hubspotutk|__hstc|_fbp|cognito|__Secure-next-auth.callback-url|__Secure-next-auth.session-token|__Host-next-auth.csrf-token/,
        })
    });



    it('1. Log in using manager login', function () {
        ui.login.open_base_url()
            .verify_login_menu()
            .enter_credentials_and_click_Sign_In(D.managerUser.username, D.managerUser.password)
        ui.admin.verify_admin_homepage()
    })

    it('2. Account ID 445 detail page', function () {
        S.baseUrl = 'https://testwebserver.nucleuswealth.com/crm/investment-account-edit/445'
        ui.login.open_base_url()
        ui.admin.verify_link('investment-account-edit', '445')
    })

    it('3. Check panels existence', function () {
        ui.admin.verify_account_details_on_admin_page()

    })

    it('4. Direct to Account’s client portal', function () {
        ui.admin.click_clients_portal()
            .verify_link('445', 'account-dashboard')
            .verify_text_is_visible('Account Dashboard')
            .verify_text_is_visible('Joint Account (NW445)')
        cy.go('back')
    })

    it('5. Check Investor Panel', function () {
        ui.admin.click_investor_1()
            .verify_investor_1_panel()
    })

    it('6. Check Account Settings & History (Data Snapshots)', function () {
        ui.admin.click_account_settings_and_history()
            .verify_account_settings_and_history_panel()
    })

    it('7. Check Current Settings', function () {
        ui.admin.click_current_settings()
            .verify_current_settings()

    })


})