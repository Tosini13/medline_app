import React, { useState } from "react";
import LineForm, { TLineForm } from "./LineForm";
import { Button, Grid, Typography } from "@mui/material";
import { LINE_VALUE } from "../../../models/backend";
import {
  TCreateLineParams,
  createLine,
} from "../../../queries/lines/createLine";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { theme } from "../../../style/theme";
import { useSnackbar } from "notistack";

type TCreateLineProps = {};

const CreateLine: React.FC<TCreateLineProps> = () => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [lineValue, setLineValue] = useState<LINE_VALUE>(LINE_VALUE.NORMAL);

  const { handleSubmit, control } = useForm<TLineForm>({
    defaultValues: {
      name: "",
      color: theme.palette.primary.main,
    },
  });

  const onSubmit = async (data: TLineForm) => {
    const lineData: TCreateLineParams = {
      title: data.name,
      description: data.description,
      color: data.color,
      value: lineValue,
    };
    try {
      await createLine(lineData); // TODO: check errors
      navigate("/");
      enqueueSnackbar("Line was created!", { variant: "success" });
    } catch (e) {
      enqueueSnackbar("Something went wrong!", { variant: "error" });
    }
  };

  const Actions = (
    <Grid container alignItems="center" justifyContent="center">
      <Grid item>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Grid>
    </Grid>)


  return (
    <Grid container direction="column" spacing={4}>
      <Grid item>
        <Typography align="center" variant="h6" style={{ marginTop: "20px" }}>
          Create Line
        </Typography>
      </Grid>
      <Grid item>
        <LineForm
          Actions={Actions}
          lineValue={lineValue}
          setLineValue={setLineValue}
          control={control}
          handleSubmit={(data) => handleSubmit(onSubmit)(data)}
        />
      </Grid>
    </Grid>
  );
};

export default CreateLine;
