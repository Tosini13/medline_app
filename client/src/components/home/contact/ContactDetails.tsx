import { Grid, Typography } from "@mui/material";

type TContactDetailsProps = {};

const ContactDetails: React.FC<TContactDetailsProps> = () => {
    return (
        <div>
            <Grid container>
                <Grid item xs={12} md={6}>
                    Contact
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography>
                        In case of emergancy text us below
                    </Typography>
                </Grid>
            </Grid>
        </div>);
};

export default ContactDetails