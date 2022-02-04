import DocumentsGraphic from "../../../resources/background/medline_graphic_2.svg";

import { Stack, StackProps, Typography } from "@mui/material";
import styled from "styled-components";
import { hexToRgb } from "../../../helpers/calcHexToRGB";
import { Theme, useTheme } from "@mui/material/styles";
import { ETheme } from "../../../stores/Theme";
import Logo from "../../utils/components/Logo/Logo";
import { ELogoSize } from "../../utils/components/Logo/types";

const StackContainerStyled = styled(Stack)<{
  theme: Theme;
}>`
  ${(props) =>
    props.theme.palette.mode === ETheme.dark
      ? `background-color: rgba(${hexToRgb(
          props.theme.palette.primary.main
        )},0.8);`
      : `background-color: rgba(${hexToRgb(
          props.theme.palette.primary.light
        )},0.8);`}
  height: 100%;
  box-shadow: 34px 0px 49px rgb(0 0 0 / 50%);
`;

type TStackContainerProps = StackProps;

const StackContainer: React.FC<TStackContainerProps> = ({
  children,
  ...props
}) => {
  const theme = useTheme();
  return (
    <StackContainerStyled {...props} theme={theme}>
      {children}
    </StackContainerStyled>
  );
};

type TGraphicSideProps = {};

const GraphicSide: React.FC<TGraphicSideProps> = () => {
  return (
    <StackContainer alignItems="center" justifyContent="space-around">
      <Logo size={ELogoSize.xl} />
      <Typography
        color="primary.contrastText"
        textAlign="center"
        style={{ margin: "0px 20px" }}
      >
        Create own medical line and care of your life by one hand with Medline
      </Typography>
      <img
        src={DocumentsGraphic}
        alt="Documents graphic"
        style={{ maxWidth: "90%", maxHeight: "50%" }}
      />
    </StackContainer>
  );
};

export default GraphicSide;
