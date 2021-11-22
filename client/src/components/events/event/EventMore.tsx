import { Button, Divider, List, Popover } from "@mui/material";
import ListElement from "../../reusable/list/ListElement";
import { Delete, Edit, Cancel } from "@mui/icons-material";
import useAsync from "../../../helpers/useAsync";
import { LoadingIcon } from "../../forms/Buttons";
import Question from "../../global/question/Question";
import { useState } from "react";

type TEventMoreProps = {
  handleDelete: () => Promise<void>;
  anchorEl: HTMLButtonElement | null;
  handleClose: () => void;
  handleOpenEventForm: () => void;
};

const EventMore: React.FC<TEventMoreProps> = ({
  anchorEl,
  handleOpenEventForm,
  handleClose,
  handleDelete,
}) => {
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
    } catch (e) {}
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
            Icon={<Edit color="primary" />}
            text="Edit Event"
            onClick={() => handleClickOption(handleOpenEventForm)}
            color="black"
          />
          <Divider />
          <ListElement
            Icon={<Delete color="error" />}
            text="Delete Event"
            onClick={() => handleClickOption(() => setOpenQuestion(true))}
            color="black"
          />
        </List>
      </Popover>
      <Question
        title="Do you really want to delete the Event?"
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

export default EventMore;
