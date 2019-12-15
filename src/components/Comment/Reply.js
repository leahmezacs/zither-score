import React, { Component } from "react";
import {
  Container,
  TextField,
  Button,
  Avatar,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from "@material-ui/core";
import { Auth, graphqlOperation, API } from "aws-amplify";
import * as mutations from "../../graphql/mutations";
import * as queries from "../../graphql/queries";
import * as subscriptions from "../../graphql/subscriptions";

class Reply extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      content: "",
      replyForm: false,
      listReplys: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.openReplyForm = this.openReplyForm.bind(this);
    this.closeReplyForm = this.closeReplyForm.bind(this);
    
    this.replyCreateSubscription = null;
  }

  async componentDidMount() {
    const user = await Auth.currentAuthenticatedUser();
    const userId = user.username;
    this.setState({
      userId: userId
    });

    const replys = await API.graphql(
      graphqlOperation(queries.listReplys, {
        limit: 100,
        filter: {
          commentId: {
            eq: this.props.commentID
          }
        }
      })
    );
    this.setState({
      listReplys: replys.data.listReplys.items
    });

    this.replyCreateSubscription = API.graphql(graphqlOperation(subscriptions.onCreateReply)).subscribe({
        next: (replyData) => {
            const createReply = replyData.value.data.onCreateReply;
            const updatedReplies = [...this.state.listReplys, createReply];
            const uniqueReplies = Array.from(new Set(updatedReplies.map(reply => reply.id)))
              .map(id => {
                return updatedReplies.find(reply => reply.id === id)
              });

            const updatedUniqueReplies = [...uniqueReplies];
            this.setState({
              content: "",
              listReplys: updatedUniqueReplies
            });
        },
    });
  }

  componentWillUnmount() {
    if (this.replyCreateSubscription) this.replyCreateSubscription.unsubscribe();
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

  handleSubmit = async event => {
    event.preventDefault();
    const replyCreated = await API.graphql(
      graphqlOperation(mutations.createReply, {
        input: {
          replyCommentId: this.props.commentID,
          commentId: this.props.commentID,
          content: this.state.content,
          userId: this.state.userId
        }
      })
    );
  };

  render() {
    const avatarURL = "http://api.adorable.io/avatar/50/";
    return (
      <Container maxWidth="lg">
        <Button className="replyButton" onClick={this.openReplyForm}>
          REPLY
        </Button>
        {this.state.replyForm && (
          <form className="replyForm" onSubmit={this.handleSubmit}>
            <Grid container wrap="nowrap" className="grid" spacing={1}>
              <Grid item>
                <Avatar
                  component="span"
                  alt="profile picture"
                  src={avatarURL + this.state.userId}
                />
              </Grid>
              <Grid item xs>
                <TextField
                  fullWidth
                  type="text"
                  multiline
                  autoComplete="on"
                  component="span"
                  //   className={classes.input}
                  value={this.state.content}
                  onChange={this.handleChange}
                  inputProps={{ maxLength: 500 }}
                  helperText={`${this.state.content.length}/${500}`}
                />
                <Button
                  disabled={!this.state.content.trim()}
                  variant="contained"
                  type="submit"
                  color="primary"
                  className="replyLeftButton"
                >
                  REPLY
                </Button>
                <Button
                  color="primary"
                  className="replyLeftButton"
                  onClick={this.closeReplyForm}
                >
                  CANCEL
                </Button>
              </Grid>
            </Grid>
          </form>
        )}

        <div className="viewReply">
          {this.state.listReplys &&
            this.state.listReplys.map(reply => (
              <ListItem
                className="reply"
                key={`${reply.userId}${reply.createdAt}`}
                m={1}
              >
                <ListItemAvatar>
                  <Avatar alt="profile" src={avatarURL + reply.userId} />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <>
                      <Typography component="span" color="textPrimary">
                        {reply.userId}
                      </Typography>
                      <Typography component="span" className="commentRight">
                        {reply.createdAt.substr(
                          0,
                          reply.createdAt.indexOf("T")
                        )}
                      </Typography>
                    </>
                  }
                  secondary={<Typography className="replyContent">{reply.content}</Typography>}
                />
              </ListItem>
            ))}
        </div>
      </Container>
    );
  }
}

export default Reply;
