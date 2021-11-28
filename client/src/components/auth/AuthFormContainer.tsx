import { Hidden, Paper } from "@mui/material";

type TAuthFormContainerProps = {};

const AuthFormContainer: React.FC<TAuthFormContainerProps> = ({ children }) => {
    return (
        <>
            <Hidden mdDown>
                <Paper style={{ padding: '20px' }}>
                    {children}
                </Paper>
            </Hidden>
            <Hidden mdUp>
                {children}
            </Hidden>
        </>
    );
};

export default AuthFormContainer;