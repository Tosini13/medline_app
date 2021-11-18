import { Divider, List, Popover } from "@mui/material";
import ListElement from "../../reusable/list/ListElement";
import { Delete, Add } from "@mui/icons-material";
import useAsync from "../../../helpers/useAsync";
import { LoadingIcon } from "../../forms/Buttons";

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
  const { isProcessing, execute } = useAsync();
  const handleClickEvent = () => {
    handleClose();
    handleOpenEventForm();
  };

  const handleClickDelete = async () => {
    try {
      await execute(handleDelete());
      handleClose();
    } catch (e) {}
  };

  return (
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
          text="Edit Event"
          onClick={handleClickEvent}
          color="black"
        />
        <Divider />
        <ListElement
          Icon={isProcessing ? <LoadingIcon /> : <Delete color="error" />}
          text="Delete Event"
          onClick={handleClickDelete}
          color="black"
        />
      </List>
    </Popover>
  );
};

export default EventMore;
