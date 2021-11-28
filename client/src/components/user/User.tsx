import { Stack, Typography } from "@mui/material";
import { useGetCurrentUser } from "../../queries/users/getCurrentUser";
import Loading from "../global/loading/Loading";

type TUserProps = {};

const User: React.FC<TUserProps> = () => {

    const res = useGetCurrentUser();

    console.log('res', res);
    const user = res?.data;
    if (!user) {
        return <Loading />;
    }


    return (
        <>
            <Stack spacing={2} style={{ padding: '20px' }}>
                <Cell label="First Name" value={user.firstName} />
                <Cell label="Last Name" value={user.lastName} />
                <Cell label="Email" value={user.email} />
                <Cell label="Date of Birth" value={undefined} /> {/* Format: DATE (XX years old) */}
                <Cell label="Blood Group" value={user.bloodGroup} />
                <Cell label="Rh Factor" value={user.rhesusFactor} />
            </Stack>
        </>
    );
};

export default User

type TCellProps = { label: string; value?: string };

const Cell: React.FC<TCellProps> = ({ label, value }) => {
    return (
        <Stack>
            <Typography fontSize={10} fontWeight={700} color="primary">
                {label}
            </Typography>
            {value ?
                <Typography>
                    {value}
                </Typography>
                :
                <Typography style={{ color: 'gray' }}>
                    {'not provided'}
                </Typography>}
        </Stack>
    );
};