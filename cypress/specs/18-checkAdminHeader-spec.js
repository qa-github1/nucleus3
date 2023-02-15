const ui = require('../pages/ui-spec');
const D = require('../fixtures/data');
const C = require('../fixtures/constants');
const S = require('../fixtures/settings')
const {currentDate} = require("../support/e2e-helper");

context('Check Admin header', () => {



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

    it('2. Check Navbar', function () {
        ui.admin.verify_admin_navbar()
            .click_CRM_on_header()
            .click_kanbans_submenu()
            .click_insurance_kanban()
            .verify_link('crm', 'insurance-kanban')
        // .verify_text_is_visible('Generate quote (new client)')

        ui.admin.click_CRM_on_header()
            .click_kanbans_submenu()
            .click_onboarding_kanban()
            .verify_link('crm', 'onboarding-kanban')
        //.verify_text_is_visible('Full Advice. Needs to be called.')

        ui.admin.click_CRM_on_header()
            .click_kanbans_submenu()
            .click_invested_kanban()
            .verify_link('crm', 'invested-kanban')
        // .verify_text_is_visible('Invested')

        ui.admin.click_CRM_on_header()
            .click_kanbans_submenu()
            .click_cashflow_kanban()
            .verify_link('crm', 'cashflow-kanban')

        ui.admin.click_CRM_on_header()
            .click_kanbans_submenu()
            .click_kanban_config()
            .verify_link('crm', 'kanban-config')

        ui.admin.click_CRM_on_header()
            .click_states_submenu()
            .click_call_stats('[href="/crm/call-stats"]')
            .verify_link('crm', 'call-stats')
        //error loading tables - need to check
        /*.verify_text_is_visible('This Month Summary Call Stats')
        .verify_text_is_visible('Last Month Summary Call Stats')
        .verify_text_is_visible('Daily Aggregate Call Stats')
        .verify_text_is_visible('Call Stats 4')
        .verify_text_is_visible('Detailed Call Stats - Last 2 Months')*/

        ui.admin.click_CRM_on_header()
            .click_states_submenu()
            .click_marketing_stats()
            .verify_link('crm', 'marketing-stats')

        ui.admin.click_CRM_on_header()
            .click_states_submenu()
            .click_signup_stats()
            .verify_link('crm', 'signup-stats')


        ui.admin.click_CRM_on_header()
            .click_sales_submenu()
            .click_key_prospects()
            .verify_link('crm', 'key-prospects')

        ui.admin.click_CRM_on_header()
            .click_sales_submenu()
            .click_agile_tasks()
            .verify_link('crm', 'agile-tasks')

        ui.admin.click_CRM_on_header()
            .click_sales_submenu()
            .click_contact_clients()
            .verify_link('crm', 'contact-clients')

        ui.admin.click_CRM_on_header()
            .click_sales_submenu()
            .click_brokerage_free_offer()
            .verify_link('crm', 'brokerage-free-offer')

        ui.admin.click_CRM_on_header()
            .click_trading_submenu()
            .click_trade_recent()
            .verify_link('crm', 'trade-recent')

        ui.admin.click_CRM_on_header()
            .click_trading_submenu()
            .click_trade_weights()
            .verify_link('crm', 'trade-weights')

        ui.admin.click_CRM_on_header()
            .click_trading_submenu()
            .click_important_follow_ups()
            .verify_link('crm', 'important-follow-ups')

        ui.admin.click_CRM_on_header()
            .click_data_submenu()
            .click_client()
            .verify_link('crm', 'client')

        ui.admin.click_CRM_on_header()
            .click_data_submenu()
            .click_research()
            .verify_link('crm', 'research')

        ui.admin.click_CRM_on_header()
            .click_non_client_certified_docs()
            .verify_link('crm', 'non-client-certified-docs')

        ui.admin.click_CRM_on_header()
            .click_investment_account_search()
            .verify_link('investment-account', 'search')

        ui.admin.click_calculators_on_header()
            .click_property_calculator()
        cy.url().should('include', 'property-calculator')
        ui.admin.verify_text_is_visible('Thanks for using our Property Calculator.')
        cy.go('back')
        ui.login.enter_credentials_and_click_Sign_In(D.managerUser.username, D.managerUser.password)


        ui.admin.click_calculators_on_header()
            .click_ethical_investment()
            .verify_link('calculators', 'ethical-investment')
            .verify_text_is_visible('How do your ethics compare?')
        cy.go('back')
        ui.login.enter_credentials_and_click_Sign_In(D.managerUser.username, D.managerUser.password)

        ui.admin.click_calculators_on_header()
            .click_investment_suitability()
            .verify_link('calculators', 'investment-suitability')
            .verify_text_is_visible('Investment Suitability Calculator')

    })

})