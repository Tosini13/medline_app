import mongoose, { Document } from "mongoose";
import { Id, LINE_VALUE } from "./types";
const Schema = mongoose.Schema;

const SLine = new Schema({
  title: {
    type: String,
    required: [true, "title is required"],
  },
  description: {
    type: String,
    required: false,
  },
  value: {
    type: String,
    required: [true, "value is required"],
  },
  color: {
    type: String,
    required: [true, "color is required"],
  },
  lastUpdate: {
    type: String,
    required: [true, "lastUpdated is required"],
  },
});

export type TLine = {
  title: string;
  description?: string;
  value: LINE_VALUE;
  color: string;
  lastUpdate: Date;
};

export type TLineRes = TLine & {
  id: Id;
  contributions: number;
};

export interface ILine extends Document {
  title: string;
  description?: string;
  value: LINE_VALUE;
  color: string;
  lastUpdate: Date;
}

const Line = mongoose.model<ILine>("lines", SLine);

export default Line;
