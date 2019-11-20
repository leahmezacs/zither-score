import React from "react";
import "../../stylesheets/style.css"

// Four inputs in one componenet
const SingleScoreInput = props => {

  console.log(props.lineLength)
  console.log(props.nodeLength)
  return (
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
  );
}

export default SingleScoreInput;
