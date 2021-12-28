import { Button as MuiButton, ButtonProps } from "@mui/material";
import { ETheme } from "../../stores/Theme";
import { useTheme, Theme } from "@mui/material/styles";

export type TButtonProps = ButtonProps;

const Button: React.FC<TButtonProps> = ({ children, ...props }) => {
    const theme = useTheme();
    return (
        <MuiButton variant="contained" color={theme?.palette?.mode === ETheme.dark ? 'secondary' : 'primary'} {...props}>{children}</MuiButton>
    );
};

export default Button

type TButtonSecondaryProps = ButtonProps;

export const ButtonSecondary: React.FC<TButtonSecondaryProps> = ({ children, ...props }) => {
    const theme = useTheme();
    return (
        <MuiButton variant="contained" color={theme?.palette?.mode === ETheme.dark ? 'primary' : 'secondary'} {...props}>{children}</MuiButton>
    );
};
