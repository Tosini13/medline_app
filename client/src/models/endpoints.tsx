import { Id } from "./backend";

// ======================== URL ===========================
const SERVER_URL = process.env.REACT_APP_SERVER_URL ?? ""; // http://localhost:3000
console.log("SERVER_URL", SERVER_URL);

const API_URL = `${SERVER_URL}/api`;
export const LINES_API_URL = `${API_URL}/lines`;
export const LINE_API_URL = (id: Id) => `${API_URL}/lines/${id}`;
export const EVENTS_API_URL = `${API_URL}/events`;
export const EVENT_API_URL = (id: Id) => `${API_URL}/events/${id}`;
export const EVENTS_LINE_API_URL = (lineId: Id) =>
  `${API_URL}/events/${lineId}`;
export const IMAGES_API_URL = `${API_URL}/images`;
export const FILES_API_URL = `${API_URL}/files`;
