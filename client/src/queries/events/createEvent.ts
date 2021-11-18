import axios from "axios";
import { TEvent } from "../../models/backend";
import { EVENTS_API_URL } from "../../models/endpoints";

export type TCreateEventParams = Omit<
  TEvent,
  "id" | "lastUpdate" | "contributions"
>;

export const createEvent = async (data: TCreateEventParams) =>
  await axios.post<TEvent>(EVENTS_API_URL, data);
