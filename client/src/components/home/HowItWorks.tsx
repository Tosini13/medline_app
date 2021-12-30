import { Grid, Hidden, Stack, Typography } from "@mui/material";
import Section, { ESectionId } from "./Section";
import Phones from '../../resources/background/views/phone-view-event.svg';
import styled from 'styled-components';
import { Theme, useTheme } from '@mui/material/styles';
import { Paragraph } from "./Home";

const MockScreenStyled = styled.div<{ theme: Theme }>`
    width: 100%;
    height: 300px;
    background-color: black;
    box-shadow: 0px 0px 7px -2px ${props => props.theme.palette.secondary.main};
    position: relative;
    &::after{
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-25%, -50%);
        border: transparent solid 50px;
        border-left: white 80px solid;
    }
`;

type TMockScreenProps = {};

const MockScreen: React.FC<TMockScreenProps> = () => {
    const theme = useTheme();
    return (<MockScreenStyled theme={theme} />);
};

const ImgStyled = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    max-width: 90%;
    max-height: 90%;
    transform: translate(-50%, -50%);
`;

type THowItWorksProps = {};

const HowItWorks: React.FC<THowItWorksProps> = () => {
    return (
        <Section id={ESectionId.howItWorks} nextId={ESectionId.contact} prevId={ESectionId.aboutUs}>
            <Grid container style={{ height: '100%', flexGrow: 1 }}>
                <Grid item xs={12} md={6}>
                    <Stack spacing={3} justifyContent={"center"} style={{ height: '100%' }}>
                        <Typography color="text.primary" variant="h4" >
                            How it works?
                        </Typography>
                        <Paragraph color="text.primary" align="justify">
                            We prepared a movie to make you better understand our app as well as website and be able to use it faster!
                        </Paragraph>
                        <MockScreen />
                    </Stack>
                </Grid>
                <Hidden mdDown>
                    <Grid item xs={12} md={6} style={{ position: 'relative' }}>
                        <ImgStyled src={Phones} alt="Phones view" />
                    </Grid>
                </Hidden>
            </Grid>
        </Section>
    );
};

export default HowItWorks