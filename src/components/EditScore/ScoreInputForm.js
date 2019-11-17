import React, { Component } from "react";
import SingleScoreInput  from "./SingleScoreInput";
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

class ScoreInputForm extends Component {
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
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
          <p>||</p>
            {this.state.nodeLength.map(value => (
              <Grid key={value} item>
                <SingleScoreInput />
              </Grid>
            ))}
            <p>||</p>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default ScoreInputForm;