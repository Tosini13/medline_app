import { ButtonGroup as MuiButtonGroup, ButtonGroupProps } from "@mui/material";
import styled from 'styled-components';
import { Theme, useTheme } from '@mui/material/styles';

export const ButtonGroupStyled = styled(MuiButtonGroup) <{ theme: Theme }>`
button{
    padding: 15px 20px;
}
button.Mui-disabled{
    background-color: ${props => props.theme.palette.primary.main};
    color: ${props => props.theme.palette.primary.contrastText};
    font-weight: 700;
}
button:not(.Mui-disabled){
    background-color: ${props => props.theme.palette.secondary.main};
    color: ${props => props.theme.palette.secondary.contrastText};
}
button:first-child{
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;
}
button:last-child{
    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;
}
`

type TButtonGroupProps = ButtonGroupProps;

const ButtonGroup: React.FC<TButtonGroupProps> = ({ children, ...props }) => {
    const theme = useTheme();
    return (<ButtonGroupStyled disableElevation variant="contained" theme={theme} {...props}>{children}</ButtonGroupStyled>);
};

export default ButtonGroup;
