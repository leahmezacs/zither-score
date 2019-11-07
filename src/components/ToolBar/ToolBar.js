import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import RemoveIcon from "@material-ui/icons/Remove";
import DragHandleIcon from "@material-ui/icons/DragHandle";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    padding: theme.spacing(1)
  },
  space: {
    margin: theme.spacing(0, 1, 0, 1)
  }
}));

export default function SimpleTooltips() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid item>
          <Tooltip title="dot" aria-label="dot" className={classes.space}>
            <FiberManualRecordIcon fontSize="small" />
          </Tooltip>
          <Tooltip title="line" aria-label="line" className={classes.space}>
            <RemoveIcon />
          </Tooltip>
          <Tooltip
            title="doule line"
            aria-label="doubleLine"
            className={classes.space}
          >
            <DragHandleIcon />
          </Tooltip>
        </Grid>
      </Grid>
    </div>
  );
}