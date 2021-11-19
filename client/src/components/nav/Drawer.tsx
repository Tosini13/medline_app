import { Hidden } from "@mui/material";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

type TDrawerProps = {
  setOpen: (open: boolean) => void;
  open: boolean;
};

const Drawer: React.FC<TDrawerProps> = ({ open, setOpen }) => {
  return (
    <>
      <Hidden mdUp>
        <MobileNav open={open} setOpen={setOpen} />
      </Hidden>
      <Hidden mdDown>
        <DesktopNav open={open} setOpen={setOpen} />
      </Hidden>
    </>
  );
};

export default Drawer;
