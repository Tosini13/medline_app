import { Dialog, List } from "@mui/material";
import ListElement from "../../reusable/list/ListElement";
import { Delete } from "@mui/icons-material";

type TLineMoreProps = {
  handleDelete: () => void;
  open: boolean;
  handleClose: () => void;
};

const LineMore: React.FC<TLineMoreProps> = ({
  open,
  handleClose,
  handleDelete,
}) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <List>
        <ListElement
          Icon={<Delete color="error" />}
          text="Delete Line"
          onClick={handleDelete}
          color="black"
        />
      </List>
    </Dialog>
  );
};

export default LineMore;
