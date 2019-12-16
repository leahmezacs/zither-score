import React, { Component } from "react";
import SingleLineScoreInput from "./SingleLineScoreInput";
import Container from "@material-ui/core/Container";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import { withRouter } from "react-router-dom";

// Map through singleLineScoreinput for the whole page input
class ScoreInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonEnable: true,
      errorMessage: '',
      line: 0,
      lineLength: []
    };
    this.handleNewLine = this.handleNewLine.bind(this);
  }

  handleNewLine = event => {
    event.preventDefault();
    if(this.state.line < 8){
      this.setState({
        buttonEnable: true,
        errorMessage: '',
        line: this.state.line + 1,
        lineLength: [...this.state.lineLength, this.state.line]
      });
    }
    else {
      this.setState({
        buttonEnable: false,
        errorMessage: 'Maximum of 8 Lines'
      })
    }
  };

  render() {
    return (
      <Container maxWidth="md">
        {this.state.errorMessage}
        <br />
        <ControlPointIcon
          onClick={this.handleNewLine}
          variant="outlined"
          color="primary"
          fontSize="large"
          className="scoreInputIcon"
        />
        <form>
          <SingleLineScoreInput
            key={this.state.line}
            lineLength={this.state.lineLength}
            score={this.props.score}
          />
        </form>
      </Container>
    );
  }
}

export default withRouter(ScoreInput);
