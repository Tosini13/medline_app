import axios from "axios";
import { TEvent } from "../../models/backend";
import { EVENT_API_URL } from "../../models/endpoints";

export type TEditEventParams = TEvent;

export const editEvent = async (data: TEditEventParams) =>
  await axios.put<TEvent>(EVENT_API_URL(data.id), data);
