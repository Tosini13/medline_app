import { IconButton, Stack, Typography } from "@mui/material";
import { drawerWidth } from "../nav/DesktopNav";
import ArrowUp from '../../resources/icons/arrow_up.svg';
import ArrowUpWhite from '../../resources/icons/arrow_up_white.svg';
import ArrowDown from '../../resources/icons/arrow_down.svg';
import styled from 'styled-components';
import { Box } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import { ETheme } from "../../stores/Theme";

export const ArrowUpImg = styled.img`
    height: 15px;
`;

export const ArrowDownImg = styled.img`
    height: 15px;
    transform: rotate(180deg);
`;

type TArrowIconButtonProps = {
    id: ESectionId;
};

export const ArrowIconButton: React.FC<TArrowIconButtonProps> = ({ children, id }) => {
    return (
        <a href={`#${id}`} style={{ textDecoration: 'none', zIndex: 2 }}>
            <IconButton style={{ height: '45px', width: '45px' }}>
                {children}
            </IconButton>
        </a>
    );
};

export const StackStyled = styled(Stack)`
    min-height: 100vh;
    padding-top: 59px;
    padding-bottom: 5px;
    width: 100%;
    box-sizing: border-box;
`;

export enum ESectionId {
    home = 'home',
    aboutUs = 'aboutUs',
    howItWorks = 'howItWorks',
    contact = 'contact',
}

type TSectionProps = {
    id: ESectionId;
    nextId?: ESectionId;
    prevId?: ESectionId;
};

const Section: React.FC<TSectionProps> = ({ children, id, nextId, prevId }) => {
    const theme = useTheme();
    const isLight = theme.palette.mode === ETheme.light;
    return (
        <section id={id}>
            <Box px={{ xs: 1, sm: 3, md: 6 }}>
                <StackStyled alignItems={"center"}>
                    {prevId &&
                        <ArrowIconButton id={prevId}>
                            <ArrowUpImg src={isLight ? ArrowUp : ArrowUpWhite} alt="Arrow Up" />
                        </ArrowIconButton>}
                    <Stack style={{ flexGrow: 1, width: '100%' }} alignItems={"center"}>
                        {children}
                    </Stack>
                    {nextId &&
                        <ArrowIconButton id={nextId}>
                            <ArrowDownImg src={isLight ? ArrowUp : ArrowUpWhite} alt="Arrow Down" />
                        </ArrowIconButton>
                    }
                </StackStyled>
            </Box>
        </section >
    );
};

export default Section