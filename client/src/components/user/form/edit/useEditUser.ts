import { SubmitHandler } from "react-hook-form";
import useAsync from "../../../../helpers/useAsync";
import { TUserData } from "../../../../models/backend";

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
        // const eventData: TEditEventParams = {
        //     id: event.id,
        //     title: data.title,
        //     description: data.description,
        //     dateTime: data.dateTime,
        //     type: data.type,
        //     line: lineId,
        //     resources: paths,
        // };
        // try {
        //     await execute(editEvent(eventData));
        //     callbackSuccess();
        // } catch (e) {
        //     console.error("Something went wrong while creating event!!", e);
        //     callbackError();
        // }
    };

    return {
        onSubmit,
        isProcessing,
    };
};
