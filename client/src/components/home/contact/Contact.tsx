import { Stack } from "@mui/material";
import Section, { ArrowIconButton, ArrowUpImg, ESectionId } from "../Section";
import ContactDetails from "./contactDetails/ContactDetails";
import SiteDetails from "./siteDetails/SiteDetails";
import styled from 'styled-components';
import { Theme, useTheme } from '@mui/material/styles';
import ArrowUp from '../../../resources/icons/arrow_up_white.svg';
import { ETheme } from "../../../stores/Theme";

const ContactDetailsContainer = styled.div<{ theme: Theme }>`
    ${props => props.theme.palette.mode === ETheme.light ?
        `background-color: ${props.theme.palette.primary.main};`
        :
        `background: ${props.theme.gradient.main};`
    }
    color: ${props => props.theme.palette.primary.contrastText};
    flex-grow: 1;
    padding: 20px 10px 40px 10px;
    position: relative;
`;
const SiteDetailsContainer = styled.div<{ theme: Theme }>`
    background-color: ${props => props.theme.palette.secondary.main};
    color: ${props => props.theme.palette.secondary.contrastText};
    height: fit-content;
    padding: 0px 10px 30px 10px;
    position: relative;
`;

type TContactProps = {};

const Contact: React.FC<TContactProps> = () => {
    const theme = useTheme();
    return (
        <section id={ESectionId.contact}>
            <Stack style={{ height: '100%', width: '100%' }}>
                <ContactDetailsContainer theme={theme}>
                    <Stack>
                        <div style={{ alignSelf: 'center' }}>
                            <ArrowIconButton id={ESectionId.howItWorks}>
                                <ArrowUpImg src={ArrowUp} alt="Arrow Up" />
                            </ArrowIconButton>
                        </div>
                        <ContactDetails />
                    </Stack>
                </ContactDetailsContainer>
                <SiteDetailsContainer theme={theme}>
                    <SiteDetails />
                </SiteDetailsContainer>
            </Stack>
        </section>
    );
};

export default Contact