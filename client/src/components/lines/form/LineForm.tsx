import { Button, Grid } from "@mui/material";
import { Control } from "react-hook-form";
import { LINE_VALUE } from "../../../models/backend";
import LineValue from "../../forms/LineValue";
import { TextFieldRUForm } from "../../forms/TextField";

export type TLineForm = {
  name: string;
  description: string;
  color: string;
};

type TLineFormProps = {
  lineValue: LINE_VALUE;
  setLineValue: (v: LINE_VALUE) => void;
  control: Control<TLineForm>;
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
};

const LineForm: React.FC<TLineFormProps> = ({
  lineValue,
  setLineValue,
  control,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={4} direction="column" alignItems="center">
        <Grid item>
          <TextFieldRUForm
            control={control}
            name="name"
            label="Name"
            rules={{ required: true }}
          />
        </Grid>
        <Grid item>
          <TextFieldRUForm
            control={control}
            name="description"
            label="Description"
            multiline
            minRows={3}
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <Grid
            container
            spacing={6}
            alignItems="center"
            justifyContent="space-between"
          >
            <Grid item>
              <TextFieldRUForm
                style={{ minWidth: "80px" }}
                control={control}
                name="color"
                label="Color"
                type="color"
                rules={{ required: true }}
              />
            </Grid>
            <Grid item>
              <LineValue setValue={setLineValue} value={lineValue} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container alignItems="center" justifyContent="center">
            <Grid item>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default LineForm;
