import { Grid, IconButton, List, Popover } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import { useState } from "react";
import ListElement from "../../reusable/list/ListElement";

type TResourcesProps = {
  resources: string[];
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
          <IconButton color="primary" size="large" onClick={handleClick}>
            <DescriptionIcon />
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
              onClick={() => handleChoose(resource)}
              text={resource}
              color="black"
            />
          ))}
        </List>
      </Popover>
    </>
  );
};

export default Resources;
