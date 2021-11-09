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
import { Add, Badge, Logout, FormatLineSpacing } from "@mui/icons-material";
import Hamburger from "../buttons/Hamburger";
import { useNavigate } from "react-router";
import { ERoutes } from "../../models/routes";

type TMenuElementProps = {
  onClick?: () => void;
  Icon: any;
  text: string;
};

const MenuElement: React.FC<TMenuElementProps> = ({ onClick, Icon, text }) => {
  const ListItemContainer: React.FC = onClick
    ? ({ children }) => (
        <ListItem button onClick={onClick}>
          {children}
        </ListItem>
      )
    : ({ children }) => <ListItem>{children}</ListItem>;
  return (
    <ListItemContainer>
      <ListItemIcon>
        <Icon style={{ color: "white" }} />
      </ListItemIcon>
      <ListItemText primary={text} style={{ color: "white" }} />
    </ListItemContainer>
  );
};

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
          <MenuElement Icon={Badge} text="Admin" />
          <MenuElement
            Icon={FormatLineSpacing}
            text="Lines"
            onClick={() => navigate("/")}
          />
          <MenuElement
            Icon={Add}
            text="Create Line"
            onClick={() => navigate(ERoutes.create)}
          />
        </List>
      </Grid>
      <Grid item>
        <List>
          <MenuElement
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
