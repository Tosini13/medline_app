import { Hidden, Paper, Stack } from "@mui/material";

type TAuthFormContainerProps = {};

export const AuthFormContainer: React.FC<TAuthFormContainerProps> = ({ children }) => {
    return (
        <>
            <Hidden mdDown>
                <div style={{
                    width: '300px'
                }}>
                    {children}
                </div>
            </Hidden>
            <Hidden mdUp>
                {children}
            </Hidden>
        </>
    );
};

// type TAuthPageContainerProps = {};

// const AuthPageContainer: React.FC<TAuthPageContainerProps> = ({ children }) => {
//     return (
//         <>
//             <Hidden mdDown>
//                 <Stack spacing={6} alignItems="center" style={{ height: '100%' }}>
//                     {children}
//                 </Stack>
//             </Hidden>
//             <Hidden mdUp>
//                 <Stack spacing={2} alignItems="center" justifyContent="center" style={{ height: '100%' }}>
//                     {children}
//                 </Stack>
//             </Hidden>
//         </>
//     );
// };

// export default AuthPageContainer;