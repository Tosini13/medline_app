import React from "react";

import { Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { TextFieldRUForm } from "../../forms/TextField";
import { Link } from "react-router-dom";
import { ERoutes } from "../../../models/routes";
import { useQuery } from "../../../helpers/useQuery";
import {
  setNewPassword,
  TSetNewPasswordParams,
} from "../../../queries/auth/setNewPassword";
import { AuthFormContainer } from "../AuthFormContainer";
import Button from "../../buttons/Button";
import AuthPageContainer from "../../layout/auth/AuthPageContainer";

type TSetNewPasswordForm = {
  password: string;
  repeatPassword: string;
};

type TSetNewPasswordProps = {};

const SetNewPassword: React.FC<TSetNewPasswordProps> = () => {
  const query = useQuery();
  const token = query.get("token");
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm<TSetNewPasswordForm>();

  const onSubmit = async (data: TSetNewPasswordForm) => {
    if (!token) {
      console.error("Token is required");
      return;
    }

    const signUpParams: TSetNewPasswordParams = {
      password: data.password,
      token,
    };

    try {
      await setNewPassword(signUpParams);
      navigate(ERoutes.logIn);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <AuthPageContainer>
      <AuthFormContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={2}>
            <Typography align="center">Sign Up</Typography>
            <TextFieldRUForm
              name="password"
              label="Password"
              control={control}
              type="password"
            />
            <TextFieldRUForm
              name="repeatPassword"
              label="Repeat Password"
              control={control}
              type="password"
            />
            <Button type="submit">Save</Button>
          </Stack>
        </form>
      </AuthFormContainer>
      <Typography align="center" color="text.primary">
        or
      </Typography>
      <Stack direction="row" spacing={2}>
        <Link to={ERoutes.logIn}>Log In</Link>
      </Stack>
    </AuthPageContainer>
  );
};

export default SetNewPassword;
