"use strict";
const nodemailer = require("nodemailer");
const helper = require("./e2e-helper");
const dateAndTime = helper.currentDateAndTime;

async function sendEmail(attachment1, attachment2) {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'protractor.user2@gmail.com',
            pass: 'meoqxyxjayencqlo',
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Test" <protractor.user2@gmail.com>', // sender address
    //    to: "testing@nucleuswealth.com", // list of receivers
    //    to: "sumejja.s.i@gmail.com", // list of receivers
        to: "senderovic.amina@gmail.com", // list of receivers
        subject: "Test Summary", // Subject line
        text: "Automation Test Summary", // plain text body
        html: "<b>Test Summary</b>", // html body
        attachments: [
             { filename: 'report_' + dateAndTime + ".zip", path:'archive/report_' + dateAndTime + ".zip"},
             { filename: 'S3_bucket_' + dateAndTime + ".zip", path:'archive/S3_bucket_' + dateAndTime + ".zip"}
      ]
    });
    console.log("Email sent");
}

module.exports = {
    sendEmail
};
