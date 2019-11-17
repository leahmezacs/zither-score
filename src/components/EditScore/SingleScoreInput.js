import React, { Component } from "react";

class SingleScoreInput extends Component {
  render() {
    return (
      <form>
        <input
          className="singleNote"
          type="number"
          maxLength="1"
          min="1"
          max="7"
          onKeyPress={inp => this.numberOnly(inp)}
        ></input>
      </form>
    );
  }
}

export default SingleScoreInput;
