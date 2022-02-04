import MedLineLogo from "../../../../resources/logo/MedLine_logo.png";
import { ELogoSize } from "./types";

type TLogoProps = {
  size?: ELogoSize;
};

const Logo: React.FC<TLogoProps> = ({ size = ELogoSize.md }) => (
  <img src={MedLineLogo} alt="MedLine logo" style={{ height: size }} />
);

export default Logo;
