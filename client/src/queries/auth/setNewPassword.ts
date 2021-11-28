import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { ESetNewPasswordMessage, TUser } from "../../models/backend";
import { SET_PASSWORD_API_URL } from "../../models/endpoints";

export type TSetNewPasswordParams = { token: string; password: string };
export type TSetNewPasswordResult = {
    message: ESetNewPasswordMessage;
};

export const setNewPassword = async (data: TSetNewPasswordParams) =>
    await axios.post<TSetNewPasswordResult>(SET_PASSWORD_API_URL, data);


export const useSetNewPassword = (data: TSetNewPasswordParams) => {

    const [response, setResponse] = useState<
        AxiosResponse<TSetNewPasswordResult> | undefined
    >();

    useEffect(() => {
        const fetch = async () => {
            const res = await setNewPassword(data);
            setResponse(res);
        };
        fetch();
    }, [data]);

    return response;
}