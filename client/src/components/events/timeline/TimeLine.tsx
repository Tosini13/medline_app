import { Stack } from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100px;
  background-color: gray;
`;

const ButtonToggle = styled.div`
  position: absolute;
  top: 50%;
  right: 0%;
  transform: translate(-50%, -50%);
`;

type TTimeLineProps = {};

const TimeLine: React.FC<TTimeLineProps> = () => {
  return (
    <Container>
      <Stack style={{ position: "relative" }}>
        T I M E
        <ButtonToggle>
          <MoreVert fontSize="small" />
        </ButtonToggle>
      </Stack>
    </Container>
  );
};

export default TimeLine;
