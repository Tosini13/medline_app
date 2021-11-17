import { useState } from "react";
import { Button, Grid, IconButton, Typography } from "@mui/material";
import { MoreVert, Close } from "@mui/icons-material";
import Value from "./Value";
import { TLine } from "../../../models/backend";

type TLineHeaderProps = {
  line: TLine;
  handleOpenMore: () => void;
  handleClose: () => void;
};

const LineHeader: React.FC<TLineHeaderProps> = ({
  line,
  handleOpenMore,
  handleClose,
}) => {
  const [openDesc, setOpenDesc] = useState(false);

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
              <Close color="primary" fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item style={{ padding: "10px" }}>
            <Typography variant="h5">{line.title}</Typography>
          </Grid>
          <Grid item>
            <IconButton onClick={handleOpenMore}>
              <MoreVert color="primary" fontSize="large" />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item xs={2}>
            <Typography align="center" fontSize="large">
              {line.contributions}
            </Typography>
            <Typography align="center" fontSize="xx-small">
              contributions
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              disabled={!line.description}
              onClick={() => setOpenDesc(!openDesc)}
            >
              {openDesc ? "Hide" : "Show"} description
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
      {line.description && openDesc ? (
        <Grid item>
          <Typography>{line.description}</Typography>
        </Grid>
      ) : null}
    </Grid>
  );
};

export default LineHeader;
