import { Id } from "./backend";

// ======================== URL ===========================
const SERVER_URL = process.env.REACT_APP_SERVER_URL ?? ""; // http://localhost:3000

const API_URL = `${SERVER_URL}/api`;
/* ---------------- AUTH ------------------- */
export const LOGIN_API_URL = `${API_URL}/login`;
export const RESET_PASSWORD_API_URL = `${API_URL}/reset-password`;
export const CHECK_TOKEN_API_URL = `${API_URL}/check-token`;
export const SET_PASSWORD_API_URL = `${API_URL}/set-password`;
export const SIGN_UP_API_URL = `${API_URL}/register`;

/* ---------------- USERS ------------------- */
export const CURRENT_USER_API_URL = `${API_URL}/user`;

/* ---------------- LINES ------------------- */
export const LINES_API_URL = `${API_URL}/lines`;
export const LINE_API_URL = (id: Id) => `${API_URL}/lines/${id}`;

/* ---------------- EVENTS ------------------- */
export const EVENTS_API_URL = `${API_URL}/events`;
export const EVENT_API_URL = (id: Id) => `${API_URL}/events/${id}`;
export const EVENTS_LINE_API_URL = (lineId: Id) =>
  `${API_URL}/events/${lineId}`;

/* ---------------- FILES ------------------- */
export const IMAGES_API_URL = `${API_URL}/images`;
export const FILES_API_URL = `${API_URL}/files`;
export const FILE_API_URL = (path: string) => `${API_URL}/files?path=${path}`;
