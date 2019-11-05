import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
import { Container, Row, Col } from 'react-bootstrap/';


class Library extends Component {
    render () {
        return (
            <div>
                <Container>
                    <Row>
                        <Col xs={2}>
                            <div id="left-bar">
                                <div id="inner">
                                    <div id="col-scores" className="position-fixed">
                                        <a>
                                            <span>Scores</span>
                                        </a>
                                    </div>
                                    <div id="col-new">
                                        <a>
                                            <span>New collection</span>
                                        </a>
                                    </div>
                                    <div id="col-trash">
                                        <a>
                                            <span>Trash</span>
                                        </a>
                                    </div>
                                </div>
                                </div>
                        </Col>
                        <Col xs={8}>
                            <div id="main-bar">
                                <div id="library-content">
                                    <div id="header">
                                        <h1>
                                            Scores
                                        </h1>
                                    </div>
                                    <Row>
                                        <Col>Name</Col>
                                        <Col md="auto">Modified</Col>
                                        <Col xs lg="2">Sharing</Col>
                                        <Col></Col>  
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Library;