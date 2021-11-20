import { MoreHoriz } from "@mui/icons-material";
import { IconButton, Stack, Tooltip, Typography } from "@mui/material";
import { format } from "date-fns";
import styled from "styled-components";
import { EVENT_TYPE } from "../../../models/backend";
import { DATE_TIME_FORMAT } from "../../../models/const";
import { theme } from "../../../style/theme";
import EventTypeIcon from "../EventTypeIcon";

export const TypographyEventStyled = styled(Typography)`
  color: ${theme.palette.text.secondary};
`;

const BorderLine = styled.div`
  min-width: 10px;
  height: 0px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  flex-grow: 1;
`;

type TEventHeaderProps = {
  type: EVENT_TYPE;
  dateTime: Date;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const EventHeader: React.FC<TEventHeaderProps> = ({
  type,
  dateTime,
  handleClick,
}) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={1}
    >
      <BorderLine style={{ flexGrow: 0, width: "10px" }} />
      <Tooltip title={type}>
        <span style={{ display: "flex" }}>
          <EventTypeIcon type={type} />
        </span>
      </Tooltip>
      <BorderLine />
      <TypographyEventStyled
        align="left"
        fontWeight={600}
        style={{ fontSize: "11px" }}
      >
        {format(new Date(dateTime), DATE_TIME_FORMAT)}
      </TypographyEventStyled>
      <BorderLine />
      <Stack alignItems="flex-end">
        <IconButton onClick={handleClick} size="small">
          <MoreHoriz color="primary" />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default EventHeader;
