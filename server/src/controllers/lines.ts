import { Request, Response } from "express";
import { LeanDocument } from "mongoose";
import Line, { ILine, TLine, TLineRes } from "../models/line";

const convertLine = (line: LeanDocument<ILine>): TLineRes => ({
  id: line._id,
  title: line.title,
  value: line.value,
  description: line.description,
  color: line.color,
  lastUpdate: line.lastUpdate,
  contributions: 15, // TODO: get events qtt
});

export const getLines = (req: Request, res: Response) => {
  Line.find({})
    .then((items) => res.send(items.map((item) => convertLine(item))))
    .catch((err) => console.log(err));
};

export const getLine = (req: Request, res: Response) => {
  Line.find({ _id: req.params.id })
    .then((items) => res.send(items.map((item) => convertLine(item))))
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
    .then((createdItem) => res.send(convertLine(createdItem)))
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
    .then((deletedItem) => deletedItem && res.send(convertLine(deletedItem)))
    .catch((e) => console.log(e));
};
