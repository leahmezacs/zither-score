import React from "react";
import SingleScoreInput from "./SingleScoreInput";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

// class SingleLineScoreInput extends Component {
const SingleLineScoreInput = (props) => {
  // constructor(props) {
    // super(props);
    // const nodeLength = [];
    // for (let i = 0; i < 4; i++) {
    //   nodeLength.push(i);
    // }
    // this.state = {
    //   nodeLength: [0, 1, 2, 3]
    // };
    const nodeLength = [0, 1, 2, 3];
  // }
  // render() {
    return (
      props.lineLength.map(value => (
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid key={value} container justify="center" spacing={2}>
              <span>||</span>
              {nodeLength.map(value => (
                <Grid key={value} item>
                  <SingleScoreInput />
                </Grid>
              ))}
              <span>|</span>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      ))
    );
  // }
}

export default SingleLineScoreInput;
