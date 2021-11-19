import { Grid, IconButton } from "@mui/material";
import Hamburger from "../buttons/Hamburger";
import styled from "styled-components";
import Menu from "./Menu";
import { Close } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";
import NavTitle from "./mobile/NavTitle";

export const headerHeight = "60px";
const DivMuiMobileStyled = styled.div`
  height: 100vh;
  padding-top: 5px;
`;

type TMobileNavProps = {
  setOpen: (open: boolean) => void;
  open: boolean;
};

const MobileNav: React.FC<TMobileNavProps> = ({ open, setOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isMain = location.pathname === "/";
  const args = location.pathname.split("/");
  console.log("args", args);
  console.log("args.length", args.length);

  const id = args[args.length - 1];

  return (
    <DivMuiMobileStyled>
      <Grid container direction="column" style={{ height: "100%" }}>
        <Grid item style={{ height: headerHeight }}>
          <Grid container justifyContent="space-between">
            <Grid item xs={2}>
              {!isMain ? (
                <IconButton onClick={() => navigate("/")}>
                  <Close style={{ color: "white" }} />
                </IconButton>
              ) : null}
            </Grid>
            <Grid item>
              <NavTitle isMain={isMain} id={id} />
            </Grid>
            <Grid item xs={2}>
              <Hamburger open={open} toggleOpen={() => setOpen(!open)} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ flexGrow: 1 }}>
          <Menu handleClose={() => setOpen(false)} />
        </Grid>
      </Grid>
    </DivMuiMobileStyled>
  );
};

export default MobileNav;