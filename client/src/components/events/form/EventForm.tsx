import { Grid, Button, IconButton } from "@mui/material";
import { Control } from "react-hook-form";
import { EVENT_TYPE } from "../../../models/backend";
import { TextFieldRUForm } from "../../forms/TextField";
import EventType from "../../forms/EventType";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import ControlledDateTimePicker from "../../forms/controlled/ControlledDateTimePicker";

export type TEventForm = {
  title: string;
  description?: string;
  type: EVENT_TYPE;
  prescriptions?: string[];
  resources?: string[];
  dateTime: Date;
};

type TEventFormProps = {
  type: EVENT_TYPE;
  setType: (value: EVENT_TYPE) => void;
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
  control: Control<TEventForm>;
  handleCancel: () => void;
};

const EventForm: React.FC<TEventFormProps> = ({
  control,
  type,
  setType,
  handleSubmit,
  handleCancel,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={4} direction="column" alignItems="stretch">
        <Grid item>
          <TextFieldRUForm
            name="title"
            label="Title"
            control={control}
            rules={{ required: true }}
            fullWidth
          />
        </Grid>
        <Grid item>
          <TextFieldRUForm
            name="description"
            label="Description"
            control={control}
            multiline
            minRows={2}
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item>
          <ControlledDateTimePicker
            label="Date and Time"
            name="dateTime"
            control={control}
            rules={{ required: true }}
          />
        </Grid>
        <Grid item>
          <Grid container justifyContent="space-around" alignItems="center">
            <Grid item>
              <EventType type={type} setType={setType} />
            </Grid>
            <Grid item>
              <IconButton size="large" disabled>
                <AttachFileIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Button type="submit" variant="contained" color="primary">
                Create
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" onClick={handleCancel} color="error">
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default EventForm;
