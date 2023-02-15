import BasePage from "./base-page";
import ui from "./ui-spec";
import D from "../fixtures/data";


// *************************** ELEMENTS ***************************
let

    visibleModal = e => cy.get('.visible-lg'),
    mainContainer = e => cy.get('body'),
    yourAccountLink = e => cy.get('[href="/client-portal/4860/your-accounts"]'),
    performanceLink = e => cy.get('[href="/client-portal/4860/performance"]'),
    administrationLink = e => cy.get('[href="/client-portal/4860/administration"]'),
    loginToPraemiumLink = e => cy.get('[href="https://login.onpraemium.com/nucleus/"]'),
    createNewAccountLink = e => cy.get('[href="/onboarding/account-selection/4860"]'),
    frequentlyAskedQLink = e => cy.get('[href="https://nucleuswealth.com/frequently-asked-questions/"]'),
    formsLink = e => cy.get('[href="/client-portal/4860/forms"]'),
    insightsLink = e => cy.get('[href="https://nucleuswealth.com/content"]'),
    yourAccountsTitle = e => cy.get('[data-test="clientPortal-yourAccounts-title"]'),
    administrationTitle = e => cy.get('[data-test="clientPortal-Administration-title"]'),
    formTitle = e => cy.get('[data-test="clientPortal-Forms-title"]'),
    investmentChoiceTitle = e => cy.get('[data-test="clientPortal-investmentChoice-title"]'),
    buildYourPortfolioTitle = e => cy.get('[data-test="clientPortal-buildYourPortfolio-title"]'),
    finalReviewTitle = e => cy.get('[data-test="clientPortal-finalReview-title"]'),
    applicantUserCard = e => cy.get('[data-test="applicants-userCard-card"]'),
    accountDashboardTitle = e => cy.get('[data-test="clientPortal-accountDashboard-title"]'),
    //accountDetails = e => cy.get('[href="/client-portal/investment-account/2888/account-dashboard"]'),
    accountDetails = e => cy.contains('View Account Details').eq(0),
    //changePortfolioButtonYourAccount = e => cy.get('[href="/client-portal/investment-account/2888/investment-choice"]'),
    changePortfolioButtonYourAccount = e => cy.get('.ant-btn-block').last(),
    firstTableRow = e => cy.get('[class="ant-table-row ant-table-row-level-0"]'),
    clientPortalContent = e => cy.get('.client-portal-content'),
    yourOverallAssetSummaryCardTitle = e => cy.contains('Your Overall Asset Summary'),
    panelTableHeader = (cardNumber) => cy.get('.ant-card-body').eq(cardNumber).find('thead'),
    investmentAccount = e => cy.get('.ant-card-body').eq(1),
    portfolios = (cardNumber) => panelTableHeader(cardNumber).children('tr').find('th').first(),
    actualAmount = (cardNumber) => panelTableHeader(cardNumber).children('tr').find('th').last(),
    yourOverallAssetSummaryTableFooter = e => cy.get('.ant-card-body').eq(0).find('tfoot'),
    investmentAccountCardTableFooter = e => cy.get('.ant-card-body').eq(1).find('tfoot'),
    investmentAccountCardTableBody = e => cy.get('.ant-card-body').eq(1).find('tbody'),
    totalAssets = e => yourOverallAssetSummaryTableFooter().children('tr').children('td').find('b').first(),
    totalAssetsValue = e => investmentAccountCardTableFooter().children('tr').children('td').find('b').last(),
    targetWeight = (cardNumber) => panelTableHeader(cardNumber).children('tr').find('th').eq(1),
    targetAmount = (cardNumber) => panelTableHeader(cardNumber).children('tr').find('th').last(),
    tableContent = e => cy.get('.ant-table-content').find('thead'),
    tableBodyRow = e => cy.get('.ant-table-tbody').children('tr'),
    tableHeader = e => cy.get('.ant-table-thead').children('tr').children('th'),
    nO = e => tableContent().children('tr').children('th').eq(0),
    nameColumn = e => tableContent().children('tr').children('th').eq(1),
    emailColumn = e => tableContent().children('tr').children('th').eq(2),
    uploadColumn = e => tableContent().children('tr').children('th').eq(3),
    // securityHoldingsParagraph = e => cy.get('p').eq(0),
    securityHoldingsParagraph = e => cy.contains('There are currently no investment account securities'),
    tacticalButton = e => cy.contains('Tactical'),
    strategicButton = e => cy.contains('Strategic'),
    holdingsSummary = e => cy.contains('Your Holdings Summary'),
    assetsSummary = e => cy.contains('Your Assets Summary'),
    additionalAssets = e => cy.contains('Additional Assets'),
    additionalAssetsLink = e => cy.get('.ant-collapse-item').eq(1),
    portfolioDetail = e => cy.contains('Portfolio Detail'),
    changePortfolioButton = e => cy.contains('Change Portfolio'),
    securityHoldings = e => cy.contains('Your Security Holdings'),
    ethicsButton = e => cy.contains('Ethics/Exclusions'),
    performanceButton = e => cy.contains('Performance'),
    contactUsButton = e => cy.contains('Contact us to change your details'),
    generalDetails = e => cy.contains('General Details'),
    uploadNewDocument = e => cy.contains('Upload New Document'),
    uploadVerificationDocuments = e => cy.contains('Upload Verification Documents'),
    thirdPartyAuthorities = e => cy.contains('Third Party Authorities'),
    searchForLostSuper = e => cy.contains('Search for Lost Super'),
    superannuationForms = e => cy.contains('Superannuation Forms'),
    personalInvestmentForms = e => cy.contains('Personal Investment Forms'),
    insuranceForms = e => cy.contains('Insurance Forms'),
    portfolioButton = e => cy.get('.ant-collapse-header').eq(4),
    changeEthicsButton = e => cy.contains('Change Ethics/Exclusions'),
    yourNucleusPortfolioAllocationsTitle = e => cy.contains('Your Nucleus Portfolio Allocations'),
    yourNucleusPortfolioAllocationsTable = e => cy.get('.ant-table-container'),
    changeEthicsButton2 = e => cy.get('.ant-col-xxl-12').first(),
    changePortfolioButton2 = e => cy.get('.ant-col-xxl-12').last(),
    cashInputField = e => cy.get('#personal_asset_detail_cash'),
    governmentBondsInputField = e => cy.get('#personal_asset_detail_government_bonds'),
    otherFixedIncomeInputField = e => cy.get('#personal_asset_detail_other_fixed_income'),
    australianSharesInputField = e => cy.get('#personal_asset_detail_australian_shares'),
    internationalSharesInputField = e => cy.get('#personal_asset_detail_international_shares'),
    otherGrowthInputField = e => cy.get('#personal_asset_detail_other_growth'),
    ownHomeInputField = e => cy.get('#personal_asset_detail_own_home'),
    residentialInputField = e => cy.get('#personal_asset_detail_residential_property'),
    commercialInputField = e => cy.get('#personal_asset_detail_residential_property'),
    visitDownloadPageButton = (sectionTitle, linkNumber) => cy.contains(sectionTitle).parents('.ant-card-body').find('[href="https://www.praemium.com/au/resources/forms-documents/"]').eq(linkNumber),
    visitDownloadPageButton2 = e => activePanel().find('[href="https://www.praemium.com/au/resources/forms-documents/"]'),
    activePanel = e => cy.get('.ant-collapse-item-active'),
    chart = e => cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > :nth-child(5)'),
    canvasStrategic = e => cy.get('canvas'),
    contentBox = e => cy.get('.ant-collapse-content-box'),
    documentTypeList = e => cy.get('.ant-form-item-control-input-content').first(),
    uploadDocumentField = e => cy.get('.ant-form-item-control-input-content').last(),
    performanceTitle1 = e => cy.get('h4').eq(0),
    performanceTitle2 = e => cy.get('h4').eq(1),
    uploadFileInput = index => cy.get('input[type=file]').eq(index),
    uploadButton = e => cy.get('.ant-btn-primary').last(),
    driverLicenceExpiry = e => cy.get('[id="certified_document_driver_license_expiry"]'),
    performanceCard = cardNumber => cy.get('.ant-card-hoverable').eq(cardNumber),
    //performanceCardLinks = cardNumber => performanceCard(cardNumber).parent('href'),
    performanceCardLinks = e => cy.get('.ant-col-md-12').eq(3).parent('a').find('href'),
    selfDirectedButton = e => cy.get('[data-test="investmentChoice-selfDirected-btn"]').parents('label'),
    volkswagenLinkSecurityTable = e => cy.get('[href="/research/security/summary/3908"]'),
    L3HarrisTechnologiesLinkSecurityTable = e => cy.get('[href="/research/security/summary/9888"]'),
    woodsideEnergyLinkSecurityTable = e => cy.get('[href="/research/security/summary/13921"]'),
    bhpLinkSecurityTable = e => cy.get('[href="/research/security/summary/24996"]'),
    hitachiLinkSecurityTable = e => cy.get('[href="/research/security/summary/28239"]'),
    endesaLinkSecurityTable = e => cy.get('[href="/research/security/summary/29047"]'),
    engieLinkSecurityTable = e => cy.get('[href="/research/security/summary/29057"]'),
    targetStrategicNucleusAssetMix = e => cy.get('[style="padding-left: 12px; padding-right: 12px; text-align: center;"]'),
    pieChart = e => cy.get('.ant-space ant-space-horizontal ant-space-align-center').eq(1),
    coreAustraliaRow = e => investmentAccountCardTableBody().children('tr').find('td').eq(1),
    governmentBondsLadderRow = e => investmentAccountCardTableBody().children('[data-row-key="3660917"]').find('td').eq(1),
    coreInternationalRow = e => investmentAccountCardTableBody().children('[data-row-key="3660919"]').find('td').eq(1),
    documentSectionSuperannuationForm = e => cy.contains('Superannuation Forms').parent('.ant-card-body'),
    tacticalGrowthInputField = e => cy.get('[data-test="byp-tacticalGrowth-input"]'),
    coreInternationalInputField = e => cy.get('[data-test="byp-coreInternational-input"]'),
    govermentBondLadderInputField = e => cy.get('[data-test="byp-governmentBondLadder-input"]'),
    coreAustraliaInputField = e => cy.get('[data-test="byp-coreAustralia-input"]'),
    allocationTotalValue = e => cy.get('[data-test="byp-allocationTotal-value"]'),
    saveContinueButton = e => cy.get('[data-test="next-btn"]'),
    currentAccount = e => cy.contains('Current Account'),
    newAccount = e => cy.contains('New Account'),
    currentEthics = e => cy.contains('Current Ethics'),
    newEthics = e => cy.contains('New Ethics'),
    currentSecurityComposition = e => cy.contains('Current Security Composition'),
    newSecurityComposition = e => cy.contains('New Security Composition'),
    submitChangesButton = e => cy.get('[type="submit"]'),
    card = e => cy.get('.ant-card-body').last(),
    ethicsButtonlink = e => card().contains('Change Ethics/Exclusions'),
    ethicalOverlayTitle = e => cy.get('[data-test="clientPortal-ethicalOverlay-title"]'),
    noNuclearPowerLabel = e => cy.get('.ant-col-md-2').eq(3).find('label'),
    noNuclearPowerCheck = number => cy.get('[data-test="review-ethicGroup-selected"]').contains('No Nuclear Power'),
    downloadButtonLink = number => cy.get('[data-test="finalReview-document-link"]'),
    selectedEthicGroupsInCurrentEthics = e => cy.contains('Current Ethics').parents('.ant-space-item').first().find('[data-test="review-ethicGroup-selected"]'),
    selectedEthicGroupsInNewEthics = e => cy.contains('New Ethics').parents('.ant-space-item').first().find('[data-test="review-ethicGroup-selected"]')


export default class LoginPage extends BasePage {

    constructor() {
        super()
    }

    // *************************** ACTIONS ***************************

    click_ethics_section() {
        ethicsButtonlink().click()
        return this;
    }

    verify_links_on_home_page() {
        yourAccountLink().should('be.visible');
        performanceLink().should('be.visible');
        administrationLink().should('be.visible');
        loginToPraemiumLink().should('be.visible');
        createNewAccountLink().should('be.visible');
        frequentlyAskedQLink().should('be.visible');
        formsLink().should('be.visible');
        insightsLink().should('be.visible');
        return this;
    }

    click_your_accounts_link() {
        yourAccountLink().should('be.visible');
        yourAccountLink().click();
        return this;
    }

    click_administration_link() {
        administrationLink().click();
        return this;
    }

    click_forms_link() {
        formsLink().click();
        return this;
    }

    verify_your_accounts_page() {
        yourOverallAssetSummaryCardTitle().should('be.visible');
        cy.url().should('include', 'client-portal');
        cy.url().should('include', 'your-accounts');
        yourAccountsTitle().should('have.text', 'Your Accounts');
        return this;
    }

    verify_administration_page() {
        cy.url().should('include', 'client-portal');
        cy.url().should('include', 'administration');
        administrationTitle().should('have.text', 'Administration');
        applicantUserCard().should('be.visible');
        contactUsButton().should('be.visible');
        generalDetails().should('be.visible');
        uploadVerificationDocuments().should('be.visible');
        thirdPartyAuthorities().should('be.visible');
        searchForLostSuper().should('be.visible');
        return this;
    }

    verify_form_page() {
        cy.url().should('include', 'client-portal');
        cy.url().should('include', 'forms');
        formTitle().should('have.text', 'Forms');
        superannuationForms().should('be.visible');
        personalInvestmentForms().should('be.visible');
        insuranceForms().should('be.visible');
        return this;
    }

    verify_ethical_overlay_page() {
        cy.url().should('include', 'ethical-overlay');
        cy.url().should('include', 'client-portal');
        ethicalOverlayTitle().should('be.visible');
        ethicalOverlayTitle().should('have.text', 'Ethical Overlay');
        return this;
    }

    verify_upload_verification_documents() {
        tableBodyRow().then((row) => {
            cy.log(row.length);
            expect(row.length).is.gte(1)
        });

        firstTableRow().should('be.visible');
        nO().should('have.text', 'No.')
        nameColumn().should('have.text', 'Name')
        emailColumn().should('have.text', 'Email')
        uploadColumn().should('have.text', 'Upload')

        tableHeader().then((column) => {
            cy.log(column.length);
            expect(column.length).is.eq(4)
        });
        return this;
    }

    upload_verification_document() {
        uploadNewDocument().click();
        documentTypeList().click();
        documentTypeList().type('Driver License{enter}');
        //uploadDocumentField().click();
        uploadFileInput('0').attachFile(D.documentType.id);
        uploadFileInput('1').attachFile(D.documentType.id);
        driverLicenceExpiry().click();
        driverLicenceExpiry().type('31/12/2028{enter}');
        uploadButton().click();
        return this;
    }

    verify_overall_asset_summary_panel(cardNumber) {
        yourOverallAssetSummaryCardTitle().should('be.visible')
        portfolios(cardNumber).should('be.visible');
        portfolios(cardNumber).should('contain.text', 'Portfolios');
        actualAmount(cardNumber).should('be.visible');
        actualAmount(cardNumber).should('contain.text', 'Actual Amount $');
        totalAssets().should('be.visible');
        totalAssets().should('contain.text', 'Total Assets with Nucleus Wealth');
        return this;
    }

    check_investment_account_panel() {
        cy.contains('Your Overall Asset Summary').should('exist');
        investmentAccount().should('exist');
        investmentAccount().should('be.visible');
        return this;
    }

    verify_content_of_investment_account_panel(cardNumber, myValue) {
        portfolios(cardNumber).should('be.visible');
        portfolios(cardNumber).should('contain.text', 'Portfolios');
        targetWeight(cardNumber).should('be.visible');
        targetWeight(cardNumber).should('contain.text', 'Target Weight %');
        targetAmount(cardNumber).should('be.visible');
        targetAmount(cardNumber).should('contain.text', 'Target Amount $');
        totalAssets().should('be.visible');
        totalAssetsValue().invoke('text').then(function (total) {
            const sum = parseInt(total.replace(',', ''));
            expect(sum).to.be.greaterThan(9999)
        })
        return this;
    }

    verify_target_weight_total() {
        coreAustraliaRow().invoke('text').then(function (cA) {
            coreInternationalRow().invoke('text').then(function (cI) {
                governmentBondsLadderRow().invoke('text').then(function (gBr) {
                    const targetWeight = parseInt(cA) + parseInt(cI) + parseInt(gBr);
                    cy.log(targetWeight)
                    expect(targetWeight).is.eq(100)
                })
            })
        })
        return this;
    }


    click_view_account_details() {
        accountDetails().should('be.visible');
        accountDetails().click();
        cy.wait(10000)
        return this;
    }

    verify_account_dashboard() {
        clientPortalContent().should('be.visible');
        cy.url().should('include', 'client-portal');
        cy.url().should('include', 'account-dashboard');
        accountDashboardTitle().should('have.text', 'Account Dashboard');
        return this;
    }

    click_tactical_panel() {
        tacticalButton().should('be.visible');
        cy.wait(7000)
        tacticalButton().click();
        return this;
    }

    click_strategic_panel() {
        strategicButton().click();
        return this;
    }

    verify_tactical_headings() {
        holdingsSummary().should('be.visible');
        assetsSummary().scrollIntoView()
        assetsSummary().should('be.visible');
        additionalAssetsLink().scrollIntoView()
        additionalAssetsLink().should('be.visible');
        portfolioDetail().should('be.visible');
        return this;
    }

    click_additional_assets() {
        additionalAssetsLink().click();
        return this;
    }

    verify_additional_assets_input_fields() {
        cashInputField().should('be.visible');
        governmentBondsInputField().should('be.visible');
        otherFixedIncomeInputField().should('be.visible');
        australianSharesInputField().should('be.visible');
        internationalSharesInputField().should('be.visible');
        otherGrowthInputField().should('be.visible');
        ownHomeInputField().should('be.visible');
        residentialInputField().should('be.visible');
        commercialInputField().should('be.visible');
        return this;
    }

    enter_cash_and_own_home_values(data) {
        cashInputField().type(data.cash);
        ownHomeInputField().type(data.ownHome);
        return this;
    }

    verify_change_portfolio_button() {
        changePortfolioButton().should('be.visible');
        return this;
    }

    verify_change_portfolio_button2() {
        changePortfolioButton2().should('be.visible');
        return this;
    }

    verify_change_ethics_button() {
        changeEthicsButton().should('be.visible');
        return this;
    }

    verify_change_ethics_button2() {
        changeEthicsButton2().should('be.visible');
        return this;
    }

    click_ethics_panel() {
        ethicsButton().click();
        return this;
    }

    click_portfolio_panel() {
        portfolioButton().should('be.visible');
        cy.wait(5000);
        portfolioButton().click();
        return this;
    }

    click_performance_panel() {
        performanceButton().click();
        return this;
    }

    verify_nucleus_portfolio_allocations() {
        yourNucleusPortfolioAllocationsTitle().should('be.visible');
        yourNucleusPortfolioAllocationsTable().should('be.visible');
        return this;
    }

    verify_security_holdings() {
        securityHoldings().should('be.visible');
        securityHoldingsParagraph().should('have.text', 'There are currently no investment account securities')
        return this;
    }

    verify_security_column() {
        volkswagenLinkSecurityTable().should('be.visible');
        L3HarrisTechnologiesLinkSecurityTable().should('be.visible');
        woodsideEnergyLinkSecurityTable().should('be.visible');
        bhpLinkSecurityTable().should('be.visible');
        hitachiLinkSecurityTable().should('be.visible');
        endesaLinkSecurityTable().should('be.visible');
        engieLinkSecurityTable().should('be.visible');
        return this;
    }

    verify_performance_titles() {
        contentBox().should('be.visible');
        performanceTitle1().should('have.text', 'Nucleus Wealth Performance Insights');
        performanceTitle2().should('have.text', 'Your Portfolio(s) Performance on Praemium');
        return this;
    }

    verify_performance_card(cardNumber, number) {
        performanceCard(cardNumber).should('be.visible');
        cy.get('a').eq(number).should('have.attr', 'href')
        return this;
    }

    expand_superannuation_forms() {
        superannuationForms().click();
        cy.contains('Notice of Intent to Claim ATO s.290-170').should('be.visible')
        return this;
    }

    expand_current_ethics() {
        currentEthics().click();
        cy.contains('Below are the categories you have chosen to exclude from your portfolio').should('be.visible')
        return this;
    }

    expand_new_ethics() {
        newEthics().click();
        cy.contains('Below are the categories you have chosen to exclude from your portfolio').should('be.visible')
        return this;
    }

    collapse_superannuation_forms() {
        superannuationForms().click();
        cy.contains('Notice of Intent to Claim ATO s.290-170').should('not.be.visible')
        return this;
    }

    collapse_current_ethics() {
        superannuationForms().click();
        cy.contains('Below are the categories you have chosen to exclude from your portfolio').should('not.be.visible')
        return this;
    }

    expand_personal_investment_forms() {
        personalInvestmentForms().click();
        cy.contains('Replace or add a bank account - direct debit').should('be.visible')
        return this;
    }

    verify_text_on_visit_download_page_of_SuperAnnuationForms(arrayOfValues) {
        const firstPartOfText = 'Visit this link and then for the Praemium Managed Accounts Superannuation section, click on the Forms tab and download the '
        for (let i = 0; i < arrayOfValues.length; i++) {
            visitDownloadPageButton('Superannuation Forms', i).trigger('mouseover')
            this.verify_text_is_visible(firstPartOfText + arrayOfValues[i])
            visitDownloadPageButton('Superannuation Forms', i).trigger('mouseout');
        }
        return this;
    }

    verify_text_on_visit_download_page_of_PersonalInvestmentForms(arrayOfValues) {
        const firstPartOfText = 'Visit this link and then for the Praemium Managed Accounts section, click on the Forms tab and download the '
        for (let i = 0; i < arrayOfValues.length; i++) {
            visitDownloadPageButton('Personal Investment Forms', i).trigger('mouseover')
            this.verify_text_is_visible(firstPartOfText + arrayOfValues[i])
            visitDownloadPageButton('Personal Investment Forms', i).trigger('mouseout');
        }
        return this;
    }


    verify_number_of_documents(number) {
        visitDownloadPageButton2().then(elements => {
            cy.log(elements.length);
            expect(elements.length).is.eq(number)
        });
        return this;
    }

    verify_download_button_for_documents(number) {
        downloadButtonLink().then(elements => {
            cy.log(elements.length);
            expect(elements.length).is.eq(number)
        });
        return this;
    }

    compare_snapshots() {
        canvasStrategic().compareSnapshot('canvas-element', {errorThreshold: 0.6} );
        targetStrategicNucleusAssetMix().compareSnapshot('target-strategic-element', {errorThreshold: 0.6} );
        chart().compareSnapshot('pie-chart-element', {errorThreshold: 0.6});
        return this;
    }

    click_change_portfolio_button() {
        changePortfolioButtonYourAccount().should('be.visible');
        changePortfolioButtonYourAccount().click();
        return this;
    }

    verify_self_directed_icon_is_highlighted() {
        selfDirectedButton().should('have.class', 'ant-radio-button-wrapper-checked')
        return this;
    }

    verify_investment_choice_link() {
        cy.url().should('include', 'investment-choice');
        investmentChoiceTitle().should('have.text', 'Investment Choice');
        return this;
    }

    verify_build_your_portfolio_link() {
        cy.url().should('include', 'build-your-portfolio');
        buildYourPortfolioTitle().should('have.text', 'Build Your Portfolio');
        return this;
    }

    verify_final_review_link() {
        cy.url().should('include', 'final-review');
        finalReviewTitle().should('have.text', 'Final Review');
        return this;
    }

    complete_build_your_portfolio() {
        tacticalGrowthInputField().clear();
        tacticalGrowthInputField().type('100');
        allocationTotalValue().should('have.text', '200%');
        saveContinueButton().should('not.exist');
        coreInternationalInputField().clear();
        coreAustraliaInputField().clear();
        govermentBondLadderInputField().clear();
        saveContinueButton().should('be.visible');
        return this;
    }

    verify_final_review_page() {
        currentAccount().should('be.visible');
        newAccount().should('be.visible');
        currentEthics().should('be.visible');
        newEthics().should('be.visible');
        currentSecurityComposition().should('be.visible');
        newSecurityComposition().should('be.visible');
        return this;
    }

    click_submit_changes_button() {
        submitChangesButton().click();
        return this;
    }

    check_or_uncheck_nuclear_power() {
        cy.get('[data-test="next-btn"]').should('be.enabled')
        cy.contains('No Nuclear Power').should('be.visible')
        noNuclearPowerLabel().then(($label) => {
            if ($label.hasClass('ant-checkbox-wrapper-checked')) {
                noNuclearPowerLabel().click()
                noNuclearPowerLabel().should('not.have.class', 'ant-checkbox-wrapper-checked')
            } else {
                noNuclearPowerLabel().click()
                noNuclearPowerLabel().should('have.class', 'ant-checkbox-wrapper-checked')
            }
        })
        return this;
    }

    verify_number_of_selected_options_is_different_in_Current_and_New_Ethics() {
        selectedEthicGroupsInCurrentEthics().its('length').then(function (currentEthics) {
            selectedEthicGroupsInNewEthics().its('length').then(function (newEthics) {
                expect(currentEthics).to.not.be.eq(newEthics)
            })
        })
        return this;
    }


}
