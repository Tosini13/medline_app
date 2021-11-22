import { Controller, UseControllerProps } from "react-hook-form";
import { IconButton, Stack, Typography } from "@mui/material";
import { Cancel } from "@mui/icons-material";

type TControlledResourceProps<FormValues> = UseControllerProps<FormValues> & {
  label: string;
};

const ControlledResource = <FormValues extends {}>({
  control,
  name,
  label,
  rules,
  ...props
}: TControlledResourceProps<FormValues>) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value } }) => (
        <Stack direction="row">
          <Typography>
            {label} - {value}
          </Typography>
          <IconButton onClick={() => onChange(null)}>
            <Cancel />
          </IconButton>
        </Stack>
      )}
    />
  );
};

export default ControlledResource;
