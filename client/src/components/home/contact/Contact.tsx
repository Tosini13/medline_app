import { Stack } from "@mui/material";
import Section, { ArrowIconButton, ArrowImg, ESectionId } from "../Section";
import ContactDetails from "./ContactDetails";
import SiteDetails from "./SiteDetails";
import styled from 'styled-components';
import { Theme, useTheme } from '@mui/material/styles';
import ArrowUp from '../../../resources/icons/arrow_up_white.svg';

const ContactDetailsContainer = styled.div<{ theme: Theme }>`
    background-color: ${props => props.theme.palette.primary.main};
    color: ${props => props.theme.palette.primary.contrastText};
    flex-grow: 1;
    padding: 20px 0px;
    position: relative;
    &::before{
        content: "";
        position: absolute;
        width: 200px;
        height: 100%;
        top: 0px;
        left: 0px;
        background-color: ${props => props.theme.palette.primary.main};
        transform: translateX(-100%);
    }
    &::after{
        content: "";
        position: absolute;
        width: 116px;
        height: 100%;
        top: 0px;
        right: 1px;
        background-color: ${props => props.theme.palette.primary.main};
        transform: translateX(100%);
    }
`;
const SiteDetailsContainer = styled.div<{ theme: Theme }>`
    background-color: ${props => props.theme.palette.secondary.main};
    color: ${props => props.theme.palette.secondary.contrastText};
    height: fit-content;
    padding: 20px 0px;
    position: relative;
    &::before{
        content: "";
        position: absolute;
        width: 200px;
        height: 100%;
        top: 0px;
        left: 0px;
        background-color: ${props => props.theme.palette.secondary.main};
        transform: translateX(-100%);
    }
    &::after{
        content: "";
        position: absolute;
        width: 116px;
        height: 100%;
        top: 0px;
        right: 1px;
        background-color: ${props => props.theme.palette.secondary.main};
        transform: translateX(100%);
    }
`;

type TContactProps = {};

const Contact: React.FC<TContactProps> = () => {
    const theme = useTheme();
    return (
        <Section id={ESectionId.contact}>
            <Stack style={{ height: '100%', width: '100%' }}>
                <ContactDetailsContainer theme={theme}>
                    <Stack>
                        <div style={{ alignSelf: 'center' }}>
                            <ArrowIconButton id={ESectionId.aboutUs}>
                                <ArrowImg src={ArrowUp} alt="Arrow Up" />
                            </ArrowIconButton>
                        </div>
                        <ContactDetails />
                    </Stack>
                </ContactDetailsContainer>
                <SiteDetailsContainer theme={theme}>
                    <SiteDetails />
                </SiteDetailsContainer>
            </Stack>
        </Section>
    );
};

export default Contact