const {currentDate} = require("../support/e2e-helper");
let D = exports;

D.getNewRandomNumber = function () {
    let randomNo = Math.floor(10000 * Math.random() + 1).toString();
    return randomNo;
};
D.user = {
    // username: 'dev+aminas@nucleuswealth.com',
    username: 'testing@nucleuswealth.com',
    password: 'Testing123!',
    incorrectPassword: 'xzy'
}

D.managerUser = {
    username: 'testing+manager@nucleuswealth.com',
    password: 'Testing1234!'
}

D.ibUser = {
    username: 'testing+ib@nucleuswealth.com',
    password: 'Testing1234!'
}

D.newUser = {
    email: 'testing+' + currentDate + '/' + D.getNewRandomNumber() + '@nucleuswealth.com',
    phoneNumber: '+12125551234',
    givenName: 'test',
    password: 'Testing123!'
}

D.newUserLivePortal = {
    email: 'testing+' + 'portal' + currentDate + '/' + D.getNewRandomNumber() + '@nucleuswealth.com',
    givenName: 'testing',
    password: 'Testing1234!',
    phoneNumber: '+12125551234'
}

D.investmentAccount = {
    Id: '445',
    Email: 'abi3a2c2@nucleuswealth.com',
    Name: 'test test',
    AccountType: 'Joint'
}


D.dataForExport = {
    questionsResponses: {},
    ethicalOverlay: {},
    yourPortfolio: {
        'Core Australia': {
            amount: '',
            percentage: '',
        },
        'Core International': {
            amount: '',
            percentage: '',
        },
        'Government Bond Ladder': {
            amount: '',
            percentage: '',
        },
        'Tactical Growth': {
            amount: '',
            percentage: '',
        },
        'Total': {
            amount: '',
            percentage: '',
        },
    },

    strategicAssetAllocation: {
        'Assets in growth producing assets (like shares) ': null,
        'Assets in income generating assets (like cash or bonds)': null,
        'The chance of a negative return': null,
    },
    indicativePortfolio: {
        'Cash': {},
        'Bonds': {},
        'Australian Shares': {},
        'International Shares': {},
        'Security': {}
    },

    feesAndCharges: {
        'On Going Fees': {},
        'Embedded Fees': {},
        'Initial Costs': {}
    },

    feesAustralianSuper: {
        'Estimated Fees': {}
    },

    yourFees: {
        'Estimated Fees': {}
    }


}

D.gmailAccount = {
    email: 'protractor.user2@gmail.com',
    // password: 'Testing123!',
    password: 'ishvjonsxbzwlcjq',
    code: '1234',
    newPass: 'Testing' + D.getNewRandomNumber() + '!'
}

D.reviewQuestions = [
    'How would you describe your current investment experience?',
    'What do you want to achieve from your investment with Nucleus?',
    'When you think of the word "risk" in a financial context, which of the following words comes to mind first?',
    'What degree of risk have you taken with your financial decisions in the past?',
    'Have you ever borrowed money to make an investment (other than for residential property)?',
    'Investments can go up or down in value and experts often say you should be prepared to weather a downturn. By how much could the total value of all your investments go down in 3 months before you would begin to feel uncomfortable?',
    'How would you react if the value of your portfolio fell by more than 20% in any year?',
    'Which one of the following best describes your attitude to market volatility when choosing an investment?',
    'Imagine you just received a $50,000 windfall - what would you look to immediately do with it?',
    'When will you need to withdraw more than 30% of your superannuation account? For most people this will be age 60 and above.',
    'What is your primary objective for investing your superannuation with Nucleus Wealth?',
    'When deciding on your investment composition would you like:'
]

D.reviewQuestionsSMSF = [
    'How would you describe your current investment experience?',
    'What do you want to achieve from your investment with Nucleus?',
    'When will you need to withdraw more than 30% of the investment?',
    'When you think of the word "risk" in a financial context, which of the following words comes to mind first?',
    'What degree of risk have you taken with your financial decisions in the past?',
    'Have you ever borrowed money to make an investment (other than for residential property)?',
    'Investments can go up or down in value and experts often say you should be prepared to weather a downturn. By how much could the total value of all your investments go down in 3 months before you would begin to feel uncomfortable?',
    'How would you react if the value of your portfolio fell by more than 20% in any year?',
    'Which one of the following best describes your attitude to market volatility when choosing an investment?',
    'Imagine you just received a $50,000 windfall - what would you look to immediately do with it?',
    'What is the source of the majority of the funds you would like to invest with us?',
    'You have identified the following reasons for your interest in investing in our models:',
    'When deciding on your investment composition would you like:'
]

D.reviewResponses = [
    'I have dabbled in some Aussie stocks but mainly have managed investments',
    'My priority is to generate income. However, I would like to see my initial investment grow over time',
    'Uncertainty',
    'Medium',
    'Yes',
    '10%',
    'I would be concerned and consider changing my investment strategy',
    'I prefer investments with a low risk of volatility; however, I am happy to have a small portion of my portfolio invested in assets with potentially higher levels of short-term capital fluctuation',
    'Leave a portion in cash, say $10,000, and look to invest the rest in a term deposit',
    '2 - 4 years',
    'You would like more visibility over your investments within superannuation',
    'I want my Assets to be maintained at my target weights; with shares/bonds picked based on Nucleus Wealth’s Quality/Value methodology.'
]

D.reviewResponsesSMSF = [
    'I have dabbled in some Aussie stocks but mainly have managed investments',
    'My priority is to generate income. However, I would like to see my initial investment grow over time',
    '2 - 4 years',
    'Uncertainty',
    'Medium',
    'Yes',
    '10%',
    'I would be concerned and consider changing my investment strategy',
    'I prefer investments with a low risk of volatility; however, I am happy to have a small portion of my portfolio invested in assets with potentially higher levels of short-term capital fluctuation',
    'Leave a portion in cash, say $10,000, and look to invest the rest in a term deposit',
    'Investment income',
    'You want a portfolio tailored to your ethical values',
    'I want my Assets to be maintained at my target weights; with shares/bonds picked based on Nucleus Wealth’s Quality/Value methodology.'
]

D.buildYouPortfolioFields = {
    investmentTotal: '100,000',
    tacticalGrowth: '1',
    tacticalGrowth2: '50',
    tacticalIncome: '1',
    tacticalAccumulation: '1',
    coreInternational: '1',
    coreInternational2: '50',
    coreAustralia: '1',
    australianLeaders: '1',
    globalLeaders: '1',
    governmentBondLadder: '1'
}

D.yourPortfolioValues = {
    totalAmount: '$100,000',
    coreInternationalAmount: '$50,000',
    coreInternationalPercentage: '50%',
    tacticalGrowthAmount: '$50,000',
    tacticalGrowthPercentage: '50%',
}

D.indicativePortfolio = {
    'AAA Cash ETF': '5,305',
    'BetaShares U.S. Dollar ETF (USD)': '4,375',
    'Cash (AUDCASH)': '1,330',
    'AGB Apr-2025 (GSBG25)': '540',
    'AGB Apr-2029 (GSBG29)': '855',
    'AGB Apr-2033 (GSBG33)': '3,307',
    'AGB Dec-2030 (GSBW30)': '2,059',
    'AGB Jun-2039 (GSBK39)': '2,652',
    'AGB Nov-2028 (GSBU28)': '436',
    'AGB Nov-2031 (GSBU31)': '1,555',
    'Infl.AGB Aug-2040 (GSIO40)': '1,524',
    'Infl.AGB Sep-2025 (GSIQ25)': '219',
    'Infl.AGB Sep-2030 (GSIQ30)': '219',
    'ANZ Bank (ANZ)': '807',
    'Aristocrat Leisure (ALL)': '914',
    'Coles (COL)': '598',
    'Commonwealth Bank (CBA)': '524',
    'Computershare (CPU)': '471',
    'CSL (CSL)': '1,446',
    'Endeavour (EDV)': '234',
    'Medibank Private (MPL)': '637',
    'National Australia Bank (NAB)': '453',
    'Northern Star Resources (NST)': '367',
    'Qantas Airways (QAN)': '597',
    'Sonic Healthcare (SHL)': '455',
    'Transurban (TCL)': '654',
    'Treasury Wine Estates (TWE)': '443',
    'Wesfarmers (WES)': '791',
    'Westpac Bank (WBC)': '315',
    'WiseTech Global (WTC)': '491',
    'Woolworths (WOW)': '649',
    '3M (MMM)': '803',
    'ABB (ABBN)': '1,565',
    'ABB Turbo Systems (ACLN)': '37',
    'Activision Blizzard (ATVI)': '788',
    'Alphabet (GOOG)': '4,425',
    'Amada (6113)': '341',
    'American Tower Corp (AMT)': '1,864',
    'Apple (AAPL)': '2,445',
    'Applied Materials (AMAT)': '639',
    'Assicurazioni Generali (G)': '735',
    'Astellas Pharma (4503)': '664',
    'Bristol-Myers Squibb (BMY)': '1,218',
    'CDW Corp (CDW)': '539',
    'Cisco Systems (CSCO)': '424',
    'Citizens Financial (CFG)': '991',
    'Cognizant (CTSH)': '819',
    'DBS (D05)': '1,540',
    'eBay (EBAY)': '713',
    'EDP (EDP)': '886',
    'Eli Lilly and (LLY)': '1,414',
    'Expedia (EXPE)': '1,232',
    'General Motors (GM)': '915',
    'HOYA Corp (7741)': '1,183',
    'Intertek (ITRK)': '362',
    'J. M. Smucker (SJM)': '1,861',
    'Johnson & Johnson (JNJ)': '1,285',
    'JPMorgan Chase (JPM)': '821',
    'KDDI Corp (9433)': '1,696',
    'LVMH Moët Hennessy (MC)': '1,691',
    'Merck (MRK)': '1,373',
    'Meta Platforms (META)': '2,322',
    'Michelin (ML)': '619',
    'Microsoft Corp (MSFT)': '4,521',
    'Moncler (MONC)': '376',
    'Newmont Corp (NEM)': '236',
    'Nintendo (7974)': '1,413',
    'Novartis (NOVN)': '1,064',
    'Novo Nordisk (NOVO B)': '439',
    "O'Reilly Automotive (ORLY)": '1,673',
    'Paychex (PAYX)': '827',
    'Public Storage (PSA)': '1,466',
    'Recordati (REC)': '412',
    'Robert Half Int. (RHI)': '671',
    'Roche (ROG)': '1,013',
    'Royal Ahold Delhaize (AD)': '1,395',
    'Sanofi (SAN)': '914',
    'Schneider Electric (SU)': '1,671',
    'Sony Group Corp (6758)': '856',
    'Southwest Airlines (LUV)': '793',
    'Taisei Corp (1801)': '260',
    'Telenor ASA (TEL)': '892',
    'Unilever (ULVR)': '1,519',
    'Vinci (DG)': '1,041',
    'Visa (V)': '1,692',
    'Willis Towers Watson (WTW)': '1,049',
    'Zoetis (ZTS)': '381',
}

D.indicativePortfolioSecurity = {
    'Volkswagen (VOW3)': 'No Arms (Any)',
    'L3Harris Technologies (LHX)': 'No Arms (Any)',
    'Woodside Energy (WDS)': 'No Fossil Fuels (Any)',
    'BHP (BHP)': 'No Fossil Fuels (Any)',
    'Hitachi (6501)': 'No Arms (Any)',
    'Endesa (ELE)': 'No Fossil Fuels (Any)',
    'ENGIE (ENGI)': 'No Fossil Fuels (Any)'
}


D.buildYouPortfolioValidationMessages = {
    coreInternational: 'Minimum investment required is $50,000 or 50%',
    coreAustralia: 'Minimum investment required is $25,000 or 25%',
    globalLeaders: 'Minimum investment required is $25,000 or 25%',
    multiAssetPortfolios: 'Minimum investment total required is $10,000 or 10%',
    australianLeaders: 'Minimum investment required is $10,000 or 10%',
    governmentBondLadder: 'Minimum investment required is $10,000 or 10%',
}

D.riskProfileValidationMessages = {
    requiredQuestion: "\'Question 1\' is required"
}

D.smsfDetailsValidationMessages = {
    superFundName: 'Please enter Super Fund Name',
    SMSFAustralianBusinessNumber: 'Please enter the SMSF Australian Business Number',
    SMSFAustralianTaxFileNumber: 'Australian TFN is Required',
    trustType: 'Please select your Trust Type',
    address: 'Tesselaar Flower Farm, 357 Monbulk Rd, Silvan VIC 3795, Australia',
}

D.insurance = {
    lifeCover: '100000',
    tpdCover: '100000',
    steppedLifeCoverAmount: '$0',
    steppedTPDAmount: '$0',
    levelTo65LifeCoverAmount: '$0',
    levelTo65TPDCoverAmount: '$0',
    weight: '5',
    height: '10',
    occupation: 'test'
}
D.SMSFDetails = {
    superFundName: 'test fund name',
    SMSFAustralianBusinessNumber: '5555',
    SMSFAustralianTaxFileNumber: '11111111',
    address: 'Tesselaar Flower Farm, 357 Monbulk Rd, Silvan VIC 3795, Australia',
}

D.TrustDetails = {
    trustName: 'test trust name',
    trustType: 'test trust type',
    SMSFAustralianTaxFileNumber: '11111111',
    address: 'Tesselaar Flower Farm, 357 Monbulk Rd, Silvan VIC 3795, Australia',
}

D.companyDetails = {
    companyName: 'test company name',
    companyAustralianBusinessNumber: 'test business',
    companyAustralianTaxFileNumber: '11111111',
    address: 'Tesselaar Flower Farm, 357 Monbulk Rd, Silvan VIC 3795, Australia',
}

D.TrustDetailsValidationMsg = {
    trustName: 'Please enter Trust Name',
    trustType: 'Please select your Trust Type',
    trustAustralianTaxFileNumber: 'Australian TFN is Required',
    address: 'Tesselaar Flower Farm, 357 Monbulk Rd, Silvan VIC 3795, Australia',
    trusteesType: 'Please select trustees type',
}

D.companyDetailsValidationMsg = {
    companyName: 'Please enter Company Name',
    companyAustralianBusinessNumber: 'Please enter the Company Australian Business Number',
    companyAustralianTaxFileNumber: 'Australian TFN is Required',
    address: 'Tesselaar Flower Farm, 357 Monbulk Rd, Silvan VIC 3795, Australia',
}

D.fundEntryValidationMessages = {
    fundName: 'Please select fund name',
    transferAmount: 'Please enter a transfer amount',
    memberNumber: 'Please enter your member number',
    personalType: '\'Personal Super Account Type\' field is required'
}

D.fundEntryInputFields = {
    fundName1: 'Other',
    fundName2: 'AustralianSuper{enter}',
    transferAmount: '100000',
    memberNumber: '5'
}

D.finalReviewValidationMessage = {
    agreeCheckbox: 'Please check this box to proceed'
}

D.applicantsProfileValidationMessages = {
    successfullyRemovedApplicant: 'Successfully deleted',
    titleInput: '\'Title\' is required',
    nameInput: '\'Given Name\' is required',
    surnameInput: '\'Surname\' is required',
    emailInput: 'Not a Valid Email',
    mobileInput: '\'Mobile Phone\' is required',
    genderInput: '\'Gender\' is required',
    birthInput: '\'Date Of Birth\' is required',
    citizenshipInput: '\'Citizenship\' is required',
    employmentInput: 'Please select your employment type',
    taxInput: 'Australian TFN is Required',
    uploadedFileMsg: 'Your document was uploaded successfully and will be reviewed by an administrator.'
}

D.compliancePageValidationMessages = {
    statementOfInquiry: 'Please complete the statement of inquiry',
    sourceType: 'Please select source type',
    percentage: 'Please enter percentage'
}

D.compliancePageInputFields = {
    statementOfInquiry: 'Test',
    percentage: '100{enter}'
}

D.applicantsProfileFields = {
    titleInput: 'Mr',
    nameInput: 'Test name',
    surnameInput: 'Test surname',
    emailInput: 'email@test.com',
    mobileInput: '123456',
    genderInput: 'Female{enter}',
    //birthInput:'\'Date Of Birth\' is required',
    citizenshipInput: 'Australia{enter}',
    employmentType: 'Employed',
    employmentType2: 'Unemployed',
    employmentInput: 'Employed{enter}',
    taxInput: '11111111',
    occupation: 'Analyst{enter}',
    employerName: 'Test test',
    employerAddress: 'Angola{enter}',
    employerBusiness: 'Computer/Information Technology{enter}',
    residentialAddress: 'Terminal 3 & Terminal 4, Perth Airport WA 6105, Australia{enter}'

}

D.investmentExperience = {
    knowledgeLevel: 'None{enter}',
    tradesPerYear: '4',
    numberOfYearsTrading: '2'
}

D.documentType = {
    telephoneBill: 'Telephone Bill',
    waterBill: 'Water Bill',
    id: 'id.jpg'
}

D.bankDetails = {
    bsb: '123456',
    accountNumber: '3456',
    financialInstitution: 'test',
    accountName: 'test',
}

D.bankDetailsValidationMessages = {
    bsb: 'BSB is required',
    accountNumber: 'Please enter your Account Number',
    financialInstitution: 'Please enter your Financial Institution',
    accountName: 'Please enter your Account Name',
}

D.tacticalAdditionalAssets = {
    cash: '100000',
    ownHome: '100000'
}


D.visitDownloadPageLinksText = {
    noticeOfIntentToClaimATOs: 'Visit this link and then for the Praemium Managed Accounts Superannuation section, click on the Forms tab and download the "Notice of Intent to Claim ATO s.290-170.pdf"',
    superBindingNominationOfBeneficiaryForm: ''
}

D.superannuationForms = [
    '"Notice of Intent to Claim ATO s.290-170.pdf"',
    '"Super Binding (non-lapsing) Nomination of Beneficiary Form.pdf"',
    '"Super Direct Debit Form.pdf"',
    '"Super Payment Request Form.pdf"',
    '"Supersma Easy Transfer Form.pdf"',
    '"Supersma Employer Contribution Form.pdf"',
    '"Supersma Member Contribution Notification Form.pdf"'
]

D.personalInvestmentForms = [
    '"Replace or add a bank account - direct debit.pdf"',
    '"Family group account aggregation application form.pdf"'
]


D.scenarios = [
    {
        platform: "ib",
        accountType: "Individual",
        investmentChoice: "Self-Directed",
        questionResponse: [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            {
                investmentTotal: 100000,
                netWorth: 200000,
                annualNetIncome: 70000,
                liquidNetWorth: 110000
            }
        ],
        buildYourPortfolio: {
            "Tactical Growth": {
                amount: "$50,000",
                percent: "50%"
            },
            "Core International": {
                amount: "$50,000",
                percent: "50%"
            }
        },
        ethicalOverlay: {
            climateChange: [
                "noFossilFuelsWorstOffenders"
            ]
        },
        review: {
            indicativePortfolio: {
                "Cash(AUDCASH)": "1,330",
                "AGBApr-2025(GSBG25)": "540",
                "AGBApr-2029(GSBG29)": "855"
            },
            indicativePortfolioSecurity: {
                "Volkswagen(VOW3)": "NoArms(Any)",
                "L3HarrisTechnologies(LHX)": "NoArms(Any)"
            },
            feesAndCharges: {
                "On Going Fees": {
                    "Investment Management Fee": "$216",
                    "Platform Administration Fee": "$444",
                    "Advice Fee": "$0"
                },
                "Embedded Fees": {
                    ETFFees: "$0"
                },
                "Initial Costs": {
                    "Initial Transaction Costs (estimated)": "$189-$252",
                    "Advice Fee": "$0"
                }
            }
        }
    },
    {}
]

module.exports = D;
