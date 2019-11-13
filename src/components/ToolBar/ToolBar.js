import React, {Component} from "react";
import Tooltip from "@material-ui/core/Tooltip";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import RemoveIcon from "@material-ui/icons/Remove";
import DragHandleIcon from "@material-ui/icons/DragHandle";
import Grid from "@material-ui/core/Grid";
import "../style.css";

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
