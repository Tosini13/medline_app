import { useController, UseControllerProps } from "react-hook-form";
import { TextField, TextFieldProps } from "@mui/material";

type TTextFieldRUProps = TextFieldProps;

const TextFieldRU: React.FC<TTextFieldRUProps> = ({ children, ...props }) => {
  return (
    <TextField variant="standard" {...props}>
      {children}
    </TextField>
  );
};

export default TextFieldRU;

type TTextFieldRUFormProps<FormValues> = Omit<TextFieldProps, "name"> &
  UseControllerProps<FormValues>;

export const TextFieldRUForm = <FormValues extends {}>({
  children,
  name,
  defaultValue,
  control,
  rules,
  ...props
}: TTextFieldRUFormProps<FormValues>) => {
  const {
    field: { ref, ...inputProps },
  } = useController<FormValues>({
    name,
    control,
    rules,
  });
  return (
    <TextFieldRU inputRef={ref} {...inputProps} {...props}>
      {children}
    </TextFieldRU>
  );
};
