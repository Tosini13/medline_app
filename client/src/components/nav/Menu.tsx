import { List, Grid } from "@mui/material";
import MedLineIcon from '../../resources/logo/MedLine_logo.png';
import {
  Add,
  QrCode,
  AccountCircle,
  Logout,
  FormatLineSpacing,
  Info,
  Login,
  AppRegistration,
  ContactPage,
  LightMode,
  DarkMode
} from "@mui/icons-material";
import { useNavigate } from "react-router";
import { ERoutes } from "../../models/routes";
import ListElement from "../reusable/list/ListElement";
import { useGetCurrentUser } from "../../queries/users/getCurrentUser";
import { observer } from "mobx-react";
import { useContext } from "react";
import { AuthStoreContext } from "../../stores/Auth";
import { LoadingIcon } from "../forms/Buttons";
import { lightTheme } from "../../style/theme";
import ListMenuElement, { ListMenuContainer } from "../reusable/list/ListMenuElement";
import { ETheme, ThemeStoreContext } from "../../stores/Theme";
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
  const themeStore = useContext(ThemeStoreContext);

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
        <ListMenuContainer>
          <ListMenuElement
            Icon={<img src={MedLineIcon} alt="MedLine icon" style={{ maxWidth: '40px', cursor: 'pointer' }} onClick={() => handleChooseOption(() => navigate(ERoutes.home))} />}
          />
          <ListMenuElement
            Icon={user ? <AccountCircle style={{ color: "white" }} /> : <LoadingIcon style={{ color: lightTheme.palette.secondary.contrastText }} />}
            text={user ? `${user.firstName} ${user.lastName}` : ' ... '}
          />
          <ListMenuElement
            Icon={<ContactPage style={{ color: "white" }} />}
            text="User Details"
            onClick={() => handleChooseOption(() => navigate(ERoutes.user))}
          />
          <ListMenuElement
            Icon={<FormatLineSpacing style={{ color: "white" }} />}
            text="Lines"
            onClick={() => handleChooseOption(() => navigate(ERoutes.lines))}
          />
          <ListMenuElement
            Icon={<Add style={{ color: "white" }} />}
            text="Create Line"
            onClick={() => handleChooseOption(() => navigate(ERoutes.create))}
          />
          <ListMenuElement
            Icon={<QrCode style={{ color: "white" }} />}
            text="Scan QR Code"
            onClick={() => handleChooseOption(() => navigate(ERoutes.scarQrCode))}
          />
        </ListMenuContainer>
      </Grid>
      <Grid item>
        <ListMenuContainer>
          <ListMenuElement
            Icon={themeStore.theme === ETheme.dark ? <LightMode style={{ color: "white" }} /> : <DarkMode style={{ color: "white" }} />}
            text={themeStore.theme === ETheme.dark ? 'Light Mode' : 'Dark Mode'}
            onClick={() => themeStore.switchTheme()}
          />
          <ListMenuElement
            Icon={<Info style={{ color: "white" }} />}
            text={`Version ${process.env.REACT_APP_VERSION}`}
          />
          <ListMenuElement
            Icon={<Logout style={{ color: "white" }} />}
            text="Log out"
            onClick={() => handleChooseOption(() => {
              authStore.logOut({ successCallBack: () => navigate(ERoutes.logIn) });
            })}
          />
        </ListMenuContainer>
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