import React from "react";
import { Divider, Stack } from "@mui/material";
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
      <Stack spacing={2} style={{ padding: "5px", paddingTop: "5px" }}>
        {resEvents?.data.map((event) => (
          <>
            <div
              key={event.id}
              style={{
                padding: "5px 1px",
              }}
            >
              <Event event={event} reExecuteGetEvents={reExecuteGetEvents} />
            </div>
            <Divider />
          </>
        ))}
      </Stack>
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
