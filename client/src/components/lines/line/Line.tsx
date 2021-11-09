import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Grid, IconButton, Typography } from "@mui/material";
import { MoreVert, Close } from "@mui/icons-material";
import Value from "./Value";
import { useGetLine } from "../../../queries/lines/getLine";
import Loading from "../../loading/Loading";

type TLineProps = {};

const Line: React.FC<TLineProps> = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const response = useGetLine({ id: id as string });

  if (!response?.data) {
    return <Loading />;
  }
  const line = response?.data;

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
            <IconButton onClick={() => navigate("/")}>
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
