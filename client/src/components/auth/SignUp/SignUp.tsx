import React, { useContext } from "react";
import { AuthStoreContext, TSignUpStoreParams } from "../../../stores/Auth";
import { observer } from "mobx-react";

import { Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { TextFieldRUForm } from "../../forms/TextField";
import { ERoutes } from "../../../models/routes";
import { LinkAuth } from "../../buttons/Links";
import { AuthFormContainer } from "../AuthFormContainer";
import Button, { ButtonSecondary } from "../../buttons/Button";
import ButtonGroup from "../../buttons/ButtonGroup";
import AuthPageContainer from "../AuthPageContainer";

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
        <AuthPageContainer>
            <ButtonGroup>
                <Button onClick={() => navigate(ERoutes.logIn)}>Log In</Button>
                <ButtonSecondary disabled>Sign Up</ButtonSecondary>
            </ButtonGroup>
            <AuthFormContainer>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack spacing={2} alignItems="center">
                        <TextFieldRUForm
                            fullWidth
                            name="firstName"
                            label="First Name"
                            control={control}
                        />
                        <TextFieldRUForm
                            fullWidth
                            name="lastName"
                            label="Last Name"
                            control={control}
                        />
                        <TextFieldRUForm
                            fullWidth
                            name="email"
                            label="Email"
                            control={control}
                            type="email"
                        />
                        <TextFieldRUForm
                            fullWidth
                            name="password"
                            label="Password"
                            control={control}
                            type="password"
                        />
                        <Button type="submit" >
                            Sign Up
                        </Button>
                    </Stack>
                </form>
            </AuthFormContainer>
        </AuthPageContainer>
    );
});

export default SignUp;
