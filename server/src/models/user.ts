import mongoose, { Document } from "mongoose";
import { Id } from "./types";

const Schema = mongoose.Schema;

const SUser = new Schema({
    firstName: {
        type: String,
        required: false,
    },
    lastName: {
        type: String,
        required: false,
    },
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
});

export type TUserData = {
    firstName?: string;
    lastName?: string;
    email: string;
    password: string;
    token: string;
};

export type TUser = TUserData & {
    id: Id;
};

export interface IUser extends Document {
    firstName?: string;
    lastName?: string;
    email: string;
    password: string;
    token: string;
}

const User = mongoose.model<IUser>("users", SUser);

export default User;
