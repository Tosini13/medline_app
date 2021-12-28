import DrawerMui from "@mui/material/Drawer";
import { useTheme, Theme } from "@mui/material/styles";
import styled from "styled-components";
import Menu from "./Menu";

export const drawerWidth = "120px";

const DrawerMuiStyled = styled(DrawerMui)`
  .MuiPaper-root {
    background-color: transparent;
    border: none;
    min-width: ${drawerWidth};
  }
`;

const MenuContainerStyled = styled.div<{ theme: Theme }>`
  max-width: ${drawerWidth};
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  height: 100%;
  overflow: hidden;
  ${props => `background-color: ${props.theme.palette.primary.main}`}
`;

type TMenuContainerProps = {};

const MenuContainer: React.FC<TMenuContainerProps> = ({ children }) => {
  const theme = useTheme();
  return (<MenuContainerStyled theme={theme} >{children}</MenuContainerStyled>);
};

type TDesktopNavProps = {
  setOpen: (open: boolean) => void;
  open: boolean;
};

const DesktopNav: React.FC<TDesktopNavProps> = ({ open, setOpen }) => {
  return (
    <DrawerMuiStyled variant="permanent" open={true}>
      <MenuContainer>
        <Menu handleClose={() => setOpen(false)} />
      </MenuContainer>
    </DrawerMuiStyled>
  );
};

export default DesktopNav;
