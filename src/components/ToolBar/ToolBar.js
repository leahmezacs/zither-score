import React, {Component} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import RemoveIcon from "@material-ui/icons/Remove";
import DragHandleIcon from "@material-ui/icons/DragHandle";
import Grid from "@material-ui/core/Grid";
import "../style.css";

const useStyles = makeStyles(theme => ({
  root: {
    background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    padding: theme.spacing(1)
  },
  space: {
    margin: theme.spacing(0, 1, 0, 1)
  }
}));

class ToolBar extends Component {
  render() {
    return (
      <div className="toolBarbackground">
        <Grid container justify="center">
          <Grid item>
            <Tooltip title="dot" aria-label="dot" className="toolBarspace">
              <FiberManualRecordIcon fontSize="small" />
            </Tooltip>
            <Tooltip title="line" aria-label="line" className="toolBarspace">
              <RemoveIcon />
            </Tooltip>
            <Tooltip
              title="doule line"
              aria-label="doubleLine"
              className="toolBarspace"
            >
              <DragHandleIcon />
            </Tooltip>
          </Grid>
        </Grid>
    </div>
    )
  }
}

export default ToolBar;
