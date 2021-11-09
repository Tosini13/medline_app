import { Id } from "aws-sdk/clients/elastictranscoder";
import Event from "../../models/event";

export const getEventsQtt = async (lineId: Id) =>
  await Event.countDocuments({ line: lineId });
