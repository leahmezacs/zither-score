import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import { withRouter } from "react-router-dom";

class Tutorials extends Component{
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div> 
                <h2>Get Started</h2>
                <Carousel>
                    <Carousel.Item>
                        <Carousel.Caption> 
                            <h3><span className="spanstyle2">The first step is to click <b className="bstyle2">Create tab.&nbsp;</b></span></h3>
                        </Carousel.Caption>
                        <div className="divstyle2 w-100"> 
                            <img className="imagestyle2" src="https://i.imgur.com/5JETsNz.png" title="source: imgur.com" thumbnail />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                            <h3><span className="spanstyle2">Enter your Score&nbsp;<b className="bstyle2">Name:</b></span></h3>
                        </Carousel.Caption>
                        <div className="divstyle2 w-100">
                            <img className="imagestyle2" src="https://i.imgur.com/xjRGk44.png" title="source: imgur.com" />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                            <h3><span className="spanstyle2">Select <b className="bstyle2">Privacy type.</b></span></h3>
                        </Carousel.Caption>
                        <div className="divstyle2 w-100">
                            <img className="imagestyle2" src="https://i.imgur.com/Z7xQ3j5.png" title="source: imgur.com" />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                       
                        <div className="divstyle2 w-100">
                            <img className="imagestyle2" src="https://i.imgur.com/L86Uyab.png" title="source: imgur.com" />
                        </div>
                        <Carousel.Caption className="carouselstyle">
                            <h3><span className="spanstyle2">Select <b className="bstyle2">Category type.</b></span></h3>
                        </Carousel.Caption>
                    </Carousel.Item>
             
                </Carousel>


{/*        
                            <p className="pstyle1">
                    <i className="istyle1">8 STEPS</i>
                </p>
                <br/>

                <div className="divstyle1">
                    <p className="pstyle2">
                        <b className="bstyle1">
                            <span className="spanstyle1">1</span>
                        </b>
                            <span className="spanstyle2">The first step is to click <b className="bstyle2">Create tab.&nbsp;</b></span>
                    </p>
                    <p className="pstyle3">
                        <img src="https://www.iorad.com/api/tutorial/stepScreenshot?tutorial_id=1618264&step_number=1&width=800&height=600&mobile_width=450&mobile_height=400" className="imagestyle" alt="Step 1 image" />
                    </p>
                        <p className="pstyle2">
                            <b className="bstyle1">
                            <span className="spanstyle1">2</span>
                        </b>
                            <span className="spanstyle2">Enter your Score&nbsp;<b className="bstyle2">Name:</b></span>
                    </p>
                    <p className="pstyle3">
                        <img src="https://www.iorad.com/api/tutorial/stepScreenshot?tutorial_id=1618264&step_number=2&width=800&height=600&mobile_width=450&mobile_height=400" className="imagestyle" alt="Step 2 image" />
                    </p>
                    <p className="pstyle2">
                        <b className="bstyle1">
                            <span className="spanstyle1">3</span>
                        </b>
                            <span className="spanstyle2">Select <b className="bstyle2">Privacy type.</b></span>
                    </p>
                    <p className="pstyle3">
                        <img src="https://www.iorad.com/api/tutorial/stepScreenshot?tutorial_id=1618264&step_number=3&width=800&height=600&mobile_width=450&mobile_height=400" className="imagestyle" alt="Step 3 image" />
                    </p>                
                    <p className="pstyle2">
                        <b className="bstyle1">
                            <span className="spanstyle1">4</span>
                        </b>
                            <span className="spanstyle2">Select <b className="bstyle2">Category type.</b></span>
                    </p>
                    <p className="pstyle3">
                        <img src="https://www.iorad.com/api/tutorial/stepScreenshot?tutorial_id=1618264&step_number=4&width=800&height=600&mobile_width=450&mobile_height=400" className="imagestyle" alt="Step 4 image" />
                    </p>
                    <p className="pstyle2">
                        <b className="bstyle1">
                            <span className="spanstyle1">5</span>
                        </b>
                            <span className="spanstyle2">Click <b className="bstyle2">Submit.</b></span>
                    </p>
                    <p className="pstyle3">
                        <img src="https://www.iorad.com/api/tutorial/stepScreenshot?tutorial_id=1618264&step_number=5&width=800&height=600&mobile_width=450&mobile_height=400" className="imagestyle" alt="Step 5 image" />
                    </p>
                    <p className="pstyle2">
                        <b className="bstyle1">
                            <span className="spanstyle1">6</span>
                        </b>
                            <span className="spanstyle2">On edit page, click <b className="bstyle2">plus sign&nbsp;</b>to reveal a new line.<b class="bstyle2"></b></span>
                    </p>
                    <p className="pstyle3">
                        <img src="https://www.iorad.com/api/tutorial/stepScreenshot?tutorial_id=1618264&step_number=6&width=800&height=600&mobile_width=450&mobile_height=400" className="imagestyle" alt="Step 6 image" />
                    </p> 
                    <p className="pstyle2">
                        <b className="bstyle1">
                            <span className="spanstyle1">7</span>
                        </b>
                            <span className="spanstyle2">Select any input box to enter any digit 0-7.</span>
                    </p>
                    <p className="pstyle3">
                        <img src="https://www.iorad.com/api/tutorial/stepScreenshot?tutorial_id=1618264&step_number=7&width=800&height=600&mobile_width=450&mobile_height=400" className="imagestyle" alt="Step 7 image" />
                    </p>
                    <p className="pstyle2">
                        <b className="bstyle1">
                            <span className="spanstyle1">8</span>
                        </b>
                            <span className="spanstyle2"></span>
                    </p>
                    <p className="pstyle3">
                        <img src="https://www.iorad.com/api/tutorial/stepScreenshot?tutorial_id=1618264&step_number=8&width=800&height=600&mobile_width=450&mobile_height=400" className="imagestyle" alt="Step 8 image" />
                    </p>
                </div>
                    
                <h3 className="h3style1">Here's an interactive tutorial for the visual learners</h3>
                <p className="pstyle4">
                    <a href="https://www.iorad.com/player/1618264/How-to-create-a-new-score">https://www.iorad.com/player/1618264/How-to-create-a-new-score</a>
                </p>
                <p className="pstyle5">
                    <iframe src="https://www.iorad.com/player/1618264/How-to-create-a-new-score?src=iframe&oembed=1"
                            className="iframestyle"
                            frameborder="0" webkitallowfullscreen="webkitallowfullscreen"
                            mozallowfullscreen="mozallowfullscreen" allowfullscreen="allowfullscreen">
                    </iframe>
                </p>

*/}
            </div>
            
        )  
    }
}

export default withRouter(Tutorials);