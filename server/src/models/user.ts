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
    dateOfBirth: {
        type: String,
        required: false,
    },
    bloodGroup: {
        type: String,
        preferences: { default: null }
    },
    rhesusFactor: {
        type: String,
        preferences: { default: null }
    },
});

export type TUserData = {
    email: string;
    token: string;
    password: string;

    firstName?: string;
    lastName?: string;
    dateOfBirth?: Date;
    bloodGroup?: BLOOD_GROUP | null;
    rhesusFactor?: RH_FACTOR | null;
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
    dateOfBirth?: Date;
    bloodGroup?: BLOOD_GROUP | null;
    rhesusFactor?: RH_FACTOR | null;
}

const User = mongoose.model<IUser>("users", SUser);

export default User;
