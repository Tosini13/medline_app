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

type TMenuProps = {};

const Menu: React.FC<TMenuProps> = () => {
  const navigate = useNavigate();
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
          <ListElement Icon={Badge} text="Admin" />
          <ListElement
            Icon={FormatLineSpacing}
            text="Lines"
            onClick={() => navigate("/")}
          />
          <ListElement
            Icon={Add}
            text="Create Line"
            onClick={() => navigate(ERoutes.create)}
          />
        </List>
      </Grid>
      <Grid item>
        <List>
          <ListElement Icon={Info} text="Version 1.0" />
          <ListElement
            Icon={Logout}
            text="Log out"
            onClick={() => navigate(ERoutes.logIn)}
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
          <Menu />
        </DrawerMui>
        <Hamburger open={open} toggleOpen={() => setOpen(!open)} />
      </Hidden>
      <Hidden mdDown>
        <DrawerMui variant="permanent" open={true}>
          <Menu />
        </DrawerMui>
      </Hidden>
    </>
  );
};

export default Drawer;
