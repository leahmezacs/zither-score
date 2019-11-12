import React, { Component } from 'react';
import ToolBar from '../ToolBar/ToolBar';
import '../../stylesheets/scorestylesheet.css';

class EditScore extends Component {
    render () {
        return (
            <div>
                <div id="toolbar">
                    <ToolBar />
                </div>
                
                <div id="svg-score-sheet">
                    <div className="score-scrollable">
                        <svg width="1275" height="1650" className="score-sheet">
                            <g className="page-contents" transform="scale(1.25, 1.25) translate(32.126, 32.126)">
                                <g className="insideMargin" transform="translate(0,0)">
                                    <g className="page-title">
                                        <text font-family="Noto Serif TC" font-style="medium" text-anchor="middle" font-size="40" transform="translate(477.874, 80)">ABC</text>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditScore;