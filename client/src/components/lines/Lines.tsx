import { useState } from "react";
import LineSummary from "./line/LineSummary";
import { LINE_VALUE, TLine } from "../../models/backend";
import { Grid } from "@mui/material";
import { subDays, subMinutes } from "date-fns";
import Line from "./line/Line";
import styled from "styled-components";

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
    contributions: 144,
  },
  {
    title: "Ankle",
    value: LINE_VALUE.NORMAL,
    color: "#8E9008",
    lastUpdated: subDays(new Date(), 190),
    contributions: 123,
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

const GridItemLine = styled(Grid)<{ open: boolean }>`
  @media screen and (max-width: 899px) {
    z-index: 101;
    overflow-y: auto;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    background: white;
    transition: all 0.3s;
    ${(props) =>
      props.open
        ? "transform: translateX(0%);"
        : "transform: translateX(100%);"}
  }
`;

type TLinesProps = {};

const Lines: React.FC<TLinesProps> = () => {
  const [line, setLine] = useState<TLine | undefined>();

  return (
    <Grid container>
      <Grid item xs={12} md={6} style={{ height: "100vh", overflowY: "auto" }}>
        <Grid container spacing={2} style={{ padding: "5px 2px" }}>
          {mockLines.map((line) => (
            <Grid item xs={12} sm={12} xl={6} onClick={() => setLine(line)}>
              <LineSummary line={line} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <GridItemLine
        item
        xs={12}
        md={6}
        style={{ height: "100vh", overflowY: "auto" }}
        open={Boolean(line)}
      >
        <Line handleClose={() => setLine(undefined)} line={line} />
      </GridItemLine>
    </Grid>
  );
};

export default Lines;
