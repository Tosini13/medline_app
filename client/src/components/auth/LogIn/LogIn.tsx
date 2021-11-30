import React, { useContext } from "react";
import { observer } from 'mobx-react';
import { AuthStoreContext, TLogInStoreParams } from "../../../stores/Auth";

import { Stack, Typography, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { TextFieldRUForm } from "../../forms/TextField";
import { useNavigate } from "react-router";
import { ERoutes } from '../../../models/routes';
import AuthPageContainer, { AuthFormContainer } from "../AuthFormContainer";
import { LinkAuth } from "../../buttons/Links";

type TLoginForm = {
  email: string;
  password: string;
}

type TLogInProps = {};

const LogIn: React.FC<TLogInProps> = observer(() => {
  const authStore = useContext(AuthStoreContext);
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm<TLoginForm>();

  const onSubmit = async (data: TLoginForm) => {

    const logInParams: TLogInStoreParams = {
      email: data.email,
      password: data.password,
      successCallBack: () => navigate('/')
    };

    try {
      await authStore.logIn(logInParams);
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
              Log In
            </Typography>
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
              Log In
            </Button>
          </Stack>
        </form>
      </AuthFormContainer>
      <Stack direction="row" spacing={2}>
        <LinkAuth to={ERoutes.resetPassword}>
          I forgot password
        </LinkAuth>
        <LinkAuth to={ERoutes.signUp}>
          I don't have an account yet
        </LinkAuth>
      </Stack>
    </AuthPageContainer>
  );
});

export default LogIn;
