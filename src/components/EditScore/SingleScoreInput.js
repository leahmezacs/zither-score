import React, { Component } from "react";
import "../../stylesheets/style.css"
import Container from "@material-ui/core/Container";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import Button from "@material-ui/core/Button";
import { Dropdown } from "react-bootstrap";
import MoreVertIcon from '@material-ui/icons/MoreVert';

class SingleScoreInput extends Component {
  render() {
    return (
      <div>
        <div>
          <Dropdown>
            <Dropdown.Toggle className="btn btn-sm btn-light">
              <MoreVertIcon />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>dot</Dropdown.Item>
              <Dropdown.Item>double dot</Dropdown.Item>
              <Dropdown.Item>line</Dropdown.Item>
              <Dropdown.Item>double line</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

        </div>
        <input
          key="0"
          className="singleNote"
          type="number"
          min="0"
          max="7"
        />
        <div>
          <Dropdown>
            <Dropdown.Toggle className="btn btn-sm btn-light">
              <MoreVertIcon />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>dot</Dropdown.Item>
              <Dropdown.Item>double dot</Dropdown.Item>
              <Dropdown.Item>line</Dropdown.Item>
              <Dropdown.Item>double line</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

        </div>
        <input
          key="1"
          className="singleNote"
          type="number"
          min="1"
          max="7"
        />

        
        <div>
          <Dropdown>
            <Dropdown.Toggle className="btn btn-sm btn-light">
              <MoreVertIcon />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>dot</Dropdown.Item>
              <Dropdown.Item>double dot</Dropdown.Item>
              <Dropdown.Item>line</Dropdown.Item>
              <Dropdown.Item>double line</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

        </div>

        
        <input
          key="2"
          className="singleNote"
          type="number"
          min="1"
          max="7"
        />
        <div>
          <Dropdown>
            <Dropdown.Toggle className="btn btn-sm btn-light">
              <MoreVertIcon />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>dot</Dropdown.Item>
              <Dropdown.Item>double dot</Dropdown.Item>
              <Dropdown.Item>line</Dropdown.Item>
              <Dropdown.Item>double line</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

        </div>

        <input
          key="3"
          className="singleNote"
          type="number"
          min="1"
          max="7"
        />
        <span className="lineInBetween">|</span>
      </div>
    );
  }
}

export default SingleScoreInput;
