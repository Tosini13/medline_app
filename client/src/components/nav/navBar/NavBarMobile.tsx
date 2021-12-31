import { useContext } from "react";
import { useTheme, Theme } from "@mui/material/styles";
import { ETheme, ThemeStoreContext } from "../../../stores/Theme";
import {
    Info,
    Login,
    DarkMode,
    LightMode,
    ContactPage,
    ContactPhone,
    Home,
    OndemandVideo
} from "@mui/icons-material";
import { IconButton, Stack, Typography } from "@mui/material";
import { useState } from "react";
import styled from 'styled-components';
import Hamburger from "../../buttons/Hamburger";
import { ESectionId } from "../../home/Section";
import { ERoutes } from "../../../models/routes";

const NavStyled = styled.nav`
    position: sticky;
    top: 0;
    z-index: 10;
`;

const IconButtonStyled = styled(IconButton) <{ theme: Theme }>`
    z-index: 1;
    box-shadow: 0px 0px 10px -2px rgb(255 255 255 / 30%);
    ${props =>
        `
        background-color: ${props.theme.palette.primary.main};
        color: ${props.theme.palette.primary.contrastText};
        &:hover{
            background-color: ${props.theme.palette.secondary.main};
        }
        `

    }
`;

const RADIUS = 60;

const MainNavStyled = styled.div <{ theme: Theme }>`
    ${props => `background-color: ${props.theme.palette.primary.main};`}
    border-bottom-left-radius: 100px;
    border-bottom-right-radius: 100px;
    color: white;
    position: relative;
    width: ${RADIUS * 2}px;
    height: ${RADIUS}px;
    z-index: 2;
`;

const ScreenCover = styled.div<{ open: boolean }>`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: rgba(0,0,0,0.7);
    ${props => props.open ? '' : 'display: none;'}
`;

type TNavBarMobileProps = {};

const NavBarMobile: React.FC<TNavBarMobileProps> = () => {
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const themeStore = useContext(ThemeStoreContext);

    return (
        <NavStyled>
            <Stack direction="row" justifyContent={"space-between"} style={{ maxWidth: '350px', margin: 'auto' }}>
                <div style={{ marginTop: '3px' }}>
                    <IconButtonStyled theme={theme} onClick={() => themeStore.switchTheme()}>
                        {themeStore.theme === ETheme.light ? <DarkMode /> : <LightMode />}
                    </IconButtonStyled>
                </div>
                <div style={{ position: 'relative' }}>
                    <MainNavStyled theme={theme}>
                        <Stack alignItems={"center"} spacing={1}>
                            <Typography>Home</Typography>
                            <Home />
                        </Stack>
                    </MainNavStyled>
                    <MenuList open={open} />
                </div>
                <div style={{ marginTop: '3px' }}>
                    <IconButtonStyled theme={theme} onClick={() => setOpen(!open)}>
                        <Hamburger open={open} toggleOpen={() => { }} />
                    </IconButtonStyled>
                </div>
            </Stack>
            <ScreenCover open={open} />
        </NavStyled>
    );
};

export default NavBarMobile

const MenuItem = styled(IconButtonStyled) <{
    x: number;
    y: number;
}>`
    position: absolute;
    transition: all 0.3s;
    z-index: 1;
    transform: translateX(0%);

    ${props =>
        `
        top: ${props.x}px;
        left: calc(50% + ${props.y}px - 20px);
        `
    }
`

const getXY = (angle: number) => {
    const PADDING = 20;
    return {
        x: (RADIUS + PADDING / 4) * Math.sin(Math.PI * 2 * angle / 360),
        y: (RADIUS + PADDING) * Math.cos(Math.PI * 2 * angle / 360)
    }
}

type TMenuListProps = { open: boolean; };

const MenuList: React.FC<TMenuListProps> = ({ open }) => {
    const theme = useTheme();
    const items: Array<{
        Icon: JSX.Element;
        url: ERoutes
    }> = [
            { Icon: <Home />, url: ERoutes.home },
            { Icon: <Info />, url: ERoutes.aboutUs },
            { Icon: <OndemandVideo />, url: ERoutes.howItWorks },
            { Icon: <ContactPhone />, url: ERoutes.contact },
            { Icon: <Login />, url: ERoutes.logIn },
        ]

    const angle = 180 / items.length;

    return (
        <>
            {items.map((item, i) => {
                const { x, y } = getXY(angle * (i + 0.5));
                return (
                    <a href={item.url}>
                        <MenuItem theme={theme} x={open ? x : 0} y={open ? y : 0}>
                            {item.Icon}
                        </MenuItem>
                    </a>
                )
            })}
        </>
    );
};
