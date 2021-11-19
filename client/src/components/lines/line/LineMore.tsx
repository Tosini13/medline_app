import { useState } from "react";
import { Divider, List, Popover, Button } from "@mui/material";
import ListElement from "../../reusable/list/ListElement";
import { Delete, Add, Edit, Cancel } from "@mui/icons-material";
import useAsync from "../../../helpers/useAsync";
import { LoadingIcon } from "../../forms/Buttons";
import Question from "../../global/question/Question";
import { useSnackbar } from "notistack";

type TLineMoreProps = {
  handleDelete: () => Promise<void>;
  anchorEl: HTMLButtonElement | null;
  handleClose: () => void;
  handleOpenEventForm: () => void;
};

const LineMore: React.FC<TLineMoreProps> = ({
  anchorEl,
  handleOpenEventForm,
  handleClose,
  handleDelete,
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
        onClose={isProcessing ? undefined : handleClose}
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
          <ListElement Icon={<Edit />} text="Edit Line" color="gray" />
          <Divider />
          <ListElement
            Icon={isProcessing ? <LoadingIcon /> : <Delete color="error" />}
            text="Delete Line"
            onClick={() => setOpenQuestion(true)}
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
