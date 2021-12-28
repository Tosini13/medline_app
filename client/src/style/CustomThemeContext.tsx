import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { lightTheme } from "./theme";
import { darkTheme } from "./darkTheme";

const THEME_LOCAL_STORAGE = 'medLine-theme';
export enum ETheme {
  dark = "dark",
  light = "light",
}

const themes = {
  light: lightTheme,
  dark: darkTheme,
};

export function getTheme(theme: ETheme) {
  return themes[theme];
}

export const CustomThemeContext = React.createContext({
  currentTheme: ETheme.dark,
  setTheme: (name: ETheme) => { },
});

export const CustomThemeProvider: React.FC<{}> = ({ children }) => {
  const currentTheme =
    (localStorage.getItem(THEME_LOCAL_STORAGE) as ETheme) || ETheme.dark;

  const [themeName, _setThemeName] = useState<ETheme>(currentTheme);

  const theme = getTheme(themeName);

  const setThemeName = (name: ETheme) => {
    console.log(name);
    localStorage.setItem(THEME_LOCAL_STORAGE, name);
    _setThemeName(name);
  };

  const contextValue = {
    currentTheme: themeName as ETheme,
    setTheme: setThemeName,
  };

  console.log('theme', theme);

  return (
    <CustomThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
};

export default CustomThemeProvider;