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

const EventTypeIcon: React.FC<TEventTypeIconProps> = ({
  type,
  style,
  ...props
}) => {
  switch (type) {
    case EVENT_TYPE.APPOINTMENT:
      return <LocalHospital style={style} color="primary" {...props} />;
    case EVENT_TYPE.OCCURRENCE:
      return <Healing style={style} color="primary" {...props} />;
    case EVENT_TYPE.SURGERY:
      return <Medication style={style} color="primary" {...props} />;
    case EVENT_TYPE.TEST:
      return <Biotech style={style} color="primary" {...props} />;
    default:
      return null;
  }
};

export default EventTypeIcon;
