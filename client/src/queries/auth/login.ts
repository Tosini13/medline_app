import axios from "axios";
import { TUser } from "../../models/backend";
import { LOGIN_API_URL } from "../../models/endpoints";

export type TLogInParams = Omit<TUser, "id" | "firstName" | "lastName" | "token">;
export type TLogInResult = Omit<TUser, "password">;

export const logIn = async (data: TLogInParams) =>
    await axios.post<TLogInResult>(LOGIN_API_URL, data);
