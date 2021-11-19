import { Grid } from "@mui/material";
import { Id } from "../../models/backend";
import { useGetEvents } from "../../queries/events/getEvents";
import Loading from "../global/loading/Loading";
import Event from "./event/Event";
import CreateEvent from "./form/CreateEvent";

type TEventsProps = {
  lineId: Id;
  openForm: boolean;
  setOpenForm: (b: boolean) => void;
};

const Events: React.FC<TEventsProps> = ({ lineId, openForm, setOpenForm }) => {
  const { response, reExecute } = useGetEvents(lineId);

  if (!response?.data) {
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
        {response?.data.map((event) => (
          <Grid item key={event.id}>
            <Event event={event} reExecuteGetEvents={reExecute} />
          </Grid>
        ))}
      </Grid>
      <CreateEvent
        open={openForm}
        handleClose={() => setOpenForm(false)}
        lineId={lineId}
        reExecuteGetEvents={reExecute}
      />
    </>
  );
};

export default Events;
