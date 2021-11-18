import Event from "../../models/event";
import { convertEvent } from "../events";
import { getLineEvents, removeResources } from "./events";
import { Id } from "../../models/types";

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
