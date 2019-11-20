import React, { Component } from "react";
import "../../stylesheets/style.css"
import AddIcon from '@material-ui/icons/Add';
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Dot from '@material-ui/icons/FiberManualRecord';
import Line from '@material-ui/icons/Remove';
import DoubleLine from '@material-ui/icons/DragHandle';



class SingleScoreInput extends Component {
  render() {
    return (
      <div>
        <div className="dropdown">
          <button
            key="0"
            type="button"
            className="button-style dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <AddIcon fontsize="small"/>
          </button>
            <div className="dropdown-menu">
              <a className="dropdown-item"><Dot /></a>
              <a className="dropdown-item">Double Dot</a>
            </div>
          <button
            key="1"
            type="button"
            className="button-style"
          >
            <AddIcon fontsize="small"/>
          </button>
          <button
            key="2"
            type="button"
            className="button-style"
          >
            <AddIcon fontsize="small"/>
          </button>
          <button
            key="3"
            type="button"
            className="button-style"
          >
            <AddIcon fontsize="small"/>
          </button>
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
          <div>
            <button
              key="0"
              type="button"
              className="button-style"
            >
              <AddIcon fontsize="small"/>
            </button>
            <button
              key="1"
              type="button"
              className="button-style"
            >
              <AddIcon fontsize="small"/>
            </button>
            <button
              key="2"
              type="button"
              className="button-style"
            >
              <AddIcon fontsize="small"/>
            </button>
            <button
              key="3"
              type="button"
              className="button-style"
            >
              <AddIcon fontsize="small"/>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleScoreInput;