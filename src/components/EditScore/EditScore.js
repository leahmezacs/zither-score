import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ToolBar from "../ToolBar/ToolBar";
import "../../stylesheets/scorestylesheet.css";
import ScoreInput from "./ScoreInput";
import { graphqlOperation, API } from "aws-amplify";
import * as queries from "../../graphql/queries";

class EditScore extends Component {
  constructor(props) {
    super(props);
    const url = window.location.href;
    this.state = {
      score_id: url.slice(url.lastIndexOf('?') + 1, url.length),
      score: []
    };
    //console.log(this.state.score_name);
  }
  async componentDidMount() {
    const result = await API.graphql(
      graphqlOperation(queries.getScore, {
        id: this.state.score_id
      })
    );
    console.log("id: ", this.state.score_id);

    this.setState({
      score: result.data.getScore
    });
  }

  render() {
    //console.log(this.state.score_name);
    return (
      <div>
        <ToolBar />

        <div id="main-content" className="score-scrollable">
          <svg width="1150" height="1650" className="score-sheet">
            <g
              className="page-contents"
              transform="scale(1.25, 1.25) translate(32.126, 32.126)"
            >
              <g className="inside-margin" transform="translate(0,0)">
                <g className="page-title">
                  <text
                    fontFamily="Noto Serif TC"
                    fontStyle="medium"
                    textAnchor="middle"
                    fontSize="40"
                    transform="translate(431.024, 80)"
                  >
                    {this.state.score.name}
                  </text>
                </g>
              </g>

              <g className="page-main">
                <foreignObject x="-150" y="100" width="1150" height="1650">
                  <ScoreInput score={this.state.score}/>
                </foreignObject>
              </g>
            </g>
          </svg>
        </div>
      </div>
    );
  }
}

export default withRouter(EditScore);
