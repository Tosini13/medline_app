import Lines from "./components/lines/Lines";
import Drawer, { drawerWidth } from "./components/nav/Drawer";
import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateLine from "./components/lines/form/CreateLine";
import LogIn from "./components/auth/LogIn/LogIn";
import { ERoutes } from "./models/routes";
import LinePage from "./components/lines/line/LinePage";

const Main = styled.div`
  @media screen and (min-width: 900px) {
    width: calc(100% - ${drawerWidth} - 10px);
  }
  margin-left: auto;
`;

function App() {
  return (
    <BrowserRouter basename={"/"}>
      <div style={{ position: "relative", overflowX: "hidden" }}>
        <Drawer />
        <Main>
          <Routes>
            <Route path={"/"} element={<Lines />} />
            <Route path={`${ERoutes.lines}/:id`} element={<LinePage />} />
            <Route path={ERoutes.create} element={<CreateLine />} />
            <Route path={ERoutes.logIn} element={<LogIn />} />
          </Routes>
        </Main>
      </div>
    </BrowserRouter>
  );
}

export default App;
