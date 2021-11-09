import { IconButton, Paper } from "@mui/material";
import { useState } from "react";
import { LINE_VALUE } from "../../models/backend";
import Value from "../lines/line/Value";

type TLineValueProps = {
  value: LINE_VALUE;
  setValue: (value: LINE_VALUE) => void;
};

const LineValue: React.FC<TLineValueProps> = ({ setValue, value }) => {
  const [open, setOpen] = useState(false);
  const chooseValue = (value: LINE_VALUE) => {
    setOpen(false);
    setValue(value);
  };
  return (
    <>
      <IconButton onClick={() => setOpen(true)}>
        <Value value={value} />
      </IconButton>
      {open && (
        <Paper style={{}}>
          <IconButton onClick={() => chooseValue(LINE_VALUE.NORMAL)}>
            <Value value={LINE_VALUE.NORMAL} />
          </IconButton>
          <IconButton onClick={() => chooseValue(LINE_VALUE.HIGH_VALUE)}>
            <Value value={LINE_VALUE.HIGH_VALUE} />
          </IconButton>
          <IconButton onClick={() => chooseValue(LINE_VALUE.HIGHEST_VALUE)}>
            <Value value={LINE_VALUE.HIGHEST_VALUE} />
          </IconButton>
        </Paper>
      )}
    </>
  );
};

export default LineValue;
