import React, { Component } from 'react';
import { graphqlOperation, Auth, API } from 'aws-amplify';
/* import AWS from "aws-sdk";  */
import MaterialTable from "material-table";
import Container from "@material-ui/core/Container";
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import * as subscriptions from '../../graphql/subscriptions';

class ListUsers extends Component {
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

  async handleDeleteUser(user_id) {
    const cognitoUser = await Auth.currentAuthenticatedUser();
    console.log(cognitoUser);
    const AWS = require('aws-sdk');
    AWS.config.region = 'us-east-1'; // Region
    
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: 'us-east-1:037e5840-fa82-4b51-858f-e0ef42677465',
        Logins: {
          'cognito-idp.us-east-1.amazonaws.com/us-east-1_Sbh7qj4nQ': cognitoUser.signInUserSession.idToken.jwtToken
      }
    });

    AWS.config.credentials.get(function(err) {
      if (err) console.log(err);
      else console.log(AWS.config.credentials);
    });
    console.log(AWS.config.credentials);


    const cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();
    const params = {
      UserPoolId: 'us-east-1_Sbh7qj4nQ', 
      Username: user_id 
    };
    cognitoidentityserviceprovider.adminDeleteUser(params, function(err, data) {
      if (err) console.log(err, err.stack); 
      else console.log(data);          
    });

    const deletedUser = await API.graphql(graphqlOperation(mutations.deleteUser,{
        input:{
            id : user_id
        }
    }));

    /* try {
      console.log(await Auth.currentSession());
      let apiName = 'AdminQueries';
      const path = '/disableUser';
      const myInit = {
        body: {
          user_id,
        },
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`,
        },
      };
      const result = await API.post(apiName, path, myInit);
      return result.message;
    } catch (e) {
      console.log(e);
      return e;
    } */
  }

  render() {
    return (
      <Container maxWidth="md">
        <MaterialTable
          title="Users"
          columns={this.state.columns}
          data={this.state.data}
          editable={{
            onRowDelete: oldData =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  this.setState(prevState => {
                    const data = [...prevState.data];
                    data.splice(data.indexOf(oldData), 1);
                    return { ...prevState, data };
                  });
                  this.handleDeleteUser(oldData.username);
                }, 600);
              }),
          }}
        />
      </Container>
    );
  }
}

export default ListUsers;