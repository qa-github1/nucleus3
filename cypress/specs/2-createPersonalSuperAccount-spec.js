const ui = require('../pages/ui-spec');
const D = require('../fixtures/data');
const C = require('../fixtures/constants');
const d = D.scenarios[0]

context('Log in to the Nucleus Wealth portal, create a Personal Super Account and complete the onboarding portal', () => {


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

    it('2. Create new Personal Super Account', function () {
        ui.onboarding.click_create_new_investment_account()
            .verify_types_of_investment_account()
            .click_super_type()
            .verify_super_subtypes()
            .click_personal_super_subtype()
            .click_create_investment_account()
            .verify_investment_choice_page()
        cy.saveLocalStorage();
    })

    it('3. Complete Investment Choice', function () {
        ui.onboarding.click_limited_advice_button()
            .select_all_checkboxes(6)
            .click_Save_and_Continue_button()
            .verify_risk_profile_page_personal_super_account()
    })

    it('4. Complete Risk Profile', function () {
        ui.onboarding.answerAllQuestionsWithSameOption(12, 2)
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
            .verify_super_fund_entry_page()
    })

    it('6. Complete Super Fund Entry', function () {
        ui.onboarding.click_Save_and_Continue_button()
            .verify_validation_messages_for_fund_entry_input_fields(D.fundEntryValidationMessages)
        ui.onboarding.enter_values_on_super_fund_entry_input_fields(D.fundEntryInputFields)
            .click_Save_and_Continue_button()
            .verify_review_page()

    })

    it('7. Review Review Page', function () {
        ui.onboarding.expand_question_responses_panel()
            .verify_question_responses(D.reviewQuestions, D.reviewResponses)
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
            .save_data_object_for_Fees_Australian_Super()
            .save_data_object_for_Your_Fees()
    })

    it('7. Review Review Page', function () {
        ui.onboarding
            .save_final_JSON_report('personal_super_')
           .click_Save_and_Continue_button()
           .verify_applicants_page()
    })

    it('8. Navigate to Insurance Quote', function () {
        ui.onboarding.verify_applicant_is_visible()
            .click_Save_and_Continue_button()
    })

    it('9. Complete Insurance Quote', function () {
        ui.onboarding
            .verify_insurance_quote_page()
            .click_yes_insurance_button()
            .click_Save_and_Continue_button()
            .verify_text_is_visible(C.errorMsg.insuranceRequiredFields)
            .enter_values_for_life_and_tpd_cover(D.insurance)
            .click_get_quote_button()
            .verify_stepped_and_level_to_65_amount(D.insurance)
            .select_premium_type()
            .enter_all_required_insurance_values(D.insurance)
            .click_Save_and_Continue_button()
            .verify_Final_Review_page()
    })

    it('10. Review Final Review', function () {
        ui.onboarding.verify_Documents_available_for_download([
            'Investment and Fee Summary',
            'Statement of Advice',
            'Praemium SuperSMA PDS and Investment Guide extract',
            'MetLife - Protect Product Disclosure Statement'
        ])
    });

})