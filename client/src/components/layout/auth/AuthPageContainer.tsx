import { Grid, Hidden } from "@mui/material";
import FormContainerLayout from "./FormContainerLayout";
import GraphicSide from "./GraphicSide";

type TAuthPageContainerProps = {};

const AuthPageContainer: React.FC<TAuthPageContainerProps> = ({ children }) => {
  return (
    <>
      <Hidden mdDown>
        <Grid container style={{ width: "100vw", height: "100%", flexGrow: 1 }}>
          <Grid item xs={6}>
            <GraphicSide />
          </Grid>
          <Grid item xs={6}>
            <FormContainerLayout>{children}</FormContainerLayout>
          </Grid>
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <div style={{ width: "100vw", height: "100%", flexGrow: 1 }}>
          <FormContainerLayout>{children}</FormContainerLayout>
        </div>
      </Hidden>
    </>
  );
};

export default AuthPageContainer;
