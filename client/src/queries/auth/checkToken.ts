import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { ECheckTokenMessage, TUser } from "../../models/backend";
import { CHECK_TOKEN_API_URL } from "../../models/endpoints";

export type TCheckTokenParams = { token: string; };
export type TCheckTokenResult = {
    message: ECheckTokenMessage
};

export const checkToken = async ({ token }: TCheckTokenParams) =>
    await axios.post<TCheckTokenResult>(CHECK_TOKEN_API_URL, { token });


export const useCheckToken = ({ token }: TCheckTokenParams) => {

    const [response, setResponse] = useState<
        AxiosResponse<TCheckTokenResult> | undefined
    >();

    useEffect(() => {
        const fetch = async () => {
            const res = await checkToken({ token });
            setResponse(res);
        };
        fetch();
    }, [token]);

    return response;
}