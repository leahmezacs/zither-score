import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ControlPointIcon from "@material-ui/icons/ControlPoint";

class SingleLineScoreInput extends Component {
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
    });
  }

  render() {
    return (
      <Container maxWidth="lg">
        <form>
          <button onClick={this.handleNewLine}>
            <ControlPointIcon />
          </button>
          {this.state.newLine ? (
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
          ) : (
            ""
          )}
        </form>
      </Container>
    );
  }
}

export default SingleLineScoreInput;

{
  /* <input
id="0"
className="singleNote"
type="number"
maxLength="1"
min="1"
max="7"
/>
<input
id="1"
className="singleNote"
type="number"
maxLength="1"
min="1"
max="7"
/>
<input
id="2"
className="singleNote"
type="number"
maxLength="1"
min="1"
max="7"
/>
<input
id="3"
className="singleNote"
type="number"
maxLength="1"
min="1"
max="7"
/>
<span>|</span> */
}
