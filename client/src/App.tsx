import Lines from "./components/lines/Lines";
import Drawer, { drawerWidth } from "./components/nav/Drawer";
import styled from "styled-components";

const Main = styled.div`
  @media screen and (min-width: 900px) {
    width: calc(100% - ${drawerWidth} - 10px);
  }
  padding: 5px;
  margin-left: auto;
`;

function App() {
  return (
    <div style={{ position: "relative" }}>
      <Drawer />
      <Main>
        <Lines />
      </Main>
    </div>
  );
}

export default App;
