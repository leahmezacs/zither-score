import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../../stylesheets/scorestylesheet.css";
import { graphqlOperation, API } from "aws-amplify";
import * as queries from "../../graphql/queries";

class ViewScore extends Component {
  constructor(props) {
    super(props);
    const url = window.location.href;
    this.state = {
      score_id: url.slice(url.lastIndexOf('?') + 1, url.length),
      score: []
    };
    //console.log(this.state.score_id);
  }
  async componentDidMount() {
    const result = await API.graphql(
      graphqlOperation(queries.getScore, {
        id: this.state.score_id
      })
    );
   // console.log("id: ", this.state.score_id);

    this.setState({
      score: result.data.getScore
    });
  }

  render() {
    //console.log(this.state.score_name);
    return (
      <div>
        <div id="main-content" className="score-scrollable">
            <g className="page-main">
                
            </g>
        </div>
      </div>
    );
  }
}

export default withRouter(ViewScore);
