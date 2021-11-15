import { EVENT_TYPE } from "../../models/backend";
import {
  Biotech,
  Medication,
  LocalHospital,
  Healing,
} from "@mui/icons-material";
type TEventTypeIconProps = {
  type: EVENT_TYPE;
  style?: any;
};

const EventTypeIcon: React.FC<TEventTypeIconProps> = ({ type, style }) => {
  switch (type) {
    case EVENT_TYPE.APPOINTMENT:
      return <LocalHospital style={style} />;
    case EVENT_TYPE.OCCURRENCE:
      return <Healing style={style} />;
    case EVENT_TYPE.SURGERY:
      return <Medication style={style} />;
    case EVENT_TYPE.TEST:
      return <Biotech style={style} />;
    default:
      return null;
  }
};

export default EventTypeIcon;
