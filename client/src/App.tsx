import Lines from "./components/lines/Lines";
import Drawer from "./components/nav/Drawer";
import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ERoutes } from "./models/routes";
import { Grid, Hidden, Stack } from "@mui/material";
import { useContext, useState } from "react";
import { drawerWidth } from "./components/nav/DesktopNav";
import { headerHeight } from "./components/nav/MobileNav";
import { Theme, useTheme } from '@mui/material/styles';
import { ETheme } from "./stores/Theme";
import { AuthStoreContext } from "./stores/Auth";
import NavBar from "./components/nav/navBar/NavBar";
/* ======== PAGES ======== */
import HomePage from "./pages/HomePage";

import EditLinePage from "./components/lines/form/edit/EditLinePage";
import SignUp from "./components/auth/SignUp/SignUp";
import AuthRedirect from './components/wrappers/AuthRedirect';
import ResetPassword from "./components/auth/ResetPassword/ResetPassword";
import CheckToken from "./components/auth/CheckToken/CheckToken";
import SetNewPassword from "./components/auth/SetNewPassword/SetNewPassword";
import User from "./components/user/User";
import ScanQrCode from "./components/qrCode/ScanQrCode";
import CreateLine from "./components/lines/form/CreateLine";
import LogIn from "./components/auth/LogIn/LogIn";
import LinePage from "./components/lines/line/LinePage";
import MainLoggedOut from "./components/main/MainLoggedOut";

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  body {
    ${props => props.theme.palette.mode === ETheme.dark ?
    `background: ${props.theme.gradient.main};`
    :
    `
    background-image: url("./resources/background/medline-background.jpg");
    background-repeat: no-repeat;
    background-size: contain;
    backdrop-filter: contrast(0.5);
    `
  }
  }`;


const MainDesktop = styled.div`
  width: calc(100% - ${drawerWidth} - 10px);
  margin-left: auto;
`;
const MainMobile = styled.div<{ close: boolean }>`
  box-shadow: 0px 0px 8px 0px rgb(0 0 0 / 60%);
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  position: absolute;
  top: ${headerHeight};
  left: 0px;
  width: 100vw;
  transition: all 0.3s;
  height: calc(100vh - ${headerHeight});
  ${(props) => (props.close ? `transform: translateY(105%);` : "")}
`;

type TPaperSectionProps = {
};

const MainSection: React.FC<TPaperSectionProps> = ({ children }) => {
  const authStore = useContext(AuthStoreContext);
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      {authStore.isLoggedIn ? <Drawer open={openMenu} setOpen={setOpenMenu} /> : <NavBar />}
      <Hidden mdDown>
        <MainDesktop>
          <Stack>
            {/* <Grid container direction="column" style={{ height: '100%' }}>
              <Grid item style={{ height: '100%' }}>{children}</Grid>
            </Grid> */}
            {children}
          </Stack>
        </MainDesktop>
      </Hidden>
      <Hidden mdUp>
        <MainMobile close={openMenu}>
          <Grid container direction="column">
            <Grid item>{children}</Grid>
          </Grid>
        </MainMobile>
      </Hidden>
    </>
  );
};

const BodyStyled = styled.div<{ theme: Theme }>`
  width: 100vw;
  height: 100vh;
  
  ${props => props.theme.palette.mode === ETheme.dark
    ? 'background-color: rgba(0,0,0,70%);'
    :
    'background-color: rgba(255,255,255,70%);'}
  /* ${props => props.theme.palette.mode === ETheme.dark
    ? 'background: linear-gradient(265.1deg, rgba(0, 0, 0, 0) -16.19%, rgba(0, 0, 0, 0.608664) 46.25%, #000000 119.67%);'
    :
    'background: linear-gradient(265.5deg, rgba(250, 250, 250, 0) 57.94%, #FAFAFA 82.25%);'} */
`;

type TBodyProps = {};

const Body: React.FC<TBodyProps> = ({
  children
}) => {
  const theme = useTheme();
  return (<BodyStyled theme={theme}>{children}</BodyStyled>);
};

function App() {
  const authStore = useContext(AuthStoreContext);
  const theme = useTheme();
  if (authStore.isLoggedIn) {
    return (
      <>
        <GlobalStyle theme={theme} />
        <LoggedInRoutes />
      </>
    );
  }
  return (
    <>
      <GlobalStyle theme={theme} />
      <LoggedOutRoutes />
    </>
  );
}

export default App;


type TLoggedOutRoutesProps = {};

const LoggedOutRoutes: React.FC<TLoggedOutRoutesProps> = () => {
  return (
    <BrowserRouter basename={"/"}>
      <MainLoggedOut>
        <AuthRedirect>
          <Routes>
            <Route path={"/"} element={<HomePage />} />
            <Route path={ERoutes.logIn} element={<LogIn />} />
            <Route path={ERoutes.signUp} element={<SignUp />} />
            <Route path={ERoutes.resetPassword} element={<ResetPassword />} />
            <Route path={ERoutes.checkToken} element={<CheckToken />} />
            <Route path={ERoutes.setPassword} element={<SetNewPassword />} />
          </Routes>
        </AuthRedirect>
      </MainLoggedOut>
    </BrowserRouter>
  );
};

type TLoggedInRoutesProps = {};

const LoggedInRoutes: React.FC<TLoggedInRoutesProps> = () => {
  return (
    <BrowserRouter basename={ERoutes.lines}>
      <AuthRedirect>
        <Routes>
          <Route path={ERoutes.lines} element={<MainSection><Lines /></MainSection>} />
          <Route path={`${ERoutes.lines}/:id`} element={<MainSection><LinePage /></MainSection>} />
          <Route path={ERoutes.create} element={<MainSection><CreateLine /></MainSection>} />
          <Route path={`${ERoutes.edit}/:id`} element={<MainSection><EditLinePage /></MainSection>} />
          <Route path={ERoutes.user} element={<MainSection><User /></MainSection>} />
          <Route path={ERoutes.scarQrCode} element={<MainSection><ScanQrCode /></MainSection>} />
        </Routes>
      </AuthRedirect>
    </BrowserRouter>
  );
};