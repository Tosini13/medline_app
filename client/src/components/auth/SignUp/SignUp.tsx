import { Button, Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { signUp, TSignUpParams } from "../../../queries/auth/signUp";
import { TextFieldRUForm } from "../../forms/TextField";

type TSignUpForm = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

type TSignUpProps = {};

const SignUp: React.FC<TSignUpProps> = () => {
    const navigate = useNavigate();
    const { handleSubmit, control } = useForm<TSignUpForm>();

    const onSubmit = async (data: TSignUpForm) => {
        console.log('data', data);

        const signUpParams: TSignUpParams = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password
        };

        try {
            const res = await signUp(signUpParams);
            console.log('res', res);
            if (res.data.token) {
                localStorage.setItem("token", res.data.token);
            }
            navigate('/');
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
};

export default SignUp;
