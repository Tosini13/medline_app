import { IconButton, Stack, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";

type TResourceFormProps = {
  label: string;
  handleDelete: () => void;
};

const ResourceForm: React.FC<TResourceFormProps> = ({
  label,
  handleDelete,
}) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      style={{ width: "100%" }}
    >
      <Typography>{label}</Typography>
      <IconButton onClick={handleDelete}>
        <Delete color="error" fontSize="small" />
      </IconButton>
    </Stack>
  );
};

export default ResourceForm;
