import React, {Component} from "react";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import RemoveIcon from "@material-ui/icons/Remove";
import DragHandleIcon from "@material-ui/icons/DragHandle";
import Grid from "@material-ui/core/Grid";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
<<<<<<< HEAD
import "../../stylesheets/NavBar_ToolBar.css";
=======
import "../../stylesheets/style.css";
>>>>>>> 246c64ee3ee1a4858c6e80725eef61ee71ecad84

class ToolBar extends Component {
  render() {
    return (
      <div className="toolBarbackground">
        <Grid container justify="center">
          <Navbar expand="lg">
            <NavDropdown title={<FiberManualRecordIcon fontSize="default" className="colorBlack"/>} id="basic-nav-dropdown">
              <NavDropdown.Item>Top</NavDropdown.Item>
              <NavDropdown.Item>Buttom</NavDropdown.Item>
            </NavDropdown>
            <Nav className="toolBarspace">{<RemoveIcon />}</Nav>
            <Nav>{<DragHandleIcon />}</Nav>
          </Navbar>
        </Grid>
    </div>
    )
  }
}

export default ToolBar;
