import Event from "../../models/event";
import { convertEvent } from "../events";
import { getLineEvents, removeResources } from "./events";
import { Id } from "../../models/types";
import Line, { TLineRes } from "../../models/line";
import { EGetLine } from "../../models/messages/lines";
import { convertLine } from "../lines";

export const removeLineEvents = async (lineId: Id) => {
  const events = await getLineEvents(lineId);
  try {
    await Promise.all(
      events.map((event) => event.resources && removeResources(event.resources))
    );
    await Event.deleteMany({ line: lineId });
  } catch (e) {
    console.error(e);
    throw new Error("Error while deleting events");
  }
};



type TCheckLineAuthorizationParams = {
  lineId: Id;
  userId: Id;
}

export const checkLineAuthorization = async ({ lineId, userId }: TCheckLineAuthorizationParams): Promise<EGetLine | Omit<TLineRes, "user">> => {
  const line = await Line.findOne({ _id: lineId });
  console.log('line', line);
  if (!line) {
    return EGetLine.DOES_NOT_EXISTS;
  }
  if (userId === line.user) {
    return await convertLine(line);
  }
  // check shared users
  return EGetLine.UNAUTHORIZED;
}