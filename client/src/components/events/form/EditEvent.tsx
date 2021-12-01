import { useForm } from "react-hook-form";

import { Cancel, Save } from "@mui/icons-material";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
} from "@mui/material";

import { EVENT_TYPE, TEvent, TResource } from "../../../models/backend";
import EventForm, { TEventForm } from "./EventForm";
import { TUseGetEventsReturn } from "../../../queries/events/getEvents";
import { LoadingIcon } from "../../forms/Buttons";
import { useSnackbar } from "notistack";
import { useEditEvent } from "./useEditEvent";
import { useEffect } from "react";
import Button from "../../buttons/Button";

type TEditEventProps = {
  open: boolean;
  handleClose: () => void;
  event: TEvent;
  reExecuteGetEvents: TUseGetEventsReturn["reExecute"];
};

const EditEvent: React.FC<TEditEventProps> = ({
  open,
  handleClose,
  event,
  reExecuteGetEvents,
}) => {
  const { enqueueSnackbar } = useSnackbar();
  const { handleSubmit, control, reset, watch, setValue } = useForm<TEventForm>(
    {
      defaultValues: {
        title: "",
        description: "",
        dateTime: new Date(),
        type: EVENT_TYPE.APPOINTMENT,
      },
    }
  );

  const handleDeleteResource = (resource: TResource) => {
    const newResources = watch("resources")?.filter(
      (r) => r.path !== resource.path
    );
    setValue("resources", newResources);
  };

  useEffect(() => {
    reset({
      title: event.title,
      description: event.description,
      dateTime: event.dateTime,
      prescriptions: event.prescriptions,
      type: event.type,
      resources: event.resources,
    });
  }, [event, reset]);

  const handleCloseAndReset = () => {
    handleClose();
    reset();
  };

  const callbackSuccess = () => {
    handleCloseAndReset();
    reExecuteGetEvents();
    enqueueSnackbar("Event was created!", { variant: "success" });
  };

  const callbackError = () => {
    enqueueSnackbar("Something went wrong while uploading files!", {
      variant: "error",
    });
  };

  const { isProcessing, onSubmit, uploadProgress } = useEditEvent({
    callbackSuccess,
    callbackError,
    lineId: event.line,
    event: event,
  });

  const Actions = (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          startIcon={isProcessing ? <LoadingIcon /> : <Save />}
          disabled={isProcessing}
        >
          Save
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
      <DialogTitle>Edit Event</DialogTitle>
      <DialogContent style={{ position: "relative", overflowX: "hidden" }}>
        <EventForm
          Actions={Actions}
          control={control}
          watch={watch}
          handleSubmit={(data) => handleSubmit(onSubmit)(data)}
          uploadProgress={uploadProgress}
          handleDeleteResource={handleDeleteResource}
        />
      </DialogContent>
    </Dialog>
  );
};

export default EditEvent;
