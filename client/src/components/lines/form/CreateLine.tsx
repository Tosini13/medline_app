import React, { useState } from "react";
import LineForm, { TLineForm } from "./LineForm";
import { Grid, Typography } from "@mui/material";
import { LINE_VALUE } from "../../../models/backend";
import {
  TCreateLineParams,
  createLine,
} from "../../../queries/lines/createLine";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

type TCreateLineProps = {};

const CreateLine: React.FC<TCreateLineProps> = () => {
  const navigate = useNavigate();
  const [lineValue, setLineValue] = useState<LINE_VALUE>(LINE_VALUE.NORMAL);

  const { handleSubmit, control } = useForm<TLineForm>({
    defaultValues: {
      name: "",
      color: "#2D6B5F",
    },
  });

  const onSubmit = async (data: TLineForm) => {
    const lineData: TCreateLineParams = {
      title: data.name,
      description: data.description,
      color: data.color,
      value: lineValue,
    };
    await createLine(lineData); // TODO: check errors
    navigate("/");
  };

  return (
    <Grid container direction="column" spacing={4}>
      <Grid item>
        <Typography align="center" variant="h6" style={{ marginTop: "20px" }}>
          Create Line
        </Typography>
      </Grid>
      <Grid item>
        <LineForm
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
