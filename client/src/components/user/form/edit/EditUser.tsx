import { useForm } from "react-hook-form";

import { Cancel, Save } from "@mui/icons-material";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    Grid,
} from "@mui/material";

import { TUserData } from "../../../../models/backend";
import { LoadingIcon } from "../../../forms/Buttons";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import UserForm, { TUserForm } from "../UserForm";
import { useEditUser } from "./useEditUser";
import { TUseGetCurrentUser } from "../../../../queries/users/getCurrentUser";
import Button from "../../../buttons/Button";

type TEditUserProps = {
    open: boolean;
    handleClose: () => void;
    user: TUserData;
    reExecuteGetCurrentUser: TUseGetCurrentUser["reExecute"];
};

const EditUser: React.FC<TEditUserProps> = ({
    open,
    handleClose,
    user,
    reExecuteGetCurrentUser,
}) => {
    const { enqueueSnackbar } = useSnackbar();
    const { handleSubmit, control, reset } = useForm<TUserForm>(
        {
            defaultValues: {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                bloodGroup: user.bloodGroup ?? "",
                rhesusFactor: user.rhesusFactor ?? "",
                dateOfBirth: user.dateOfBirth ?? null,
            },
        }
    );


    useEffect(() => {
        reset({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            bloodGroup: user.bloodGroup ?? "",
            rhesusFactor: user.rhesusFactor ?? "",
            dateOfBirth: user.dateOfBirth ?? null,
        });
    }, [user, reset]);

    const handleCloseAndReset = () => {
        handleClose();
        reset();
    };

    const callbackSuccess = () => {
        handleCloseAndReset();
        reExecuteGetCurrentUser();
        enqueueSnackbar("User's details are saved!", { variant: "success" });
    };

    const callbackError = () => {
        enqueueSnackbar("Something went wrong while editing user!", {
            variant: "error",
        });
    };

    const { isProcessing, onSubmit } = useEditUser({
        callbackSuccess,
        callbackError,
        user,
    });

    const Actions = (
        <Grid container justifyContent="space-between" alignItems="center" direction="row">
            <Grid item>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    startIcon={isProcessing ? <LoadingIcon /> : <Save />}
                    disabled={isProcessing}
                >
                    Save
                </Button>
            </Grid>
            <Grid item>
                <Button
                    variant="outlined"
                    onClick={handleCloseAndReset}
                    color="primary"
                    startIcon={<Cancel />}
                    disabled={isProcessing}
                >
                    Cancel
                </Button>
            </Grid>
        </Grid>
    );

    return (
        <Dialog open={open}>
            <DialogTitle>Edit Event</DialogTitle>
            <DialogContent style={{ position: "relative", overflowX: "hidden" }}>
                <UserForm
                    Actions={Actions}
                    control={control}
                    handleSubmit={(data) => handleSubmit(onSubmit)(data)}
                />
            </DialogContent>
        </Dialog>
    );
};

export default EditUser;
