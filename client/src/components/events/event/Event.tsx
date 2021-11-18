import { useState } from "react";
import { Grid, Stack, Paper, Typography, IconButton } from "@mui/material";
import { format } from "date-fns";
import { TEvent } from "../../../models/backend";
import Resources from "./Resources";
import { MoreVert } from "@mui/icons-material";
import styled from "styled-components";
import { theme } from "../../../style/theme";
import EventMore from "./EventMore";
import { deleteEvent } from "../../../queries/events/deleteEvent";
import { TUseGetEventsReturn } from "../../../queries/events/getEvents";

const TypographyStyled = styled(Typography)`
  color: ${theme.palette.text.secondary};
`;

const DATE_TIME = "yyyy.MM.dd HH:mm";

type TEventProps = {
  event: TEvent;
  reExecuteGetEvents: TUseGetEventsReturn["reExecute"];
};

const Event: React.FC<TEventProps> = ({ event, reExecuteGetEvents }) => {
  const [, setOpenEventForm] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDeleteEvent = async () => {
    try {
      await deleteEvent({ id: event.id });
      reExecuteGetEvents();
    } catch (e) {
      console.error("ERROR", e);
    }
  };
  return (
    <>
      <Paper style={{ backgroundColor: "#E3E3E3", padding: "1px" }}>
        <Stack>
          <Grid container alignItems="center">
            <Grid item xs={3} style={{ alignSelf: "flex-start" }}>
              <TypographyStyled
                align="left"
                fontWeight={600}
                style={{ fontSize: "11px" }}
              >
                {format(new Date(event.dateTime), DATE_TIME)}
              </TypographyStyled>
            </Grid>
            <Grid item style={{ flexGrow: 1 }}>
              <Typography align="center" fontWeight={500}>
                {event.title}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Stack alignItems="flex-end">
                <IconButton onClick={handleClick} size="large">
                  <MoreVert color="primary" />
                </IconButton>
              </Stack>
            </Grid>
          </Grid>
          {event.description && <Typography>{event.description}</Typography>}
          {event.resources?.length ? (
            <Resources resources={event.resources} />
          ) : null}
        </Stack>
      </Paper>
      <EventMore
        handleDelete={handleDeleteEvent}
        anchorEl={anchorEl}
        handleClose={() => setAnchorEl(null)}
        handleOpenEventForm={() => setOpenEventForm(true)}
      />
    </>
  );
};

export default Event;
