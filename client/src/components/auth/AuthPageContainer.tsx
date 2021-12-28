
import Logo from '../../resources/logo/MedLine_logo.png';
import DocumentsGraphic from '../../resources/background/medline_graphic_2.svg';

import { Grid, Hidden, Stack, StackProps, Typography } from "@mui/material";
import styled from 'styled-components';
import { hexToRgb } from '../../helpers/calcHexToRGB';
import SwitchTheme from '../forms/SwitchTheme';
import { Theme, useTheme } from '@mui/material/styles';
import { ETheme } from '../../stores/Theme';

const StackContainerStyled = styled(Stack) <{
    theme: Theme
}>`
  ${props => props.theme.palette.mode === ETheme.dark
        ? `background-color: rgba(${hexToRgb(props.theme.palette.primary.main)},0.8);`
        :
        `background-color: rgba(${hexToRgb(props.theme.palette.primary.light)},0.8);`}
    height: 100%;
    box-shadow: 34px 0px 49px rgb(0 0 0 / 50%);
`;

type TStackContainerProps = StackProps;

const StackContainer: React.FC<TStackContainerProps> = ({ children, ...props }) => {
    const theme = useTheme();
    return (<StackContainerStyled {...props} theme={theme}>{children}</StackContainerStyled>);
};

type TAuthPageContainerProps = {};

const AuthPageContainer: React.FC<TAuthPageContainerProps> = ({ children }) => {
    return (
        <Grid container style={{ width: '100vw', height: '100%' }}>
            <Grid item xs={6}>
                <StackContainer alignItems="center" justifyContent="space-around">
                    <img src={Logo} alt="Logo" style={{ maxWidth: '70px', maxHeight: '70px' }} />
                    <Typography color="primary.contrastText" textAlign="center" style={{ margin: '0px 20px' }}>
                        Create own medical line and care of your life by one hand with Medline
                    </Typography>
                    <img src={DocumentsGraphic} alt="Documents graphic" style={{ maxWidth: '90%', maxHeight: '50%' }} />
                </StackContainer>
            </Grid>
            <Grid item xs={6}>
                <Stack style={{ height: '100%' }}>
                    <Stack direction="row" justifyContent="flex-end">
                        <SwitchTheme />
                    </Stack>
                    <Hidden mdDown>
                        <Stack spacing={6} alignItems="center" style={{ height: '100%', flexGrow: 1 }}>
                            {children}
                        </Stack>
                    </Hidden>
                    <Hidden mdUp>
                        <Stack spacing={2} alignItems="center" justifyContent="center" style={{ height: '100%', flexGrow: 1 }}>
                            {children}
                        </Stack>
                    </Hidden>
                </Stack>
            </Grid>
        </Grid>
    );
};

export default AuthPageContainer