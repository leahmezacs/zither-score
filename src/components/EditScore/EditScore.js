import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
import { Container, Row, Col } from 'react-bootstrap/';
import ToolBar from '../ToolBar/ToolBar'
import ScoreInput from '../ScoreInput/ScoreInput'


class EditScore extends Component {
    render () {
        return (
            <div>
                <ToolBar />
                <ScoreInput />   
            </div>
        )
    }
}

export default EditScore;