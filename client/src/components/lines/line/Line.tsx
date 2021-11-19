import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Stack } from "@mui/material";
import { useGetLine } from "../../../queries/lines/getLine";
import Loading from "../../global/loading/Loading";
import { deleteLine } from "../../../queries/lines/deleteLine";
import LineMore from "./LineMore";
import Events from "../../events/Events";
import LineHeader from "./LineHeader";
import useAsync from "../../../helpers/useAsync";

type TLineProps = {};

const Line: React.FC<TLineProps> = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isProcessing, execute } = useAsync();

  const [openEventForm, setOpenEventForm] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const response = useGetLine({ id: id as string, execute });

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  if (isProcessing || !response?.data) {
    return <Loading />;
  }
  const line = response?.data;

  const handleDeleteLine = async () => {
    await deleteLine({ id: id as string }); // TODO: check erros
    navigate("/");
  };

  return (
    <Stack style={{ height: "100vh" }}>
      <LineHeader
        line={line}
        handleOpenMore={handleClick}
        handleClose={() => navigate("/")}
      />
      <div style={{ flexGrow: 1, overflowY: "auto" }}>
        <Events
          lineId={line.id}
          openForm={openEventForm}
          setOpenForm={setOpenEventForm}
        />
      </div>
      <LineMore
        handleDelete={handleDeleteLine}
        anchorEl={anchorEl}
        handleClose={() => setAnchorEl(null)}
        handleOpenEventForm={() => setOpenEventForm(true)}
      />
    </Stack>
  );
};

export default Line;
