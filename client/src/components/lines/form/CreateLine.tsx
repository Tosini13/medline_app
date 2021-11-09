import React from "react";
import LineForm from "./LineForm";
import { Grid, Typography } from "@mui/material";

type TCreateLineProps = {};

const CreateLine: React.FC<TCreateLineProps> = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Typography>Create Line</Typography>
      </Grid>
      <Grid item>
        <LineForm />
      </Grid>
    </Grid>
  );
};

export default CreateLine;
