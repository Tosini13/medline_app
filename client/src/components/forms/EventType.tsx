import { DialogTitle, DialogContent } from "@material-ui/core";
import { LocalHospital } from "@mui/icons-material";
import { Dialog, Grid, IconButton, List, Typography } from "@mui/material";
import { useState } from "react";
import { EVENT_TYPE } from "../../models/backend";
import EventTypeIcon from "../events/EventTypeIcon";
import ListElement from "../reusable/list/ListElement";

type TEventTypeProps = {
  type: EVENT_TYPE;
  setType: (value: EVENT_TYPE) => void;
};

const EventType: React.FC<TEventTypeProps> = ({ setType, type }) => {
  const [open, setOpen] = useState(false);
  const chooseType = (value: EVENT_TYPE) => {
    setOpen(false);
    setType(value);
  };
  return (
    <>
      <IconButton size="large" onClick={() => setOpen(true)}>
        <EventTypeIcon type={type} style={{ color: "#2D6B5F" }} />
      </IconButton>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Choose Line Value</DialogTitle>
        <List style={{ minWidth: "250px" }}>
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
      </Dialog>
    </>
  );
};

export default EventType;

type TEventTypeOptionProps = {
  handleCLick: () => void;
  text: string;
  type: EVENT_TYPE;
};

const EventTypeOption: React.FC<TEventTypeOptionProps> = ({
  text,
  type,
  handleCLick,
}) => {
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <IconButton onClick={handleCLick}>
          <EventTypeIcon type={type} />
        </IconButton>
      </Grid>
      <Grid item style={{ flexGrow: 1 }}>
        <Typography>{text}</Typography>
      </Grid>
    </Grid>
  );
};
