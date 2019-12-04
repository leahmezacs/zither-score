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

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <Container maxWidth="md">
        <br />
        <Drawer
          className="drawer"
          variant="permanent"
          classes={{
            paper: "drawerPaper",
          }}
        >
          {/* <div className={classes.toolbar} /> */}
          <List>
            {['User', 'Scores'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <ListUsers />
      </Container>
    );
  }
}

export default Dashboard;