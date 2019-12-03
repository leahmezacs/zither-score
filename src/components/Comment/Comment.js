import React, { Component } from "react";
import { Container, TextField, Button } from "@material-ui/core";

class Comment extends Component {
  constructor(props) {
    super(props);

    this.state = {
        comment:'',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {};

  handleSubmit = event => {};

  render() {
    return (
      <Container maxWidth="lg">
        <form onSubmit={this.handleSubmit}>
          <TextField
            fullWidth
            type="text"
            rows={5}
            rowsMax={5}
            multiline
            disableunderline="true"
            inputProps={{ maxLength: 600 }}
            label="Leave a comment"
            variant="outlined"
            onChange={this.handleChange}
          />
        </form>
      </Container>
    );
  }
}

export default Comment;
