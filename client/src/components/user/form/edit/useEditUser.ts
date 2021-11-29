import { SubmitHandler } from "react-hook-form";
import useAsync from "../../../../helpers/useAsync";
import { TUserData } from "../../../../models/backend";
import { editUser, TEditUserParams } from "../../../../queries/users/editUser";

import { TUserForm } from "../UserForm";

export type TuseEditUserParams = {
    user: TUserData;
    callbackSuccess: () => void;
    callbackError: () => void;
};

export type TuseEditUserReturn = {
    isProcessing: boolean;
    onSubmit: SubmitHandler<TUserForm>;
};

export const useEditUser = ({
    user,
    callbackSuccess,
    callbackError,
}: TuseEditUserParams): TuseEditUserReturn => {
    const { isProcessing, execute } = useAsync();

    const onSubmit: SubmitHandler<TUserForm> = async (data) => {
        const eventData: TEditUserParams = {
            id: user.id,
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            dateOfBirth: data.dateOfBirth || undefined,
            bloodGroup: data.bloodGroup || null,
            rhesusFactor: data.rhesusFactor || null,
        };
        try {
            await execute(editUser(eventData));
            callbackSuccess();
        } catch (e) {
            console.error("Something went wrong while creating event!!", e);
            callbackError();
        }
    };

    return {
        onSubmit,
        isProcessing,
    };
};
