import { TSelectOption } from "../components/forms/controlled/ControlledSelect";

export type Id = string;

export type TResource = {
  path: string;
  name: string;
};

export type TLine = {
  id: Id;
  title: string;
  description?: string;
  value: LINE_VALUE;
  color: string;
  lastUpdate: Date;
  contributions: number;
};

export type TEvent = {
  id: Id;
  title: string;
  description?: string;
  dateTime: Date;
  type: EVENT_TYPE;
  prescriptions?: string[];
  resources?: TResource[];
  line: Id;
};


export type TUser = {
  id: Id;
  firstName?: string;
  lastName?: string;
  dateOfBirth?: Date;
  email: string;
  password: string;
  token: string;
  bloodGroup?: BLOOD_GROUP | null;
  rhesusFactor?: RH_FACTOR | null;
};

export type TUserData = Omit<TUser, "password" | "token">;

export enum LINE_VALUE {
  "NORMAL" = "NORMAL",
  "HIGH_VALUE" = "HIGH_VALUE",
  "HIGHEST_VALUE" = "HIGHEST_VALUE",
}

export enum EVENT_TYPE {
  "APPOINTMENT" = "APPOINTMENT",
  "OCCURRENCE" = "OCCURRENCE",
  "SURGERY" = "SURGERY",
  "TEST" = "TEST",
}

export enum ECheckTokenMessage {
  "TOKEN_VALID" = "TOKEN_VALID",
  "TOKEN_INVALID" = "TOKEN_INVALID",
  "TOKEN_EXPIRED" = "TOKEN_EXPIRED",
}

export enum EResetPasswordMessage {
  "EMAIL_IS_REQUIRED" = "EMAIL_IS_REQUIRED",
  "EMAIL_SENT" = "EMAIL_SENT",
  "EMAIL_SENT_ERROR" = "EMAIL_SENT_ERROR",
  "INTERNAL_ERROR" = "INTERNAL_ERROR",
}

export enum ESetNewPasswordMessage {
  "NEW_PASSWORD_SET" = "NEW_PASSWORD_SET",
}

export enum EIsLoggedIn {
  "LOGGED_IN" = "LOGGED_IN",
  "LOGGED_OUT" = "LOGGED_OUT",
}

export enum BLOOD_GROUP {
  "AB" = "AB",
  "A" = "A",
  "B" = "B",
  "ZERO" = "ZERO",
}

export enum RH_FACTOR {
  "RHESUS_NEGATIVE" = "RHESUS_NEGATIVE",
  "RHESUS_POSITIVE" = "RHESUS_POSITIVE",
}

export const bloodGroupOptions: TSelectOption[] = [
  {
    value: BLOOD_GROUP.ZERO,
    label: '0'
  },
  {
    value: BLOOD_GROUP.A,
    label: 'A'
  },
  {
    value: BLOOD_GROUP.B,
    label: 'B'
  },
  {
    value: BLOOD_GROUP.AB,
    label: 'AB'
  }]

export const rhesusFactorOptions: TSelectOption[] = [
  {
    value: RH_FACTOR.RHESUS_POSITIVE,
    label: 'Rh +'
  },
  {
    value: RH_FACTOR.RHESUS_NEGATIVE,
    label: 'Rh -'
  }]