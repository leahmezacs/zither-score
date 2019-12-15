import React, { Component } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Box
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import DeleteIcon from "@material-ui/icons/Delete";
import { Auth, graphqlOperation, API } from "aws-amplify";
import * as mutations from "../../graphql/mutations";
import * as queries from "../../graphql/queries";
import * as subscriptions from "../../graphql/subscriptions";
import Reply from "./Reply";

class Comment extends Component {
  constructor(props) {
    super(props);

    const urls = window.location.href;
    this.state = {
      comment: "",
      rating: 0,
      scoreID: urls.slice(urls.lastIndexOf("?") + 1, urls.length),
      listComments: [],
      userId: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDeleteComment = this.handleDeleteComment.bind(this);

    this.commentCreateSubscription = null;
    this.commentDeletionSubscription = null;
  }

  handleSubmit = async event => {
    event.preventDefault();
    const commentCreated = await API.graphql(
      graphqlOperation(mutations.createComment, {
        input: {
          content: this.state.comment,
          rating: this.state.rating,
          scoreId: this.state.scoreID,
          userId: this.state.userId
        }
      })
    );
    return commentCreated;
  };

  async handleDeleteComment(commentID) {
    const deleteComment = await API.graphql(
      graphqlOperation(mutations.deleteComment, {
        input: {
          id: commentID
        }
      })
    );
    return deleteComment;
  }

  async componentDidMount() {
    const user = await Auth.currentAuthenticatedUser();
    const userId = user.username;
    this.setState({
      userId: userId
    });

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
    this.setState({
      listComments: comments.data.listComments.items
    });

    this.commentCreateSubscription = API.graphql(
      graphqlOperation(subscriptions.onCreateComment)
    ).subscribe({
      next: commentData => {
        const createComment = commentData.value.data.onCreateComment;

        const updatedComments = [...this.state.listComments, createComment];
        const uniqueComments = Array.from(
          new Set(updatedComments.map(comment => comment.id))
        ).map(id => {
          return updatedComments.find(comment => comment.id === id);
        });

        const updatedUniqueComments = [...uniqueComments];
        this.setState({
          comment: "",
          rating: 0,
          listComments: updatedUniqueComments
        });
      }
    });

    this.commentDeletionSubscription = API.graphql(
      graphqlOperation(subscriptions.onDeleteComment)
    ).subscribe({
      next: commentData => {
        const commentID = commentData.value.data.onDeleteComment.id;

        const remainingComment = this.state.listComments.filter(
          comment => comment.id !== commentID
        );
        this.setState({
          listComments: remainingComment
        });
      }
    });
  }

  componentWillUnmount() {
    if (this.commentCreateSubscription)
      this.commentCreateSubscription.unsubscribe();
    if (this.commentDeletionSubscription)
      this.commentDeletionSubscription.unsubscribe();
  }

  render() {
    const avatarURL = "http://api.adorable.io/avatar/50/";
    return (
      <Container maxWidth="lg">
        <form onSubmit={this.handleSubmit}>
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend">Rate the Score</Typography>
            <Rating
              name="rating"
              value={this.state.rating}
              onChange={(event, newValue) => {
                this.setState({ rating: newValue });
              }}
            />
          </Box>
          <TextField
            fullWidth
            name="comment"
            type="text"
            rows={5}
            rowsMax={5}
            multiline
            disableunderline="true"
            inputProps={{ maxLength: 600 }}
            helperText={`${this.state.comment.length}/${600}`}
            label="Leave a comment"
            variant="outlined"
            value={this.state.comment}
            onChange={e => this.setState({ comment: e.target.value })}
            required
          />
          <Button
            variant="contained"
            disabled={!this.state.comment.trim() || !this.state.rating}
            type="submit"
            color="primary"
          >
            Comment
          </Button>
        </form>

        <List>
          <div className="commentHeader">
            {this.state.listComments.length} COMMENTS
          </div>
          <hr />
          {this.state.listComments.length > 0 ? (
            <List>
              {this.state.listComments.map(comment => {
                const commentTime = comment.createdAt.substr(
                  0,
                  comment.createdAt.indexOf("T")
                );
                return (
                  <div key={comment.id}>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar
                          alt="profile"
                          src={avatarURL + comment.userId}
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <>
                            <Typography
                              component="span"
                              className="commentLeft"
                              color="textPrimary"
                            >
                              {comment.userId}
                            </Typography>
                            <Typography
                              component="span"
                              className="commentRight"
                            >
                              {commentTime}
                            </Typography>
                          </>
                        }
                        secondary={
                          <Typography className="commentContent">
                            <Rating
                              name="rating"
                              value={comment.rating}
                              precision={0.1}
                              size="small"
                              readOnly
                            />
                            {this.state.userId === comment.userId && (
                              <DeleteIcon
                                className="commentRight"
                                onClick={() =>
                                  this.handleDeleteComment(comment.id)
                                }
                              />
                            )}
                            <br />
                            {comment.content}
                          </Typography>
                        }
                      />
                    </ListItem>
                    <Reply commentID={comment.id} />
                  </div>
                );
              })}
            </List>
          ) : (
            "No Comment"
          )}
        </List>
        <br />
      </Container>
    );
  }
}

export default Comment;
