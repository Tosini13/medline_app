import { Response } from "express";
import { LeanDocument } from "mongoose";
import { IVerifyTokenRequest } from "../middleware/auth";
import Event, { IEvent, TEventRes, TEvent } from "../models/event";
import { removeResources } from "./actions/events";

export const convertEvent = (doc: LeanDocument<IEvent>): TEventRes => ({
  id: doc._id,
  line: doc.line,
  title: doc.title,
  type: doc.type,
  dateTime: doc.dateTime,
  description: doc.description,
  prescriptions: doc.prescriptions,
  resources: doc.resources,
});

const getEventFromBody = (body: TEvent): TEvent => ({
  title: body.title,
  line: body.line,
  type: body.type,
  dateTime: body.dateTime,
  description: body.description,
  prescriptions: body.prescriptions,
  resources: body.resources,
});

export const getEvents = (req: IVerifyTokenRequest, res: Response) => {
  Event.find({ line: req.params.lineId })
    .sort({ dateTime: 1 })
    .then((items) => res.send(items.map((item) => convertEvent(item))))
    .catch((err) => console.log(err));
};

export const createEvent = (req: IVerifyTokenRequest, res: Response) => {
  const event = getEventFromBody(req.body);

  Event.create(event)
    .then((createdItem) => res.send(convertEvent(createdItem)))
    .catch((e) => console.log(e));
};

export const updateEvent = async (req: IVerifyTokenRequest, res: Response) => {
  const event = getEventFromBody(req.body);

  try {
    await Event.updateOne({ _id: req.params.id }, event);
    res.send(event);
  } catch (e) {
    res.send(e);
  }
};

export const deleteEvent = (req: IVerifyTokenRequest, res: Response) => {
  Event.findByIdAndRemove({ _id: req.params.id })
    .then(async (deletedItem) => {
      if (deletedItem) {
        const convertedEvent = convertEvent(deletedItem);
        if (convertedEvent.resources) {
          await removeResources(convertedEvent.resources);
        }
        res.send(convertEvent(deletedItem));
      }
    })
    .catch((e) => console.log(e));
};
