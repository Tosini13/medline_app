import { Grid, Typography } from "@mui/material";
import { ERoutes } from "../../../../models/routes";
import { LinkA } from "../../../buttons/Links";
import { ColumnContainer } from "./SiteDetails";

type TSiteMapProps = {};

const SiteMap: React.FC<TSiteMapProps> = () => {
    const pages: Array<{ title: string, link: string }> = [
        { title: 'Home', link: ERoutes.home },
        { title: 'About Us', link: ERoutes.aboutUs },
        { title: 'Create Account', link: ERoutes.signUp },
        { title: 'How it works', link: ERoutes.howItWorks },
        { title: 'Log In', link: ERoutes.logIn },
    ];
    return (
        <ColumnContainer title="Site Map">
            <Grid container spacing={1}>
                {pages.map(page =>
                (<Grid item xs={6} key={page.title}>
                    <LinkA href={page.link}>
                        <span style={{ textAlign: 'center', display: 'block' }}>{page.title}</span>
                    </LinkA>

                </Grid>))}
            </Grid>
        </ColumnContainer>
    );
};

export default SiteMap