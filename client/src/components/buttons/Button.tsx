import { Button as MuiButton, ButtonProps } from "@mui/material";

type TButtonProps = ButtonProps;

const Button: React.FC<TButtonProps> = ({ children, ...props }) => {
    return (
        <MuiButton variant="contained" {...props}>{children}</MuiButton>
    );
};

export default Button