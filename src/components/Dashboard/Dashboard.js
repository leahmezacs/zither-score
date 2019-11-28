import React, { Component } from 'react';
import { graphqlOperation, API } from 'aws-amplify';
import MaterialTable from "material-table";
import Container from "@material-ui/core/Container";
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import * as subscriptions from '../../graphql/subscriptions';

class Dashboard extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          columns: [
            { title: "Username", field: "username" },
            { title: "Email", field: "email" }
          ]
        };
      }
    
      //get public scores from all users
      async componentDidMount() {
        const limit = 100;
        const result = await API.graphql(
          graphqlOperation(queries.listUsers, {
            limit,
            filter: {
              group: {
                eq: "User"
              }
            }
          })
        );
        console.log(result);
        this.setState({
          users: result.data.listUsers.items
        });
        this.setState({
          data: this.state.users.map(user => {
            const username = user.username;
            const email = user.email;
            return { username: username, email: email };
          })
        });
      }
    
      render() {
        return (
          <Container maxWidth="md">
            <br />
            <MaterialTable
              title="Users"
              columns={this.state.columns}
              data={this.state.data}
            />
          </Container>
        );
      }
    }

export default Dashboard;