import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Dot from "@material-ui/icons/FiberManualRecord";
import Line from "@material-ui/icons/Remove";
import DoubleLine from "@material-ui/icons/DragHandle";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function popSymbol() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <div>    
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <div className={classes.paper}>The content of the Popper.</div>
      </Popper>
    </div>
  );
}
