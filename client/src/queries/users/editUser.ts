import axios from "axios";
import { TUserData } from "../../models/backend";
import { USER_API_URL } from "../../models/endpoints";

export type TEditUserParams = TUserData;

export const editUser = async ({ id, ...data }: TEditUserParams) => {
    return await axios.put<TUserData>(USER_API_URL(id), {
        ...data,
        lastUpdate: new Date(),
    });
};
