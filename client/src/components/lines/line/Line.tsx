import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { TLine } from "../../../models/backend";
import Value from "./Value";
import { formatDistanceToNowStrict } from "date-fns";

const PaperStyled = styled(Paper)<{ color: string }>`
  box-shadow: 0px 2px 1px -1px ${(props) => props.color},
    0px 1px 1px 0px ${(props) => props.color},
    0px 1px 3px 0px ${(props) => props.color};
  transition: all 0.3s;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 2px 1px -1px ${(props) => props.color},
      0px 1px 1px 0px ${(props) => props.color},
      0px 1px 3px 1px ${(props) => props.color};
  }
`;

type TLineProps = {
  line: TLine;
};

const Line: React.FC<TLineProps> = ({ line }) => {
  return (
    <PaperStyled style={{ padding: "5px" }} color={line.color}>
      <Grid container direction="column">
        <Grid item>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Typography variant="subtitle2" style={{ color: "gray" }}>
                Last updated{" "}
                {formatDistanceToNowStrict(line.lastUpdated, {
                  addSuffix: true,
                })}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle2" style={{ color: "gray" }}>
                {line.contributions} contributions
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Typography align="center" fontWeight="700">
            {line.title}
          </Typography>
          <Typography style={{ height: "50px" }}>{line.description}</Typography>
        </Grid>
        <Grid item style={{ padding: "0px 4px 10px 0px" }}>
          <Grid container justifyContent="flex-end" alignItems="center">
            <Grid item>
              <Value value={line.value} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </PaperStyled>
  );
};

export default Line;
export {};
