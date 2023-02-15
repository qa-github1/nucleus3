import BasePage from "./base-page";
import S from "../fixtures/settings";
import {currentDate} from "../support/e2e-helper";
import D from "../fixtures/data";

// *************************** ELEMENTS ***************************


let
    adminHeader = e => cy.get('[data-testid="nucleus-header-navbar"]'),
    kanbanMenu = e => cy.get('[role="menu"]').find(),
    kanbans = e => cy.contains('Kanbans'),
    states = e => cy.contains('States'),
    sales = e => cy.contains('Sales'),
    trading = e => cy.contains('Trading'),
    data = e => cy.contains('Data'),
    nonClientCertifiedDocs = e => cy.get('[id="nonClientCertifiedDocs"]'),
    investmentAccountSearch = e => cy.get('[id="investmentAccountSearch"]'),
    insuranceKanban = e => cy.get('[href="/crm/insurance-kanban"]'),
    onboardingKanban = e => cy.get('[href="/crm/onboarding-kanban"]'),
    investedKanban = e => cy.get('[href="/crm/invested-kanban"]'),
    cashflowKanban = e => cy.get('[href="/crm/cashflow-kanban"]'),
    kanbanConfig = e => cy.get('[href="/crm/kanban-config"]'),
    propertyCalculator = e => cy.get('[href="/property-calculator"]'),
    ethicalInvestment = e => cy.get('[href="/calculators/ethical-investment"]'),
    investmentSuitability = e => cy.get('[href="/calculators/investment-suitability"]'),
    callStats = option => cy.get(option),
    marketingStats = e => cy.get('[href="/crm/marketing-stats"]'),
    signupStats = e => cy.get('[href="/crm/signup-stats"]'),
    keyProspects = e => cy.get('[href="/crm/key-prospects"]'),
    agileTasks = e => cy.get('[href="/crm/agile-tasks"]'),
    contactClients = e => cy.get('[href="/crm/contact-clients"]'),
    brokerageFreeOffer = e => cy.get('[href="/crm/brokerage-free-offer"]'),
    tradeRecent = e => cy.get('[href="/crm/trade-recent"]'),
    tradeWeights = e => cy.get('[href="/crm/trade-weights"]'),
    importantFollowUps = e => cy.get('[href="/crm/important-follow-ups"]'),
    client = e => cy.get('[href="/crm/data-clients"]'),
    research = e => cy.get('[href="/crm/data-research"]'),
    investor1 = e => cy.contains('Investor 1'),
    investor2 = e => cy.contains('Investor 2'),
    bankDetails = e => cy.contains('Bank Details'),
    accountSettingsHistory = e => cy.contains('Account Settings & History (Data Snapshots)'),
    searchBar = e => cy.get('[placeholder="Search for an investment account, using id, name, email, or SMA"]'),
    resultsTable = e => cy.get('[class="ant-table-container"]').eq(0).find('tbody'),
    viewTableButton = e => resultsTable().children('tr').find('td').eq(7),
    clientsPortal = e => cy.get('[href="https://testwebserver.nucleuswealth.com/client-portal/investment-account/445/account-dashboard"]')


export default class AdminPage extends BasePage {

    constructor() {
        super()
    }

    // *************************** ACTIONS ***************************

    verify_admin_homepage() {
        cy.url().should('include', 'admin');
        return this;
    }

    verify_admin_navbar() {
        adminHeader().should('be.visible');
        adminHeader().should('contain', 'Research Portal')
            .and('contain', 'Onboarding')
            .and('contain', 'CRM')
            .and('contain', 'Calculators')
            .and('contain', 'Logout')
        return this;
    }

    click_CRM_on_header() {
        cy.contains('CRM').click();
        return this;
    }

    click_calculators_on_header() {
        cy.contains('Calculators').click();
        return this;
    }

    click_kanbans_submenu() {
        kanbans().click();
        return this;
    }

    click_states_submenu() {
        states().click();
        return this;
    }

    click_sales_submenu() {
        sales().click();
        return this;
    }

    click_key_prospects() {
        keyProspects().click({force: true});
        return this;
    }

    click_agile_tasks() {
        agileTasks().click({force: true});
        return this;
    }

    click_contact_clients() {
        contactClients().click({force: true});
        return this;
    }

    click_brokerage_free_offer() {
        brokerageFreeOffer().click({force: true});
        return this;
    }

    click_trading_submenu() {
        trading().click();
        return this;
    }

    click_trade_recent() {
        tradeRecent().click({force: true});
        return this;
    }

    click_trade_weights() {
        tradeWeights().click({force: true});
        return this;
    }

    click_important_follow_ups() {
        importantFollowUps().click({force: true});
        return this;
    }

    click_data_submenu() {
        data().click();
        return this;
    }

    click_client() {
        client().click({force: true});
        return this;
    }

    click_research() {
        research().click({force: true});
        return this;
    }

    click_non_client_certified_docs() {
        nonClientCertifiedDocs().click();
        return this;
    }

    click_investment_account_search() {
        investmentAccountSearch().click();
        return this;
    }

    click_property_calculator() {
        propertyCalculator().click();
        return this;
    }

    click_ethical_investment() {
        ethicalInvestment().click();
        return this;
    }

    click_investment_suitability() {
        investmentSuitability().click();
        return this;
    }


    click_insurance_kanban() {
        insuranceKanban().click({force: true});
        return this;
    }

    click_onboarding_kanban() {
        onboardingKanban().click({force: true});
        return this;
    }

    click_invested_kanban() {
        investedKanban().click({force: true});
        return this;
    }

    click_cashflow_kanban() {
        cashflowKanban().click({force: true});
        return this;
    }

    click_kanban_config() {
        kanbanConfig().click({force: true});
        return this;
    }

    click_call_stats(option) {
        callStats(option).click({force: true});
        return this;
    }

    click_marketing_stats() {
        marketingStats().click({force: true});
        return this;
    }

    click_signup_stats() {
        signupStats().click({force: true});
        return this;
    }

    verify_link(value1, value2) {
        this.pause(2)
        cy.url().should('include', value1).and('include', value2)
        this.pause(2)
        return this;
    }

    search_account_id(id){
        searchBar().type(id)
        return this;
    }

    click_view_table_button(){
viewTableButton().click();
return this;
    }

    verify_account_details_on_admin_page(){
        this.verify_text_is_visible('Investor 1');
        this.verify_text_is_visible('Investor 2');
        this.verify_text_is_visible('Bank Details');
        this.verify_text_is_visible('Account Settings & History (Data Snapshots)');
        this.verify_text_is_visible('Administration Settings');
        this.verify_text_is_visible('Snoozes/Kanban Comments');
        this.verify_text_is_visible('Third Party Authority');
        this.verify_text_is_visible('Update to MTS Standard In Prae');
return this;
    }

    click_clients_portal(){
        clientsPortal().invoke('removeAttr', 'target').click()
        return this;
    }

    click_investor_1(){
        investor1().click();
        return this;
    }

    verify_investor_1_panel(){
        this.verify_text_is_visible('General Details');
        this.verify_text_is_visible('Verifications');
        this.verify_text_is_visible('Certified Document');
        this.verify_text_is_visible('Employment Details');
        return this;
    }

    click_account_settings_and_history(){
        accountSettingsHistory().click();
        return this;
    }

    verify_account_settings_and_history_panel(){
        this.verify_text_is_visible('Platform Transactions');
        this.verify_text_is_visible('Current Settings');
        this.verify_text_is_visible('Initial Onboarding Settings');
        this.verify_text_is_visible('Submitted: Mon, 28 Feb 2022 06:15:17 GMT');
        this.verify_text_is_visible('Submitted: Fri, 25 Feb 2022 06:12:13 GMT');
        this.verify_text_is_visible('Submitted: Wed, 20 Oct 2021 23:37:28 GMT');
return this;
    }

    click_current_settings(){
        cy.contains('Current Settings').click();
        return this;
    }
    verify_current_settings(){
        this.verify_text_is_visible('Data Snapshot Details');
        this.verify_text_is_visible('Portfolio Weights');
        this.verify_text_is_visible('Ethic Settings');
        this.verify_text_is_visible('Securities Excluded');
        this.verify_text_is_visible('Securities Substituted');
        return this;
    }
}