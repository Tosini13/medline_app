import { Typography } from "@mui/material";
import useAsync from "../../../helpers/useAsync";
import { useGetLine } from "../../../queries/lines/getLine";
import LogoName from "../../../resources/logo/MedLine_name.png";
import Loading from "../../global/loading/Loading";
type TNavTitleProps = {
  isMain: boolean;
  id?: string;
};

const NavTitle: React.FC<TNavTitleProps> = ({ isMain, id }) => {
  if (isMain || !id) {
    return (
      <img
        src={LogoName}
        alt="logo name"
        style={{ maxWidth: "200px", maxHeight: "39px" }}
      />
    );
  }
  return <LineTitle id={id} />;
};

export default NavTitle;

type TLineTitleProps = { id: string };

const LineTitle: React.FC<TLineTitleProps> = ({ id }) => {
  const { execute } = useAsync();
  const { response } = useGetLine({
    execute,
    id,
  });
  if (!response?.data) {
    return <Loading />;
  }
  return (
    <Typography style={{ fontSize: "30px", color: "white" }}>
      {response.data.title}
    </Typography>
  );
};
