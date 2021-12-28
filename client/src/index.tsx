import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthStoreProvider } from './stores/Auth';

import { LocalizationProvider } from "@mui/lab";
import DateAdapter from "@mui/lab/AdapterDateFns";
import { StyledEngineProvider } from "@mui/material/styles";
import { SnackbarProvider } from "notistack";
import { ThemeStoreProvider } from "./stores/Theme";

ReactDOM.render(
  <AuthStoreProvider>
    <SnackbarProvider>
      <LocalizationProvider dateAdapter={DateAdapter}>
        <ThemeStoreProvider>
          <StyledEngineProvider injectFirst>
            <App />
          </StyledEngineProvider>
        </ThemeStoreProvider>
      </LocalizationProvider>
    </SnackbarProvider>
  </AuthStoreProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
