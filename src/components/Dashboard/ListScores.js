import React, { Component } from 'react';
import { graphqlOperation, Auth, API } from 'aws-amplify';
import MaterialTable from "material-table";
import Container from "@material-ui/core/Container";
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import * as subscriptions from '../../graphql/subscriptions';

class ListScores extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { title: "Score Name", field: "scoreName" },
        { title: "Author", field: "author" },
        { title: "Category", field: "category" },
        { title: "Modify Date", field: "modifyDate" }
      ]
    };
  }

  //get public scores from all users
  async componentDidMount() {
    const limit = 100;
    const result = await API.graphql(graphqlOperation(queries.listScores, {limit}));
    console.log(result);

    this.setState({
        scores: result.data.listScores.items
    });
    this.setState({
    datas: this.state.scores.map(score => {
        const scoreName = score.name;
        const author = score.user.username;
        const category = score.category;
        const date = score.updatedAt;
        return { scoreName: scoreName, author: author, category: category, modifyDate: date };
    })
    });
  }

  async handleDeleteScore(score_id) {
    const deletedScore = await API.graphql(graphqlOperation(mutations.deleteScore,{
        input:{
            id : score_id
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
                  this.handleDeleteScore(oldData.id);
                }, 600);
              }),
          }}
        />
      </Container>
    );
  }
}

export default ListScores;