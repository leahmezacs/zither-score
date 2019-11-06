import React from "react";
import Tooltip from '@material-ui/core/Tooltip';

export default function ToolBar() {
  return (
    <div>
      <Tooltip title="dot" aria-label="dot">
      </Tooltip>
      <Tooltip title="line" aria-label="line">
      </Tooltip>
      <Tooltip title="doule line" aria-label="doubleLine">
      </Tooltip>
    </div>
  );
}
