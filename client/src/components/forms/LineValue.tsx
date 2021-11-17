import { DialogTitle, DialogContent } from "@material-ui/core";
import { Dialog, Grid, IconButton } from "@mui/material";
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
      <IconButton onClick={() => setOpen(true)} size="large">
        <Value value={value} />
      </IconButton>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Choose Line Value</DialogTitle>
        <DialogContent>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={3}
          >
            <Grid item>
              <IconButton onClick={() => chooseValue(LINE_VALUE.NORMAL)}>
                <Value value={LINE_VALUE.NORMAL} />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton onClick={() => chooseValue(LINE_VALUE.HIGH_VALUE)}>
                <Value value={LINE_VALUE.HIGH_VALUE} />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton onClick={() => chooseValue(LINE_VALUE.HIGHEST_VALUE)}>
                <Value value={LINE_VALUE.HIGHEST_VALUE} />
              </IconButton>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default LineValue;
