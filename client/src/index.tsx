import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { StylesProvider } from "@mui/styles";
import { theme } from "./style/theme";
import { AuthStoreProvider } from './stores/Auth';

import { LocalizationProvider } from "@mui/lab";
import DateAdapter from "@mui/lab/AdapterDateFns";
import { ThemeProvider } from "@mui/material/styles";
import { SnackbarProvider } from "notistack";

ReactDOM.render(
  <AuthStoreProvider>
    <SnackbarProvider>
      <LocalizationProvider dateAdapter={DateAdapter}>
        <ThemeProvider theme={theme}>
          <StylesProvider injectFirst>
            <App />
          </StylesProvider>
        </ThemeProvider>
      </LocalizationProvider>
    </SnackbarProvider>
  </AuthStoreProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
