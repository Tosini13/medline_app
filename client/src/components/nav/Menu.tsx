import { List, Grid } from "@mui/material";
import {
  Add,
  Badge,
  Logout,
  FormatLineSpacing,
  Info,
  Login,
  AppRegistration
} from "@mui/icons-material";
import { useNavigate } from "react-router";
import { ERoutes } from "../../models/routes";
import ListElement from "../reusable/list/ListElement";
import { TGetCurrentUserResult, useGetCurrentUser } from "../../queries/users/getCurrentUser";

type TMenuProps = {
  handleClose: () => void;
};

const Menu: React.FC<TMenuProps> = ({ handleClose }) => {
  const data = useGetCurrentUser();
  const user = data?.data;

  if (user) {
    return (<MenuLoggedIn handleClose={handleClose} user={user} />)
  }
  return (<MenuLoggedOut handleClose={handleClose} />)

};

export default Menu;


type TMenuLoggedInProps = {
  handleClose: () => void;
  user: TGetCurrentUserResult;
};

const MenuLoggedIn: React.FC<TMenuLoggedInProps> = ({ handleClose, user }) => {
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
            text={user?.firstName + " " + user?.lastName}
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
            onClick={() => handleChooseOption(() => {
              console.log('localStorage.getItem("token")', localStorage.getItem('token'));
              localStorage.removeItem('token');
              console.log('localStorage.getItem("token")', localStorage.getItem('token'));

              navigate(ERoutes.logIn);
            })}
          />
        </List>
      </Grid>
    </Grid>
  );
};


type TMenuLoggedOutProps = {
  handleClose: () => void;
};

const MenuLoggedOut: React.FC<TMenuLoggedOutProps> = ({ handleClose }) => {
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
            text="Logged Out"
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
            Icon={<Login style={{ color: "white" }} />}
            text="Log In"
            onClick={() => handleChooseOption(() => navigate(ERoutes.logIn))}
          />
          <ListElement
            Icon={<AppRegistration style={{ color: "white" }} />}
            text="Sign Up"
            onClick={() => handleChooseOption(() => navigate(ERoutes.signUp))}
          />
        </List>
      </Grid>
    </Grid>
  );
};