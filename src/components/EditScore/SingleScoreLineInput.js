import React, { Component } from "react";
import SingleScoreInput from "./SingleScoreInput";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ControlPointIcon from "@material-ui/icons/ControlPoint";

class SingleScoreLineInput extends Component {
  constructor(props) {
    super(props);
    const nodeLength = [];
    for (let i = 0; i < 4; i++) {
      nodeLength.push(i);
    }
    this.state = {
      nodeLength
    };
  }
  render() {
    return (
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={2}>
              <span>||</span>
              {this.state.nodeLength.map(value => (
                <Grid key={value} item>
                  <SingleScoreInput />
                </Grid>
              ))}
              <span>|</span>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default SingleScoreLineInput;
