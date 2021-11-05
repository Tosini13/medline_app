import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Theme {
    value: {
      normal: string;
      high: string;
      highest: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    value?: {
      normal?: string;
      high?: string;
      highest?: string;
    };
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
      contrastText: "#313131",
    },
    secondary: {
      main: "#2D6B5F",
      contrastText: "#fff",
    },
    text: {
      primary: "#313131",
      secondary: "#fff",
    },
  },
  typography: {
    fontFamily: ["Content", "Open Sans", "sans-serif"].join(","),
    h4: {
      fontFamily: ["Content", "Raleway", "sans-serif"].join(","),
    },
    h5: {
      fontFamily: ["Content", "Raleway", "sans-serif"].join(","),
    },
  },
  value: {
    normal: "green",
    high: "yellow",
    highest: "red",
  },
});
