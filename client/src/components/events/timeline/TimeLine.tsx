import { IconButton, Stack, Tooltip } from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import styled from "styled-components";
import { theme } from "../../../style/theme";
import { useState } from "react";
import { TEvent } from "../../../models/backend";
import EventTypeIcon from "../EventTypeIcon";

const Container = styled.div<{
  open: boolean;
}>`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100px;
  background-color: ${theme.palette.primary.main};
  transition: all 0.3s;
  ${(props) =>
    props.open
      ? `box-shadow: 0px 0px 5px 1px rgb(0 0 0 / 60%);`
      : "transform: translateX(-100%);"}
`;

const IconButtonStyled = styled(IconButton)`
  position: absolute !important;
  top: 50%;
  right: 0%;
  transform: translate(100%, -50%);
  background-color: ${theme.palette.primary.main} !important;
  border-radius: 7px !important;
  width: 16px !important;
  border-bottom-left-radius: 0px !important;
  border-top-left-radius: 0px !important;
`;

type TTimeLineProps = {
  events?: TEvent[];
};

const TimeLine: React.FC<TTimeLineProps> = ({ events }) => {
  const [open, setOpen] = useState(false);
  return (
    <Container open={open}>
      <div style={{ position: "relative", height: "100%" }}>
        <Stack
          alignItems="center"
          spacing={2}
          style={{ height: "100%", overflowY: "auto" }}
        >
          {events?.map((event) => (
            <Tooltip title={event.title} placement="right">
              <IconButton>
                <EventTypeIcon type={event.type} style={{ color: "white" }} />
              </IconButton>
            </Tooltip>
          ))}
        </Stack>
        <IconButtonStyled onClick={() => setOpen(!open)}>
          <MoreVert fontSize="small" style={{ color: "white" }} />
        </IconButtonStyled>
      </div>
    </Container>
  );
};

export default TimeLine;
