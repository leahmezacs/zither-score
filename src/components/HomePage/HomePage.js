import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./HomePage.css";

class HomePage extends Component{
    render () {
        return (
            <div id="myPage" data-spy="scroll" data-target=".navbar" data-offset="60">
                <div className="jumbotron text-center">
                    <h1 className="homepage-header">NumScore</h1> 
                    <p className="text-light">Numbers to scores</p> 
                    <br />
                    
                </div>

                <div id="about" className="container-fluid">
                    <div className="row">
                        <div className="col-sm-8">
                            <h2>About NumScore</h2><br/>
                            <h4>Our application allows users to create, view, and print music scores written in numbered notation called JianPu.</h4><br/>
                        </div>
                    </div>
                </div>

                <div className="container-fluid bg-grey">
                    <div className="row">
                        <div className="col-sm-4">
                            
                        </div>
                        <div className="col-sm-8">
                            <h2>Our Values</h2><br/>
                            <h4><strong>MISSION:</strong> Our mission is to help users to create and read music scores written in numbered notation freely. </h4><br/>
                        </div>
                    </div>
                </div>

                <div id="services" className="container-fluid text-center">
                    <h2>SERVICES</h2>
                    <h4>What we offer</h4>
                    <br/>
                    <div>
                        <Container className="service-container">
                            <Row>
                                <Col>
                                    <h4>SIMPLICITY</h4>
                                    <p>No ads or any unnecessary features</p>
                                </Col>
                                <Col>
                                    <h4>User Friendly</h4>
                                    <p>Easy to navigate through our app</p>
                                </Col>
                                <Col>
                                    <h4>JOB DONE</h4>
                                    <p>create and read others' scores now!</p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>               
                <br/>                
                <div id="contact" className="container-fluid bg-grey">
                    <h2 className="text-center">CONTACT</h2>
                    <div className="row">
                        <div className="col-sm-5">
                            <h5>Contact us and we'll try to get back to you within 24 hours.</h5>
                            <p> New York, US</p>
                            <p> +1 (111) 222-3333</p>
                            <p> numscore000@gmail.com</p>
                        </div>
                        <div className="col-sm-7">
                            <div className="row">
                                <div className="col-sm-6 form-group">
                                    <input className="form-control" id="name" name="name" placeholder="Name" type="text" required/>
                                </div>
                                <div className="col-sm-6 form-group">
                                    <input className="form-control" id="email" name="email" placeholder="Email" type="email" required/>
                                </div>
                            </div>
                            <textarea className="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea><br/>
                            <div className="row">
                                <div className="col-sm-12 form-group">
                                    <button className="btn btn-default pull-right" type="submit">Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )  
    }
}

export default HomePage;