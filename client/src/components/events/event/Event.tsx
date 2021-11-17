import { Grid, Paper, Typography } from "@mui/material";
import { format } from "date-fns";
import { TEvent } from "../../../models/backend";
import Resources from "./Resources";

const DATE_TIME = "yyyy.MM.dd HH:mm";

type TEventProps = { event: TEvent };

const Event: React.FC<TEventProps> = ({ event }) => {
  return (
    <>
      <Paper style={{ backgroundColor: "#E3E3E3" }}>
        <Grid container direction="column" spacing={2} alignItems="center">
          <Grid item>
            <Typography>
              {format(new Date(event.dateTime), DATE_TIME)}
            </Typography>
          </Grid>
          <Grid item>
            <Typography>{event.title}</Typography>
          </Grid>
          {event.description && (
            <Grid item>
              <Typography>{event.description}</Typography>
            </Grid>
          )}
          {event.resources?.length ? (
            <Grid item style={{ width: "100%" }}>
              <Resources resources={event.resources} />
            </Grid>
          ) : null}
        </Grid>
      </Paper>
    </>
  );
};

export default Event;
