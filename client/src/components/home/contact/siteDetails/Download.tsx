import { Grid, IconButton, Stack, Typography } from "@mui/material";
import { ColumnContainer } from "./SiteDetails";
import {
    Google,
    Apple,
    Instagram,
    Facebook,
    Twitter
} from "@mui/icons-material";
import styled from 'styled-components';
import Button from "../../../buttons/Button";
import { useTheme, Theme } from "@mui/material/styles";
import { ETheme } from "../../../../stores/Theme";

const AppDownloadButtonStyled = styled(Button) <{
    theme: Theme
}>`
    ${props => props.theme.palette.mode === ETheme.light ?
        `background-color: black;
        color: white;`
        :
        `background-color: white;
        color: black;`
    }
    border-radius: 10px;
    cursor: pointer;
`;

type TAppDownloadButtonProps = {
    Icon: React.ReactNode;
    title: string;
};

const AppDownloadButton: React.FC<TAppDownloadButtonProps> = ({ Icon, title }) => {
    const theme = useTheme();
    return (
        <AppDownloadButtonStyled theme={theme}>
            <Stack direction="row" spacing={1}>
                {Icon}
                <Typography>{title}</Typography>
            </Stack>
        </AppDownloadButtonStyled>
    );
};

type TDownloadProps = {};

const Download: React.FC<TDownloadProps> = () => {
    return (
        <ColumnContainer title="Download">
            <Stack spacing={2}>
                <Grid container alignItems={"center"} justifyContent={"space-evenly"} spacing={1}>
                    <Grid item>
                        <AppDownloadButton Icon={<Apple />} title="App Store" />
                    </Grid>
                    <Grid item>
                        <AppDownloadButton Icon={<Google />} title="Google Play" />
                    </Grid>
                </Grid>
                <Stack direction="row" alignItems={"center"} justifyContent={"space-evenly"}>
                    <IconButton>
                        <Instagram />
                    </IconButton>
                    <IconButton>
                        <Facebook />
                    </IconButton>
                    <IconButton>
                        <Twitter />
                    </IconButton>
                </Stack>
            </Stack>
        </ColumnContainer>
    );
};

export default Download