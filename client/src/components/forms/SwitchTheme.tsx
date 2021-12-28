import { Switch } from "@mui/material";
import { observer } from "mobx-react";
import { useContext } from "react";
import { ETheme, ThemeStoreContext } from "../../stores/Theme";
import { useTheme, Theme } from "@mui/material/styles";
import styled from 'styled-components';

const SwitchStyled = styled(Switch) <{ theme: Theme }>`
    &.MuiSwitch-root{
        width: 61px;
        height: 39px;
        margin-top: 7px;
    }    
    .MuiSwitch-thumb{
        color: ${props => props.theme.palette.primary.contrastText};
        width: 14px;
        height: 14px;
    };
    .MuiSwitch-track{
        background-color: transparent;
        ${props => `border: 0.1px ${props.theme.palette.primary.contrastText} solid;`};
        border: 2px #FAFAFA solid;
        border-radius: 50px;
        transform: translate(-3px, -5.5px);
    }
    .MuiSwitch-switchBase:not(.Mui-checked){
        transform: translateX(2px);
    }
`

type TSwitchThemeProps = {};

const SwitchTheme: React.FC<TSwitchThemeProps> = observer(() => {
    const themeStore = useContext(ThemeStoreContext);
    const theme = useTheme();

    return (
        <SwitchStyled
            theme={theme}
            checked={themeStore.theme === ETheme.dark}
            onChange={() => themeStore.switchTheme()}
            inputProps={{ 'aria-label': 'controlled' }}
        />
    );
});

export default SwitchTheme