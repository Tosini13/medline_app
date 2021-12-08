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
import { useGetEvents } from "../../../queries/events/getEvents";
import { navigateTo } from "../../../models/routes";
import QRCodeDialog from "./QRCode";

type TLineProps = {};

const Line: React.FC<TLineProps> = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const { isProcessing, execute } = useAsync();

  const [openEventForm, setOpenEventForm] = useState(false);
  const [openQrCode, setOpenQrCode] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const { response } = useGetLine({ id: id as string, execute });
  const { response: resEvents, reExecute: reExecuteGetEvents } = useGetEvents(
    id as string
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  if (isProcessing || !response?.data) {
    return <Loading />;
  }
  const line = response?.data;

  const handleDeleteLine = async () => {
    try {
      await deleteLine({ id: id as string }); // TODO: check errors
      navigate("/");
    } catch (e) {
      console.error("e", e);
    }
  };

  return (
    <>
      <Stack style={{ height: "100%" }}>
        <LineHeader
          line={line}
          handleOpenMore={handleClick}
          handleClose={() => navigate("/")}
          contributions={resEvents?.data.data?.length}
        />
        <div
          style={{
            flexGrow: 1,
            position: "relative",
            display: "flex",
            overflowY: "hidden",
          }}
        >
          <Events
            lineId={line.id}
            openForm={openEventForm}
            setOpenForm={setOpenEventForm}
            reExecuteGetEvents={reExecuteGetEvents}
            resEvents={resEvents}
          />
        </div>
        <LineMore
          handleDelete={handleDeleteLine}
          anchorEl={anchorEl}
          handleClose={() => setAnchorEl(null)}
          handleOpenQRCode={() => setOpenQrCode(true)}
          handleOpenEventForm={() => setOpenEventForm(true)}
          handleEditLine={() => navigate(navigateTo.editLine(id as string))}
        />
        <QRCodeDialog
          open={openQrCode}
          handleClose={() => setOpenQrCode(false)}
          lineId={line.id}
        />
      </Stack>
    </>
  );
};

export default Line;
