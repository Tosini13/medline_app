import React from "react";
import { Stack, Typography } from "@mui/material";
import { Id, EVerifyTokenMessage, EGetEvents } from "../../models/backend";
import { TUseGetEventsReturn } from "../../queries/events/getEvents";
import { TUseGetLineReturn } from "../../queries/lines/getLine";
import Loading from "../global/loading/Loading";
import Event from "./event/Event";
import CreateEvent from "./form/CreateEvent";
import TimeLine from "./timeline/TimeLine";
import Button from "../buttons/Button";

const getDivId = (id: Id) => `${id}-event-container`;

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
  console.log('resEvents', resEvents);

  if (resEvents?.data.message === EGetEvents.UNAUTHORIZED || resEvents?.data.message === EVerifyTokenMessage.TOKEN_INVALID) {
    return (
      <Typography align="center" style={{ width: '100%' }}>
        You are not authorized
      </Typography>
    );
  }

  if (!resEvents?.data.data) {
    return <Loading />;
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexGrow: 1,
          overflowY: "auto",
        }}
      >
        {resEvents.data.data.length ? (
          <Stack spacing={2} style={{ margin: "0px 5px", width: "100%" }}>
            {resEvents.data.data.map((event) => (
              <div key={event.id} id={getDivId(event.id)}>
                <Event event={event} reExecuteGetEvents={reExecuteGetEvents} />
              </div>
            ))}
          </Stack>) : (
          <Stack spacing={3} style={{ padding: '20px', width: "100%" }} alignItems="center">
            <Typography color="primary">You don't have any events created</Typography>
            <Button variant="contained" onClick={() => setOpenForm(true)}>
              Create Event
            </Button>
          </Stack>)}
        <CreateEvent
          open={openForm}
          handleClose={() => setOpenForm(false)}
          lineId={lineId}
          reExecuteGetEvents={reExecuteGetEvents}
        />
      </div>
      <TimeLine
        events={resEvents?.data.data}
        callback={(id) =>
          document.getElementById(getDivId(id))?.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "start",
          })
        }
      />
    </>
  );
};

export default Events;
