import { Stack, Typography } from "@mui/material";
import { LinkA } from "../../../buttons/Links";
import { ColumnContainer } from "./SiteDetails";

type TCreatedByProps = {};

const CreatedBy: React.FC<TCreatedByProps> = () => {
    const developers: Array<{ id: number, name: string, url?: string, role: string }> = [
        { id: 1, name: 'Jakub Bartosik', url: 'https://www.jakubbartosik.com/', role: 'web developer' },
        { id: 2, name: 'Krzystof Bartosik', role: 'web designer' }
    ];
    return (
        <ColumnContainer title="Created By">
            <Stack spacing={2} alignItems={"center"}>
                {developers.map(developer => (
                    <Stack direction={'row'} key={developer.id} spacing={1}>
                        {developer.url ?
                            <LinkA href={developer.url} target="_blank"> <Typography>{developer.name}</Typography></LinkA> :
                            <Typography>{developer.name}</Typography>
                        }
                        <Typography>{developer.role}</Typography>
                    </Stack>
                ))}
            </Stack>
        </ColumnContainer>
    );
};

export default CreatedBy