import { useTheme } from "@mui/material/styles";
import MedLineLogo from '../../../../resources/logo/MedLine_logo_oneColor.svg';
import MedLineLogoWhite from '../../../../resources/logo/MedLine_logo_white.svg';
import { ETheme } from "../../../../stores/Theme";
import { ELogoSize } from "./types";

type TMedLineImgProps = {
    size?: ELogoSize;
}

const MedLineImg: React.FC<TMedLineImgProps> = ({ size = ELogoSize.md }) => {
    const theme = useTheme();
    const isLight = theme.palette.mode === ETheme.light;
    return (
        <img src={isLight ? MedLineLogo : MedLineLogoWhite} alt="MedLine logo" style={{ height: size }} />
    )
}

export default MedLineImg;