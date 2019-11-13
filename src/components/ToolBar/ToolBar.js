import React, {Component} from "react";
import Tooltip from "@material-ui/core/Tooltip";
// import Button from "@material-ui/core/Button";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import RemoveIcon from "@material-ui/icons/Remove";
import DragHandleIcon from "@material-ui/icons/DragHandle";
import Grid from "@material-ui/core/Grid";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "../style.css";

class ToolBar extends Component {
  render() {
    return (
      <div className="toolBarbackground">
        <Grid container justify="center">
          <Grid item>
          <Navbar className="" expand="lg">
            <NavDropdown title={<FiberManualRecordIcon fontSize="small" />} id="basic-nav-dropdown">
              <NavDropdown.Item>Top</NavDropdown.Item>
              <NavDropdown.Item>Buttom</NavDropdown.Item>
            </NavDropdown>
            <Nav>{<RemoveIcon />}</Nav>
            <Nav>{<DragHandleIcon />}</Nav>
          </Navbar>
            <Tooltip disableFocusListener title="dot" aria-label="dot" className="toolBarspace">
              <FiberManualRecordIcon fontSize="small" />
              {/* <Button>Top</Button>
              <Button>Buttom</Button> */}
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
