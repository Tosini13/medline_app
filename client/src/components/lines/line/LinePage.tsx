import { Grid } from "@mui/material";
import Line from "./Line";
import styled from "styled-components";
import Lines from "../Lines";

const GridItemLine = styled(Grid)<{ open: boolean }>`
  box-shadow: 0px 0px 8px 0px rgb(0 0 0 / 60%);
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;

  @media screen and (max-width: 899px) {
    z-index: 101;
    overflow-y: auto;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    background: white;
    transition: all 0.3s;
    ${(props) =>
      props.open
        ? "transform: translateX(0%);"
        : "transform: translateX(100%);"}
  }
`;

type TLinePageProps = {};

const LinePage: React.FC<TLinePageProps> = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={6} style={{ height: "100vh", overflowY: "auto" }}>
        <Lines />
      </Grid>
      <GridItemLine
        item
        xs={12}
        md={6}
        style={{ height: "100vh", overflowY: "auto" }}
        open={true}
      >
        <Line />
      </GridItemLine>
    </Grid>
  );
};

export default LinePage;
