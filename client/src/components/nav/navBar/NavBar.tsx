import { Button as ButtonMui, ButtonProps, Grid, Stack, Typography } from "@mui/material";
import LogoName from '../../../resources/logo/MedLine_logo.png'
import SwitchTheme from "../../forms/SwitchTheme";
import styled from 'styled-components';
import { GridProps } from "@material-ui/core";
import { useTheme, Theme } from "@mui/material/styles";
import Button, { ButtonSecondary, TButtonProps } from "../../buttons/Button";

const LinkAStyled = styled.a<{ theme: Theme }>`
    ${props => `color: ${props.theme.palette.primary.contrastText};`}
    text-decoration: none;
    transition: all 0.3s;
    &:hover{
        text-shadow: 1px 0px 6px rgb(255 255 255 / 70%);
    }
`;

type TLinkAProps = {
    href: string;
};

const LinkA: React.FC<TLinkAProps> = ({ children, ...props }) => {
    const theme = useTheme()
    return (<LinkAStyled theme={theme} {...props}>{children}</LinkAStyled>);
};

const GridStyled = styled(Grid) <{ theme: Theme }>`
    height: fit-content;
    top: 0px;
    position: sticky;
    z-index: 1;
    padding: 4px;
    padding-left: 10px;
    padding-right: 10px;
    ${props => `background-color: ${props.theme.palette.primary.main};`}
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

type TGridContainerProps = GridProps;

const GridContainer: React.FC<TGridContainerProps> = ({ children, ...props }) => {
    const theme = useTheme()
    return (<GridStyled container theme={theme} {...props}>{children}</GridStyled>);
};

type TButtonLogInProps = TButtonProps;
const ButtonLogIn: React.FC<TButtonLogInProps> = ({ children, ...props }) => {
    const theme = useTheme();
    return (<Button variant="outlined" style={{ color: theme.palette.primary.contrastText, borderColor: theme.palette.primary.contrastText }} {...props}>{children}</Button>);
};

type TNavBarProps = {};

const NavBar: React.FC<TNavBarProps> = () => {

    return (
        <GridContainer alignItems="center" justifyContent="space-between">
            <Grid item>
                <Stack direction={"row"} alignItems={"center"} justifyContent={"flex-start"} spacing={1}>
                    <img src={LogoName} alt="Logo Name" style={{ maxHeight: '40px' }} />
                    <Typography color="primary.contrastText" style={{ textTransform: 'uppercase', letterSpacing: '1px', fontSize: "20px" }}>MedLine</Typography>
                </Stack>
            </Grid>
            <Grid item>
                <Stack direction={"row"} alignItems={"center"} justifyContent={"space-around"} spacing={5}>
                    <LinkA href="#home">Home</LinkA>
                    <LinkA href="#aboutUs">About us</LinkA>
                    <LinkA href="#contact">Contact</LinkA>
                </Stack>
            </Grid>
            <Grid item>
                <Stack direction={"row"} alignItems={"center"} justifyContent={"space-around"} spacing={5}>
                    <ButtonLogIn>Log In</ButtonLogIn>
                    <ButtonSecondary color="secondary">Create Account</ButtonSecondary>
                </Stack>
            </Grid>
            <Grid item>
                <Stack alignItems={"flex-end"} justifyContent={"center"}>
                    <SwitchTheme />
                </Stack>
            </Grid>
        </GridContainer>
    );
};

export default NavBar