import { useController, UseControllerProps } from "react-hook-form";
import { TextField, TextFieldProps } from "@mui/material";
import styled from 'styled-components';
import { hexToRgb } from "../../helpers/calcHexToRGB";
import { ETheme } from "../../stores/Theme";
import { useTheme, Theme } from "@mui/material/styles";

const TextFieldStyled = styled(TextField) <{ theme: Theme }>`
  div.MuiOutlinedInput-root{
  ${props => props.theme.palette.mode === ETheme.dark
    ? `background-color: rgba(${hexToRgb(props.theme.palette.primary.light)},0.8);`
    :
    'background-color: rgba(255,255,255,0.8);'}
  }
  input:-webkit-autofill{
    ${props => props.theme.palette.mode === ETheme.dark
    ? `-webkit-box-shadow: 0 0 0 100px rgba(${hexToRgb(props.theme.palette.primary.main)},0.8) inset !important;`
    :
    '-webkit-box-shadow: 0 0 0 100px rgba(255,255,255,0.8) inset !important;'}
  }
`;

type TTextFieldRUProps = TextFieldProps;

const TextFieldRU: React.FC<TTextFieldRUProps> = ({ children, ...props }) => {
  const theme = useTheme()
  return (
    <TextFieldStyled variant="outlined" theme={theme} {...props}>
      {children}
    </TextFieldStyled>
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
