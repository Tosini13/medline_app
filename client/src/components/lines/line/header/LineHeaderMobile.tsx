import { useState } from "react";
import { Button, Grid, IconButton, Typography } from "@mui/material";
import { MoreVert, Close } from "@mui/icons-material";
import Value from "../Value";
import { TLine } from "../../../../models/backend";
import { LoadingIcon } from "../../../forms/Buttons";
import styled from "styled-components";

const ValueContainer = styled.div`
  position: absolute;
  top: 0px;
  right: -10px;
`;

type TLineHeaderMobileProps = {
  line: TLine;
  contributions?: number;
  handleOpenMore: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleClose: () => void;
};

const LineHeaderMobile: React.FC<TLineHeaderMobileProps> = ({
  line,
  contributions,
  handleOpenMore,
}) => {
  const [openDesc, setOpenDesc] = useState(false);

  return (
    <Grid
      container
      direction="column"
      spacing={2}
      style={{
        paddingLeft: "5px",
        paddingRight: "5px",
        boxShadow: "0px 0px 8px -3px rgb(0 0 0 / 70%)",
        zIndex: 1,
      }}
    >
      <Grid item>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          style={{ paddingBottom: line.description ? "0px" : "25px" }}
        >
          <Grid item xs={2} style={{ position: "relative" }}>
            {contributions !== undefined ? (
              <Typography align="center" fontSize="large">
                {contributions}
              </Typography>
            ) : (
              <div style={{ textAlign: "center" }}>
                <LoadingIcon />
              </div>
            )}
            <Typography align="center" fontSize="xx-small">
              contributions
            </Typography>
            <ValueContainer>
              <Value value={line.value} />
            </ValueContainer>
          </Grid>
          <Grid item>
            {line.description && (
              <Button
                variant="contained"
                color="primary"
                disabled={!line.description}
                onClick={() => setOpenDesc(!openDesc)}
              >
                {openDesc ? "Hide" : "Show"} description
              </Button>
            )}
          </Grid>
          <Grid item xs={2}>
            <IconButton onClick={handleOpenMore}>
              <MoreVert color="primary" fontSize="large" />
            </IconButton>
            {/* <Grid container justifyContent="center">
              <Grid item>
                <Value value={line.value} />
              </Grid>
            </Grid> */}
          </Grid>
        </Grid>
      </Grid>
      {line.description && openDesc ? (
        <Grid item>
          <Typography>{line.description}</Typography>
        </Grid>
      ) : null}
    </Grid>
  );
};

export default LineHeaderMobile;
