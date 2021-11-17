import fs from "fs";
import { S3 } from "aws-sdk";
import { s3 } from "../..";

// ################## UPLOAD ######################

type TUploadImageAWSParams = {
  path: string;
  filename: string;
  mimetype: string;
};
export const uploadFileAWS = async ({
  path,
  filename,
  mimetype,
}: TUploadImageAWSParams) => {
  const params = {
    ACL: "public-read",
    Bucket: process.env.AWS_BUCKET_NAME ?? "",
    Body: fs.createReadStream(path),
    ContentType: mimetype,
    Key: `${process.env.AWS_GALLERY_FOLDER_NAME}/${filename}`,
  };
  return s3.upload(params).promise();
};

// ################## DELETE ######################

type TDeleteImageAWSParams = {
  key: string;
};
export const deleteFileAWS = async ({ key }: TDeleteImageAWSParams) => {
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME ?? "",
    Key: key,
  };
  return s3.deleteObject(params).promise();
};
