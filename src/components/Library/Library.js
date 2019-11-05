import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
import { Container, Row, Col } from 'react-bootstrap/';


class Library extends Component {
    render () {
        return (
            <div>
                <Container>
                    <Row>
                        <Col lg xl={2}>
                            <div id="left-bar">
                                <div id="inner">
                                        <a href="#!">
                                            <span>Scores</span>
                                        </a>
                                        <a href="#!">
                                            <span>New collection</span>
                                        </a>
                                        <a href="#!">
                                            <span>Trash</span>
                                        </a>
                                </div>
                            </div>
                        </Col>
                        <Col lg xl={8}>
                            <div id="main-bar">
                                <div id="library-content">
                                    <div id="header">
                                        <h1>
                                            Scores
                                        </h1>
                                    </div>
                                    <Row>
                                        <Col>Name</Col>
                                        <Col md="auto">Date Modified</Col>
                                        <Col lg xl={2}>Sharing</Col>
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