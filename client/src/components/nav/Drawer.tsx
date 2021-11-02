import React from "react";
import DrawerMui from "@mui/material/Drawer";
import {
  List,
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import { Add, Badge, Logout } from "@mui/icons-material";

type TDrawerProps = {};

const Drawer: React.FC<TDrawerProps> = () => {
  return (
    <DrawerMui variant="permanent" open={true}>
      <Grid
        container
        direction="column"
        style={{
          height: "100%",
          backgroundColor: "#2D6B5F",
          minWidth: "250px",
        }}
        justifyContent="space-between"
      >
        <Grid item>
          <List>
            <ListItem>
              <ListItemIcon>
                <Badge />
              </ListItemIcon>
              <ListItemText primary="Admin" color="secondary" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Add />
              </ListItemIcon>
              <ListItemText primary="Create Line" />
            </ListItem>
          </List>
        </Grid>
        <Grid item>
          <List>
            <ListItem button>
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              <ListItemText primary="Log out" />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </DrawerMui>
  );
};

export default Drawer;
