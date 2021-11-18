import fs from "fs";
import { format } from "date-fns";
import { Request, Response } from "express";
import { deleteImageAWS, uploadImageAWS } from "./actions/images";
import multer from "multer";
import { DATE_FILE_NAME } from "../models/const";
import { uploadFileAWS } from "./actions/files";

const galleryDir = "gallery";

export const initNodeGallery = () => {
  const galleryPath = `./${galleryDir}`;
  if (!fs.existsSync(galleryPath)) {
    fs.mkdirSync(galleryPath);
  }
};

const multerStorage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, galleryDir);
  },
  filename: (_req, file, cb) => {
    const extension = file.mimetype.replace("/", ".");
    const filename = `file_${format(new Date(), DATE_FILE_NAME)}`;
    cb(null, `${filename}.${extension}`);
  },
});

export const multerConfig = multer({
  storage: multerStorage,
});

export const uploadFile = async (req: Request, res: Response) => {
  if (!req.file) {
    res.send("Image was not uploaded properly");
    return;
  }

  try {
    const file = await uploadImageAWS({
      path: req.file.path,
      filename: req.file.filename,
      mimetype: req.file.mimetype,
    });
    res.send({ path: file.Location, name: req.file.originalname });
  } catch (e) {
    console.error("e", e);
    res.sendStatus(400);
  }
};

export const uploadFiles = (req: Request, res: Response) => {
  const files = req.files as Express.Multer.File[]; // Is it ok?!?
  let promises: any[] = [];
  files.forEach((file) => {
    promises.push(
      uploadFileAWS({
        path: file.path,
        filename: file.filename,
        mimetype: file.mimetype,
      })
    );
  });

  Promise.all(promises)
    .then((data) => {
      res.send(
        data.map((img, i) => ({
          path: img.Location,
          name: files[i]?.originalname,
        }))
      );
    })
    .catch((e) => {
      throw Error(e);
    });
};

export const updateFile = async (req: Request, res: Response) => {
  const oldPath = req?.query?.path as string | undefined;
  if (oldPath) {
    await deleteImageAWS({ path: oldPath });
  }

  if (!req.file) {
    res.send("Image was not uploaded properly");
    return;
  }
  const file = await uploadImageAWS({
    path: req.file.path,
    filename: req.file.filename,
    mimetype: req.file.mimetype,
  });
  res.send({ path: file.Location, name: req.file.originalname });
};

export const deleteFile = async (req: Request, res: Response) => {
  const path = req?.query?.path as string | undefined;
  if (path) {
    await deleteImageAWS({ path });
    res.send(req.query.path);
  } else {
    res.send(new Error("wrong path"));
  }
};
