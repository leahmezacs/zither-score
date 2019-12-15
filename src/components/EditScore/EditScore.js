import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../../stylesheets/scorestylesheet.css";
import ScoreInput from "./ScoreInput";
import { graphqlOperation, API } from "aws-amplify";
import * as queries from "../../graphql/queries";
import { Accordion, Card } from "react-bootstrap";

class EditScore extends Component {
  constructor(props) {
    super(props);

    const url = window.location.href;
    this.state = {
      score_id: url.slice(url.lastIndexOf("?") + 1, url.length),
      score: [],
      timer: null,
      saved: true
    };
  }

  async componentDidMount() {
    let interval = setInterval(() => {
      this.setState(prevState => {
        return {
          saved: !prevState.saved
        };
      });
    }, 5000);

    const result = await API.graphql(
      graphqlOperation(queries.getScore, {
        id: this.state.score_id
      })
    );

    this.setState({
      score: result.data.getScore,
      timer: interval
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  render() {
    return (
      <div>
        <div className="tutorial-acc">
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                New to NumScore? Click to reveal quick tutorial on editing.
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="title-block">
                  <div>
                    <h2 className="tut-text1">Add a symbol.</h2>
                    <h2 className="tut-text1">Autosave feature.</h2>
                    <h2 className="tut-text1">Remove a symbol.</h2>
                  </div>
                  <div>
                    <img
                      className="tut-images"
                      src="https://i.imgur.com/nsvekXf.gif"
                      alt=""
                    />
                    <img
                      className="tut-images"
                      src="https://i.imgur.com/uArCzbw.gif"
                      alt=""
                    />
                    <img
                      className="tut-images"
                      src="https://i.imgur.com/oocMy7p.gif"
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="tut-text2">Click above or below.</h2>
                    <h2 className="tut-text2">Saves to your Library.</h2>
                    <h2 className="tut-text2">Click above or below.</h2>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>{" "}
        <br />
        <div className="save-state">
          {this.state.saved ? <p>Saved</p> : <p>Autosaving...</p>}
        </div>
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
                  <ScoreInput score={this.state.score} />
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
