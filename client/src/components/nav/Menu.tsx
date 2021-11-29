import { List, Grid } from "@mui/material";
import {
  Add,
  AccountCircle,
  Logout,
  FormatLineSpacing,
  Info,
  Login,
  AppRegistration,
  ContactPage
} from "@mui/icons-material";
import { useNavigate } from "react-router";
import { ERoutes } from "../../models/routes";
import ListElement from "../reusable/list/ListElement";
import { useGetCurrentUser } from "../../queries/users/getCurrentUser";
import { observer } from "mobx-react";
import { useContext } from "react";
import { AuthStoreContext } from "../../stores/Auth";
import { LoadingIcon } from "../forms/Buttons";
import { theme } from "../../style/theme";
type TMenuProps = {
  handleClose: () => void;
};

const Menu: React.FC<TMenuProps> = observer(({ handleClose }) => {

  const authStore = useContext(AuthStoreContext);

  if (authStore.isLoggedIn) {
    return (<MenuLoggedIn handleClose={handleClose} />)
  }
  return (<MenuLoggedOut handleClose={handleClose} />)

});

export default Menu;


type TMenuLoggedInProps = {
  handleClose: () => void;
};

const MenuLoggedIn: React.FC<TMenuLoggedInProps> = observer(({ handleClose }) => {
  const authStore = useContext(AuthStoreContext);

  const { response } = useGetCurrentUser();
  const user = response?.data;

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
            Icon={user ? <AccountCircle style={{ color: "white" }} /> : <LoadingIcon style={{ color: theme.palette.secondary.contrastText }} />}
            text={user ? `${user.firstName} ${user.lastName}` : ' ... '}
          />
          <ListElement
            Icon={<ContactPage style={{ color: "white" }} />}
            text="User Details"
            onClick={() => handleChooseOption(() => navigate(ERoutes.user))}
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
              authStore.logOut({ successCallBack: () => navigate(ERoutes.logIn) });
            })}
          />
        </List>
      </Grid>
    </Grid>
  );
});


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
            Icon={<AccountCircle style={{ color: "white" }} />}
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