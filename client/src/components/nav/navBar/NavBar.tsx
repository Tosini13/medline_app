import { Hidden } from "@mui/material";
import NavBarDesktop from "./NavBarDesktop";
import NavBarMobile from "./NavBarMobile";

type TNavBarProps = {};

const NavBar: React.FC<TNavBarProps> = () => {
    return (
        <>
            <Hidden smDown>
                <NavBarDesktop />
            </Hidden>
            <Hidden smUp>
                <NavBarMobile />
            </Hidden>
        </>
    );
};

export default NavBar