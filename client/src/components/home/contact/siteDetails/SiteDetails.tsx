import { Grid, Stack, Typography } from "@mui/material";
import CreatedBy from "./CreatedBy";
import Download from "./Download";
import SiteMap from "./SiteMap";

type TColumnContainerProps = { title: string };

export const ColumnContainer: React.FC<TColumnContainerProps> = ({ children, title }) => {
    return (
        <Stack spacing={3} alignItems={'center'} style={{ marginTop: '30px' }}>
            <Typography variant="h6" align="center">{title}</Typography>
            <div>
                {children}
            </div>
        </Stack>
    );
};

type TSiteDetailsProps = {};

const SiteDetails: React.FC<TSiteDetailsProps> = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
                <SiteMap />
            </Grid>
            <Grid item xs={12} md={4}>
                <Download />
            </Grid>
            <Grid item xs={12} md={4}>
                <CreatedBy />
            </Grid>
        </Grid>
    );
};

export default SiteDetails