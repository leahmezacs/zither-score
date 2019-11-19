import React, { Component } from "react";
import "../../stylesheets/style.css"
import Container from "@material-ui/core/Container";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import Button from "@material-ui/core/Button";
import { Dropdown } from "react-bootstrap";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import MinimizeIcon from '@material-ui/icons/Minimize';
import DragHandleIcon from '@material-ui/icons/DragHandle';



class SingleScoreInput extends Component {
  render() {
    return (
      <div>
        <div>

          <Dropdown>
            <Dropdown.Toggle className="btn btn-sm btn-light">
              <MoreHorizIcon
                fontSize="small"
              />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item><FiberManualRecordIcon /></Dropdown.Item>
              <Dropdown.Item><MinimizeIcon /></Dropdown.Item>
              <Dropdown.Item><DragHandleIcon /></Dropdown.Item>
              <Dropdown.Item>double dots</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>


          <input
            key="0"
            className="singleNote"
            type="number"
            min="0"
            max="7"
          />
        </div>

        <div>
          <Dropdown>
            <Dropdown.Toggle className="btn btn-sm btn-light">
              <MoreHorizIcon
                fontSize="small" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item><FiberManualRecordIcon /></Dropdown.Item>
              <Dropdown.Item><MinimizeIcon /></Dropdown.Item>
              <Dropdown.Item><DragHandleIcon /></Dropdown.Item>
              <Dropdown.Item>double dots</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>


          <input
            key="1"
            className="singleNote"
            type="number"
            min="1"
            max="7"
          />


        </div>

        <div>
          <Dropdown>
            <Dropdown.Toggle className="btn btn-sm btn-light">
              <MoreHorizIcon
                fontSize="small" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item><FiberManualRecordIcon /></Dropdown.Item>
              <Dropdown.Item><MinimizeIcon /></Dropdown.Item>
              <Dropdown.Item><DragHandleIcon /></Dropdown.Item>
              <Dropdown.Item>double dots</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>




          <input
            key="2"
            className="singleNote"
            type="number"
            min="1"
            max="7"
          />
        </div>

        <div>
          <Dropdown>
            <Dropdown.Toggle className="btn btn-sm btn-light">
              <MoreHorizIcon
                fontSize="small" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item><FiberManualRecordIcon /></Dropdown.Item>
              <Dropdown.Item><MinimizeIcon /></Dropdown.Item>
              <Dropdown.Item><DragHandleIcon /></Dropdown.Item>
              <Dropdown.Item>double dots</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>



          <input
            key="3"
            className="singleNote"
            type="number"
            min="1"
            max="7"
          />
          <span className="lineInBetween">|</span>
        </div>

      </div>
    );
  }
}

export default SingleScoreInput;
