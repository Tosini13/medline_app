import React from "react";
import { Stack } from "@mui/material";
import { Id } from "../../models/backend";
import { TUseGetEventsReturn } from "../../queries/events/getEvents";
import { TUseGetLineReturn } from "../../queries/lines/getLine";
import Loading from "../global/loading/Loading";
import Event from "./event/Event";
import CreateEvent from "./form/CreateEvent";
import TimeLine from "./timeline/TimeLine";

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
        <Stack spacing={2} style={{ margin: "0px 5px" }}>
          {resEvents?.data.map((event) => (
            <div key={event.id}>
              <Event event={event} reExecuteGetEvents={reExecuteGetEvents} />
            </div>
          ))}
        </Stack>
        <CreateEvent
          open={openForm}
          handleClose={() => setOpenForm(false)}
          lineId={lineId}
          reExecuteGetEvents={reExecuteGetEvents}
        />
      </div>
      <TimeLine events={resEvents?.data} />
    </>
  );
};

export default Events;
