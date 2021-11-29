import { useState } from "react";
import { Button, Stack, Typography } from "@mui/material";
import { useGetCurrentUser } from "../../queries/users/getCurrentUser";
import Loading from "../global/loading/Loading";
import EditUser from './form/edit/EditUser';
import { Edit } from "@mui/icons-material";
import { format } from "date-fns";

type TUserProps = {};

const User: React.FC<TUserProps> = () => {
    const [openForm, setOpenForm] = useState(false);
    const res = useGetCurrentUser();

    const user = res?.data;
    if (!user) {
        return <Loading />;
    }


    return (
        <>
            <Stack spacing={2} alignItems="flex-start" justifyContent="flex-start" style={{ padding: '20px' }}>
                <Button variant="contained" startIcon={<Edit />} onClick={() => setOpenForm(true)}>
                    Edit
                </Button>
                <Cell label="First Name" value={user.firstName} />
                <Cell label="Last Name" value={user.lastName} />
                <Cell label="Email" value={user.email} />
                <Cell label="Date of Birth" value={user.dateOfBirth && format(user.dateOfBirth, "yyyy.MM.dd hh:mm")} /> {/* Format: DATE (XX years old) */}
                <Cell label="Blood Group" value={user.bloodGroup} />
                <Cell label="Rh Factor" value={user.rhesusFactor} />
            </Stack>
            <EditUser open={openForm} handleClose={() => setOpenForm(false)} user={user} />
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