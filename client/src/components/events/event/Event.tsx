import { useState } from "react";
import { Stack, IconButton } from "@mui/material";
import { TEvent } from "../../../models/backend";
import EventMore from "./EventMore";
import { deleteEvent } from "../../../queries/events/deleteEvent";
import { TUseGetEventsReturn } from "../../../queries/events/getEvents";
import { useSnackbar } from "notistack";
import { TypographyEventStyled } from "./EventHeader";
import { format } from "date-fns";
import { DATE_TIME_FORMAT } from "../../../models/const";
import { MoreHoriz } from "@mui/icons-material";
import EventContent from "./EventContent";

type TEventProps = {
  event: TEvent;
  reExecuteGetEvents: TUseGetEventsReturn["reExecute"];
};

const Event: React.FC<TEventProps> = ({ event, reExecuteGetEvents }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [, setOpenEventForm] = useState(false);
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
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-end"
      >
        <TypographyEventStyled
          align="left"
          fontWeight={600}
          style={{ fontSize: "11px" }}
        >
          {format(new Date(event.dateTime), DATE_TIME_FORMAT)}
        </TypographyEventStyled>
        <Stack alignItems="flex-end">
          <IconButton onClick={handleClick} style={{ height: "16px" }}>
            <MoreHoriz color="primary" />
          </IconButton>
        </Stack>
      </Stack>
      <EventContent event={event} />
      <EventMore
        handleDelete={handleDeleteEvent}
        anchorEl={anchorEl}
        handleClose={() => setAnchorEl(null)}
        handleOpenEventForm={() => setOpenEventForm(true)}
      />
    </>
  );
};

export default Event;
