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
    DarkMode,
    Home
} from "@mui/icons-material";
import { IconButton, Stack, Typography } from "@mui/material";
import { useState } from "react";
import styled from 'styled-components';
import Hamburger from "../../buttons/Hamburger";

const IconButtonStyled = styled(IconButton)``;

const MainNavStyled = styled.div`
    background-color: black;
    border-bottom-left-radius: 100px;
    border-bottom-right-radius: 100px;
    color: white;
    padding: 10px 90px;
    width: 0px;
`;

type TNavBarMobileProps = {};

const NavBarMobile: React.FC<TNavBarMobileProps> = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav>
            <Stack direction="row" justifyContent={"space-between"} style={{ maxWidth: '350px', margin: 'auto' }}>
                <div>
                    <IconButtonStyled>
                        <Login />
                    </IconButtonStyled>
                </div>
                <MainNavStyled>
                    <Stack alignItems={"center"} spacing={1}>
                        <Typography>Home</Typography>
                        <Home />
                    </Stack>
                </MainNavStyled>
                <div>
                    <IconButtonStyled onClick={() => setOpen(!open)}>
                        <Hamburger open={open} toggleOpen={() => { }} />
                    </IconButtonStyled>
                </div>
            </Stack>
        </nav>
    );
};

export default NavBarMobile