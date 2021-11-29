import express from "express";
import { login, register, resetPassword, checkToken, setPassword } from "./controllers/auth";
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
import { getUser, updateUser } from "./controllers/users";
import { verifyToken } from "./middleware/auth";

const router = express.Router();


// -----------------------------------------
// AUTH
router.post("/login", login);
router.post("/register", register);
router.post("/reset-password", resetPassword);
router.post("/check-token", checkToken);
router.post("/set-password", setPassword);

// -----------------------------------------
// USERS
router.get("/user", verifyToken, getUser);
router.put("/user/:id", verifyToken, updateUser);

// -----------------------------------------
// EVENTS
router.get("/events/:lineId", verifyToken, getEvents);
router.post("/events", verifyToken, createEvent);
router.put("/events/:id", verifyToken, updateEvent);
router.delete("/events/:id", verifyToken, deleteEvent);

// -----------------------------------------
// LINES
router.get("/lines", verifyToken, getLines);
router.get("/lines/:id", verifyToken, getLine);
router.post("/lines", verifyToken, createLine);
router.put("/lines/:id", verifyToken, updateLine);
router.delete("/lines/:id", verifyToken, deleteLine);

// -----------------------------------------
// IMAGES
router.post("/files", multerConfig.array("files"), uploadFiles);
router.post("/images", multerConfig.single("file"), uploadFile);
router.put("/files", multerConfig.single("file"), updateFile);
router.delete("/files", deleteFile);

export default router;
