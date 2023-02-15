const fs = require('fs');
var path = require('path');
const AWS = require('aws-sdk');

//const {  BUCKET_NAME, AWS_ACCESS_ID, AWS_SECRET_KEY } = process.env;
 const BUCKET_NAME = 'neutron-qa-data',
     AWS_ACCESS_ID = 'AKIAXFS6WV4DEGL5JFO7',
     AWS_SECRET_KEY = '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'

function uploadToS3(file, name, type) {
   // const {  BUCKET_NAME, AWS_ACCESS_ID, AWS_SECRET_KEY } = process.env;
    console.log(process.env.BUCKET_NAME);
    const s3bucket = new AWS.S3({
        accessKeyId: AWS_ACCESS_ID,
        secretAccessKey: AWS_SECRET_KEY,
        Bucket: BUCKET_NAME,
    });
    const params = {
        Bucket: BUCKET_NAME,
        Key: name,
        Body: file,
        //      ACL: 'public-read',
        ContentType: `image/${type}`,
    };
    s3bucket.upload(params, (err, data) => {
        if (err) {
            throw err;
        }
        /* eslint-disable no-console */
        console.log('Success!');
        console.log(data);
        /* eslint-enable no-console */
    });
}

function getFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    files.forEach((file) => {
        const filePath = `${dir}/${file}`;
        if (['.gitkeep', '.Trash-0'].indexOf(file) === -1) {
            if (fs.statSync(filePath).isDirectory()) {
                getFiles(filePath, fileList);
            } else {
                const obj = {
                    path: filePath,
                    name: file,
                    type: file.split('.')[1],
                }
                fileList.push(obj);
            }
        }
    });
    return fileList;
}

function uploadAllFilesToS3(dir, fileList = []) {
    snapshots.forEach((snapshotObject) => {
        fs.readFile(snapshotObject.path, (err, data) => {
            if (err) {
                throw err;
            }
            uploadToS3(data, snapshotObject.name, snapshotObject.type);
            // console.log(snapshot);
        });
    });
}

// snapshots

const snapshotsDir = path.join(__dirname, '../../S3_bucket');
const snapshots = getFiles(snapshotsDir, []);

// snapshots.forEach((snapshotObject) => {
//     fs.readFile(snapshotObject.path, (err, data) => {
//         if (err) { throw err; }
//         uploadToS3(data, snapshotObject.name, snapshotObject.type);
//         // console.log(snapshot);
//     });
// });

module.exports = {
    uploadAllFilesToS3
};

