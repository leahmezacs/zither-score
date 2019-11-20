import React from "react";
import SingleScoreInput from "./SingleScoreInput";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

// Map through singleInput for one line score input
const SingleLineScoreInput = props => {
  const nodeLength = [0, 1, 2, 3]; 

  return props.lineLength.map(value => (
    <Container className="lineSpacing" key={value} maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            <span className="lineBegin">|</span>
            {nodeLength.map(value => (
              <Grid key={value} item>
                <SingleScoreInput
                  key={value}
                  lineLength={props.lineLength}
                  nodeLength={value}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  ));
};

export default SingleLineScoreInput;
