import React, { useContext } from "react";
import { observer } from 'mobx-react';
import { AuthStoreContext, TLogInStoreParams } from "../../../stores/Auth";

import { Grid, Stack, Typography, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { TextFieldRUForm } from "../../forms/TextField";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { ERoutes } from '../../../models/routes';
import AuthFormContainer from "../AuthFormContainer";

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
    <Grid container alignItems="center" justifyContent="center" style={{ height: '100%' }}>
      <Grid item>
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
          <Link to={ERoutes.resetPassword}>
            I forgot password
          </Link>
          <Link to={ERoutes.signUp}>
            I don't have an account yet
          </Link>
        </Stack>
      </Grid>
    </Grid>
  );
});

export default LogIn;
