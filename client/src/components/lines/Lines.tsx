import React from "react";
import Line from "./line/Line";
import { LINE_VALUE, TLine } from "../../models/backend";
import { Grid } from "@mui/material";

type TLinesProps = {};

const Lines: React.FC<TLinesProps> = () => {
  const mockLines: TLine[] = [
    {
      title: "Knee",
      value: LINE_VALUE.HIGHEST_VALUE,
      description: "Lorem ipsum",
    },
    {
      title: "Stomach",
      value: LINE_VALUE.HIGH_VALUE,
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
