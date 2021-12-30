import { createTheme } from '@mui/material/styles';

declare module "@mui/material/styles" {
    interface Theme {
        gradient: {
            main: string;
        }
        value: {
            normal: string;
            high: string;
            highest: string;
        };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
        gradient?: {
            main?: string;
        }
        value?: {
            normal?: string;
            high?: string;
            highest?: string;
        };
    }
}

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: "#000",
            light: '#171523',
            contrastText: "#FAFAFA",
        },
        secondary: {
            main: "#2B669A",
            contrastText: "#FAFAFA",
        },
        text: {
            primary: "#FAFAFA",
            secondary: "#FFF",
        },
        success: {
            main: "#2D6B5F",
        },
        warning: {
            main: "#C3AA27",
        },
        error: {
            main: "#8D0B0B",
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
    gradient: {
        main: 'linear-gradient(270.1deg, #153B5C -77.26%, #000000 103.68%)'
    }
});