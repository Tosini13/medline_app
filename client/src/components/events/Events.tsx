import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import { Id } from "../../models/backend";
import { TUseGetEventsReturn } from "../../queries/events/getEvents";
import { TUseGetLineReturn } from "../../queries/lines/getLine";
import Loading from "../global/loading/Loading";
import Event from "./event/Event";
import CreateEvent from "./form/CreateEvent";
import TimeLine from "./timeline/TimeLine";

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
  if (!resEvents?.data) {
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
        {resEvents.data.length ? (
          <Stack spacing={2} style={{ margin: "0px 5px", width: "100%" }}>
            {resEvents.data.map((event) => (
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
        events={resEvents?.data}
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
