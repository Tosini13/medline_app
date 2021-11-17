import { IconButton, List, Popover } from "@mui/material";
import { useState } from "react";
import { EVENT_TYPE } from "../../models/backend";
import EventTypeIcon from "../events/EventTypeIcon";
import ListElement from "../reusable/list/ListElement";

type TEventTypeProps = {
  type: EVENT_TYPE;
  setType: (value: EVENT_TYPE) => void;
};

const EventType: React.FC<TEventTypeProps> = ({ setType, type }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const chooseType = (value: EVENT_TYPE) => {
    setAnchorEl(null);
    setType(value);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <IconButton size="large" onClick={handleClick}>
        <EventTypeIcon type={type} />
      </IconButton>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <List>
          <ListElement
            onClick={() => chooseType(EVENT_TYPE.APPOINTMENT)}
            Icon={<EventTypeIcon type={EVENT_TYPE.APPOINTMENT} />}
            text="Appointment"
            color="black"
          />
          <ListElement
            onClick={() => chooseType(EVENT_TYPE.OCCURRENCE)}
            Icon={<EventTypeIcon type={EVENT_TYPE.OCCURRENCE} />}
            text="Occurrence"
            color="black"
          />
          <ListElement
            onClick={() => chooseType(EVENT_TYPE.SURGERY)}
            Icon={<EventTypeIcon type={EVENT_TYPE.SURGERY} />}
            text="Surgery"
            color="black"
          />
          <ListElement
            onClick={() => chooseType(EVENT_TYPE.TEST)}
            Icon={<EventTypeIcon type={EVENT_TYPE.TEST} />}
            text="Test"
            color="black"
          />
        </List>
      </Popover>
    </>
  );
};

export default EventType;
