import { Grid, Typography } from "@mui/material";
import { Navigate } from "react-router-dom";
import { ECheckTokenMessage } from "../../../models/backend";
import { useCheckToken } from "../../../queries/auth/checkToken";
import Loading from "../../global/loading/Loading";
import { navigateTo } from "../../../models/routes";
import { useQuery } from "../../../helpers/useQuery";

type TCheckTokenProps = {};

const CheckToken: React.FC<TCheckTokenProps> = () => {

    const query = useQuery();
    const token = query.get('token');

    if (!token) {
        return <Loading />;
    }

    return (
        <CheckTokenResponse token={token} />
    );
};

export default CheckToken;

type TCheckTokenResponseProps = {
    token: string;
};

const CheckTokenResponse: React.FC<TCheckTokenResponseProps> = ({ token }) => {

    const res = useCheckToken({ token });

    if (!res?.data) {
        <Loading />
    }

    if (res?.data.message === ECheckTokenMessage.TOKEN_VALID) {
        return <Navigate to={navigateTo.setPassword(token)} />
    }

    return (
        <Grid container alignItems="center" justifyContent="center" style={{ height: '100%' }}>
            <Grid item>
                <Typography align="center" fontSize={11} style={{ maxWidth: '300px' }}>
                    You can choose new password using the link that we will send to the email address.
                </Typography>
            </Grid>
        </Grid>
    );
};