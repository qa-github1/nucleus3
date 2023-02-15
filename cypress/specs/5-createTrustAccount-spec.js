const ui = require('../pages/ui-spec');
const D = require('../fixtures/data');
const C = require('../fixtures/constants');

context(' Log in to the Nucleus Wealth portal, create a Trust Account and complete the onboarding portal', () => {



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

    it('2. Create a Trust Account', function () {
        ui.onboarding.click_create_new_investment_account()
            .verify_types_of_investment_account()
            .click_non_super_type()
            .verify_non_super_subtypes()
            .select_trust_non_super_subtype()
            .click_create_investment_account()
            .verify_investment_choice_page()
        cy.saveLocalStorage();

    })

    it('3. Complete Investment Choice', function () {
        ui.onboarding.click_self_directed_button()
            .select_all_checkboxes(5)
            .click_Save_and_Continue_button()
            .verify_build_your_portfolio_page()
    })

    it('4. Complete Build Your Portfolio', function () {
        D.buildYouPortfolioFields.coreInternational = '100'
        ui.onboarding
            .enter_investment_value_and_core_international_value(D.buildYouPortfolioFields)
            .click_Save_and_Continue_button()
            .verify_ethical_overlay_page()
    })

    it('5. Complete Ethical Overlay', function () {
        ui.onboarding
            .click_Save_and_Continue_button()
            .verify_review_page()
    })

    it('6. Review Review Page', function () {
        ui.onboarding
            .expand_ethical_overlay_panel()
            .verify_no_ethics_selected_message()
            .save_data_object_for_Your_Portfolio_Trust_Profile()
            .save_data_object_for_Strategic_Asset_Allocation()
            .save_data_object_for_Indicative_Portfolio_Cash()
            .save_data_object_for_Indicative_Portfolio_International_Shares()
            .save_data_object_for_Fees_and_Charges_On_Going_Fees()
            .save_data_object_for_Fees_and_Charges_Embedded_Fees()
            .save_data_object_for_Fees_and_Charges_Initial_Costs()
    })

    it('6. Review Review Page', function () {
        ui.onboarding
            .save_final_JSON_report('trust_')
            .click_Save_and_Continue_button()
            .verify_trust_details_page()
    })

    it('7. Complete In Trust Details', function () {
       // cy.visit('https://testwebserver.nucleuswealth.com/onboarding/4161/trust-details')
        ui.onboarding.enter_address(D.TrustDetails)
            .click_Save_and_Continue_button()
            .verify_validation_messages_for_trust_details(D.TrustDetailsValidationMsg)
            .verify_validation_messages_for_Bank_Details_fields(D.bankDetailsValidationMessages)
            .enter_all_required_trust_details(D.TrustDetails)
            .enter_Bank_Details(D.bankDetails)
            .click_Save_and_Continue_button()
            .verify_applicants_page()

    });

    it('8. Navigate from Applicants to Final Review', function () {
        ui.onboarding.click_Save_and_Continue_button()
            .verify_Final_Review_page()
    });

    it('9. Review Final Review', function () {
        ui.onboarding.verify_Documents_available_for_download([
            'Investment and Fee Summary',
            'Letter of Engagement',
            'Praemium SMA PDS and Investment Guide extract'
        ])

    });
})

