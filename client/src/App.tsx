import Lines from "./components/lines/Lines";
import Drawer from "./components/nav/Drawer";
import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateLine from "./components/lines/form/CreateLine";
import LogIn from "./components/auth/LogIn/LogIn";
import { ERoutes } from "./models/routes";
import LinePage from "./components/lines/line/LinePage";
import { theme } from "./style/theme";
import { Grid, Hidden } from "@mui/material";
import { useState } from "react";
import { drawerWidth } from "./components/nav/DesktopNav";
import { headerHeight } from "./components/nav/MobileNav";

const MainDesktop = styled.div`
  width: calc(100% - ${drawerWidth} - 10px);
  height: 100vh;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  box-shadow: 0px 0px 8px 0px rgb(0 0 0 / 60%);
  margin-left: auto;
  background-color: white;
`;
const MainMobile = styled.div<{ close: boolean }>`
  box-shadow: 0px 0px 8px 0px rgb(0 0 0 / 60%);
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  background-color: white;
  position: absolute;
  top: ${headerHeight};
  left: 0px;
  width: 100vw;
  transition: all 0.3s;
  height: calc(100vh - ${headerHeight});
  ${(props) => (props.close ? `transform: translateY(105%);` : "")}
`;

type TPaperSectionProps = {
  openMenu: boolean;
};

const MainSection: React.FC<TPaperSectionProps> = ({ children, openMenu }) => {
  return (
    <>
      <Hidden mdDown>
        <MainDesktop>
          <Grid container direction="column">
            <Grid item>{children}</Grid>
          </Grid>
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

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <BrowserRouter basename={"/"}>
      <div
        style={{
          position: "relative",
          overflowX: "hidden",
          backgroundColor: theme.palette.primary.main,
          height: "100vh", //mobile
          overflow: "hidden", //mobile
        }}
      >
        <Drawer open={openMenu} setOpen={setOpenMenu} />
        <MainSection openMenu={openMenu}>
          <Routes>
            <Route path={"/"} element={<Lines />} />
            <Route path={`${ERoutes.lines}/:id`} element={<LinePage />} />
            <Route path={ERoutes.create} element={<CreateLine />} />
            <Route path={ERoutes.logIn} element={<LogIn />} />
          </Routes>
        </MainSection>
      </div>
    </BrowserRouter>
  );
}

export default App;
