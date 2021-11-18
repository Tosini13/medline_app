import { CircularProgress, CircularProgressProps } from "@mui/material";

export const LoadingIcon = (props: CircularProgressProps) => (
  <CircularProgress size={"20px"} {...props} />
);
