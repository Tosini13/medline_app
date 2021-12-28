import { Grid, Stack, Typography } from '@mui/material';
import MedLineLogo from '../../resources/logo/MedLine_logo_oneColor.svg'
import DesktopView from '../../resources/background/views/desktop-view.svg'
import TabletView from '../../resources/background/views/tablet-view.svg'
import Section, { ESectionId } from './Section';

type TAboutUsProps = {};

const AboutUs: React.FC<TAboutUsProps> = () => {
    return (
        <Section id={ESectionId.aboutUs} nextId={ESectionId.contact} prevId={ESectionId.home}>
            <Grid container alignItems={'center'}>
                <Grid item xs={12} md={6}>
                    <Stack spacing={3}>
                        <Stack direction="row" alignItems={"center"}>
                            <img src={MedLineLogo} alt="MedLine logo" style={{ height: '30px' }} />
                            <Typography color="text.primary" variant="h4">About Us</Typography>
                        </Stack>
                        <Typography color="text.primary" align='justify' style={{ lineHeight: '35px' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Stack alignItems={"center"}>
                        <img src={DesktopView} alt="Desktop view" style={{ height: '100%', maxWidth: '100%' }} />
                        <img src={TabletView} alt="Tablet view" style={{ height: '200px', maxWidth: '100%' }} />
                    </Stack>
                </Grid>
            </Grid>
        </Section>
    );
};

export default AboutUs