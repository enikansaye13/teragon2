
const fs = require('fs');
const AWS = require('aws-sdk');

require('dotenv').config()

// Enter copied or downloaded access id and secret here
const ID = 'AKIA23WCJMLEUZCMDMHC';
const SECRET = '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';

// Enter the name of the bucket that you have created here
const BUCKET_NAME = 'sga6-test';


// Initializing S3 Interface
 const s3 = new AWS.S3({
    //S3.connect({
    accessKeyId: ID,
    secretAccessKey: SECRET,
});

const uploadFile = (fileName) => {
    // read content from the file
    const fileContent = fs.readFileSync(fileName);

    // setting up s3 upload parameters
    const params = {
        Bucket:BUCKET_NAME,
        Key: 'Korra advertar.png', // file name you want to save as
        Body: fileContent
    };

    // Uploading files to the bucket
    s3.upload(params, function(err, data) {
        if (err) {
            throw err
        }
        console.log(`File uploaded successfully. ${data.Location}`)
    });
};

// Enter the file you want to upload here
uploadFile('Korra advertar.png'); 