import { List, Grid } from "@mui/material";
import {
  Add,
  Badge,
  Logout,
  FormatLineSpacing,
  Info,
} from "@mui/icons-material";
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

export default Menu;
