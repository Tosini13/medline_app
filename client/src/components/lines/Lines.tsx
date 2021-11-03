import React from "react";
import Line from "./line/Line";
import { LINE_VALUE, TLine } from "../../models/backend";
import { Grid } from "@mui/material";
import { subDays, subMinutes } from "date-fns";

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
      contributions: 10,
    },
    {
      title: "Ankle",
      value: LINE_VALUE.NORMAL,
      color: "#8E9008",
      lastUpdated: subDays(new Date(), 190),
      contributions: 1,
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
      {mockLines.map((line) => (
        <Grid item xs={12} md={6} lg={4}>
          <Line line={line} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Lines;
