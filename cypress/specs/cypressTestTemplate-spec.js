const ui = require('../pages/ui-spec');
const D = require('../fixtures/data');

context('Upwork Task', () => {

    beforeEach(function () {
        cy.restoreLocalStorage();
    });

    xit('1. Log in to portal', function () {
        ui.login.open_base_url()
            .enter_credentials(D.user)
            .click_Sign_in()
        ui.onboarding
            .click('Create new Investment Account')
            .click('Non-Super')
            .click('Individual')
            .click('Create Investment Account')
            .click('Limited Advice')
            .click('Save and Continue')
            .verify_text_is_visible('Please check all boxes to continue')
            .select_all_checkboxes(6)
            .click('Save and Continue')
            .answerAllQuestionsWithSameOption(13, 2)
            .enter_investment_amount(100000)
            .click('Save and Continue')
            .select_checkbox_based_on_label('No Fossil Fuels (Worst Offenders)')
            .select_checkbox_based_on_label('No Fossil Fuels (Any)')
            .select_box('War')
            .select_checkbox_based_on_label('No Arms (Any)')
            .click('Save and Continue')
            .click('Question Responses')

    })

    xit('2. Question responses', function () {
        ui.onboarding.save_report_for_Questions_Responses()
    })

    xit('3. Ethical Overlay', function () {
        ui.onboarding.click_Ethical_Overlay()
         .save_report_for_Ethical_Overlay()
    })

    xit('4. Your_Portfolio', function () {
        ui.onboarding.save_report_for_Your_Portfolio()
    })

    xit('5. Strategic_Asset_Allocation', function () {
        ui.onboarding.save_report_for_Strategic_Asset_Allocation()
    })

    xit('6. Indicative portfolio - Cash', function () {
        ui.onboarding.save_report_for_Indicative_Portfolio_Cash()
    })

    xit('7. Indicative portfolio - Bonds', function () {
        ui.onboarding.save_report_for_Indicative_Portfolio_Bonds()
    })

    xit('8. Indicative portfolio - Australian_Shares', function () {
        ui.onboarding.save_report_for_Indicative_Portfolio_Australian_Shares()
    })

    xit('9. Indicative portfolio - International_Shares', function () {
        ui.onboarding.save_report_for_Indicative_Portfolio_International_Shares()
    })

    xit('10. Indicative portfolio -  Excluded securities', function () {
        ui.onboarding.save_report_for_Indicative_Portfolio_Excluded_securities()
    })

    xit('11. Fees and Charges', function () {
        ui.onboarding.save_report_for_Fees()
    })

});
