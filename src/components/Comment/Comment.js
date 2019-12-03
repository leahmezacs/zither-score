import React, { Component } from "react";
import { Container, TextField, Button } from "@material-ui/core";
import { Auth, graphqlOperation, API } from 'aws-amplify';
import * as mutations from '../../graphql/mutations';
import * as queries from "../../graphql/queries";

class Comment extends Component {
  constructor(props) {
    super(props);

    const urls = window.location.href;
    this.state = {
      comment: '',
      scoreID: urls.slice(urls.lastIndexOf('/') + 1, urls.length)
    };
    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

//   handleChange = event => {};

  handleSubmit = async(event) => {
      event.preventDefault();
      const user = await Auth.currentAuthenticatedUser();
      const userId = user.username;
      const commentCreated = await API.graphql(graphqlOperation(mutations.createComment, {
          input: {
              content: this.state.comment,
              scoreId: this.state.scoreID,
              userId: userId
          }
      }));
      console.log(commentCreated);
      this.handleListComments();
  };

  handleListComments = async() => {
      const comments = await API.graphql(
        graphqlOperation(queries.listComments, {
          limit: 100,
          filter: {
            scoreId: {
              eq: this.state.scoreID
            }
          }
        })
      );
      console.log(comments);
  }

  render() {
    return (
      <Container maxWidth="lg">
        <form onSubmit={this.handleSubmit}>
          <TextField
            fullWidth
            name="comment"
            type="text"
            rows={5}
            rowsMax={5}
            multiline
            disableunderline="true"
            inputProps={{ maxLength: 600 }}
            label="Leave a comment"
            variant="outlined"
            onChange={e => this.setState({ comment: e.target.value})}
            required
          />
          <Button variant="contained" type="submit" color="primary">
            Comment
          </Button>
        </form>
      </Container>
    );
  }
}

export default Comment;