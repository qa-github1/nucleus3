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


    });
    return config;
};