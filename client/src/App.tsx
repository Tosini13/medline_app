import Lines from "./components/lines/Lines";
import Drawer, { drawerWidth } from "./components/nav/Drawer";
import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateLine from "./components/lines/form/CreateLine";
import LogIn from "./components/auth/LogIn/LogIn";
import { ERoutes } from "./models/routes";
import LinePage from "./components/lines/line/LinePage";
import { theme } from "./style/theme";
import { Grid } from "@mui/material";

const Main = styled.div`
  @media screen and (min-width: 900px) {
    width: calc(100% - ${drawerWidth} - 10px);
    height: 100vh;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    box-shadow: 0px 0px 8px 0px rgb(0 0 0 / 60%);
  }
  margin-left: auto;
  background-color: white;
`;

type TPaperSectionProps = {};

const MainSection: React.FC<TPaperSectionProps> = ({ children }) => {
  return (
    <Main>
      <Grid container direction="column">
        <Grid item>{children}</Grid>
      </Grid>
    </Main>
  );
};

function App() {
  return (
    <BrowserRouter basename={"/"}>
      <div
        style={{
          position: "relative",
          overflowX: "hidden",
          backgroundColor: theme.palette.primary.main,
        }}
      >
        <Drawer />
        <MainSection>
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
