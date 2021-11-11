import { Id } from "./backend";

// ======================== URL ===========================
const SERVER_URL = process.env.REACT_APP_SERVER_URL ?? ""; // http://localhost:3000
console.log("SERVER_URL", SERVER_URL);

const API_URL = `${SERVER_URL}/api`;
export const LINES_API_URL = `${API_URL}/lines`;
export const LINE_API_URL = (id: Id) => `${API_URL}/lines/${id}`;
