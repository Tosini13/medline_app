import { AxiosResponse } from "axios";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router";

import { Cancel, Add } from "@mui/icons-material";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Button,
  CircularProgress,
} from "@mui/material";

import useAsync from "../../../helpers/useAsync";
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
  const { isProcessing, execute } = useAsync();
  const [type, setType] = useState(EVENT_TYPE.APPOINTMENT);
  const { handleSubmit, control } = useForm<TEventForm>({
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
        files: data.files,
      };
      try {
        res = await execute<AxiosResponse<string[] | undefined, any>>(
          uploadFiles(fileDate)
        );
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
      resources: res?.data,
    };
    try {
      await execute(createEvent(eventData));
      navigate(navigateTo.line(lineId));
      handleClose();
    } catch (e) {
      console.error("STH went wrong!!");
    }
  };

  console.log("isProcessing", isProcessing);

  const Actions = (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          startIcon={
            isProcessing ? <CircularProgress size={"20px"} /> : <Add />
          }
          disabled={isProcessing}
        >
          Create
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="outlined"
          onClick={handleClose}
          color="primary"
          startIcon={<Cancel />}
          disabled={isProcessing}
        >
          Cancel
        </Button>
      </Grid>
    </Grid>
  );

  return (
    <Dialog open={open}>
      <DialogTitle>Create Event</DialogTitle>
      <DialogContent style={{ position: "relative", overflowX: "hidden" }}>
        <EventForm
          Actions={Actions}
          type={type}
          setType={setType}
          control={control}
          handleSubmit={(data) => handleSubmit(onSubmit)(data)}
        />
      </DialogContent>
    </Dialog>
  );
};

export default CreateEvent;
