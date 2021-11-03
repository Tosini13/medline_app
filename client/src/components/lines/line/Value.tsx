import React from "react";
import styled from "styled-components";
import { LINE_VALUE } from "../../../models/backend";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";

const ValueIconContainer = styled.div<{ value: LINE_VALUE }>`
  & > svg {
    margin-left: -18px;
    ${(props) => {
      switch (props.value) {
        case LINE_VALUE.HIGHEST_VALUE:
          return "color: #8D0B0B;";
        case LINE_VALUE.HIGH_VALUE:
          return "color: #C3AA27;";
        default:
          return "color: #2D6B5F;";
      }
    }}
  }
  width: fit-content;
  transform: rotate(-90deg);
`;

type TValueProps = {
  value: LINE_VALUE;
};

const Value: React.FC<TValueProps> = ({ value }) => {
  switch (value) {
    case LINE_VALUE.HIGHEST_VALUE:
      return <HighestValue />;
    case LINE_VALUE.HIGH_VALUE:
      return <HighValue />;
    default:
      return <NormalValue />;
  }
};

export default Value;

type TNormalValueProps = {};

const NormalValue: React.FC<TNormalValueProps> = () => {
  return (
    <ValueIconContainer value={LINE_VALUE.NORMAL}>
      <ArrowForwardIos />
    </ValueIconContainer>
  );
};

type THighValueProps = {};

const HighValue: React.FC<THighValueProps> = () => {
  return (
    <ValueIconContainer value={LINE_VALUE.HIGH_VALUE}>
      <ArrowForwardIos />
      <ArrowForwardIos />
    </ValueIconContainer>
  );
};

type THighestValueProps = {};

const HighestValue: React.FC<THighestValueProps> = () => {
  return (
    <ValueIconContainer value={LINE_VALUE.HIGHEST_VALUE}>
      <ArrowForwardIos />
      <ArrowForwardIos />
      <ArrowForwardIos />
    </ValueIconContainer>
  );
};
