import React, { Component } from "react";
import { Auth, graphqlOperation, API } from "aws-amplify";
import * as queries from "../../graphql/queries";

class Discovery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      userId: "",
      scores: []
    };
    this.handleListScores = this.handleListScores.bind(this);
    // this.handleEditScore = this.handleEditScore.bind(this);
  }

  //get list of scores from all users
  async componentDidMount() {
    // const limit = 50;
    const user = await Auth.currentAuthenticatedUser();
    const result = await API.graphql(
      graphqlOperation(queries.listScores)
    );
    console.log(result);
    this.setState({
      scores: result.data.listScores.items,
      userId: user.username
    });
    console.log(this.state.scores);
  }

//   componentWillUnmount() {
//     if (this.scoreDeletionSubscription) {
//       this.scoreDeletionSubscription.unsubscribe();
//     }
//   }

//   handleEditScore(score_name) {
//     this.props.history.push({
//       pathname: "/EditScore",
//       search: score_name,
//       state: {
//         name: score_name
//       }
//     });
//   }

  //list scores in table
  handleListScores() {
    const temp = this.state.scores;
    let data = [];

    //filter scores so it only contains only public score
    for (let i = 0; i < temp.length; ++i) {
      if (temp[i].status === "PUBLIC") data.push(temp[i]);
    //   console.log(temp[i].status);
    }
    console.log(data);
    

    return (
      <div>
        {data.map((score, index) => {
          return (
            <div className="tr" key={index}>
              <div className="td row-title">{score.name}</div>
              <div className="td row-date">
                {score.user.username}
              </div>
              <div className="td row-sharing">
                {new Date(score.updatedAt).toDateString()}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  render() {
    //console.log(this.state.scores);
    return (
      <div className="main-library">
        <div className="main-bar">
          <div className="library-content">
            <div className="head-container">
              <div className="header">
                <h2>Public Scores</h2>
              </div>
            </div>

            <div className="list-container">
              <div className="library-list">
                <div className="thead">
                  <div className="tr">
                    <div className="th row-title sorting">Name</div>
                    <div className="th row-date sorting">Author</div>
                    <div className="th row-sharing">Date Modified</div>
                  </div>
                </div>
                <div className="tbody">{this.handleListScores()}</div>
                <div
                  infinite-scroll-disabled="infiniteScrollBusy"
                  infinite-scroll-distance="250"
                  className="tbody"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Discovery;
