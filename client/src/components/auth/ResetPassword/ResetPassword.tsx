import React from "react";
import { observer } from 'mobx-react';

import { Grid, Stack, Typography, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { TextFieldRUForm } from "../../forms/TextField";
import { useNavigate } from "react-router";
import { ERoutes } from '../../../models/routes';
import { resetPassword, TResetPasswordParams } from "../../../queries/auth/resetPassword";
import { LinkAuth } from "../../buttons/Links";
import AuthPageContainer, { AuthFormContainer } from "../AuthFormContainer";

type TResetPasswordForm = {
    email: string;
}

type TResetPasswordProps = {};

const ResetPassword: React.FC<TResetPasswordProps> = observer(() => {

    const navigate = useNavigate();
    const { handleSubmit, control } = useForm<TResetPasswordForm>();

    const onSubmit = async (data: TResetPasswordForm) => {

        const resetPasswordParams: TResetPasswordParams = {
            email: data.email,
        };

        try {
            await resetPassword(resetPasswordParams);
            navigate(ERoutes.logIn);
        } catch (e) {
            console.error(e);
        }

    }

    return (
        <AuthPageContainer>
            <AuthFormContainer>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack spacing={2}>
                        <Typography align="center">
                            Reset Password
                        </Typography>
                        <Typography align="center" fontSize={11} style={{ maxWidth: '300px' }}>
                            You can choose new password using a link that we will send to the email address.
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
            <Stack direction="row" justifyContent="center" spacing={2}>
                <LinkAuth to={ERoutes.logIn}>
                    Log In
                </LinkAuth>
            </Stack>
        </AuthPageContainer>
    );
});

export default ResetPassword;
