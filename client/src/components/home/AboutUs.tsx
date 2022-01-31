import { Grid, Hidden, Stack, Typography } from '@mui/material';
import DesktopView from '../../resources/background/views/desktop-view.svg'
import TabletView from '../../resources/background/views/tablet-view.svg'
import Section, { ESectionId } from './Section';
import { Paragraph } from './Home';
import MedLineImg from '../utils/components/Logo/MedLineImg';

type TAboutUsProps = {};

const AboutUs: React.FC<TAboutUsProps> = () => {
    return (
        <Section id={ESectionId.aboutUs} nextId={ESectionId.howItWorks} prevId={ESectionId.home}>
            <Grid container alignItems={'center'} style={{ height: '100%', flexGrow: 1 }}>
                <Grid item xs={12} md={6}>
                    <Stack spacing={3} alignItems={"center"}>
                        <Stack direction="row" alignItems={"center"} justifyContent={"flex-start"} spacing={2}>
                            <MedLineImg />
                            <Typography color="text.primary" variant="h4">About Us</Typography>
                        </Stack>
                        <Paragraph color="text.primary" align='justify'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Paragraph>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6} style={{ alignSelf: 'stretch', marginTop: '20px', position: 'relative' }}>
                    <Stack alignItems={"center"}>
                        <img src={DesktopView} alt="Desktop view" style={{ height: '100%', maxWidth: '100%', width: '400px' }} />
                        <Hidden mdDown>
                            <img src={TabletView} alt="Tablet view" style={{
                                height: '400px', maxWidth: '100%', position: 'absolute', bottom: '0px', right: '10px',
                                transform: 'translateY(70%)',
                                zIndex: 1
                            }} />
                        </Hidden>
                    </Stack>
                </Grid>
            </Grid>
        </Section>
    );
};

export default AboutUs