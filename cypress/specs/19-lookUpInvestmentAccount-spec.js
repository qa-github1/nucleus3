const ui = require('../pages/ui-spec');
const D = require('../fixtures/data');
const C = require('../fixtures/constants');
const S = require('../fixtures/settings')
const {currentDate} = require("../support/e2e-helper");

context('Look Up Investment Account', () => {


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

    it('2. Direct to Investment Account Search', function () {
        ui.admin.verify_admin_navbar()
            .click_CRM_on_header()
            .click_investment_account_search()
            .verify_link('investment-account', 'search')
            .verify_text_is_visible('Investment Accounts')
    })

    it('3. Search Account ID 445', function () {
        ui.admin.search_account_id('445')
        ui.app.verify_content_of_first_row_in_results_table('445')
        .verify_content_of_first_row_in_results_table('Joint')
    })

    it('4. Expand Account ID 445', function () {
        ui.admin.click_view_table_button()
            .verify_link('investment-account-edit', '445')

    })



})