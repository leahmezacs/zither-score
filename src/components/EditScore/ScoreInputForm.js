import React, { Component } from "react";
import SingleLineScoreInput  from "./SingleLineScoreInput";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ControlPointIcon from '@material-ui/icons/ControlPoint';

class ScoreInputForm extends Component {
    constructor(props) {
        super(props);

        const nodeLength = [];
        for (let i = 0; i < 4; i++) {
            nodeLength.push(i);
        }
        this.state = {
            nodeLength,
            newLine: false
        };

        this.handleNewLine = this.handleNewLine.bind(this);
    }

    handleNewLine(event) {
        event.preventDefault();
        this.setState({
            newLine: true
        })
    }

  render() {
    return (
        <Container maxWidth="lg">

        <form>
        <button onClick={this.handleNewLine}>
            <ControlPointIcon />
        </button>
        {this.state.newLine ? 
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
          <span>||</span>
            {this.state.nodeLength.map(value => (
              <Grid key={value} item>
                <SingleLineScoreInput />
              </Grid>
            ))}
            <p>|</p>
          </Grid>
        </Grid>
        :
        ""
        }
     </form>
     </Container>
    );
  }
}

export default ScoreInputForm;