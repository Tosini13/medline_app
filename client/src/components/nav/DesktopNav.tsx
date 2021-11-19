import DrawerMui from "@mui/material/Drawer";
import styled from "styled-components";
import Menu from "./Menu";

export const drawerWidth = "250px";

const DrawerMuiStyled = styled(DrawerMui)`
  .MuiPaper-root {
    background-color: transparent;
    border: none;
    min-width: ${drawerWidth};
  }
`;

type TDesktopNavProps = {
  setOpen: (open: boolean) => void;
  open: boolean;
};

const DesktopNav: React.FC<TDesktopNavProps> = ({ open, setOpen }) => {
  return (
    <DrawerMuiStyled variant="permanent" open={true}>
      <Menu handleClose={() => setOpen(false)} />
    </DrawerMuiStyled>
  );
};

export default DesktopNav;
