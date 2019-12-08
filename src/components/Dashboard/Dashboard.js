import React, { Component } from 'react';
import { graphqlOperation, Auth, API } from 'aws-amplify';
import MaterialTable from "material-table";
import Container from "@material-ui/core/Container";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListUsers from './ListUsers';
import ListScores from './ListScores';
import ListFeedbacks from './ListFeedbacks';
import "./Dashboard.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: true,
      scores: false,
      feedbacks: false
    };
    this.handleChangeClick = this.handleChangeClick.bind(this);
  }

  handleUsersClick = () => {
    this.setState({
      users: true,
      scores: false,
      feedbacks: false
    })
  };

  

  render() {
    return (
      <div className="dashboard-root">
        <br />
        <Drawer
          className="drawer"
          variant="permanent"
        >
          <List>
            <ListItem button onClick={this.handleChangeClick}>
              <ListItemText primary="Users" />
            </ListItem>
            <ListItem button onClick={this.handleChangeClick}>
              <ListItemText primary="Scores" />
            </ListItem>
            <ListItem button onClick={this.handleChangeClick}>
              <ListItemText primary="Feedbacks" />
            </ListItem>
          </List>
        </Drawer>
        <main className="content">
          { this.state.users === true ? <ListUsers /> 
            : this.state.scores === true ? <ListScores />
            : <ListFeedbacks /> }
        </main>
      </div>
    );
  }
}

export default Dashboard;