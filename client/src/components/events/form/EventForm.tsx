import { Grid } from "@mui/material";
import { Control, UseFormReturn } from "react-hook-form";
import { EVENT_TYPE, TResource } from "../../../models/backend";
import { TextFieldRUForm } from "../../forms/TextField";
import ControlledDateTimePicker from "../../forms/controlled/ControlledDateTimePicker";
import ControlledUploadFiles from "../../forms/controlled/ControlledUploadFiles";
import ControlledEventType from "../../forms/controlled/ControlledEventType";
import CircularProgressWithLabel from "../../forms/CircularProgressWithLabel";
import ResourceForm from "./ResourceForm";

export type TEventForm = {
  title: string;
  description?: string;
  type: EVENT_TYPE;
  prescriptions?: string[];
  resources?: TResource[];
  dateTime: Date;
  files: Array<File | Blob> | null;
};

type TEventFormProps = {
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
  control: Control<TEventForm>;
  Actions: React.ReactNode;
  uploadProgress: number | null;
  watch: UseFormReturn<TEventForm>["watch"];
  handleDeleteResource?: (resource: TResource) => void;
};

const EventForm: React.FC<TEventFormProps> = ({
  control,
  handleSubmit,
  Actions,
  uploadProgress,
  watch,
  handleDeleteResource,
}) => {
  const resources = watch("resources");

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
              <ControlledEventType control={control} name="type" />
            </Grid>
            <Grid item>
              {uploadProgress ? (
                <CircularProgressWithLabel value={uploadProgress} />
              ) : (
                <ControlledUploadFiles control={control} name="files" />
              )}
            </Grid>
          </Grid>
        </Grid>
        {handleDeleteResource && (
          <Grid item>
            <Grid container>
              {resources?.map((resource) => (
                <Grid item key={resource.path} xs={12}>
                  <ResourceForm
                    label={resource.name}
                    handleDelete={() => handleDeleteResource(resource)}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        )}
        <Grid item>{Actions}</Grid>
      </Grid>
    </form>
  );
};

export default EventForm;
