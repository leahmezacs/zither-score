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

                        </svg>
                    </div>
                </div>                     
            </div>
        )
    }
}

export default EditScore;