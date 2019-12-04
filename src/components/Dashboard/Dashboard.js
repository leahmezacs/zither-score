import React, { Component } from 'react';
import { graphqlOperation, Auth, API } from 'aws-amplify';
import MaterialTable from "material-table";
import Container from "@material-ui/core/Container";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import * as subscriptions from '../../graphql/subscriptions';
import ListUsers from './ListUsers';
import "./Dashboard.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: true,
      scores: false
    };
    this.handleChangeClick = this.handleChangeClick.bind(this);
  }

  handleChangeClick = () => {
    this.setState(prevState => ({
      users: !prevState.users,
      scores: !prevState.scores
    }));
  };

  render() {
    return (
      <div className="dashboard-root">
        <br />
        <Drawer
          className="drawer"
          variant="permanent"
        >
          {/* <div className={classes.toolbar} /> */}
          <List>
            <ListItem button onClick={this.handleChangeClick}>
              <ListItemText primary="Users" />
            </ListItem>
            <ListItem button onClick={this.handleChangeClick}>
              <ListItemText primary="Scores" />
            </ListItem>
          </List>
        </Drawer>
        <main className="content">
          { this.state.users === true ? <ListUsers /> : <ListScores /> }
        </main>
      </div>
    );
  }
}

export default Dashboard;