const AWS = require("aws-sdk");

AWS.config.update({ region: "ap-north-1"});

const s3 = new AWS.S3();

const S3_BUCKET =  "name bucket";

module.exports = {s3, S3_BUCKET};