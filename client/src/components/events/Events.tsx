import { useState } from "react";
import { Grid, Button } from "@mui/material";
import { Id } from "../../models/backend";
import { useGetEvents } from "../../queries/events/getEvents";
import Loading from "../loading/Loading";
import Event from "./event/Event";
import CreateEvent from "./form/CreateEvent";

type TEventsProps = {
  lineId: Id;
};

const Events: React.FC<TEventsProps> = ({ lineId }) => {
  const response = useGetEvents(lineId);
  const [openForm, setOpenForm] = useState(false);

  if (!response?.data) {
    return <Loading />;
  }

  return (
    <>
      <Grid
        container
        direction="column"
        spacing={4}
        style={{ padding: "5px" }}
        alignItems="stretch"
      >
        {response?.data.map((event) => (
          <Grid item key={event.id}>
            <Event event={event} />
          </Grid>
        ))}
        <Grid item style={{ textAlign: "center" }}>
          <Button
            color="secondary"
            variant="contained"
            onClick={() => setOpenForm(true)}
          >
            Add Event
          </Button>
        </Grid>
      </Grid>
      <CreateEvent
        open={openForm}
        handleClose={() => setOpenForm(false)}
        lineId={lineId}
      />
    </>
  );
};

export default Events;
