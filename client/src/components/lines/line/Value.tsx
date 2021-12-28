import React from "react";
import styled from "styled-components";
import { LINE_VALUE } from "../../../models/backend";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import { lightTheme } from "../../../style/theme";

const ValueIconContainer = styled.div<{
  value: LINE_VALUE;
  size?: string;
}>`
  height: ${(props) => props.size ?? "25px"};
  width: ${(props) => props.size ?? "25px"};
  position: relative;
  transform: rotate(-90deg);
  & > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    ${(props) => {
      switch (props.value) {
        case LINE_VALUE.HIGHEST_VALUE:
          return `color: ${lightTheme.palette.error.main}`;
        case LINE_VALUE.HIGH_VALUE:
          return `color: ${lightTheme.palette.warning.main}`;
        default:
          return `color: ${lightTheme.palette.success.main}`;
      }
    }}
  }
`;

type TValueProps = {
  value: LINE_VALUE;
  size?: string;
};

const Value: React.FC<TValueProps> = ({ value, size }) => {
  switch (value) {
    case LINE_VALUE.HIGHEST_VALUE:
      return <HighestValue size={size} />;
    case LINE_VALUE.HIGH_VALUE:
      return <HighValue size={size} />;
    default:
      return <NormalValue size={size} />;
  }
};

export default Value;

type TNormalValueProps = {
  size?: string;
};

const NormalValue: React.FC<TNormalValueProps> = ({ size }) => {
  return (
    <ValueIconContainer value={LINE_VALUE.NORMAL} size={size}>
      <ArrowForwardIos style={{ transform: "translate(-50%, -50%)" }} />
    </ValueIconContainer>
  );
};

type THighValueProps = {
  size?: string;
};

const HighValue: React.FC<THighValueProps> = ({ size }) => {
  return (
    <ValueIconContainer value={LINE_VALUE.HIGH_VALUE} size={size}>
      <ArrowForwardIos style={{ transform: "translate(-62.5%, -50%)" }} />
      <ArrowForwardIos style={{ transform: "translate(-37.5%, -50%)" }} />
    </ValueIconContainer>
  );
};

type THighestValueProps = {
  size?: string;
};

const HighestValue: React.FC<THighestValueProps> = ({ size }) => {
  return (
    <ValueIconContainer value={LINE_VALUE.HIGHEST_VALUE} size={size}>
      <ArrowForwardIos style={{ transform: "translate(-50%, -50%)" }} />
      <ArrowForwardIos style={{ transform: "translate(-75%, -50%)" }} />
      <ArrowForwardIos style={{ transform: "translate(-25%, -50%)" }} />
    </ValueIconContainer>
  );
};
