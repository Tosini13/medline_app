import { Id } from "./backend";

export enum ERoutes {
  "lines" = "/lines",
  "create" = "/create",
  "logIn" = "/log-in",
  "signUp" = "/sign-up",
}

export const navigateTo = {
  line: (id: Id) => `${ERoutes.lines}/${id}`,
};
