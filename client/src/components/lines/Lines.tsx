import React from "react";
import LineSummary from "./line/LineSummary";
import { LINE_VALUE, TLine } from "../../models/backend";
import { Grid } from "@mui/material";
import { subDays, subMinutes } from "date-fns";
import Line from "./line/Line";

type TLinesProps = {};

const Lines: React.FC<TLinesProps> = () => {
  const mockLines: TLine[] = [
    {
      title: "Knee",
      value: LINE_VALUE.HIGHEST_VALUE,
      description: "Lorem ipsum",
      color: "#2d6b5f",
      lastUpdated: subMinutes(new Date(), 5),
      contributions: 15,
    },
    {
      title: "Stomach",
      value: LINE_VALUE.HIGH_VALUE,
      color: "#711010",
      lastUpdated: subDays(new Date(), 7),
      contributions: 10123123,
    },
    {
      title: "Ankle",
      value: LINE_VALUE.NORMAL,
      color: "#8E9008",
      lastUpdated: subDays(new Date(), 190),
      contributions: 10123123213123123123,
    },
    {
      title: "Back",
      value: LINE_VALUE.HIGH_VALUE,
      color: "gray",
      lastUpdated: new Date(),
      contributions: 4,
    },
    {
      title: "Back",
      value: LINE_VALUE.HIGH_VALUE,
      color: "gray",
      lastUpdated: new Date(),
      contributions: 4,
    },
    {
      title: "Back",
      value: LINE_VALUE.HIGH_VALUE,
      color: "gray",
      lastUpdated: new Date(),
      contributions: 4,
    },
  ];
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6} style={{ height: "100vh", overflowY: "auto" }}>
        <Grid container spacing={2} style={{ padding: "0px 2px" }}>
          {mockLines.map((line) => (
            <Grid item xs={12} sm={12} xl={6}>
              <LineSummary line={line} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12} md={6} style={{ height: "100vh", overflowY: "auto" }}>
        <Line />
      </Grid>
    </Grid>
  );
};

export default Lines;
