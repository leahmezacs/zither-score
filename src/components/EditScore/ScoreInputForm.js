import React, { Component } from "react";
import Container from '@material-ui/core/Container';
import SingleScoreInput  from "./SingleScoreInput";

class ScoreInputForm extends Component {
  render() {
    return (
        <Container maxWidth="xs">
            <SingleScoreInput />
        </Container>
      
    );
  }
}

export default ScoreInputForm;