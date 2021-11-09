import express from "express";
import {
  createEvent,
  deleteEvent,
  getEvents,
  updateEvent,
} from "./controllers/events";
import {
  deleteImage,
  multerConfig,
  updateImage,
  uploadImage,
} from "./controllers/images";
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
router.post("/images", multerConfig.single("img"), uploadImage);
router.put("/images", multerConfig.single("img"), updateImage);
router.delete("/images", deleteImage);

export default router;
