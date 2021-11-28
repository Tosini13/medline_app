import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { TUser } from "../../models/backend";
import { CURRENT_USER_API_URL } from "../../models/endpoints";


export type TGetCurrentUserParams = Pick<TUser, "token">;
export type TGetCurrentUserResult = Omit<TUser, "password">;

export const getCurrentUser = async ({ token }: TGetCurrentUserParams) =>
    await axios.get<TGetCurrentUserResult>(CURRENT_USER_API_URL, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            "x-access-token": token
        }
    });




export const useGetCurrentUser = () => {

    const [response, setResponse] = useState<
        AxiosResponse<TGetCurrentUserResult> | undefined
    >();

    useEffect(() => {
        const token = localStorage.getItem("token") ?? '';

        const fetch = async () => {
            const res = await getCurrentUser({ token });
            setResponse(res);
        };
        fetch();
    }, []);

    return response;
}