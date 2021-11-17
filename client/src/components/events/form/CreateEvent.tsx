import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { EVENT_TYPE, Id } from "../../../models/backend";
import { navigateTo } from "../../../models/routes";
import {
  createEvent,
  TCreateEventParams,
} from "../../../queries/events/createEvent";
import {
  TUploadFilesParams,
  uploadFiles,
} from "../../../queries/files/uploadFiles";
import EventForm, { TEventForm } from "./EventForm";

type TCreateEventProps = { open: boolean; handleClose: () => void; lineId: Id };

const CreateEvent: React.FC<TCreateEventProps> = ({
  open,
  handleClose,
  lineId,
}) => {
  const navigate = useNavigate();
  const [files, setFiles] = useState<Array<File | Blob> | null>(null);
  const [type, setType] = useState(EVENT_TYPE.APPOINTMENT);
  const { handleSubmit, control, register } = useForm<TEventForm>({
    defaultValues: {
      title: "",
      description: "",
      dateTime: new Date(),
    },
  });
  const onSubmit: SubmitHandler<TEventForm> = async (data) => {
    let res;
    if (data.files) {
      const fileDate: TUploadFilesParams = {
        file: data.files[0],
      };
      try {
        res = await uploadFiles(fileDate);
      } catch (e) {
        console.error("STH went wrong with uploading!!");
      }
    }
    const eventData: TCreateEventParams = {
      title: data.title,
      description: data.description,
      dateTime: data.dateTime,
      type,
      line: lineId,
      resources: res && [res.data],
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
          files={files}
          setFiles={setFiles}
          control={control}
          handleSubmit={(data) => handleSubmit(onSubmit)(data)}
          handleCancel={handleClose}
          register={register}
        />
      </DialogContent>
    </Dialog>
  );
};

export default CreateEvent;
