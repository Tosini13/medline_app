import { useNavigate, useParams } from "react-router";
import LineSummary from "./line/LineSummary";
import { Grid } from "@mui/material";
import { navigateTo } from "../../models/routes";
import { useGetLines } from "../../queries/lines/getLines";
import Loading from "../loading/Loading";

type TLinesProps = {};

const Lines: React.FC<TLinesProps> = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const res = useGetLines();

  if (!res?.data) {
    return <Loading />;
  }

  return (
    <Grid container spacing={2} style={{ padding: "5px 2px" }}>
      {res.data.map((line) => (
        <Grid
          key={line.id}
          item
          xs={12}
          sm={12}
          xl={id ? 12 : 6}
          onClick={() => navigate(navigateTo.line(line.id))}
        >
          <LineSummary line={line} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Lines;
