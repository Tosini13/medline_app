import { IconButton, Stack, Typography } from "@mui/material";
import { drawerWidth } from "../nav/DesktopNav";
import ArrowUp from '../../resources/icons/arrow_up.svg';
import ArrowDown from '../../resources/icons/arrow_down.svg';
import styled from 'styled-components';

export const ArrowImg = styled.img`
    height: 10px;
`;

type TArrowIconButtonProps = {
    id: ESectionId;
};

export const ArrowIconButton: React.FC<TArrowIconButtonProps> = ({ children, id }) => {
    return (
        <a href={`#${id}`} style={{ textDecoration: 'none' }}>
            <IconButton style={{ height: '40px', width: '40px' }}>
                {children}
            </IconButton>
        </a>
    );
};


export enum ESectionId {
    home = 'home',
    aboutUs = 'aboutUs',
    contact = 'contact',
}

type TSectionProps = {
    id: ESectionId;
    nextId?: ESectionId;
    prevId?: ESectionId;
};

const Section: React.FC<TSectionProps> = ({ children, id, nextId, prevId }) => {
    return (
        <section id={id} style={{
            height: '100vh',
            padding: `50px calc(${drawerWidth} - 5px) 0px 5px`,
            boxSizing: 'border-box'
        }}>
            <Stack alignItems={"center"} style={{ height: '100%', width: '100%' }}>
                {prevId &&
                    <ArrowIconButton id={prevId}>
                        <ArrowImg src={ArrowUp} alt="Arrow Up" />
                    </ArrowIconButton>}
                <div style={{ flexGrow: 1, width: '100%' }}>
                    {children}
                </div>
                {nextId &&
                    <ArrowIconButton id={nextId}>
                        <ArrowImg src={ArrowDown} alt="Arrow Down" />
                    </ArrowIconButton>
                }
            </Stack>
        </section >
    );
};

export default Section