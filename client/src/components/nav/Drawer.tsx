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
        backgroundColor: "#2D6B5F",
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
            text="Version 1.0"
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
        <DrawerMui
          variant="temporary"
          open={open}
          onClose={() => setOpen(false)}
        >
          <Menu handleClose={() => setOpen(false)} />
        </DrawerMui>
        <Hamburger open={open} toggleOpen={() => setOpen(!open)} />
      </Hidden>
      <Hidden mdDown>
        <DrawerMui variant="permanent" open={true}>
          <Menu handleClose={() => setOpen(false)} />
        </DrawerMui>
      </Hidden>
    </>
  );
};

export default Drawer;
