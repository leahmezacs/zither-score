import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
import { Container, Row, Col } from 'react-bootstrap/';
import ToolBar from '../ToolBar/ToolBar'


class EditScore extends Component {
    render () {
        return (
            <div>
                <ToolBar />
                <div id="svg-score-sheet">
                    <svg width="1275" height="1650">

                    </svg>
                </div>
            </div>
        )
    }
}

export default EditScore;