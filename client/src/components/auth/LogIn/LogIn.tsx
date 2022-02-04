import React, { useContext } from "react";
import { observer } from "mobx-react";
import { AuthStoreContext, TLogInStoreParams } from "../../../stores/Auth";

import { Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import { TextFieldRUForm } from "../../forms/TextField";
import { useNavigate } from "react-router";
import { ERoutes } from "../../../models/routes";
import { AuthFormContainer } from "../AuthFormContainer";
import { LinkAuth } from "../../buttons/Links";
import Button, { ButtonSecondary } from "../../buttons/Button";
import ButtonGroup from "../../buttons/ButtonGroup";
import AuthPageContainer from "../../layout/auth/AuthPageContainer";
import useAsync from "../../../helpers/useAsync";
import { LoadingIcon } from "../../forms/Buttons";
import { Login } from "@mui/icons-material";

type TLoginForm = {
  email: string;
  password: string;
};

type TLogInProps = {};

const LogIn: React.FC<TLogInProps> = observer(() => {
  const { isProcessing, execute } = useAsync();
  const authStore = useContext(AuthStoreContext);
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm<TLoginForm>();

  const onSubmit = React.useCallback(
    async (data: TLoginForm) => {
      const logInParams: TLogInStoreParams = {
        email: data.email,
        password: data.password,
        successCallBack: () => navigate("/"),
      };

      try {
        await execute(authStore.logIn(logInParams));
      } catch (e) {
        console.error(e);
      }
    },
    [authStore, navigate, execute]
  );

  return (
    <AuthPageContainer>
      <ButtonGroup>
        <ButtonSecondary disabled>Log In</ButtonSecondary>
        <Button onClick={() => navigate(ERoutes.signUp)}>Sign Up</Button>
      </ButtonGroup>
      <AuthFormContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack
            spacing={2}
            alignItems={"center"}
            style={{ width: "300px", maxWidth: "90vw" }}
          >
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
            <Button
              type="submit"
              startIcon={isProcessing ? <LoadingIcon /> : <Login />}
              disabled={isProcessing}
            >
              Log In
            </Button>
          </Stack>
        </form>
      </AuthFormContainer>
      <Stack spacing={2}>
        <LinkAuth to={ERoutes.resetPassword} color="text.primary">
          I forgot password
        </LinkAuth>
      </Stack>
    </AuthPageContainer>
  );
});

export default LogIn;
