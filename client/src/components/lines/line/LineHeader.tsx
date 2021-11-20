import { Hidden } from "@mui/material";
import { TLine } from "../../../models/backend";
import LineHeaderMobile from "./header/LineHeaderMobile";
import LineHeaderDesktop from "./header/LineHeaderDesktop";

type TLineHeaderProps = {
  line: TLine;
  contributions?: number;
  handleOpenMore: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleClose: () => void;
};

const LineHeader: React.FC<TLineHeaderProps> = ({
  line,
  contributions,
  handleOpenMore,
  handleClose,
}) => {
  return (
    <>
      <Hidden mdDown>
        <LineHeaderDesktop
          line={line}
          contributions={contributions}
          handleOpenMore={handleOpenMore}
          handleClose={handleClose}
        />
      </Hidden>
      <Hidden mdUp>
        <LineHeaderMobile
          line={line}
          contributions={contributions}
          handleOpenMore={handleOpenMore}
          handleClose={handleClose}
        />
      </Hidden>
    </>
  );
};

export default LineHeader;
