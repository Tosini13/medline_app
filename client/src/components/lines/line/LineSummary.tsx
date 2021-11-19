import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { TLine } from "../../../models/backend";
import Value from "./Value";
import { formatDistanceToNowStrict } from "date-fns";
import { hexToRgb } from "../../../helpers/calcHexToRGB";

const TypographySubHeader = styled(Typography)`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const getRgba = (color: string, rgba: string = "0.7") => {
  const rgb = hexToRgb(color);
  return rgb ? `rgba(${rgb},${rgba})` : color;
};

const PaperStyled = styled(Paper)<{ color: string }>`
  padding: 5px;
  margin: 0px 5px 0px 2px;
  transition: all 0.3s;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 2px 1px -1px ${(props) => getRgba(props.color)},
      0px 1px 1px 0px ${(props) => getRgba(props.color)},
      0px 1px 3px 0px ${(props) => getRgba(props.color)};
  }
`;

type TLineSummaryProps = {
  line: TLine;
};

const LineSummary: React.FC<TLineSummaryProps> = ({ line }) => {
  return (
    <PaperStyled color={line.color}>
      <Grid container direction="column">
        <Grid item>
          <Grid container justifyContent="flex-start" wrap="nowrap">
            <Grid item>
              <TypographySubHeader variant="subtitle2" color="GrayText">
                Last updated{" "}
                {formatDistanceToNowStrict(new Date(line.lastUpdate), {
                  addSuffix: true,
                })}
              </TypographySubHeader>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Typography
            align="center"
            fontWeight="700"
            style={{ marginTop: "10px" }}
          >
            {line.title}
          </Typography>
          <Typography style={{ height: "50px" }}>{line.description}</Typography>
        </Grid>
        <Grid item>
          <Grid container justifyContent="space-between" alignItems="flex-end">
            <Grid item>
              <TypographySubHeader variant="subtitle2" color="GrayText">
                {line.contributions} contributions
              </TypographySubHeader>
            </Grid>
            <Grid item>
              <Value value={line.value} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </PaperStyled>
  );
};

export default LineSummary;
export {};
