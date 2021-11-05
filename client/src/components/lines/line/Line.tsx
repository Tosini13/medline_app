import React from "react";
import { Button, Grid, IconButton, Typography } from "@mui/material";
import { MoreVert, Close } from "@mui/icons-material";
import { TLine } from "../../../models/backend";
import Value from "./Value";

type TLineProps = { handleClose: () => void; line?: TLine };

const Line: React.FC<TLineProps> = ({ handleClose, line }) => {
  if (!line) {
    return null;
  }
  return (
    <Grid
      container
      direction="column"
      spacing={2}
      style={{ paddingLeft: "5px", paddingRight: "5px" }}
    >
      <Grid item>
        <Grid container justifyContent="space-between" alignItems="flex-start">
          <Grid item>
            <IconButton onClick={handleClose}>
              <Close color="secondary" fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item style={{ padding: "10px" }}>
            <Typography variant="h5">{line.title}</Typography>
          </Grid>
          <Grid item>
            <IconButton disabled>
              <MoreVert fontSize="large" />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item xs={2}>
            <Typography align="center" fontSize="small">
              {line.contributions}
            </Typography>
            <Typography align="center" fontSize="xx-small">
              contributions
            </Typography>
          </Grid>
          <Grid item>
            <Button variant="contained" color="secondary">
              Show description
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Grid container justifyContent="center">
              <Grid item>
                <Value value={line.value} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Line;
