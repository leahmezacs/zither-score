import React, { Component } from 'react';
import ToolBar from '../ToolBar/ToolBar';
import '../../stylesheets/scorestylesheet.css';

class EditScore extends Component {
    render () {
        return (
            <div>
                <ToolBar />
                <br />
                <div id="svg-score-sheet">
                    <svg width="1275" height="1650" className="score-sheet">

                    </svg>
                </div>
            </div>
        )
    }
}

export default EditScore;