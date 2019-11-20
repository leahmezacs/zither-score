import React from "react";
import "../../stylesheets/style.css"

// Four inputs in one componenet
const SingleScoreInput = props => {

  console.log(props.lineLength)
  console.log(props.nodeLength)

  return props.nodeLength.map(values => (
    <span key={values}>
      <input
        key="0"
        name="0"
        className="singleNote"
        type="number"
        min="0"
        max="7"
      />
      <input
        key="1"
        name="1"
        className="singleNote"
        type="number"
        min="1"
        max="7"
      />
      <input
        key="2"
        name="2"
        className="singleNote"
        type="number"
        min="1"
        max="7"
      />
      <input
        key="3"
        name="3"
        className="singleNote"
        type="number"
        min="1"
        max="7"
      />
      <span className="lineInBetween">|</span>
    </span>
  ));
}

export default SingleScoreInput;
