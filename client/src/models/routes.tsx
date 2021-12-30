import { Id } from "./backend";

export enum ERoutes {
  "home" = "/#home",
  "aboutUs" = "/#aboutUs",
  "howItWorks" = "/#howItWorks",
  "contact" = "/#contact",
  "lines" = "/lines",
  "create" = "/create",
  "edit" = "/edit",
  "user" = "/user",
  "logIn" = "/log-in",
  "signUp" = "/sign-up",
  "resetPassword" = "/reset-password",
  "checkToken" = "/check-token",
  "setPassword" = "/set-password",
  "scarQrCode" = "/scan-qr-code"
}

export const navigateTo = {
  line: (id: Id) => `${ERoutes.lines}/${id}`,
  editLine: (id: Id) => `${ERoutes.edit}/${id}`,
  user: (id: Id) => `${ERoutes.user}/${id}`,
  setPassword: (token: string) => `${ERoutes.setPassword}?token=${token}`,
};
