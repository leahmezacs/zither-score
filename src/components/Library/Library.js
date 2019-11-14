import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap/';


class Library extends Component {
    render () {
        return (
            <div className="main-library">
                {/* <Container>
                    <Row>
                        <Col lg xl={2}>
                            <div className="side-bar">
                                <div className="inner">
                                        <a href="#">
                                            <Row>Scores</Row>
                                        </a>
                                        <a href="#">
                                            <Row>New collection</Row>
                                        </a>
                                        <a href="#">
                                            <Row>Trash</Row>
                                        </a>
                                </div>
                            </div>
                        </Col>
                        <Col lg xl={10}>
                            <div className="main-bar">
                                <div className="library-content">
                                    <div className="header">
                                        <h1>
                                            Scores
                                        </h1>
                                    </div>
                                    <Row>
                                        <Col>Name</Col>
                                        <Col lg xl={2}>Date Modified</Col>
                                        <Col lg xl={2}>Sharing</Col>
                                        <Col></Col>  
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container> */}
                    
                <div className="side-bar">
                    <div className="inner">
                            <a className="list-item" href="#">
                                <span>Scores</span>
                            </a>
                            <div className="sub-item">
                                <a className="list-item" href="#">
                                    <span>New collection</span>
                                </a>
                            </div>
                            <a className="list-item" href="#">
                                <span>Trash</span>
                            </a>
                    </div>
                </div>
            
                <div className="main-bar">
                    <div className="library-content">
                        <div className="head-container">
                            <div className="header">
                                <h1>
                                    Scores
                                </h1>
                            </div>
                        </div>
                        
                        <div className="list-container">
                            <div className="library-list">
                                <div className="thead">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Library;