import { Hidden, Stack } from "@mui/material";
import styled from "styled-components";

const StackStyled = styled(Stack)`
  height: 100%;
  flex-grow: 1;
`;

type TFormContainerLayoutProps = {};

const FormContainerLayout: React.FC<TFormContainerLayoutProps> = ({
  children,
}) => {
  return (
    <Stack style={{ height: "100%" }}>
      <Hidden mdDown>
        <StackStyled spacing={6} alignItems="center" justifyContent={"center"}>
          {children}
        </StackStyled>
      </Hidden>
      <Hidden mdUp>
        <StackStyled
          spacing={2}
          alignItems="center"
          justifyContent="space-evenly"
        >
          {children}
        </StackStyled>
      </Hidden>
    </Stack>
  );
};

export default FormContainerLayout;
