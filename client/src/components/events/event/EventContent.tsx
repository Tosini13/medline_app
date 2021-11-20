import { Stack, Typography, Grid } from "@mui/material";
import { TEvent } from "../../../models/backend";
import Resources from "./Resources";

type TEventContentProps = {
  event: TEvent;
};

const EventContent: React.FC<TEventContentProps> = ({ event }) => {
  return (
    <Stack style={{ padding: "40px 0px" }} spacing={6}>
      <Grid container alignItems="flex-start" wrap="nowrap" spacing={2}>
        <Grid item style={{ flexGrow: 1 }}>
          <Typography
            align="center"
            fontWeight={600}
            style={{ fontSize: "14px" }}
          >
            {event.title}
          </Typography>
        </Grid>
      </Grid>
      {event.description && (
        <Typography align="justify" fontSize="13px" style={{ color: "black" }}>
          {event.description}
        </Typography>
      )}
      {event.resources?.length ? (
        <Resources resources={event.resources} />
      ) : null}
    </Stack>
  );
};

export default EventContent;
