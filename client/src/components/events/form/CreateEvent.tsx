import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

import { Cancel, Add } from "@mui/icons-material";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Button,
} from "@mui/material";

import { EVENT_TYPE, Id } from "../../../models/backend";
import { navigateTo } from "../../../models/routes";
import EventForm, { TEventForm } from "./EventForm";
import { TUseGetEventsReturn } from "../../../queries/events/getEvents";
import { LoadingIcon } from "../../forms/Buttons";
import { useSnackbar } from "notistack";
import { useCreateEvent } from "./useCreateEvent";

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
  const { enqueueSnackbar } = useSnackbar();
  const { handleSubmit, control, reset, watch } = useForm<TEventForm>({
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

  const callbackSuccess = () => {
    navigate(navigateTo.line(lineId));
    handleCloseAndReset();
    reExecuteGetEvents();
    enqueueSnackbar("Event was created!", { variant: "success" });
  };

  const callbackError = () => {
    enqueueSnackbar("Something went wrong while uploading files!", {
      variant: "error",
    });
  };

  const { isProcessing, onSubmit, uploadProgress } = useCreateEvent({
    callbackSuccess,
    callbackError,
    lineId,
  });

  const Actions = (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={6} style={{ textAlign: 'center' }}>
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
      <Grid item xs={12} sm={6} style={{ textAlign: 'center' }}>
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
          watch={watch}
          handleSubmit={(data) => handleSubmit(onSubmit)(data)}
          uploadProgress={uploadProgress}
        />
      </DialogContent>
    </Dialog>
  );
};

export default CreateEvent;