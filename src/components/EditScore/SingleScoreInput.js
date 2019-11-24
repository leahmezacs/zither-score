import React, { Component } from "react";
import "../../stylesheets/style.css"
import AddIcon from '@material-ui/icons/Add';
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Dot from '@material-ui/icons/FiberManualRecord';
import Line from '@material-ui/icons/Remove';
import DoubleLine from '@material-ui/icons/DragHandle';
import { Dropdown } from "react-bootstrap";



class SingleScoreInput extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="dropdown col-xs-12">

            <Dropdown
              key="0">
              <Dropdown.Toggle className="btn btn-sm btn-light">
                <AddIcon 
                
                color="action"/>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item ><Dot fontSize="small" /></Dropdown.Item>
                <Dropdown.Item ><Line fontSize="small" /></Dropdown.Item>
                <Dropdown.Item ><DoubleLine fontSize="small" /></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="dropdown col-xs-12">

            <Dropdown
              key="1">
              <Dropdown.Toggle className="btn btn-sm btn-light">
                <AddIcon 
                
                color="action"/>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item ><Dot fontSize="small" /></Dropdown.Item>
                <Dropdown.Item ><Line fontSize="small" /></Dropdown.Item>
                <Dropdown.Item ><DoubleLine fontSize="small" /></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="dropdown col-xs-12">

            <Dropdown
              key="2">
              <Dropdown.Toggle className="btn btn-sm btn-light">
                <AddIcon 
               
                color="action"/>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item ><Dot fontSize="small" /></Dropdown.Item>
                <Dropdown.Item ><Line fontSize="small" /></Dropdown.Item>
                <Dropdown.Item ><DoubleLine fontSize="small" /></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="dropdown col-xs-12">



            <Dropdown
              key="3">
              <Dropdown.Toggle className="btn btn-sm btn-light">
                <AddIcon 
                
                color="action"/>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item ><Dot fontSize="small" /></Dropdown.Item>
                <Dropdown.Item ><Line fontSize="small" /></Dropdown.Item>
                <Dropdown.Item ><DoubleLine fontSize="small" /></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div>
          <input
            key="0"
            className="singleNote"
            type="number"
            min="0"
            max="7"
          />
          <input
            key="1"
            className="singleNote"
            type="number"
            min="1"
            max="7"
          />
          <input
            key="2"
            className="singleNote"
            type="number"
            min="1"
            max="7"
          />
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