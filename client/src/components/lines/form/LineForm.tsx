import { Button, Grid } from "@mui/material";
import ColorPicker from "material-ui-color-picker";
import { useState } from "react";
import { useForm, useController } from "react-hook-form";
import { useNavigate } from "react-router";
import { LINE_VALUE } from "../../../models/backend";
import {
  TCreateLineParams,
  createLine,
} from "../../../queries/lines/createLine";
import LineValue from "../../forms/LineValue";
import { TextFieldRUForm } from "../../forms/TextField";

type TLineForm = {
  name: string;
  description: string;
  color: string;
};

type TLineFormProps = {};

const LineForm: React.FC<TLineFormProps> = () => {
  const navigate = useNavigate();
  const [color, setColor] = useState<string | undefined>();
  const [lineValue, setLineValue] = useState<LINE_VALUE>(LINE_VALUE.NORMAL);
  const { handleSubmit, control, setValue } = useForm<TLineForm>();

  const onSubmit = async (data: TLineForm) => {
    if (!color) {
      console.error("error, color", color);
      return false;
    }
    const lineData: TCreateLineParams = {
      title: data.name,
      description: data.description,
      color: color,
      value: lineValue,
    };
    await createLine(lineData); // TODO: check erros
    navigate("/");
  };

  const {
    field: { ref, ...inputProps },
  } = useController<TLineForm>({
    name: "color",
    control,
    rules: { required: true },
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2} style={{ height: "500px" }}>
        <Grid item xs={12} sm={6}>
          <TextFieldRUForm
            control={control}
            name="name"
            label="Name"
            rules={{ required: true }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextFieldRUForm
            control={control}
            name="description"
            label="Description"
            multiline
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ColorPicker
            label="Color"
            inputRef={ref}
            {...inputProps}
            InputProps={{
              value: color,
            }}
            onChange={(color) => {
              console.log("color", color);

              setColor(color);
              setValue("color", color);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <LineValue setValue={setLineValue} value={lineValue} />
        </Grid>
        <Grid item xs={12}>
          <Grid container alignItems="center" justifyContent="center">
            <Grid item>
              <Button type="submit">Submit</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default LineForm;
