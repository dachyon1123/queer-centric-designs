const { S3Client, ListObjectsV2Command } = require("@aws-sdk/client-s3");
const { Upload } = require("@aws-sdk/lib-storage");
const fs = require("fs");
const dotenv = require("dotenv").config();

const s3Client = new S3Client({ region: "us-east-2" });

async function s3Upload(file) {
  try {
    const filestream = fs.createReadStream(file.path);
    const upload = new Upload({
      client: s3Client,
      params: {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `uploads/${file.filename}`,
        Body: filestream,
      },
    });

    const result = await upload.done();
    return result;
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error;
  }
}

async function s3Download() {
  const command = new ListObjectsV2Command({
    Bucket: "queer-centric",
  });

  try {
    let isTruncated = true;
    console.log("Your bucket contains the following objects");

    while (isTruncated) {
      const { Contents, IsTruncated, NextContinuationToken } =
        await s3Client.send(command);
        const contentsList = Contents.map((c) => ` • ${c.Key}`).join("\n");
        contents += contentsList + "\n";
        isTruncated = IsTruncated;
        command.input.ContinuationToken = NextContinuationToken;
    }
    console.log(contents)
  } catch (error) {
    console.error(error)
  }
}

module.exports = { s3Upload, s3Download };
