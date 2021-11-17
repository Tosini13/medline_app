import { Divider, List, Popover } from "@mui/material";
import ListElement from "../../reusable/list/ListElement";
import { Delete, Add } from "@mui/icons-material";

type TLineMoreProps = {
  handleDelete: () => void;
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
  const handleClickEvent = () => {
    handleClose();
    handleOpenEventForm();
  };

  const handleClickDelete = () => {
    handleClose();
    handleDelete();
  };

  return (
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
          onClick={handleClickEvent}
          color="black"
        />
        <Divider />
        <ListElement
          Icon={<Delete color="error" />}
          text="Delete Line"
          onClick={handleClickDelete}
          color="black"
        />
      </List>
    </Popover>
  );
};

export default LineMore;
