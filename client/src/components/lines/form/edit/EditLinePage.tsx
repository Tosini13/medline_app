import EditLine from "./EditLine";
import { useParams } from "react-router-dom";
import { useGetLine } from "../../../../queries/lines/getLine";
import useAsync from "../../../../helpers/useAsync";
import Loading from "../../../global/loading/Loading";
import { Typography } from "@mui/material";

type TEditLinePageProps = {};

const EditLinePage: React.FC<TEditLinePageProps> = () => {
    const { isProcessing, execute } = useAsync();
    const { id } = useParams();
    const { response } = useGetLine({ id: id as string, execute });

    if (isProcessing) {
        return <Loading />
    }

    if (!response?.data) {
        return (<Typography>No data</Typography>);
    }

    return (
        <EditLine line={response.data} />
    );
};

export default EditLinePage