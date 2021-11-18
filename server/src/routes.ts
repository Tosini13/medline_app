import express from "express";
import {
  createEvent,
  deleteEvent,
  getEvents,
  updateEvent,
} from "./controllers/events";
import {
  deleteFile,
  multerConfig,
  updateFile,
  uploadFile,
  uploadFiles,
} from "./controllers/files";
import {
  createLine,
  deleteLine,
  getLine,
  getLines,
  updateLine,
} from "./controllers/lines";

const router = express.Router();

// -----------------------------------------
// EVENTS
router.get("/events/:lineId", getEvents);
router.post("/events", createEvent);
router.put("/events/:id", updateEvent);
router.delete("/events/:id", deleteEvent);

// -----------------------------------------
// LINES
router.get("/lines", getLines);
router.get("/lines/:id", getLine);
router.post("/lines", createLine);
router.put("/lines/:id", updateLine);
router.delete("/lines/:id", deleteLine);

// -----------------------------------------
// IMAGES
router.post("/files", multerConfig.array("files"), uploadFiles);
router.post("/images", multerConfig.single("file"), uploadFile);
router.put("/files", multerConfig.single("file"), updateFile);
router.delete("/files", deleteFile);

export default router;
