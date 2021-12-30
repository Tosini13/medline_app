import { Grid, Stack, Typography } from "@mui/material";
import Phones from '../../resources/background/views/phone-view.svg';

import styled from 'styled-components';
import Section, { ESectionId } from "./Section";

export const Paragraph = styled(Typography)`
    line-height: 35px;
`;

const ImgStyled = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    max-width: 90%;
    max-height: 90%;
    transform: translate(-50%, -50%);
`;

type THomeProps = {};

const Home: React.FC<THomeProps> = () => {
    return (
        <Section id={ESectionId.home} nextId={ESectionId.aboutUs}>
            <Grid container style={{ height: '100%', flexGrow: 1 }}>
                <Grid item xs={12} md={6}>
                    <Stack spacing={6} justifyContent={"center"} style={{ height: '100%' }}>
                        <Typography color="text.primary" variant="h2" textAlign={"center"} fontSize={'75px'} fontWeight={"800"} style={{ textTransform: 'uppercase' }}>
                            Health in <br /> one Hand
                        </Typography>
                        <Paragraph color="text.primary" align="justify">
                            Control Your health in every moment and every place. Keep all needed medical documentation in Your one pocket always when You need it.
                        </Paragraph>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6} style={{ position: 'relative', minHeight: '250px' }}>
                    <ImgStyled src={Phones} alt="Phones view" />
                </Grid>
            </Grid>
        </Section>
    );
};

export default Home