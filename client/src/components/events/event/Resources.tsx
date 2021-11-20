import { Grid, IconButton, List, Popover } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import { useState } from "react";
import ListElement from "../../reusable/list/ListElement";
import { TResource } from "../../../models/backend";

type TResourcesProps = {
  resources: TResource[];
};

const Resources: React.FC<TResourcesProps> = ({ resources }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleChoose = (resource: string) => {
    window.open(resource, "_blank");
    setAnchorEl(null);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <Grid container justifyContent="flex-end">
        <Grid item>
          <IconButton color="primary" onClick={handleClick}>
            <DescriptionIcon fontSize="small" />
          </IconButton>
        </Grid>
      </Grid>{" "}
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
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
          {resources.map((resource) => (
            <ListElement
              key={resource.path}
              onClick={() => handleChoose(resource.path)}
              text={resource.name}
              color="black"
            />
          ))}
        </List>
      </Popover>
    </>
  );
};

export default Resources;
