import express from "express";
import AWS from "aws-sdk";
import { connectMongoose } from "./mongo/config";
import path from "path";
import router from "./routes";
import { initNodeGallery } from "./controllers/files";

require("dotenv").config();
const app = express();

initNodeGallery();
connectMongoose();

// -------- AWS ------- //

const AWS_CREDENTIALS = {
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SERCRET_ACCESS_KEY,
};

export const s3 = new AWS.S3(AWS_CREDENTIALS);
// MIDDLEWARE

app.use((req, res, next) => {
  res.header({
    "Access-Control-Allow-Origin": "*",
    "Cache-Control": "no-cache",
    "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE",
    "Access-Control-Allow-Headers": "accept, x-requested-with, origin, Content-Type, cookie, pragma, cache-control, x-access-token",
  });
  next();
});

const port = process.env.PORT || 3000;

app.use(express.urlencoded());
app.use(express.json());

app.use("/api", router);

// SERVE CLIENT

const CLIENT_PATH = process.env.CLIENT_PATH ?? "../client/build";
app.use(express.static(path.resolve(__dirname, CLIENT_PATH))); // ../../client/build

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, CLIENT_PATH, "index.html"));
});

app.listen(port, () => console.log(`server is listening on ${port}`));
