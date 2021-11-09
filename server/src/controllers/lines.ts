import { Request, Response } from "express";
import { LeanDocument } from "mongoose";
import Line, { ILine, TLine, TLineRes } from "../models/line";
import { getEventsQtt } from "./actions/events";

const convertLine = async (line: LeanDocument<ILine>): Promise<TLineRes> => {
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

export const getLines = (req: Request, res: Response) => {
  Line.find({})
    .then(async (items) => {
      const lines = await Promise.all(
        items.map(async (item) => await convertLine(item))
      );
      res.send(lines);
    })
    .catch((err) => console.log(err));
};

export const getLine = (req: Request, res: Response) => {
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

export const createLine = (req: Request, res: Response) => {
  const line: TLine = {
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

export const updateLine = async (req: Request, res: Response) => {
  const line: TLine = {
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

export const deleteLine = (req: Request, res: Response) => {
  Line.findByIdAndRemove({ _id: req.params.id })
    .then(
      async (deletedItem) =>
        deletedItem && res.send(await convertLine(deletedItem))
    )
    .catch((e) => console.log(e));
};
