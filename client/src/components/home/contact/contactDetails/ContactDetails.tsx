import { Grid, List, Stack, Typography } from "@mui/material";
import ListElement from "../../../reusable/list/ListElement";
import { Phone, Email, LocationCity } from "@mui/icons-material";
import MedLineLogo from '../../../../resources/logo/MedLine_logo_white.svg'
import ContactChat from './ContactChat';

type TContactDetailsProps = {};

const ContactDetails: React.FC<TContactDetailsProps> = () => {
    return (
        <div>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <div style={{ marginTop: '30px' }}>
                        <Stack spacing={4} alignItems={'center'}>
                            <Stack direction="row" alignItems={"center"} spacing={2}>
                                <img src={MedLineLogo} alt="MedLine logo" style={{ height: '30px' }} />
                                <Typography variant="h4">Contact</Typography>
                            </Stack>
                            <List>
                                <ListElement text="+48 696 993 916" Icon={<Phone style={{ color: 'white' }} />} style={{ marginTop: '15px' }} />
                                <ListElement text="jbartos13@gmail.com" Icon={<Email style={{ color: 'white' }} />} style={{ marginTop: '15px' }} />
                                <ListElement text="Jana Kowalskiego 36/5, Szczecin" Icon={<LocationCity style={{ color: 'white' }} />} style={{ marginTop: '15px' }} />
                            </List>
                        </Stack>
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div style={{ marginTop: '50px' }}>
                        <ContactChat />
                    </div>
                </Grid>
            </Grid>
        </div>);
};

export default ContactDetails