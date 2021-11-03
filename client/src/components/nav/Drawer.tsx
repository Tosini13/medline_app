import { useState } from "react";
import DrawerMui from "@mui/material/Drawer";
import {
  List,
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText,
  Hidden,
} from "@mui/material";
import { Add, Badge, Logout } from "@mui/icons-material";
import Hamburger from "../buttons/Hamburger";

type TMenuProps = {};

const Menu: React.FC<TMenuProps> = () => {
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
          <ListItem>
            <ListItemIcon>
              <Badge style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Admin" style={{ color: "white" }} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Add style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Create Line" style={{ color: "white" }} />
          </ListItem>
        </List>
      </Grid>
      <Grid item>
        <List>
          <ListItem button>
            <ListItemIcon>
              <Logout style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Log out" style={{ color: "white" }} />
          </ListItem>
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
