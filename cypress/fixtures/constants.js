let C = exports;

C.labels = {}

C.errorMsg = {
    incorrectEmailOrPassword: "Incorrect username or password.",
    checkAllBoxes: "Please check all boxes to continue",
    insuranceRequiredFields: '\'investment_account_identifier.personal_super_insurance_premium_choice\' is required'

}
C.emailTemplates = {
    individualAccountCreated: {
        from: `Nucleus Wealth <contact@nucleuswealth.com>`,
        subject: 'Your Investment Account Application has been submitted',
        content: 'Welcome aboard! Your application for Individual Investment Account has been successfully submitted.',
        attachments: [
            'Nucleus Wealth - Financial Services Guide.pdf',
            'Nucleus Wealth - Investment and Fee Summary.pdf',
            'Nucleus Wealth - Statement of Advice.pdf',
            'Praemium SMA - Product Disclosure Statement and Investment Menu extract.pdf'
        ]
    },

    individual_IB_AccountCreated: {
        from: `Nucleus Wealth <contact@nucleuswealth.com>`,
        subject: 'Your Investment Account Application has been submitted',
        content: 'Welcome aboard! Your application for Individual Investment Account has been successfully submitted.',
        attachments: [
            'Nucleus Wealth - Financial Services Guide.pdf',
            'Nucleus Wealth - MDA Brochure and Agreement.pdf',
            'Nucleus Wealth - Investment and Fee Summary.pdf',
            'Nucleus Wealth - Statement of Advice.pdf',
        ]
    },

    accountChanges: {
        from: `Nucleus Wealth <contact@nucleuswealth.com>`,
        subject: 'Account Changes successfully received',
        content: 'The changes for your Individual Investment Account has been successfully submitted. ',
        attachments: [
            'Nucleus Wealth- Financial Services Guide.pdf',
            'Praemium SMA - Product Disclosure Statement and Investment Menu extract.pdf',
            'Nucleus Wealth - Record of Engagement.pdf'
        ]
    },

    uploadedDocument: {
        from: `Nucleus Wealth <dev@nucleuswealth.com>`,
        subject: 'Document Uploaded by tesf14cb@nucleuswealth.com for NW4126',
        content: 'driver_license has been uploaded by test test!',
        attachments: [
        ]
    },

    signUpNewUser: {
        from: `Nucleus Wealth <contact@nucleuswealth.com>`,
        subject: 'Test Email - Welcome to Nucleus Wealth',
        content: 'Thanks for registering with Nucleus Wealth.',
        attachments: [
            'Nucleus Wealth - Financial Services Guide.pdf',
        ]
    },
}
module.exports = C;