/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const imaps = require('imap-simple');
const fs = require('fs');
var path = require('path');
const _ = require('lodash');
const getCompareSnapshotsPlugin = require('cypress-visual-regression/dist/plugin');

module.exports = (on, config) => {

    allureWriter(on, config);
    getCompareSnapshotsPlugin(on, config);

    on('task', {

        generate_excel_file(args) {

            let filename = args.filename;
            let dataObject = args.dataObject;

            let excel = require('../support/excel-helper');
            return new Promise((resolve, reject) => {
                excel.generate_file(filename, dataObject);
                return resolve(true)
            });
        },

        log(message) {
            console.log(message);
            return null
        },

        fetchGmailUnseenMails({username, password, markSeen}) {
            var config = {
                imap: {
                    user: username,
                    password: password,
                    host: 'imap.gmail.com',
                    port: 993,
                    tls: true,
                    authTimeout: 5000
                }
            };

            return imaps.connect(config).then(function (connection) {

                return connection.openBox('INBOX').then(function () {
                    var searchCriteria = [
                        'UNSEEN'
                    ];

                    var fetchOptions = {
                        bodies: ['HEADER', 'TEXT'],
                        markSeen: markSeen
                    };

                    return connection.search(searchCriteria, fetchOptions).then(function (results) {
                        var mails = [];
                        if (results) {
                            results.forEach(item => {
                                var _mail = {};
                                if (item && item.parts) {
                                    item.parts.forEach(_item => {
                                        if (_item.which == "TEXT") {
                                            _mail.body = _item.body;
                                        }
                                        if (_item.which == "HEADER" && _item.body && _item.body.from && _item.body.from.length) {
                                            _mail.from = _item.body.from[0];
                                        }
                                        if (_item.which == "HEADER" && _item.body && _item.body.subject && _item.body.subject.length) {
                                            _mail.subject = _item.body.subject[0];
                                        }
                                        if (_item.which == "HEADER" && _item.body && _item.body.to && _item.body.to.length) {
                                            _mail.to = _item.body.to[0];
                                        }
                                    })
                                }
                                mails.push(_mail);
                            });
                            //connection.end()
                        }
                        return mails;
                    });
                });
            });
        },

    });
    return config;
};