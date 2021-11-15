import { Grid, Paper, Typography } from "@mui/material";
import { TEvent } from "../../../models/backend";

type TEventProps = { event: TEvent };

const Event: React.FC<TEventProps> = ({ event }) => {
  return (
    <Paper style={{ backgroundColor: "gray" }}>
      <Grid container direction="column" spacing={2} alignItems="center">
        <Grid item>
          <Typography>{"Date"}</Typography>
        </Grid>
        <Grid item>
          <Typography>{event.title}</Typography>
        </Grid>
        <Grid item>
          <Typography>{event.description}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Event;
