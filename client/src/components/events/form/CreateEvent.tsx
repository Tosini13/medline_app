import { AxiosResponse } from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router";

import { Cancel, Add } from "@mui/icons-material";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Button,
} from "@mui/material";

import useAsync from "../../../helpers/useAsync";
import { EVENT_TYPE, Id, TResource } from "../../../models/backend";
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
import { TUseGetEventsReturn } from "../../../queries/events/getEvents";
import { LoadingIcon } from "../../forms/Buttons";

type TCreateEventProps = {
  open: boolean;
  handleClose: () => void;
  lineId: Id;
  reExecuteGetEvents: TUseGetEventsReturn["reExecute"];
};

const CreateEvent: React.FC<TCreateEventProps> = ({
  open,
  handleClose,
  lineId,
  reExecuteGetEvents,
}) => {
  const navigate = useNavigate();
  const { isProcessing, execute } = useAsync();
  const { handleSubmit, control, reset } = useForm<TEventForm>({
    defaultValues: {
      title: "",
      description: "",
      dateTime: new Date(),
      type: EVENT_TYPE.APPOINTMENT,
    },
  });

  const handleCloseAndReset = () => {
    handleClose();
    reset();
  };

  const onSubmit: SubmitHandler<TEventForm> = async (data) => {
    let res;
    if (data.files) {
      const fileDate: TUploadFilesParams = {
        files: data.files,
      };
      try {
        res = await execute<AxiosResponse<TResource[] | undefined, any>>(
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
      type: data.type,
      line: lineId,
      resources: res?.data,
    };
    try {
      await execute(createEvent(eventData));
      navigate(navigateTo.line(lineId));
      handleCloseAndReset();
      reExecuteGetEvents();
    } catch (e) {
      console.error("STH went wrong!!");
    }
  };

  const Actions = (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          startIcon={isProcessing ? <LoadingIcon /> : <Add />}
          disabled={isProcessing}
        >
          Create
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="outlined"
          onClick={handleCloseAndReset}
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
          control={control}
          handleSubmit={(data) => handleSubmit(onSubmit)(data)}
        />
      </DialogContent>
    </Dialog>
  );
};

export default CreateEvent;
