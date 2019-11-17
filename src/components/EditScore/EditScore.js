import React, { Component } from 'react';
import ScoreInput from '../ScoreInput/ScoreInput'
import ToolBar from '../ToolBar/ToolBar';
import '../../stylesheets/scorestylesheet.css';
import ScoreInput from '../ScoreInput/ScoreInput';

class EditScore extends Component {

    render () {
        return (
            <div>
                <ToolBar />
                
                <div id="main-content" className="score-scrollable">
                    <svg width="1150" height="1650" className="score-sheet">
                        <g className="page-contents" transform="scale(1.25, 1.25) translate(32.126, 32.126)">
                            <g className="inside-margin" transform="translate(0,0)">
                                <g className="page-title">
                                    <text font-family="Noto Serif TC" font-style="medium" text-anchor="middle" font-size="40" transform="translate(431.024, 80)">ABC</text>
                                </g>
                            </g>
                            
                            <g className="page-main">
                                <foreignObject x="50" y="140" width="1150" height="1650">
                                    <ScoreInput />
                                </foreignObject>
                            </g>
                        </g>
                    </svg>
                </div>            
            </div>
        )
    }

}

export default EditScore;
