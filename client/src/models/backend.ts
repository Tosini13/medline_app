export type TLine = {
  title: string;
  description?: string;
  value: LINE_VALUE;
  color: string;
  lastUpdated: Date;
  contributions: number;
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
