import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
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
});
