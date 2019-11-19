import React, { Component } from "react";
import "../../stylesheets/style.css"
import Container from "@material-ui/core/Container";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import Button from "@material-ui/core/Button";

class SingleScoreInput extends Component {
  render() {
    return (
      <div>
        <div>
          <ControlPointIcon
            color="grey"
            fontSize="large"
            className="plus"
          />
        </div>
        <input
          key="0"
          className="singleNote"
          type="number"
          min="0"
          max="7"
        />
        <div>
          <ControlPointIcon
            color="grey"
            fontSize="large"
            className="plus"
          />
        </div>
        <input
          key="1"
          className="singleNote"
          type="number"
          min="1"
          max="7"
        />
        
        <div>
          <ControlPointIcon
            color="grey"
            fontSize="large"
            className="plus"
          />
        </div>
        <input
          key="2"
          className="singleNote"
          type="number"
          min="1"
          max="7"
        />
       <div>
          <ControlPointIcon
            color="grey"
            fontSize="large"
            className="plus"
          />
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
