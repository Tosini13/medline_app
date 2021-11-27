import React from "react";
import { IconButton, List } from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import styled from "styled-components";
import { theme } from "../../../style/theme";
import { useState } from "react";
import { TEvent, Id } from "../../../models/backend";
import EventTypeIcon from "../EventTypeIcon";
import ListElement from "../../reusable/list/ListElement";

const Container = styled.div<{
  open: boolean;
}>`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 300px;
  max-width: calc(100% - 20px);
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
  callback?: (id: Id) => void;
};

const TimeLine: React.FC<TTimeLineProps> = ({ events, callback }) => {
  const [open, setOpen] = useState(false);
  return (
    <Container open={open}>
      <div style={{ position: "relative", height: "100%" }}>
        <List style={{ height: "100%", overflowY: "auto", padding: '0px' }}>
          {events?.map((event) => (
            <React.Fragment key={event.id}>
              <ListElement
                Icon={
                  <EventTypeIcon
                    type={event.type}
                    style={{ color: theme.palette.primary.contrastText }}
                  />
                }
                text={event.title}
                color={theme.palette.primary.contrastText}
                onClick={() => {
                  if (callback) callback(event.id);
                  setOpen(false);
                }}
              />
            </React.Fragment>
          ))}
        </List>
        <IconButtonStyled onClick={() => setOpen(!open)}>
          <MoreVert fontSize="small" style={{ color: "white" }} />
        </IconButtonStyled>
      </div>
    </Container>
  );
};

export default TimeLine;
