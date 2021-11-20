import { Grid, Typography } from "@mui/material";
import styled from "styled-components";
import { theme } from "../../../style/theme";

export const TypographyEventStyled = styled(Typography)`
  color: ${theme.palette.text.secondary};
`;

type TEventHeaderProps = {
  dateTime: Date;
  title: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const EventHeader: React.FC<TEventHeaderProps> = ({
  dateTime,
  title,
  handleClick,
}) => {
  return (
    <Grid container alignItems="flex-start" wrap="nowrap" spacing={2}>
      <Grid item style={{ flexGrow: 1 }}>
        <Typography
          align="center"
          fontWeight={600}
          style={{ fontSize: "14px" }}
        >
          {title}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default EventHeader;
