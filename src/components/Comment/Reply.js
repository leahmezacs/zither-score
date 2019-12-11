import React, { Component } from "react";
import { Container, TextField, Button, Avatar, Grid } from "@material-ui/core";

class Reply extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
      replyForm: false
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.openReplyForm = this.openReplyForm.bind(this);
    this.closeReplyForm = this.closeReplyForm.bind(this);
    // this.handleDeleteComment = this.handleDeleteComment.bind(this);
  }

  handleChange = event => {
    this.setState({
      content: event.target.value
    });
  };

  openReplyForm = () => {
    this.setState({
      replyForm: true
    });
  };

  closeReplyForm = () => {
    this.setState({
      content: "",
      replyForm: false
    });
  };
  render() {
    return (
      <Container maxWidth="lg">
        <Button
          //   className={classes.replyButton}
          onClick={this.openReplyForm}
        >
          REPLY
        </Button>
        {this.state.replyForm && (
          <form onSubmit={this.handleSubmit}>
            <Grid container wrap="nowrap" spacing={1}>
              <Grid item>
                <Avatar
                  component="span"
                  alt="profile picture"
                  //   className={classes.avatar}
                  //   src={avatarURL + cookie.load("username")}
                />
              </Grid>
              <Grid item xs>
                <TextField
                  fullWidth
                  type="text"
                  multiline
                  autoComplete="on"
                  component="span"
                  data-testid="replyInput"
                  //   className={classes.input}
                  value={this.state.content}
                  onChange={this.handleChange}
                  inputProps={{ maxLength: 500 }}
                  helperText={`${this.state.content.length}/${500}`}
                />
                <Button
                  disabled={!this.state.content.trim()}
                  data-testid="replyButton"
                  variant="contained"
                  type="submit"
                  color="primary"
                  //   className={classes.button}
                >
                  REPLY
                </Button>
                <Button
                  data-testid="cancelButton"
                  color="primary"
                  //   className={classes.button}
                  onClick={this.closeReplyForm}
                >
                  CANCEL
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Container>
    );
  }
}

export default Reply;
