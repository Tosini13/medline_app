import axios from "axios";
import { Id, TEvent } from "../../models/backend";
import { EVENT_API_URL } from "../../models/endpoints";

export type TDeleteEventParams = {
  id: Id;
};

export const deleteEvent = async ({ id }: TDeleteEventParams) =>
  await axios.delete<TEvent>(EVENT_API_URL(id));
