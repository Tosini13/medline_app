import { Grid, Hidden, Stack, Typography } from "@mui/material";
import SwitchTheme from "../../forms/SwitchTheme";
import styled from "styled-components";
import { GridProps } from "@material-ui/core";
import { useTheme, Theme } from "@mui/material/styles";
import Button, { ButtonSecondary, TButtonProps } from "../../buttons/Button";
import { LinkA } from "../../buttons/Links";
import { useCallback, useState } from "react";
import { ERoutes } from "../../../models/routes";
import { useNavigate } from "react-router";
import Logo from "../../utils/components/Logo/Logo";
import { ELogoSize } from "../../utils/components/Logo/types";

const NavStyled = styled.nav`
  height: fit-content;
  top: 0px;
  position: sticky;
  z-index: 3;
`;

const GridStyled = styled(Grid)<{ theme: Theme }>`
  padding: 4px;
  padding-left: 10px;
  padding-right: 10px;
  ${(props) => `background-color: ${props.theme.palette.primary.main};`}
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

type TGridContainerProps = GridProps;

const GridContainer: React.FC<TGridContainerProps> = ({
  children,
  ...props
}) => {
  const theme = useTheme();
  return (
    <GridStyled container theme={theme} {...props}>
      {children}
    </GridStyled>
  );
};

type TButtonLogInProps = TButtonProps;
const ButtonLogIn: React.FC<TButtonLogInProps> = ({ children, ...props }) => {
  const theme = useTheme();
  return (
    <Button
      variant="outlined"
      style={{
        color: theme.palette.primary.contrastText,
        borderColor: theme.palette.primary.contrastText,
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

type TNavBarDesktopProps = {};

const NavBarDesktop: React.FC<TNavBarDesktopProps> = () => {
  const navigate = useNavigate();

  const goToLogIn = useCallback(() => {
    navigate(ERoutes.logIn);
  }, [navigate]);

  const goToSignUp = useCallback(() => {
    navigate(ERoutes.signUp);
  }, [navigate]);

  return (
    <NavStyled>
      <GridContainer alignItems="center" justifyContent="space-between">
        <Grid item>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"flex-start"}
            spacing={1}
          >
            <Logo size={ELogoSize.md} />
            <Typography
              color="primary.contrastText"
              style={{
                textTransform: "uppercase",
                letterSpacing: "1px",
                fontSize: "20px",
              }}
            >
              MedLine
            </Typography>
          </Stack>
        </Grid>
        <Grid item>
          <Hidden mdDown>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-around"}
              spacing={5}
            >
              <LinkA href={ERoutes.home}>Home</LinkA>
              <LinkA href={ERoutes.aboutUs}>About us</LinkA>
              <LinkA href={ERoutes.howItWorks}>How it works</LinkA>
              <LinkA href={ERoutes.contact}>Contact</LinkA>
            </Stack>
          </Hidden>
          <Hidden mdUp>
            <Menu />
          </Hidden>
        </Grid>
        <Grid item>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-around"}
            spacing={3}
          >
            <ButtonLogIn onClick={goToLogIn}>Log In</ButtonLogIn>
            <ButtonSecondary color="secondary" onClick={goToSignUp}>
              Create Account
            </ButtonSecondary>
          </Stack>
        </Grid>
        <Grid item>
          <Stack alignItems={"flex-end"} justifyContent={"center"}>
            <SwitchTheme />
          </Stack>
        </Grid>
      </GridContainer>
    </NavStyled>
  );
};

export default NavBarDesktop;

const TypographyStyled = styled(Typography)<{ theme: Theme }>`
  ${(props) => `color: ${props.theme.palette.primary.contrastText};`}
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    text-shadow: 1px 0px 6px rgb(255 255 255 / 70%);
  }
`;

const MenuContainer = styled.div<{ theme: Theme; open?: boolean }>`
  ${(props) => `background-color: ${props.theme.palette.primary.main};`}
  ${(props) => (props.open ? "" : "display: none;")}
    position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translate(-50%, 100%);
  min-width: 120px;
  padding-top: 10px;
  a {
    padding: 10px 0px;
  }
`;

type TMenuProps = {};

const Menu: React.FC<TMenuProps> = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  return (
    <Stack
      alignItems={"center"}
      justifyContent={"center"}
      style={{ position: "relative" }}
      onClick={() => setOpen(!open)}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <TypographyStyled theme={theme}>Menu</TypographyStyled>
      <MenuContainer theme={theme} open={open}>
        <Stack
          alignItems={"center"}
          justifyContent={"space-around"}
          style={{ position: "relative" }}
        >
          <LinkA href="#home">Home</LinkA>
          <LinkA href="#aboutUs">About us</LinkA>
          <LinkA href="#howItWorks">How it works</LinkA>
          <LinkA href="#contact">Contact</LinkA>
        </Stack>
      </MenuContainer>
    </Stack>
  );
};
