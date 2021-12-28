import { Grid, Stack, Typography } from "@mui/material";
import styled from 'styled-components';

type TListMenuContainerProps = {};

export const ListMenuContainer: React.FC<TListMenuContainerProps> = ({ children }) => {
    return (
        <Grid container direction={"column"} alignItems={"center"}>
            {children}
        </Grid>);
};

const WrapperStyled = styled.div <{ button?: boolean }>`
    width: 100%;
    height: 100%;
    padding: 10px 0px;
    ${props => props.button ?
        `
        transition: all 0.15s;
        cursor: pointer;
        &:hover{
            background-color: rgba(255,255,255,0.1);
        }`
        : ""}
`;

type TListMenuElementProps = {
    onClick?: () => void;
    Icon?: React.ReactNode;
    text?: string;
    color?: string;
};

const ListMenuElement: React.FC<TListMenuElementProps> = ({
    onClick,
    Icon,
    text,
}) => {
    return (
        <Grid item style={{ width: '100%', height: '100%' }}>
            <WrapperStyled button={Boolean(onClick)}>
                <Stack alignItems={"center"} justifyContent={"center"} onClick={onClick}>
                    {Icon && <>{Icon}</>}
                    {text && <Typography align="center" style={{ fontSize: '11px', paddingTop: '5px' }} color="primary.contrastText">{text}</Typography>}
                </Stack>
            </WrapperStyled>
        </Grid>
    );
};

export default ListMenuElement;
