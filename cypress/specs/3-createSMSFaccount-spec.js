const ui = require('../pages/ui-spec');
const D = require('../fixtures/data');
const C = require('../fixtures/constants');
const d = D.scenarios[0]

context('Log in to the Nucleus Wealth portal, create an SMSF Account and complete the onboarding portal', () => {


    beforeEach(function () {
        Cypress.Cookies.debug(true)
        Cypress.Cookies.defaults({
            preserve: /secure|ntercom|XSRF-TOKEN|__hssc|hubspotutk|__hstc|_fbp|cognito|__Secure-next-auth.callback-url|__Secure-next-auth.session-token|__Host-next-auth.csrf-token/,
        })
    });



    it('1. Validate login credentials', function () {
        ui.login.open_base_url()
            .verify_login_menu(D.user)
            .enter_credentials_and_click_Sign_In(D.user.username, D.user.password)
            .redirect_user_to_the_create_a_new_account_page()
        ui.onboarding.verify_account_selection()
    })

    it('2. Create a SMSF Account', function () {
        ui.onboarding.click_create_new_investment_account()
            .verify_types_of_investment_account()
            .click_super_type()
            .verify_super_subtypes()
            .click_SMSF_super_subtype()
            .click_create_investment_account()
            .verify_investment_choice_page()
        cy.saveLocalStorage();
    })

    it('3. Complete Investment Choice', function () {
        ui.onboarding.click_limited_advice_button()
            .select_all_checkboxes(6)
            .click_Save_and_Continue_button()
            .verify_risk_profile_page()
    })

    it('4. Complete Risk Profile', function () {
        ui.onboarding.answerAllQuestionsWithSameOption(13, 2)
            .enter_financial_info(d)
            .click_Save_and_Continue_button()
            .verify_ethical_overlay_page()
    })

    it('5. Complete Ethical Overlay', function () {
        ui.onboarding.click_climate_change_button()
            .select_checkbox_based_on_label('No Fossil Fuels (Worst Offenders)')
            .select_checkbox_based_on_label('No Fossil Fuels (Any)')
            .click_war_button()
            .select_checkbox_based_on_label('No Arms (Any)')
            .click_Save_and_Continue_button()
            .verify_review_page()
    })

    it('6. Review Review Page', function () {
        ui.onboarding.expand_question_responses_panel()
            .verify_question_responses(D.reviewQuestionsSMSF, D.reviewResponsesSMSF)
            .save_data_object_for_Questions_Responses_Personal_Super_Account()
            .expand_ethical_overlay_panel()
            .save_data_object_for_Ethical_Overlay()
            .click_Ethical_Overlay()
            .save_data_object_for_Your_Portfolio()
            .save_data_object_for_Strategic_Asset_Allocation()
            .save_data_object_for_Indicative_Portfolio_Cash()
            .save_data_object_for_Indicative_Portfolio_Bonds()
            .save_data_object_for_Indicative_Portfolio_Australian_Shares()
            .save_data_object_for_Indicative_Portfolio_International_Shares()
            .save_data_object_for_Indicative_Portfolio_Excluded_securities()
            .save_data_object_for_Fees_and_Charges_On_Going_Fees()
            .save_data_object_for_Fees_and_Charges_Embedded_Fees()
            .save_data_object_for_Fees_and_Charges_Initial_Costs()
    })

    it('6. Review Review Page', function () {
        ui.onboarding
           .save_final_JSON_report('smsf_')
            .click_Save_and_Continue_button()
            .verify_SMSF_page()
    })

    it('7. Complete In SMSF Details', function () {
        ui.onboarding
            .enter_address(D.SMSFDetails)
            .click_Save_and_Continue_button()
            .verify_validation_messages_for_SMSF_details(D.smsfDetailsValidationMessages)
            .verify_validation_messages_for_Bank_Details_fields(D.bankDetailsValidationMessages)
            .enter_all_required_SMSF_details(D.SMSFDetails)
            .enter_Bank_Details(D.bankDetails)
            .click_Save_and_Continue_button()
            .verify_applicants_page()
    })

    it('8. Navigate from Applicants to Final Review', function () {
        ui.onboarding.verify_applicant_is_visible()
            .click_Save_and_Continue_button()
            .verify_Final_Review_page()
    })

    it('9. Review Final Review', function () {
        ui.onboarding.verify_Documents_available_for_download([
            'Investment and Fee Summary',
            'Statement of Advice',
            'Praemium SMA PDS and Investment Guide extract',
        ])
    });

})