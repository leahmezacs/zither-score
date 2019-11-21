import React from "react";
import SingleScoreInput from "./SingleScoreInput";

// Map through singleInput for one line score input
const SingleLineScoreInput = props => {
  const nodeLength = [0, 1, 2, 3];

  return (
    <SingleScoreInput lineLength={props.lineLength} nodeLength={nodeLength} />
  );
};

export default SingleLineScoreInput;