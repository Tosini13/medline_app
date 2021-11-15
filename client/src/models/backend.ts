export type Id = string;

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
  type: EVENT_TYPE;
  prescriptions?: string[];
  resources?: string[];
  line: Id;
};

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
