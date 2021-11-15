import { Controller, UseControllerProps } from "react-hook-form";

import { DateTimePicker, DateTimePickerProps } from "@mui/lab";
import { TextField } from "@mui/material";

type TControlledDateTimePickerProps<FormValues> = Omit<
  DateTimePickerProps,
  "name" | "onChange" | "value" | "renderInput"
> &
  UseControllerProps<FormValues>;

const ControlledDateTimePicker = <FormValues extends {}>({
  control,
  name,
  rules,
  ...props
}: TControlledDateTimePickerProps<FormValues>) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value } }) => (
        <DateTimePicker
          {...props}
          value={value}
          onChange={onChange}
          renderInput={(params) => <TextField {...params} />}
        />
      )}
    />
  );
};

export default ControlledDateTimePicker;
