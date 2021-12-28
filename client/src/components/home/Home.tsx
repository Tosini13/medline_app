import { Grid, Stack, Typography } from "@mui/material";
import Phone1 from '../../resources/background/phone/Flat_iPhone_1.svg';
import Phone2 from '../../resources/background/phone/Flat_iPhone_2.svg';
import Phones from '../../resources/background/views/phone-view.svg';

import styled from 'styled-components';
import Section, { ESectionId } from "./Section";

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
            <Grid container style={{ height: '100%' }}>
                <Grid item xs={12} md={6}>
                    <Stack spacing={6} justifyContent={"center"} alignItems={"center"} style={{ height: '100%' }}>
                        <Typography color="text.primary" variant="h2" fontSize={'75px'} fontWeight={"800"} style={{ textTransform: 'uppercase' }}>
                            Health in <br /> one Hand
                        </Typography>
                        <Typography color="text.primary" align="justify">
                            Control Your health in every moment and every place. Keep all needed medical documentation in Your one pocket always when You need it.
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6} style={{ position: 'relative' }}>
                    <ImgStyled src={Phones} alt="Phones view" />
                </Grid>
            </Grid>
        </Section>
    );
};

export default Home