import React, { useContext, useMemo } from "react";
import { action, makeObservable, observable } from "mobx";
import { lightTheme } from "../style/theme";
import { darkTheme } from "../style/darkTheme";
import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { observer } from "mobx-react";

const THEME_LOCAL_STORAGE = 'medLine-theme';
export enum ETheme {
    dark = "dark",
    light = "light",
}

class Theme {

    theme: ETheme;

    switchTheme() {
        const lastTheme = localStorage.getItem(THEME_LOCAL_STORAGE);
        const newTheme = lastTheme !== ETheme.dark ? ETheme.dark : ETheme.light;
        localStorage.setItem(THEME_LOCAL_STORAGE, newTheme);
        this.theme = newTheme;
    }

    get getMuiTheme() {
        if (this.theme === ETheme.dark) {
            return darkTheme;
        }
        return lightTheme;
    }

    constructor() {
        this.theme = localStorage.getItem(THEME_LOCAL_STORAGE) as ETheme | undefined ?? ETheme.light;
        makeObservable(this, {
            theme: observable,
            switchTheme: action,
        });
    }
}

const themeStore = new Theme();
export const ThemeStoreContext = React.createContext(themeStore);
export const ThemeStoreProvider: React.FC<{}> = ({ children }) => {
    return (
        <ThemeStoreContext.Provider value={themeStore}>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </ThemeStoreContext.Provider>
    );
};


type TThemeProviderProps = {};

const ThemeProvider: React.FC<TThemeProviderProps> = observer(({ children }) => {
    const themeStore = useContext(ThemeStoreContext);

    return (<MuiThemeProvider theme={themeStore.getMuiTheme}>{children}</MuiThemeProvider>);
});