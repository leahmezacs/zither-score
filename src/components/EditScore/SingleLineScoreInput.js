import React, { Component } from "react";
import SingleScoreInput from "./SingleScoreInput";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

// Map through singleInput for one line score input
class SingleLineScoreInput extends Component {
  /* constructor(props) {
    super(props);
    this.state = {
      row: this.props.lineLength,
      column: 0,
      note_pos: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      note_pos: e.target.pos
    })
    console.log(this.state.note_pos);
  } */

  render() {
    const nodeLength = [0, 1, 2, 3]; 

    return this.props.lineLength.map(value => (
      <Container className="lineSpacing" key={value} maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={2}>
              <span className="lineBegin">|</span>
              {nodeLength.map(value => (
                <Grid key={value} item>
                  <SingleScoreInput
                    key={value}
                    onChange={() => this.handleChange()}
                  /> 
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    ));
  };
}

export default SingleLineScoreInput;
