import React, { useContext } from "react";
import { AuthStoreContext, TSignUpStoreParams } from "../../../stores/Auth";
import { observer } from "mobx-react";

import { Button, Grid, Paper, Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { TextFieldRUForm } from "../../forms/TextField";

type TSignUpForm = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

type TSignUpProps = {};

const SignUp: React.FC<TSignUpProps> = observer(() => {
    const authStore = useContext(AuthStoreContext);
    const navigate = useNavigate();
    const { handleSubmit, control } = useForm<TSignUpForm>();

    const onSubmit = async (data: TSignUpForm) => {
        const signUpParams: TSignUpStoreParams = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password,
            successCallBack: () => navigate('/')
        };

        try {
            await authStore.signUp(signUpParams);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <Grid container alignItems="center" justifyContent="center">
            <Grid item>
                <Paper style={{ padding: '20px' }}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Stack spacing={2}>
                            <Typography align="center">
                                Sign Up
                            </Typography>
                            <TextFieldRUForm
                                name="firstName"
                                label="First Name"
                                control={control}
                            />
                            <TextFieldRUForm
                                name="lastName"
                                label="Last Name"
                                control={control}
                            />
                            <TextFieldRUForm
                                name="email"
                                label="Email"
                                control={control}
                                type="email"
                            />
                            <TextFieldRUForm
                                name="password"
                                label="Password"
                                control={control}
                                type="password"
                            />
                            <Button type="submit">
                                Sign Up
                            </Button>
                        </Stack>
                    </form>
                </Paper>
            </Grid>
        </Grid>
    );
});

export default SignUp;
