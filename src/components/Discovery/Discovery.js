import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import CreateModal from "../CreateModal/CreateModal";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Dropdown } from "react-bootstrap";
import { Auth, graphqlOperation, API } from "aws-amplify";
import * as queries from "../../graphql/queries";
import * as mutations from "../../graphql/mutations";
import * as subscriptions from "../../graphql/subscriptions";

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

    this.scoreDeletionSubscription = null;
  }

  //get list of scores from all users
  async componentDidMount() {
    const limit = 50;
    const user = await Auth.currentAuthenticatedUser();
    const result = await API.graphql(
      graphqlOperation(queries.listScores, { limit })
    );
    console.log(result);
    this.setState({
      scores: result.data.listScores.items,
      userId: user.username
    });
    console.log(this.state.scores);
    this.scoreDeletionSubscription = API.graphql(
      graphqlOperation(subscriptions.onDeleteScore)
    ).subscribe({
      next: scoreData => {
        const scoreId = scoreData.value.data.onDeleteScore.id;
        console.log("deleted score id: " + scoreId);

        const remainingScores = this.state.scores.filter(
          scoresData => scoresData.id !== scoreId
        );
        console.log(remainingScores);
        this.setState({
          scores: remainingScores
        });
      }
    });
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

    //filter scores so it only contains current user's scores
    for (let i = 0; i < temp.length; ++i) {
      if (temp[i].user.id === this.state.userId) data.push(temp[i]);
    }
    console.log(this.state.userId);

    return (
      <div>
        {data.map((score, index) => {
          return (
            <div className="tr" key={index}>
              <div className="td row-title">{score.name}</div>
              <div className="td row-date">
                {new Date(score.updatedAt).toDateString()}
              </div>
              <div className="td row-sharing">{score.status}</div>
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
                <h2>Scores</h2>
              </div>
            </div>

            <div className="list-container">
              <div className="library-list">
                <div className="thead">
                  <div className="tr">
                    <div className="th row-title sorting">Name</div>
                    <div className="th row-date sorting">Date Modified</div>
                    <div className="th row-sharing">Sharing</div>
                    <div className="th row-options"></div>
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
