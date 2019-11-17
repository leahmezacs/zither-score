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
        for (let i = 0; i < 16; i++) {
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
            {this.state.nodeLength.map(value => (
              <Grid key={value} item>
                {/* <SingleScoreInput /> */}
                <input
                  className="singleNote"
                  type="number"
                  maxLength="1"
                  min="1"
                  max="7"
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <Grid container>
              <Grid item>
                <FormLabel>spacing</FormLabel>
                <RadioGroup
                  name="spacing"
                  aria-label="spacing"
                  // value={spacing.toString()}
                  // onChange={handleChange}
                  row
                >
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(value => (
                    <FormControlLabel
                      key={value}
                      value={value.toString()}
                      control={<Radio />}
                      label={value.toString()}
                    />
                  ))}
                </RadioGroup>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default ScoreInputForm;