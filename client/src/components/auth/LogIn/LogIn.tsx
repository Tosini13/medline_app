import { Grid, Paper, Stack, Typography, Button } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { TextFieldRUForm } from "../../forms/TextField";
import { logIn, TLogInParams } from "../../../queries/auth/login";
import { useNavigate } from "react-router";

type TLoginForm = {
  email: string;
  password: string;
}

type TLogInProps = {};

const LogIn: React.FC<TLogInProps> = () => {
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm<TLoginForm>();

  const onSubmit = async (data: TLoginForm) => {
    console.log('data', data);

    const logInParams: TLogInParams = {
      email: data.email,
      password: data.password
    };

    try {
      const res = await logIn(logInParams);
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
              <Button>
                I forgot password
              </Button>
              <Button>
                I don't have account yet
              </Button>
              <Button type="submit">
                Log In
              </Button>
            </Stack>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default LogIn;
