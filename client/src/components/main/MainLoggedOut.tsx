import styled from "styled-components";
import NavBar from "../nav/navBar/NavBar";
import NavBarMobile from "../nav/navBar/NavBarMobile";

const MainDesktop = styled.main`
`;
const MainMobile = styled.main<{ close: boolean }>`
`;

type TMainLoggedOutProps = {
};

const MainLoggedOut: React.FC<TMainLoggedOutProps> = ({ children }) => {
    return (
        <>
            <NavBar />
            <MainDesktop>
                {children}
            </MainDesktop>
        </>
    );
};

export default MainLoggedOut;