import React, { Component } from 'react';
import NavBar from './NavBar';
import { Auth } from 'aws-amplify';
import { Container, Row, Col } from 'react-bootstrap/';


class Library extends Component {
    render () {
        return (
            <div>
                    <NavBar id="nav-bar" className="fixed-top"/>
                    
                    <Container>
                        <Row>
                            <Col>
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
                            <Col>
                                <div id="main-bar">
                                    <div id="library-content">
                                        <div id="header">
                                            <h1>
                                                Scores
                                            </h1>
                                        </div>
                                        <div id="scores-list">
                                            <div className="thead">
                                                <div className="tr">
                                                    // className="th" Checkbox div
                                                    <div className="th">Name</div>
                                                    <div className="th">Modified</div>
                                                    <div className="th">Sharing</div>
                                                    <div className="th"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div id="right-bar">
                                    <div id="inner">
                                        <button>Create new score</button>
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