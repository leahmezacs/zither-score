import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Auth, graphqlOperation, API } from 'aws-amplify';
import * as mutations from '../../graphql/mutations';
import "./HomePage.css";

class HomePage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            comment: "",
            message: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCreateFeedback = this.handleCreateFeedback.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.handleCreateFeedback();
        this.setState({
            name: "",
            email: "",
            comment: "",
            message: "Thank you for your feedback. We will get back to you as \
            soon as possible."
        });
    }

    async handleCreateFeedback() {
        const feedbackCreated = await API.graphql(graphqlOperation(mutations.createFeedback, {
            input: {
                name: this.state.name,
                email: this.state.email,
                comment: this.state.comment,
                status: "Unresolved"
            }
        }));
        console.log(feedbackCreated);
    }

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
                        
                        <form className="col-sm-7" onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="col-sm-6 form-group">
                                    <input 
                                        className="form-control" 
                                        name="name" 
                                        placeholder="Name"
                                        maxlength="32"
                                        pattern="[A-Za-z]{1,32}" 
                                        type="text" 
                                        value={this.state.name}
                                        onChange={this.handleChange}
                                        required
                                    />
                                </div>
                                <div className="col-sm-6 form-group">
                                    <input 
                                        className="form-control" 
                                        name="email" 
                                        placeholder="Email" 
                                        type="email" 
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <textarea 
                                className="form-control" 
                                name="comment" 
                                placeholder="Comment" 
                                rows="5" 
                                value={this.state.comment}
                                onChange={this.handleChange}
                                required 
                            />
                            <br/>
                            <div className="row">
                                <div className="col-sm-12 form-group">
                                    <input
                                        className="btn btn-default pull-right" 
                                        type="submit" 
                                        value="Submit"
                                    />
                                    <div className="homepage-result">{this.state.message}</div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )  
    }
}

export default HomePage;