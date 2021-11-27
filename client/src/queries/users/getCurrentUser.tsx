import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { TUser } from "../../models/backend";
import { CURRENT_USER_API_URL } from "../../models/endpoints";

export type TGetCurrentUserResult = Omit<TUser, "password"> | undefined;

export const useGetCurrentUser = () => {

    const [response, setResponse] = useState<
        AxiosResponse<TGetCurrentUserResult> | undefined
    >();

    useEffect(() => {
        const token = localStorage.getItem("token") ?? '';
        console.log('token = getLines', token);

        const fetch = async () => {
            const res = await axios.get<TGetCurrentUserResult>(CURRENT_USER_API_URL, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                    "x-access-token": token
                }
            });
            setResponse(res);
        };
        fetch();
    }, []);

    return response;
}