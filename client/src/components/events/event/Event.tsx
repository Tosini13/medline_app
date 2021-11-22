import { useState } from "react";
import { TEvent } from "../../../models/backend";
import EventMore from "./EventMore";
import { deleteEvent } from "../../../queries/events/deleteEvent";
import { TUseGetEventsReturn } from "../../../queries/events/getEvents";
import { useSnackbar } from "notistack";
import EventHeader from "./EventHeader";
import EventContent from "./EventContent";
import EditEvent from "../form/EditEvent";

type TEventProps = {
  event: TEvent;
  reExecuteGetEvents: TUseGetEventsReturn["reExecute"];
};

const Event: React.FC<TEventProps> = ({ event, reExecuteGetEvents }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [openEventForm, setOpenEventForm] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDeleteEvent = async () => {
    try {
      await deleteEvent({ id: event.id });
      reExecuteGetEvents();
      enqueueSnackbar("Event has been deleted!", { variant: "success" });
    } catch (e) {
      console.error("ERROR", e);
      enqueueSnackbar("Something went wrong!", { variant: "error" });
    }
  };
  return (
    <>
      <EventHeader
        type={event.type}
        dateTime={event.dateTime}
        handleClick={handleClick}
      />
      <EventContent event={event} />
      <EventMore
        handleDelete={handleDeleteEvent}
        anchorEl={anchorEl}
        handleClose={() => setAnchorEl(null)}
        handleOpenEventForm={() => setOpenEventForm(true)}
      />
      <EditEvent
        event={event}
        open={openEventForm}
        handleClose={() => setOpenEventForm(false)}
        reExecuteGetEvents={reExecuteGetEvents}
      />
    </>
  );
};

export default Event;
