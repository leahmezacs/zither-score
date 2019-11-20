import React, { useState } from "react";
import "../../stylesheets/style.css"

// Four inputs in one componenet
const SingleScoreInput = props => {

  // console.log(props.lineLength)
  // console.log(props.nodeLength)

  const [data, setData] = useState([]);

  const handleChange = (event) => {
    const updateData = {...data};
    updateData[event.target.name] = event.target.value;
    setData(updateData);
    console.log(data);
    // console.log(event.target.name)
  };


  return props.nodeLength.map(values => (
    <span key={values}>
    {/* {console.log(typeof(values))} */}
      <input
        key="0"
        name={[0, values]}
        className="singleNote"
        type="number"
        min="0"
        max="7"
        onChange={handleChange}
      />
      <input
        key="1"
        name={[1, values]}
        className="singleNote"
        type="number"
        min="1"
        max="7"
        onChange={handleChange}
      />
      <input
        key="2"
        name={[2, values]}
        className="singleNote"
        type="number"
        min="1"
        max="7"
        onChange={handleChange}
      />
      <input
        key="3"
        name={[3, values]}
        className="singleNote"
        type="number"
        min="1"
        max="7"
        onChange={handleChange}
      />
      <span className="lineInBetween">|</span>
    </span>
  ));
}

export default SingleScoreInput;
