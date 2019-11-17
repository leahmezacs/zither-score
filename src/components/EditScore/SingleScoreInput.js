import React, { Component } from "react";
import "../../stylesheets/style.css"

class SingleScoreInput extends Component {
  render() {
    return (
      <div>
        <input
          key="0"
          className="singleNote"
          type="text"
          maxLength="1"
          min="1"
          max="7"
        />
        <input
          key="1"
          className="singleNote"
          type="text"
          maxLength="1"
          min="1"
          max="7"
        />
        <input
          key="2"
          className="singleNote"
          type="text"
          maxLength="1"
          min="1"
          max="7"
        />
        <input
          key="3"
          className="singleNote"
          type="text"
          maxLength="1"
          min="1"
          max="7"
        />
        <span>|</span>
      </div>
    );
  }
}

export default SingleScoreInput;
