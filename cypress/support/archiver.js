var zipper = require('zip-local');
var helper = require('./e2e-helper');

async function archiveFolder(folderName) {
   await zipper.sync.zip("./" + folderName).compress().save("./archive/" + folderName + "_" + helper.currentDateAndTime + ".zip");
}

module.exports = {
    archiveFolder
};
