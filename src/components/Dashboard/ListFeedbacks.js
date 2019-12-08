import React, { Component } from 'react';
import { graphqlOperation, Auth, API } from 'aws-amplify';
import MaterialTable from "material-table";
import Container from "@material-ui/core/Container";
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import * as subscriptions from '../../graphql/subscriptions';

class ListFeedbacks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { title: "Name", field: "name" },
        { title: "Email", field: "email" },
        { title: "Date", field: "date" }
      ]
    };
  }

  //get public scores from all users
  async componentDidMount() {
    const limit = 100;
    const result = await API.graphql(graphqlOperation(queries.listFeedbacks, {limit}));
    console.log(result);

    this.setState({
        feedbacks: result.data.listFeedbacks.items
    });
    this.setState({
    data: this.state.feedbacks.map(feedback => {
        const feedbackId = feedback.id;
        const name = feedback.name;
        const email = feedback.email;
        const date = new Date(feedback.createdAt).toDateString();
        return { feedbackId: feedbackId, name: name, email: email, date: date };
    })
    });
  }

  async handleDeleteFeedback(feedback_id) {
    const deletedFeedback = await API.graphql(graphqlOperation(mutations.deleteFeedback,{
        input:{
            id : feedback_id
        }
    }));
  }

  render() {
    return (
      <Container maxWidth="md">
        <MaterialTable
          title="Scores"
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
                  this.handleDeleteFeedback(oldData.feedbackId);
                }, 600);
              }),
          }}
        />
      </Container>
    );
  }
}

export default ListFeedbacks;