import { useState } from "react";
import { Divider, List, Popover, Button } from "@mui/material";
import ListElement from "../../reusable/list/ListElement";
import { Delete, Add, Edit, Cancel, QrCode } from "@mui/icons-material";
import useAsync from "../../../helpers/useAsync";
import { LoadingIcon } from "../../forms/Buttons";
import Question from "../../global/question/Question";
import { useSnackbar } from "notistack";

type TLineMoreProps = {
  handleDelete: () => Promise<void>;
  anchorEl: HTMLButtonElement | null;
  handleClose: () => void;
  handleOpenEventForm: () => void;
  handleOpenQRCode: () => void;
  handleEditLine: () => void;
};

const LineMore: React.FC<TLineMoreProps> = ({
  anchorEl,
  handleOpenEventForm,
  handleOpenQRCode,
  handleClose,
  handleDelete,
  handleEditLine
}) => {
  const { enqueueSnackbar } = useSnackbar();
  const [openQuestion, setOpenQuestion] = useState(false);
  const { isProcessing, execute } = useAsync();

  const handleClickOption = (callback: () => void) => {
    callback();
    handleClose();
  };

  const handleClickDelete = async () => {
    try {
      await execute(handleDelete());
      setOpenQuestion(false);
      enqueueSnackbar("Line has been deleted!", { variant: "success" });
    } catch (e) {
      console.error("e", e);
      enqueueSnackbar("Something went wrong!", { variant: "error" });
    }
  };

  return (
    <>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <List>
          <ListElement
            Icon={<Add color="primary" />}
            text="Create Event"
            onClick={() => handleClickOption(handleOpenEventForm)}
            color="black"
          />
          <ListElement Icon={<Edit color="primary" />} text="Edit Line" onClick={() => handleClickOption(handleEditLine)} color="black" />
          <ListElement Icon={<QrCode color="primary" />} text="Generate QR code" onClick={() => handleClickOption(handleOpenQRCode)} color="black" />
          <Divider />
          <ListElement
            Icon={<Delete color="error" />}
            text="Delete Line"
            onClick={() => handleClickOption(() => setOpenQuestion(true))}
            color="black"
          />
        </List>
      </Popover>
      <Question
        title="Do you really want to delete the Line?"
        open={openQuestion}
      >
        <Button
          variant="outlined"
          color="error"
          onClick={handleClickDelete}
          startIcon={isProcessing ? <LoadingIcon /> : <Delete color="error" />}
        >
          Yes
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setOpenQuestion(false)}
          startIcon={<Cancel />}
        >
          No
        </Button>
      </Question>
    </>
  );
};

export default LineMore;
