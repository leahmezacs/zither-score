import React, { Component } from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListUsers from "./ListUsers";
import ListScores from "./ListScores";
import ListFeedbacks from "./ListFeedbacks";
import "./Dashboard.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: true,
      scores: false,
      feedbacks: false
    };
    this.handleUsersClick = this.handleUsersClick.bind(this);
    this.handleScoresClick = this.handleScoresClick.bind(this);
    this.handleFeedbacksClick = this.handleFeedbacksClick.bind(this);
  }

  handleUsersClick = () => {
    this.setState({
      users: true,
      scores: false,
      feedbacks: false
    });
  };

  handleScoresClick = () => {
    this.setState({
      users: false,
      scores: true,
      feedbacks: false
    });
  };

  handleFeedbacksClick = () => {
    this.setState({
      users: false,
      scores: false,
      feedbacks: true
    });
  };

  render() {
    return (
      <div className="dashboard-root">
        <br />
        <Drawer className="drawer" variant="permanent">
          <List>
            <ListItem button onClick={this.handleUsersClick}>
              <ListItemText primary="Users" />
            </ListItem>
            <ListItem button onClick={this.handleScoresClick}>
              <ListItemText primary="Scores" />
            </ListItem>
            <ListItem button onClick={this.handleFeedbacksClick}>
              <ListItemText primary="Feedbacks" />
            </ListItem>
          </List>
        </Drawer>
        <main className="content">
          {this.state.users === true ? (
            <ListUsers />
          ) : this.state.scores === true ? (
            <ListScores />
          ) : (
            <ListFeedbacks />
          )}
        </main>
      </div>
    );
  }
}

export default Dashboard;
