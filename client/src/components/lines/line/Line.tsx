import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import { useGetLine } from "../../../queries/lines/getLine";
import Loading from "../../loading/Loading";
import { deleteLine } from "../../../queries/lines/deleteLine";
import LineMore from "./LineMore";
import Events from "../../events/Events";
import LineHeader from "./LineHeader";

type TLineProps = {};

const Line: React.FC<TLineProps> = () => {
  const { id } = useParams();
  const [openMore, setOpenMore] = useState(false);
  const navigate = useNavigate();
  const response = useGetLine({ id: id as string });

  if (!response?.data) {
    return <Loading />;
  }
  const line = response?.data;

  const handleDeleteLine = async () => {
    await deleteLine({ id: id as string }); // TODO: check erros
    navigate("/");
  };

  return (
    <Grid container spacing={2} direction="column">
      <Grid item>
        <LineHeader
          line={line}
          handleOpenMore={() => setOpenMore(true)}
          handleClose={() => navigate("/")}
        />
      </Grid>
      <Grid item>
        <Events lineId={line.id} />
      </Grid>
      <Grid item>
        <LineMore
          handleDelete={handleDeleteLine}
          open={openMore}
          handleClose={() => setOpenMore(false)}
        />
      </Grid>
    </Grid>
  );
};

export default Line;
