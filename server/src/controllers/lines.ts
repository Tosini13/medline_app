import { Response } from "express";
import { LeanDocument } from "mongoose";
import { IVerifyTokenRequest } from "../middleware/auth";
import Line, { ILine, TLine, TLineRes } from "../models/line";
import { ECreateLine } from "../models/messages/lines";
import { getEventsQtt } from "./actions/events";
import { removeLineEvents } from "./actions/lines";

export const convertLine = async (line: LeanDocument<ILine>): Promise<Omit<TLineRes, "user">> => {
  const contributions = await getEventsQtt(line._id);
  return {
    id: line._id,
    title: line.title,
    value: line.value,
    description: line.description,
    color: line.color,
    lastUpdate: line.lastUpdate,
    contributions: contributions,
  };
};

export const getLines = (req: IVerifyTokenRequest, res: Response) => {
  const currentUser: any = req.currentUser;

  if (!currentUser) {
    return res.status(401).send({ message: ECreateLine.UNAUTHORIZED });
  }
  Line.find({ user: currentUser.user_id })
    .then(async (items) => {
      const lines = await Promise.all(
        items.map(async (item) => await convertLine(item))
      );
      res.send(lines);
    })
    .catch((err) => console.log(err));
};

export const getLine = (req: IVerifyTokenRequest, res: Response) => {
  Line.find({ _id: req.params.id })
    .then(async (items) => {
      if (items.length) {
        res.send(await convertLine(items[0]));
      } else {
        res.send();
      }
    })
    .catch((err) => console.log(err));
};

export const createLine = (req: IVerifyTokenRequest, res: Response) => {
  const currentUser: any = req.currentUser;

  if (!currentUser) {
    return res.status(401).send({ message: ECreateLine.UNAUTHORIZED });
  }

  const line: TLine = {
    user: currentUser.user_id,
    title: req.body.title,
    description: req.body.description,
    value: req.body.value,
    color: req.body.color,
    lastUpdate: req.body.lastUpdate,
  };

  Line.create(line)
    .then(async (createdItem) => res.send(await convertLine(createdItem)))
    .catch((e) => console.log(e));
};

export const updateLine = async (req: IVerifyTokenRequest, res: Response) => {
  const line: Omit<TLine, "user"> = {
    title: req.body.title,
    description: req.body.description,
    value: req.body.value,
    color: req.body.color,
    lastUpdate: req.body.lastUpdate,
  };

  try {
    await Line.updateOne({ _id: req.params.id }, line);
    res.send(line);
  } catch (e) {
    res.send(e);
  }
};

export const deleteLine = (req: IVerifyTokenRequest, res: Response) => {
  Line.findByIdAndRemove({ _id: req.params.id })
    .then(async (deletedItem) => {
      if (!deletedItem) return;
      const line = await convertLine(deletedItem);
      await removeLineEvents(line.id);

      res.send(line);
    })
    .catch((e) => console.log(e));
};
