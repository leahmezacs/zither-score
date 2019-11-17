import React, { Component } from "react";

class SingleScoreInput extends Component {
  render() {
    return (
      <div>
        <input
          id="0"
          className="singleNote"
          type="number"
          maxLength="1"
          min="1"
          max="7"
        />
        <input
          id="1"
          className="singleNote"
          type="number"
          maxLength="1"
          min="1"
          max="7"
        />
        <input
          id="2"
          className="singleNote"
          type="number"
          maxLength="1"
          min="1"
          max="7"
        />
        <input
          id="3"
          className="singleNote"
          type="number"
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
