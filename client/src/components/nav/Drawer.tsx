import { useState } from "react";
import DrawerMui from "@mui/material/Drawer";
import { List, Grid, Hidden } from "@mui/material";
import {
  Add,
  Badge,
  Logout,
  FormatLineSpacing,
  Info,
} from "@mui/icons-material";
import Hamburger from "../buttons/Hamburger";
import { useNavigate } from "react-router";
import { ERoutes } from "../../models/routes";
import ListElement from "../reusable/list/ListElement";
import styled from "styled-components";
import { theme } from "../../style/theme";

const DrawerMuiStyled = styled(DrawerMui)`
  .MuiPaper-root {
    background-color: transparent;
    border: none;
  }
`;

const DrawerMuiMobileStyled = styled(DrawerMui)`
  .MuiPaper-root {
    background-color: ${theme.palette.primary.main} !important;
  }
`;

type TMenuProps = {
  handleClose: () => void;
};

const Menu: React.FC<TMenuProps> = ({ handleClose }) => {
  const navigate = useNavigate();
  const handleChooseOption = (handleCallback: () => void) => {
    handleCallback();
    handleClose();
  };
  return (
    <Grid
      container
      direction="column"
      style={{
        height: "100%",
        minWidth: drawerWidth,
      }}
      justifyContent="space-between"
    >
      <Grid item>
        <List>
          <ListElement
            Icon={<Badge style={{ color: "white" }} />}
            text="Admin"
          />
          <ListElement
            Icon={<FormatLineSpacing style={{ color: "white" }} />}
            text="Lines"
            onClick={() => handleChooseOption(() => navigate("/"))}
          />
          <ListElement
            Icon={<Add style={{ color: "white" }} />}
            text="Create Line"
            onClick={() => handleChooseOption(() => navigate(ERoutes.create))}
          />
        </List>
      </Grid>
      <Grid item>
        <List>
          <ListElement
            Icon={<Info style={{ color: "white" }} />}
            text={`Version ${process.env.REACT_APP_VERSION}`}
          />
          <ListElement
            Icon={<Logout style={{ color: "white" }} />}
            text="Log out"
            onClick={() => handleChooseOption(() => navigate(ERoutes.logIn))}
          />
        </List>
      </Grid>
    </Grid>
  );
};

export const drawerWidth = "250px";

type TDrawerProps = {};

const Drawer: React.FC<TDrawerProps> = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Hidden mdUp>
        <DrawerMuiMobileStyled
          variant="temporary"
          open={open}
          onClose={() => setOpen(false)}
          style={{
            backgroundColor: "transparent",
            border: "none",
          }}
        >
          <Menu handleClose={() => setOpen(false)} />
        </DrawerMuiMobileStyled>
        <Hamburger open={open} toggleOpen={() => setOpen(!open)} />
      </Hidden>
      <Hidden mdDown>
        <DrawerMuiStyled variant="permanent" open={true}>
          <Menu handleClose={() => setOpen(false)} />
        </DrawerMuiStyled>
      </Hidden>
    </>
  );
};

export default Drawer;
