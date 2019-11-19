import React, { Component } from "react";
import SingleLineScoreInput from "./SingleLineScoreInput";
import Container from "@material-ui/core/Container";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";

class ScoreInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      line: 0,
      lineLength: []
    };

    this.handleNewLine = this.handleNewLine.bind(this);
  }

  handleNewLine = event => {
    event.preventDefault();
    this.setState(preState => ({
      line: this.state.line + 1,
      lineLength: [...preState.lineLength, this.state.line]
    }));
  };

  async handleSave() {

  }

  render() {
    return (
      <Container maxWidth="md">
        <ControlPointIcon
          onClick={this.handleNewLine}
          variant="outlined"
          color="primary"
          fontSize="large"
          className="scoreInputIcon"
        />
        <form onSubmit={this.handleSubmit}>
          <SingleLineScoreInput
            key={this.state.line}
            lineLength={this.state.lineLength}
          />
          <br />
          <Button
            type="submit"
            size="large"
            variant="outlined"
            color="primary"
            className="float-right"
          >
            Save
          </Button>
        </form>
      </Container>
    );
  }
}

export default withRouter(ScoreInput);
