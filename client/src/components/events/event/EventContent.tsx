import { useState } from "react";
import { Stack, Typography, IconButton, Grid } from "@mui/material";
import { TEvent } from "../../../models/backend";
import Resources from "./Resources";
import { ArrowCircleDown, ArrowCircleUp } from "@mui/icons-material";

type TEventContentProps = {
  event: TEvent;
};

const EventContent: React.FC<TEventContentProps> = ({ event }) => {
  const [showDesc, setShowDesc] = useState(false);
  return (
    <Stack style={{ padding: "1px" }} onClick={() => setShowDesc(!showDesc)}>
      <Grid container alignItems="flex-start" wrap="nowrap" spacing={2}>
        <Grid item style={{ flexGrow: 1 }}>
          <Typography
            align="center"
            fontWeight={600}
            style={{ fontSize: "14px" }}
          >
            {event.title}
          </Typography>
        </Grid>
      </Grid>
      {showDesc && event.description && (
        <Typography align="justify" fontSize="13px" style={{ color: "black" }}>
          {event.description}
        </Typography>
      )}
      {event.description &&
        (showDesc ? (
          <IconButton>
            <ArrowCircleUp />
          </IconButton>
        ) : (
          <IconButton>
            <ArrowCircleDown />
          </IconButton>
        ))}
      {event.resources?.length ? (
        <Resources resources={event.resources} />
      ) : null}
    </Stack>
  );
};

export default EventContent;
