import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { TLine } from "../../../../../server/src/models/line";
import styled from "styled-components";

const PaperStyled = styled(Paper)`
  box-shadow: 0px 2px 1px -1px #2d6b5f, 0px 1px 1px 0px #2d6b5f,
    0px 1px 3px 0px #2d6b5f;
  &:hover {
    background-color: gray;
    cursor: pointer;
  }
`;

type TLineProps = {
  line: TLine;
};

const Line: React.FC<TLineProps> = ({ line }) => {
  return (
    <PaperStyled style={{ padding: "5px" }}>
      <Grid container direction="column">
        <Grid item>
          <Grid container justifyContent="space-between">
            <Grid item>Last updated xx</Grid>
            <Grid item>15 contributions</Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Typography align="center">{line.title}</Typography>
          <Typography>{line.description}</Typography>
        </Grid>
        <Grid item>{line.value}</Grid>
      </Grid>
    </PaperStyled>
  );
};

export default Line;
