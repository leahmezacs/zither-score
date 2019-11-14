import React, { Component } from "react";
import ToolBar from "../ToolBar/ToolBar";
import ScoreInput from "../ScoreInput/ScoreInput";
import "../../stylesheets/scorestylesheet.css";

class EditScore extends Component {
  render() {
    return (
      <div>
        <div id="toolbar">
          <ToolBar />
        </div>
        <ScoreInput />

        <div id="svg-score-sheet">
          <div className="score-scrollable">
            <svg width="1150" height="1650" className="score-sheet">
              <g
                className="page-contents"
                transform="scale(1.25, 1.25) translate(32.126, 32.126)"
              >
                <g className="inside-margin" transform="translate(0,0)">
                  <g className="page-title">
                    <div>abc</div>
                    abc
                    <text
                      fontFamily="Noto Serif TC"
                      fontStyle="medium"
                      textAnchor="middle"
                      fontSize="40"
                      transform="translate(431.024, 80)"
                    >
                      
                    </text>
                  </g>
                </g>

                <g className="page-main" transform="translate(0, 140)"></g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    );
  }
}

export default EditScore;
