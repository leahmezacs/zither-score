import React, { Component } from "react";
import { graphqlOperation, API } from "aws-amplify";
import * as queries from "../../graphql/queries";
import MaterialTable from "material-table";
import Container from "@material-ui/core/Container";

class Discovery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { title: "Score Name", field: "scoreName" },
        { title: "Author", field: "author" },
        {
          title: "Category",
          field: "category",
          lookup: {
            Contemporary: "Contemporary",
            Classic: "Classic",
            Folk: "Folk"
          }
        },
        { title: "Modify Date", field: "modifyDate", filtering: false },
      ]
    };
  }

  //get public scores from all users
  async componentDidMount() {
    const limit = 50;
    const result = await API.graphql(
      graphqlOperation(queries.listScores, {
        limit,
        filter: {
          status: {
            eq: "PUBLIC"
          }
        }
      })
    );
    console.log(result);
    this.setState({
      scores: result.data.listScores.items
    });
    this.setState({
      datas: this.state.scores.map(score => {
        const scoreId = score.id;
        const scoreName = score.name;
        const author = score.user.username;
        const category = score.category;
        const date = score.updatedAt.substr(0, score.updatedAt.indexOf("T"));
        return {
          scoreName: scoreName,
          author: author,
          category: category,
          modifyDate: date,
          scoreId: scoreId
        };
      })
    });
  }

  render() {
    return (
      <Container maxWidth="md">
        <br />
        <MaterialTable
          title="Public Score"
          columns={this.state.columns}
          data={this.state.datas}
          options={{
            filtering: true,
          }}
          onRowClick={(event, rowData) => this.props.history.push("ViewScore?" + rowData.scoreId)}
        />
      </Container>
    );
  }
}

export default Discovery;
