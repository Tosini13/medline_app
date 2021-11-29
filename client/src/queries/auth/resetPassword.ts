import axios from "axios";
import { EResetPasswordMessage } from "../../models/backend";
import { RESET_PASSWORD_API_URL } from "../../models/endpoints";

export type TResetPasswordParams = { email: string };
export type TResetPasswordResult = { message: EResetPasswordMessage };

export const resetPassword = async (data: TResetPasswordParams) =>
    await axios.post<TResetPasswordResult>(RESET_PASSWORD_API_URL, data);
