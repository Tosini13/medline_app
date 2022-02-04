import styled from "styled-components";
import NavBar from "../nav/navBar/NavBar";

const MainDesktop = styled.main`
  min-height: calc(100vh - 54px);
  display: flex;
  flex-direction: column;
`;
const MainMobile = styled.main<{ close: boolean }>``;

type TMainLoggedOutProps = {};

const MainLoggedOut: React.FC<TMainLoggedOutProps> = ({ children }) => {
  return (
    <>
      <NavBar />
      <MainDesktop>{children}</MainDesktop>
    </>
  );
};

export default MainLoggedOut;
