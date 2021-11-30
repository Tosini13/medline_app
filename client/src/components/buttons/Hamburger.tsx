import { CSSProperties } from "react";
import styled from "styled-components";
import { theme } from "../../style/theme";

const HamburgerStyled = styled.div<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25px;
  padding: 10px;
  z-index: 100;
  > div {
    background-color: ${theme.palette.primary.contrastText};
    width: 100%;
    height: 3px;
    border-radius: 2px;
    margin-bottom: 4px;
    &:last-child {
      margin-bottom: 0px;
    }
    transition: transform 0.3s, width 0.5s;
  }
  ${(props) =>
    props.open
      ? `
  >div:first-child{
      transform: rotateZ(45deg) translate(5px, 5px);
  }
  >div:last-child{
      transform: rotateZ(-45deg) translate(5px, -5px);
  }
  >div:nth-child(2){
      width: 0px;
  }`
      : ``}
`;

export type HamburgerProps = {
  open: boolean;
  toggleOpen: () => void;
  style?: CSSProperties | undefined;
}

const Hamburger: React.FC<HamburgerProps> = ({ open, toggleOpen, style }) => {
  return (
    <HamburgerStyled open={open} onClick={toggleOpen} style={style}>
      <div></div>
      <div></div>
      <div></div>
    </HamburgerStyled>
  );
};

export default Hamburger;
