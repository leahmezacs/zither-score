import React from "react";
import SingleScoreInput from "./SingleScoreInput";

// Map through singleInput for one line score input
const SingleLineScoreInput = props => {
  const nodeLength = [0, 1, 2, 3];

  if(props.score) {
    return (
      <SingleScoreInput 
        lineLength={props.lineLength} 
        nodeLength={nodeLength} 
        score={props.score}
      />
    );
  }
};

export default SingleLineScoreInput;

