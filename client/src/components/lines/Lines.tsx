import { useNavigate, useParams } from "react-router";
import LineSummary from "./line/LineSummary";
import { Button, Grid, Hidden, Stack, Typography } from "@mui/material";
import { ERoutes, navigateTo } from "../../models/routes";
import { useGetLines } from "../../queries/lines/getLines";
import Loading from "../global/loading/Loading";
import style from "styled-components";

const LinesContainerStyles = style.div`
height: calc(100vh - 60px);
overflow-y: auto;
`;

type TLinesContainerProps = {};

const LinesContainer: React.FC<TLinesContainerProps> = ({ children }) => {
  return (
    <>
      <Hidden mdUp>
        <LinesContainerStyles>{children}</LinesContainerStyles>
      </Hidden>
      <Hidden mdDown>{children}</Hidden>
    </>
  );
};

type TLinesProps = {};

const Lines: React.FC<TLinesProps> = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const res = useGetLines();

  if (!res?.data) {
    return <Loading />;
  }

  if (!res.data.length) {
    return (
      <LinesContainer>
        <Stack spacing={3} style={{ padding: '20px' }} alignItems="center">
          <Typography color="primary">You don't have any lines created</Typography>
          <Button variant="contained" onClick={() => navigate(ERoutes.create)}>
            Create Line
          </Button>
        </Stack>
      </LinesContainer>
    )
  }

  return (
    <LinesContainer>
      <Grid container spacing={2} style={{ padding: "5px" }}>
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
    </LinesContainer>
  );
};

export default Lines;
