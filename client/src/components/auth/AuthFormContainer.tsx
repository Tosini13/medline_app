import { Hidden, Paper, Stack } from "@mui/material";

type TAuthFormContainerProps = {};

export const AuthFormContainer: React.FC<TAuthFormContainerProps> = ({ children }) => {
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

type TAuthPageContainerProps = {};

const AuthPageContainer: React.FC<TAuthPageContainerProps> = ({ children }) => {
    return (
        <>
            <Hidden mdDown>
                <Stack spacing={2} alignItems="center" justifyContent="center" style={{ height: '100%' }}>
                    {children}
                </Stack>
            </Hidden>
            <Hidden mdUp>
                <Stack spacing={2} alignItems="center" justifyContent="center" style={{ height: '100%' }}>
                    {children}
                </Stack>
            </Hidden>
        </>
    );
};

export default AuthPageContainer;