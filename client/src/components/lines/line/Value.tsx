import React from "react";
import styled from "styled-components";
import { LINE_VALUE } from "../../../models/backend";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";

const ValueIconContainer = styled.div<{ value: LINE_VALUE }>`
  height: 25px;
  width: 25px;
  position: relative;
  transform: rotate(-90deg);
  & > svg {
    position: absolute;
    top: 50%;
    left: 50%;
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
  & > svg:nth-child(1) {
    transform: translate(-75%, -50%);
  }
  & > svg:nth-child(2) {
    transform: translate(-50%, -50%);
  }
  & > svg:nth-child(3) {
    transform: translate(-25%, -50%);
  }
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
