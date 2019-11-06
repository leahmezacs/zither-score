import React from "react";
import Tooltip from '@material-ui/core/Tooltip';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import RemoveIcon from '@material-ui/icons/Remove';
import DragHandleIcon from '@material-ui/icons/DragHandle';

export default function ToolBar() {
  return (
    <div>
      <Tooltip title="dot" aria-label="dot">
        <FiberManualRecordIcon fontSize="small"/>
      </Tooltip>
      <Tooltip title="line" aria-label="line">
        <RemoveIcon />
      </Tooltip>
      <Tooltip title="doule line" aria-label="doubleLine">
        <DragHandleIcon />
      </Tooltip>
    </div>
  );
}
