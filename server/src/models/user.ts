import mongoose, { Document } from "mongoose";
import { BLOOD_GROUP, Id, RH_FACTOR } from "./types";

const Schema = mongoose.Schema;

const SUser = new Schema({
    email: {
        type: String,
        unique: true,
        required: [true, "email is required"],
    },
    password: {
        type: String,
        required: [true, "password is required"],
    },
    token: {
        type: String,
    },
    firstName: {
        type: String,
        required: false,
    },
    lastName: {
        type: String,
        required: false,
    },
    bloodGroup: {
        type: String,
        required: false,
    },
    rhesusFactor: {
        type: String,
        required: false,
    },
});

export type TUserData = {
    email: string;
    token: string;
    password: string;

    firstName?: string;
    lastName?: string;
    bloodGroup?: BLOOD_GROUP;
    rhesusFactor?: RH_FACTOR;
};

export type TUser = TUserData & {
    id: Id;
};

export interface IUser extends Document {
    email: string;
    password: string;
    token: string;

    firstName?: string;
    lastName?: string;
    bloodGroup?: BLOOD_GROUP;
    rhesusFactor?: RH_FACTOR;
}

const User = mongoose.model<IUser>("users", SUser);

export default User;
