const ui = require('../pages/ui-spec');
const D = require('../fixtures/data');
const C = require('../fixtures/constants');
const d = D.scenarios[0]

context('Email 2', () => {

    before(function () {
        ui.app.clear_gmail_inbox()
    })

    it('13. Verify Email', function () {
        // cy.wait(45000)
         ui.onboarding.verify_email_arrives_to_specified_address(D.gmailAccount, C.emailTemplates.individualAccountCreated)
    });
})

