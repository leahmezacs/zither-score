import React, { Component } from "react";
import AddIcon from '@material-ui/icons/Add';
import "../../stylesheets/style.css"

class SingleScoreInput extends Component {
  render() {
    return (
      <div>
        <div>
          <button
            key="0"
            className="button-style"
          >
            <AddIcon fontsize="small"/>
          </button>
          <button
            key="1"
            className="button-style"
          >
            <AddIcon fontsize="small"/>
          </button>
          <button
            key="2"
            className="button-style"
          >
            <AddIcon fontsize="small"/>
          </button>
          <button
            key="3"
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
              className="button-style"
            >
              <AddIcon fontsize="small"/>
            </button>
            <button
              key="1"
              className="button-style"
            >
              <AddIcon fontsize="small"/>
            </button>
            <button
              key="2"
              className="button-style"
            >
              <AddIcon fontsize="small"/>
            </button>
            <button
              key="3"
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
