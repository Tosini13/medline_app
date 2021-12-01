import React, { useEffect, useState } from "react";
import LineForm, { TLineForm } from "../LineForm";
import { Grid, Typography } from "@mui/material";
import { LINE_VALUE, TLine } from "../../../../models/backend";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useSnackbar } from "notistack";
import { editLine, TEditLineParams } from "../../../../queries/lines/editLine";
import { navigateTo } from "../../../../models/routes";
import Button from "../../../buttons/Button";

type TEditLineProps = {
    line: TLine
};

const EditLine: React.FC<TEditLineProps> = ({ line }) => {
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();
    const [lineValue, setLineValue] = useState<LINE_VALUE>(line.value);

    const { handleSubmit, control, reset } = useForm<TLineForm>({
        defaultValues: {
            name: line.title,
            description: line.description,
            color: line.color,
        },
    });

    useEffect(() => {
        reset({
            name: line.title,
            description: line.description,
            color: line.color,
        })
    }, [line, reset])

    const onSubmit = async (data: TLineForm) => {
        const lineData: TEditLineParams = {
            id: line.id,
            title: data.name,
            description: data.description,
            color: data.color,
            value: lineValue,
        };
        try {
            await editLine(lineData); // TODO: check errors
            navigate(navigateTo.line(line.id));
            enqueueSnackbar("Line was created!", { variant: "success" });
        } catch (e) {
            enqueueSnackbar("Something went wrong!", { variant: "error" });
        }
    };

    const Actions = (
        <Grid container alignItems="center" justifyContent="center">
            <Grid item>
                <Button type="submit" variant="contained" color="primary">
                    Save
                </Button>
            </Grid>
        </Grid>);

    return (
        <Grid container direction="column" spacing={4}>
            <Grid item>
                <Typography align="center" variant="h6" style={{ marginTop: "20px" }}>
                    Edit Line
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

export default EditLine;
