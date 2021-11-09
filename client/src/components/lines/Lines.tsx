import { useNavigate, useParams } from "react-router";
import LineSummary from "./line/LineSummary";
import { Grid } from "@mui/material";
import { navigateTo } from "../../models/routes";
import { mockLines } from "../../mock/lines";

type TLinesProps = {};

const Lines: React.FC<TLinesProps> = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <Grid container spacing={2} style={{ padding: "5px 2px" }}>
      {mockLines.map((line) => (
        <Grid
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
