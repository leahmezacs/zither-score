import React, {Component} from 'react';
import { Carousel } from 'react-bootstrap';
import "./HomePage.css";

class HomePage extends Component{
    render () {
        return (
            <div id="myPage" data-spy="scroll" data-target=".navbar" data-offset="60">

                {/* <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>                        
                    </button>
                    <a className="navbar-brand" href="#myPage">Logo</a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#about">ABOUT</a></li>
                        <li><a href="#services">SERVICES</a></li>
                        <li><a href="#portfolio">PORTFOLIO</a></li>
                        <li><a href="#pricing">PRICING</a></li>
                        <li><a href="#contact">CONTACT</a></li>
                    </ul>
                    </div>
                </div>
                </nav> */}

                <div className="jumbotron text-center">
                    <h1>Company</h1> 
                    <p>We specialize in blablabla</p> 
                    <form>
                        <div className="input-group">
                        <input type="email" className="form-control" size="50" placeholder="Email Address" required />
                            <div className="input-group-btn">
                                <button type="button" className="btn btn-light">Subscribe</button>
                            </div>
                        </div>
                    </form>
                </div>

                <div id="about" className="container-fluid">
                    <div className="row">
                        <div className="col-sm-8">
                            <h2>About Company Page</h2><br/>
                            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4><br/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <br/><button className="btn btn-default btn-lg">Get in Touch</button>
                        </div>
                        <div className="col-sm-4">
                            <span className="glyphicon glyphicon-signal logo"></span>
                        </div>
                    </div>
                </div>

                <div className="container-fluid bg-grey">
                    <div className="row">
                        <div className="col-sm-4">
                            <span className="glyphicon glyphicon-globe logo slideanim"></span>
                        </div>
                        <div className="col-sm-8">
                            <h2>Our Values</h2><br/>
                            <h4><strong>MISSION:</strong> Our mission lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4><br/>
                            <p><strong>VISION:</strong> Our vision Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>

                <div id="services" className="container-fluid text-center">
                    <h2>SERVICES</h2>
                    <h4>What we offer</h4>
                    <br/>
                    <div className="row slideanim">
                        <div className="col-sm-3">
                            <span className="icon glyphicon-off logo-small"></span>
                            <h4>POWER</h4>
                            <p>Lorem ipsum dolor sit amet..</p>
                        </div>
                        <div className="col-sm-3">
                            <span className="icon glyphicon-heart logo-small"></span>
                            <h4>LOVE</h4>
                            <p>Lorem ipsum dolor sit amet..</p>
                        </div>
                        <div className="col-sm-3">
                            <span className="icon glyphicon-lock logo-small"></span>
                            <h4>JOB DONE</h4>
                            <p>Lorem ipsum dolor sit amet..</p>
                        </div>
                    </div>
                </div>

                <br/><br/>

                <div className="row slideanim">
                    <div className="col-sm-4">
                        <span className="glyphicon glyphicon-leaf logo-small"></span>
                        <h4>GREEN</h4>
                        <p>Lorem ipsum dolor sit amet..</p>
                    </div>
                    <div className="col-sm-4">
                        <span className="glyphicon glyphicon-certificate logo-small"></span>
                        <h4>CERTIFIED</h4>
                        <p>Lorem ipsum dolor sit amet..</p>
                    </div>
                    <div className="col-sm-4">
                        <span className="glyphicon glyphicon-wrench logo-small"></span>
                        <h4 className="h4">HARD WORK</h4>
                        <p>Lorem ipsum dolor sit amet..</p>
                    </div>
                </div>
                
                <br/>
                
                <h2 className="text-center">What our customers say</h2>
                <Carousel className="carousel slide text-center">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=First slide&bg=373940"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <span>Nulla vitae elit libero, a pharetra augue mollis interdum.</span>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=Second slide&bg=282c34"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=Third slide&bg=20232a"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <span>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</span>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                {/* <div id="myCarousel" className="carousel slide text-center" data-ride="carousel">
                    
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>

                    <div className="carousel-inner" role="listbox">
                        <div className="item active">
                            <h4>"This company is the best. I am so happy with the result!"<br/>
                            <span>Michael Roe, Vice President, Comment Box</span>
                            </h4>
                        </div>
                        <div className="item">
                            <h4>"One word... WOW!!"<br/><span>John Doe, Salesman, Rep Inc</span></h4>
                        </div>
                            <div className="item">
                                <h4>"Could I... BE any more happy with this company?"<br/>
                                <span>Chandler Bing, Actor, FriendsAlot</span></h4>
                            </div>
                        </div>

                        <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div> */}

                <div id="pricing" className="container-fluid">
                    <div className="text-center">
                        <h2>Pricing</h2>
                        <h4>Choose a payment plan that works for you</h4>
                    </div>
                    <div className="row slideanim">
                        <div className="col-sm-4 col-xs-12">
                            <div className="panel panel-default text-center">
                                <div className="panel-heading">
                                    <h1>Basic</h1>
                                </div>
                                <div className="panel-body">
                                    <p><strong>20</strong> Lorem</p>
                                    <p><strong>15</strong> Ipsum</p>
                                    <p><strong>5</strong> Dolor</p>
                                    <p><strong>2</strong> Sit</p>
                                    <p><strong>Endless</strong> Amet</p>
                                </div>
                                <div className="panel-footer">
                                    <h3>$19</h3>
                                    <h4>per month</h4>
                                    <button className="btn btn-lg">Sign Up</button>
                                </div>
                            </div>      
                        </div>     
                        <div className="col-sm-4 col-xs-12">
                            <div className="panel panel-default text-center">
                                <div className="panel-heading">
                                    <h1>Pro</h1>
                                </div>
                                <div className="panel-body">
                                    <p><strong>50</strong> Lorem</p>
                                    <p><strong>25</strong> Ipsum</p>
                                    <p><strong>10</strong> Dolor</p>
                                    <p><strong>5</strong> Sit</p>
                                    <p><strong>Endless</strong> Amet</p>
                                </div>
                                <div className="panel-footer">
                                    <h3>$29</h3>
                                    <h4>per month</h4>
                                    <button className="btn btn-lg">Sign Up</button>
                                </div>
                            </div>      
                        </div>       
                        <div className="col-sm-4 col-xs-12">
                            <div className="panel panel-default text-center">
                                <div className="panel-heading">
                                    <h1>Premium</h1>
                                </div>
                                <div className="panel-body">
                                    <p><strong>100</strong> Lorem</p>
                                    <p><strong>50</strong> Ipsum</p>
                                    <p><strong>25</strong> Dolor</p>
                                    <p><strong>10</strong> Sit</p>
                                    <p><strong>Endless</strong> Amet</p>
                                </div>
                                <div className="panel-footer">
                                    <h3>$49</h3>
                                    <h4>per month</h4>
                                    <button className="btn btn-lg">Sign Up</button>
                                </div>
                            </div>      
                        </div>    
                    </div>
                </div>

                <div id="contact" className="container-fluid bg-grey">
                    <h2 className="text-center">CONTACT</h2>
                    <div className="row">
                        <div className="col-sm-5">
                            <p>Contact us and we'll get back to you within 24 hours.</p>
                            <p><span className="glyphicon glyphicon-map-marker"></span> Chicago, US</p>
                            <p><span className="glyphicon glyphicon-phone"></span> +00 1515151515</p>
                            <p><span className="glyphicon glyphicon-envelope"></span> myemail@something.com</p>
                        </div>
                        <div className="col-sm-7 slideanim">
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

                {/* <img src="/w3images/map.jpg" className="w3-image w3-greyscale-min" style="width:100%"/> */}

                <footer className="container-fluid text-center">
                    <a href="#myPage" title="To Top">
                        <span className="glyphicon glyphicon-chevron-up"></span>
                    </a>
                    <p>Bootstrap Theme Made By <a href="https://www.w3schools.com" title="Visit w3schools">www.w3schools.com</a></p>
                </footer>
            </div>
        )  
    }
}

export default HomePage;