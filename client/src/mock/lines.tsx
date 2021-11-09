import { subDays, subMinutes } from "date-fns";
import { LINE_VALUE, TLine } from "../models/backend";

export const mockLines: TLine[] = [
  {
    id: "1",
    title: "Knee",
    value: LINE_VALUE.HIGHEST_VALUE,
    description: "Lorem ipsum",
    color: "#2d6b5f",
    lastUpdate: subMinutes(new Date(), 5),
    contributions: 15,
  },
  {
    id: "2",
    title: "Stomach",
    value: LINE_VALUE.HIGH_VALUE,
    color: "#711010",
    lastUpdate: subDays(new Date(), 7),
    contributions: 144,
  },
  {
    id: "3",
    title: "Ankle",
    value: LINE_VALUE.NORMAL,
    color: "#8E9008",
    lastUpdate: subDays(new Date(), 190),
    contributions: 123,
  },
  {
    id: "4",
    title: "Back",
    value: LINE_VALUE.HIGH_VALUE,
    color: "gray",
    lastUpdate: new Date(),
    contributions: 4,
  },
  {
    id: "5",
    title: "Back",
    value: LINE_VALUE.HIGH_VALUE,
    color: "gray",
    lastUpdate: new Date(),
    contributions: 4,
  },
  {
    id: "6",
    title: "Back",
    value: LINE_VALUE.HIGH_VALUE,
    color: "gray",
    lastUpdate: new Date(),
    contributions: 4,
  },
];
