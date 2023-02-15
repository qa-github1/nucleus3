const ui = require('../pages/ui-spec');
const D = require('../fixtures/data');
const C = require('../fixtures/constants');
const d = D.scenarios[0]

context('Individual Onboarding for Interactive Brokers', () => {

    before(function () {
        ui.app.clear_gmail_inbox()
    })

    beforeEach(function () {
        Cypress.Cookies.debug(true)
        Cypress.Cookies.defaults({
            preserve: /secure|ntercom|XSRF-TOKEN|__hssc|hubspotutk|__hstc|_fbp|cognito|__Secure-next-auth.callback-url|__Secure-next-auth.session-token|__Host-next-auth.csrf-token/,
        })
    });

    it('1. Log into user with IB access', function () {
        ui.login.open_base_url()
            .verify_login_menu(D.user)
            .enter_credentials_and_click_Sign_In(D.ibUser.username, D.ibUser.password)
            .redirect_user_to_the_create_a_new_account_page()
        ui.onboarding.verify_account_selection()
    })

    it('2. Create new Individual account', function () {
        ui.onboarding.click_create_new_investment_account()
            .verify_types_of_investment_account()
            .click_non_super_type()
            .verify_non_super_subtypes()
            .select_individual_non_super_subtype()
            .click_create_investment_account()
            .verify_investment_choice_page()
        cy.saveLocalStorage()
    })

    it('3. Check SideNav', function () {
        ui.onboarding.verify_sidebar_content('Risk Profile')
        ui.onboarding.verify_sidebar_content('Compliance')
    })

    it('4. Navigate to Risk Profile page', function () {
        ui.onboarding.click_self_directed_button()
            .verify_acknowledgment_and_agreement_appear()
            .select_all_checkboxes(6)
            .click_Save_and_Continue_button()
            .verify_risk_profile_page()
    })

    it('5. Complete Risk Profile', function () {
        ui.onboarding.answerAllQuestionsWithSameOption(13, 3)
            .enter_financial_info(d)
            .click_Save_and_Continue_button()
            .verify_build_your_portfolio_page()

    })

    it('6. Complete Build Your Portfolio', function () {
        D.buildYouPortfolioFields.tacticalGrowth2 = '100'
        D.buildYouPortfolioFields.coreInternational2 = '0'
        ui.onboarding.enter_tactical_growth_and_core_international_values(D.buildYouPortfolioFields)
            .click_Save_and_Continue_button()
            .verify_ethical_overlay_page()
    })

    it('7. Complete Ethical Overlay', function () {
        ui.onboarding.click_Save_and_Continue_button()
            .verify_review_page()
    })

    it('8. Check Review Page', function () {
        ui.onboarding.click('Question Responses')
            .verify_net_worth_annual_net_income_liquid_net_worth()
            .save_data_object_for_Questions_Responses()
            .expand_ethical_overlay_panel()
            .verify_text_is_visible('Tactical Growth')
            .save_data_object_for_Your_Portfolio_IB_Profile()
            .save_data_object_for_Strategic_Asset_Allocation()
            .save_data_object_for_Indicative_Portfolio_IB_Cash()
            .save_data_object_for_Indicative_Portfolio_IB_Bonds()
            .save_data_object_for_Indicative_Portfolio_IB_Australian_Shares()
            .save_data_object_for_Indicative_Portfolio_IB_International_Shares()
            .verify_text_is_visible('There are currently no securities excluded due to your ethical choices. If you feel a security should have been screened out, please contact us .')
            .click('Fees And Charges')
            .save_data_object_for_Fees_and_Charges_On_Going_Fees()
            .save_data_object_for_Fees_and_Charges_Embedded_Fees()
            .save_data_object_for_Fees_and_Charges_Initial_Costs()


    })

    it('8. Check Review Page', function () {
        ui.onboarding
            .save_final_JSON_report('individual_ib_')
            .click_Save_and_Continue_button()
            .verify_applicants_page()
    })

    it('9. Complete Applicants', function () {
        ui.onboarding.remove_existing_applicant()
            .verify_text_is_visible(D.applicantsProfileValidationMessages.successfullyRemovedApplicant)
        ui.onboarding.add_new_applicant()
            .verify_add_new_applicant_page()
            .verify_text_is_visible('Investment Experience')
            .enter_values_at_create_new_ib_applicant_input_fields(D.applicantsProfileFields)
            .enter_investment_experience_values(D.investmentExperience)
            .upload_file('0', D.documentType.id)
            .upload_file('1', D.documentType.id)
            .click_submit_applicant_button()
            .verify_your_identity()
        cy.url().should('include', 'applicants')
        ui.onboarding.upload_and_submit_document_for_verification(D.documentType.telephoneBill)
            .verify_text_is_present_on_main_container('Your document was uploaded successfully and will be reviewed by an administrator.')
            .upload_and_submit_document_for_verification(D.documentType.waterBill)
            .click_Save_and_Continue_button()
            .verify_Bank_Details_page()
    });


    it('10. Complete Bank Details', function () {
        ui.onboarding.click_Save_and_Continue_button()
            .verify_validation_messages_for_Bank_Details_fields(D.bankDetailsValidationMessages)
            .enter_Bank_Details(D.bankDetails)
            .click_Save_and_Continue_button()
            .verify_compliance_page()
    });

    it('11. Complete Compliance', function () {
        ui.app.verify_text_is_visible('Investment Objective')
            .verify_text_is_visible('Trading Permission')
            .verify_text_is_visible('Source of wealth')
            .verify_text_is_visible('Affiliation Detail')
        ui.onboarding.click_Save_and_Continue_button()
            .verify_validation_messages_for_compliance_page_fields(D.compliancePageValidationMessages)
            .enter_compliance_values(D.compliancePageInputFields)
            .click_Save_and_Continue_button()
            .verify_Final_Review_page()
    });

    it('12. Check Final Review', function () {
        ui.onboarding.verify_Documents_available_for_download([
            'Investment and Fee Summary',
            'MDA Brochure and Agreement',
            'Statement of Advice MDA',
        ])
            .verify_text_is_visible('Agreements and Disclosures')
            .verify_text_is_visible('Download all')
            .verify_text_is_visible('Tax Certification')
        ui.clientPortal.verify_download_button_for_documents(32)
    });

    it('13. Limited Advice Path', function () {
        //  cy.visit('https://testwebserver.nucleuswealth.com/onboarding/4240/risk-profile')
        ui.onboarding.click_sidebar_option('Investment Choice')
            .verify_investment_choice_page()
            .click_limited_advice_button()
            .select_all_checkboxes(6)
            .click_Save_and_Continue_button()
            .verify_risk_profile_page()
            .verify_sidebar_content_not_exist('Build Your Portfolio')
            .click_Save_and_Continue_button()
            .click_Save_and_Continue_button()
            .click_Save_and_Continue_button()
            .verify_review_page()
            .verify_your_portfolio_content_not_exist('Tactical Growth')

    });

    it('14. Complete Final Review', function () {
        ui.onboarding.click_sidebar_option('Final Review')
            .verify_Final_Review_page()
            .click_Save_and_Continue_button()
            .verify_validation_message_for_agree_checkbox(D.finalReviewValidationMessage)
            .click_Agree_checkbox()
            .click_Submit_Application_button()
        ui.onboarding.verify_success_page()
        cy.wait(45000)
        ui.onboarding.verify_email_arrives_to_specified_address(D.gmailAccount, C.emailTemplates.individual_IB_AccountCreated)
    });
})

