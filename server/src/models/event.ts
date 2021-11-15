import mongoose, { Document } from "mongoose";
import { EVENT_TYPE, Id, LINE_VALUE } from "./types";
const Schema = mongoose.Schema;

const SEvent = new Schema({
  title: {
    type: String,
    required: [true, "title is required"],
  },
  description: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    required: [true, "type is required"],
  },
  dateTime: {
    type: String,
    required: [true, "dateTime is required"],
  },
  prescriptions: {
    type: [String],
    required: false,
  },
  resources: {
    type: [String],
    required: false,
  },
  line: {
    type: String,
    required: [true, "line is required"],
  },
});

export type TEvent = {
  title: string;
  description?: string;
  type: EVENT_TYPE;
  dateTime: Date;
  prescriptions?: string[];
  resources?: string[];
  line: Id;
};

export type TEventRes = TEvent & {
  id: Id;
};

export interface IEvent extends Document {
  title: string;
  description?: string;
  type: EVENT_TYPE;
  dateTime: Date;
  resources?: string[];
  prescriptions?: string[];
  line: Id;
}

const Event = mongoose.model<IEvent>("events", SEvent);

export default Event;
