import React, { useContext } from "react";
import { observer } from 'mobx-react';
import { AuthStoreContext, TLogInStoreParams } from "../../../stores/Auth";

import { Grid, Stack, Typography, Button, Hidden } from "@mui/material";
import { useForm } from "react-hook-form";
import { TextFieldRUForm } from "../../forms/TextField";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { ERoutes } from '../../../models/routes';
import AuthFormContainer from "../AuthFormContainer";
import { resetPassword, TResetPasswordParams } from "../../../queries/auth/resetPassword";

type TResetPasswordForm = {
    email: string;
}

type TResetPasswordProps = {};

const ResetPassword: React.FC<TResetPasswordProps> = observer(() => {

    const authStore = useContext(AuthStoreContext);
    const navigate = useNavigate();
    const { handleSubmit, control } = useForm<TResetPasswordForm>();

    const onSubmit = async (data: TResetPasswordForm) => {

        const resetPasswordParams: TResetPasswordParams = {
            email: data.email,
        };

        try {
            const res = await resetPassword(resetPasswordParams);
            navigate(ERoutes.logIn);
        } catch (e) {
            console.error(e);
        }

    }

    return (
        <Grid container alignItems="center" justifyContent="center" style={{ height: '100%' }}>
            <Grid item>
                <AuthFormContainer>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Stack spacing={2}>
                            <Typography align="center">
                                Reset Password
                            </Typography>
                            <Typography align="center" fontSize={11} style={{ maxWidth: '300px' }}>
                                You can choose new password using the link that we will send to the email address.
                            </Typography>
                            <TextFieldRUForm
                                name="email"
                                label="Email"
                                control={control}
                                type="email"
                            />
                            <Button type="submit">
                                Reset
                            </Button>
                        </Stack>
                    </form>
                </AuthFormContainer>
                <Stack direction="row" spacing={2}>
                    <Link to={ERoutes.logIn}>
                        Log In
                    </Link>
                </Stack>
            </Grid>
        </Grid>
    );
});

export default ResetPassword;
