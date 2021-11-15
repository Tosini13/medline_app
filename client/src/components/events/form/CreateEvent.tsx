import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { EVENT_TYPE, Id } from "../../../models/backend";
import { navigateTo } from "../../../models/routes";
import {
  createEvent,
  TCreateEventParams,
} from "../../../queries/events/createEvent";
import EventForm, { TEventForm } from "./EventForm";

type TCreateEventProps = { open: boolean; handleClose: () => void; lineId: Id };

const CreateEvent: React.FC<TCreateEventProps> = ({
  open,
  handleClose,
  lineId,
}) => {
  const navigate = useNavigate();
  const [type, setType] = useState(EVENT_TYPE.APPOINTMENT);
  const { handleSubmit, control } = useForm<TEventForm>({
    defaultValues: {
      title: "",
      description: "",
      dateTime: new Date(),
    },
  });
  const onSubmit = async (data: TEventForm) => {
    const eventData: TCreateEventParams = {
      title: data.title,
      description: data.description,
      dateTime: data.dateTime,
      type,
      line: lineId,
    };
    try {
      await createEvent(eventData);
      navigate(navigateTo.line(lineId));
      handleClose();
    } catch (e) {
      console.error("STH went wrong!!");
    }
  };
  return (
    <Dialog open={open}>
      <DialogTitle>Create Event</DialogTitle>
      <DialogContent style={{ position: "relative", overflowX: "hidden" }}>
        <EventForm
          type={type}
          setType={setType}
          control={control}
          handleSubmit={(data) => handleSubmit(onSubmit)(data)}
          handleCancel={handleClose}
        />
      </DialogContent>
    </Dialog>
  );
};

export default CreateEvent;
