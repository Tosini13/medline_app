import { Id } from "aws-sdk/clients/elastictranscoder";
import Event from "../../models/event";
import { TResource } from "../../models/event";
import { deleteImageAWS } from "./images";

export const getEventsQtt = async (lineId: Id) =>
  await Event.countDocuments({ line: lineId });

export const getLineEvents = async (lineId: Id) =>
  await Event.find({ line: lineId }).sort({ dateTime: 1 });

export const removeResources = async (resources: TResource[]) => {
  try {
    await Promise.all(
      resources.map((resource) => deleteImageAWS({ path: resource.path }))
    );
    return true;
  } catch (e) {
    console.error(e);
    throw new Error("Error when deleting files");
  }
};
