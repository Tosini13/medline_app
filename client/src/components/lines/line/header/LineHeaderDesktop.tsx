import { useState } from "react";
import { Button, Grid, IconButton, Typography } from "@mui/material";
import { MoreVert, Close } from "@mui/icons-material";
import Value from "../Value";
import { TLine } from "../../../../models/backend";
import { LoadingIcon } from "../../../forms/Buttons";

type TLineHeaderDesktopProps = {
  line: TLine;
  contributions?: number;
  handleOpenMore: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleClose: () => void;
};

const LineHeaderDesktop: React.FC<TLineHeaderDesktopProps> = ({
  line,
  contributions,
  handleOpenMore,
  handleClose,
}) => {
  const [openDesc, setOpenDesc] = useState(false);

  return (
    <Grid
      container
      direction="column"
      spacing={2}
      style={{
        paddingLeft: "5px",
        paddingRight: "5px",
        boxShadow: "0px 0px 8px -3px rgb(0 0 0 / 70%)",
        zIndex: 1,
      }}
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
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          style={{ paddingBottom: line.description ? "0px" : "25px" }}
        >
          <Grid item xs={2}>
            {contributions !== undefined ? (
              <Typography align="center" fontSize="large">
                {contributions}
              </Typography>
            ) : (
              <div style={{ textAlign: "center" }}>
                <LoadingIcon />
              </div>
            )}
            <Typography align="center" fontSize="xx-small">
              contributions
            </Typography>
          </Grid>
          <Grid item>
            {line.description && (
              <Button
                variant="contained"
                color="primary"
                disabled={!line.description}
                onClick={() => setOpenDesc(!openDesc)}
              >
                {openDesc ? "Hide" : "Show"} description
              </Button>
            )}
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

export default LineHeaderDesktop;
