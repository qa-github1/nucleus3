const cypress = require('cypress');
const upload = require('./cypress/support/upload-to-s3');
const nodemailer = require('./cypress/support/sendEmail');
const archiver = require('./cypress/support/archiver');
var helper = require('./cypress/support/e2e-helper');
const fs = require('fs');
const local = process.argv[2];


if (fs.existsSync("report/allure-results")) {
    fs.rmSync("report/allure-results", {recursive: true})
}

// cypress.run({
//     spec: [
//
//         'cypress/specs/1-xxx-spec.js',
//         // 'cypress/specs/2-createPersonalSuperAccount-spec.js',
//         // 'cypress/specs/3-createSMSFaccount-spec.js',
//         // 'cypress/specs/4-createJointAccount-spec.js',
//         // 'cypress/specs/5-createTrustAccount-spec.js',
//         // 'cypress/specs/6-createCompanyAccount-spec.js',
//        // 'cypress/specs/8-signUpNewUser-spec.js',
//        // 'cypress/specs/9-clientPortalHome-spec.js',
//        // 'cypress/specs/10-ClientPortalAccountDashboard-spec.js',
//        // 'cypress/specs/11-clientPortalAdministration-spec.js',
//        // 'cypress/specs/12-clientPortalForms-spec.js',
//        // 'cypress/specs/13-clientPortalChangePortfolio-spec.js',
//       //  'cypress/specs/14-clientPortalChangeEthics-spec.js',
//
//     ],
//     record: true,
//     browser: 'chrome',
//
// })
//     .then(() => {
        console.log('\nArchiving the test artifacts');
        archiver.archiveFolder('report')
        archiver.archiveFolder('S3_bucket')
   // })
    .then(async () => {
        console.log('\nPreparing attachments and sending an email');
        await nodemailer.sendEmail()
    })
    .then(() => {
       // upload to s3
        if (!local) {
            console.log('\nUploading to S3');
            upload.uploadAllFilesToS3()
        } else {
            console.log('\nLocal run - skipping Sp3 upload');
        }
    })
    .catch((err) => {
        console.error(err);
    });
