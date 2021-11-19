import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

export interface QuestionProps {
  title: string;
  content?: string;
  open: boolean;
  handleClose?: () => void;
}

const Question: React.FC<QuestionProps> = ({
  children,
  title,
  content,
  open,
  handleClose,
}) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      {content ? <DialogContent>{content}</DialogContent> : null}
      <DialogActions>{children}</DialogActions>
    </Dialog>
  );
};

export default Question;
