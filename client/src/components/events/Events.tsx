import { Grid } from "@mui/material";
import { Id } from "../../models/backend";
import { TUseGetEventsReturn } from "../../queries/events/getEvents";
import { TUseGetLineReturn } from "../../queries/lines/getLine";
import Loading from "../global/loading/Loading";
import Event from "./event/Event";
import CreateEvent from "./form/CreateEvent";

type TEventsProps = {
  lineId: Id;
  openForm: boolean;
  setOpenForm: (b: boolean) => void;
  reExecuteGetEvents: TUseGetLineReturn["reExecute"];
  resEvents: TUseGetEventsReturn["response"];
};

const Events: React.FC<TEventsProps> = ({
  lineId,
  resEvents,
  openForm,
  setOpenForm,
  reExecuteGetEvents,
}) => {
  if (!resEvents?.data) {
    return <Loading />;
  }
  return (
    <>
      <Grid
        container
        direction="column"
        spacing={3}
        style={{ padding: "5px", paddingTop: "25px" }}
        alignItems="stretch"
      >
        {resEvents?.data.map((event) => (
          <Grid item key={event.id}>
            <Event event={event} reExecuteGetEvents={reExecuteGetEvents} />
          </Grid>
        ))}
      </Grid>
      <CreateEvent
        open={openForm}
        handleClose={() => setOpenForm(false)}
        lineId={lineId}
        reExecuteGetEvents={reExecuteGetEvents}
      />
    </>
  );
};

export default Events;
