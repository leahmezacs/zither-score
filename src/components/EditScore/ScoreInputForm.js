import React, { Component } from "react";
import SingleScoreInput  from "./SingleScoreInput";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
// import FormLabel from '@material-ui/core/FormLabel';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import Radio from '@material-ui/core/Radio';
// import Paper from '@material-ui/core/Paper';
import ControlPointIcon from '@material-ui/icons/ControlPoint';

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

        this.handleNewLine = this.handleNewLine.bind(this);
    }

    handleNewLine(event) {
        event.preventDefault();
    }

  render() {
    return (
        <Container maxWidth="lg">

        <form>
    {/* <Grid container spacing={2}> */}
        <button onClick="handleNewLine">
            <ControlPointIcon />
        </button>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
          <span>||</span>
            {this.state.nodeLength.map(value => (
              <Grid key={value} item>
                <SingleScoreInput />
              </Grid>
            ))}
            <p>|</p>
          </Grid>
        </Grid>
     {/* </Grid> */}
     </form>
     </Container>
    );
  }
}

export default ScoreInputForm;