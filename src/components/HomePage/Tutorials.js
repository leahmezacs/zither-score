import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import { withRouter } from "react-router-dom";

class Tutorials extends Component{
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=First slide&bg=373940"
                    alt="First slide"
                    />
                        
                    <p class="pstyle1">
                        <i class="istyle1">8 STEPS</i>
                    </p> <br/>
    
                    <div class="divstyle1">
                        <p class="pstyle2">
                            <b class="bstyle1">
                                <span class="spanstyle1">1</span>
                            </b>
                                <span class="spanstyle2">The first step is to click <b style="font-weight: bold; color: #FF00D6;">Create tab.&nbsp;</b></span>
                        </p>
      <p style="text-align: center; padding-bottom: 42px; padding-top: 20px;">
        <img src="https://www.iorad.com/api/tutorial/stepScreenshot?tutorial_id=1618264&step_number=1&width=800&height=600&mobile_width=450&mobile_height=400" style="padding: 4px; border: none;" alt="Step 1 image" />
      </p>
    
      <p class="pstyle2">
        <b class="bstyle1">
        <span class="spanstyle1">2</span>
        </b>
        <span class="spanstyle2">Enter your Score&nbsp;<b style="font-weight: bold; color: #FF00D6;">Name:</b></span>
      </p>
      <p style="text-align: center; padding-bottom: 42px; padding-top: 20px;">
        <img src="https://www.iorad.com/api/tutorial/stepScreenshot?tutorial_id=1618264&step_number=2&width=800&height=600&mobile_width=450&mobile_height=400" style="padding: 4px; border: none;" alt="Step 2 image" />
      </p>
    
      <p class="pstyle2">
      <b class="bstyle1">
      <span class="spanstyle1">3</span>
        </b>
        <span class="spanstyle2">Select <b style="font-weight: bold; color: #FF00D6;">Privacy type.</b></span>
      </p>
      <p style="text-align: center; padding-bottom: 42px; padding-top: 20px;">
        <img src="https://www.iorad.com/api/tutorial/stepScreenshot?tutorial_id=1618264&step_number=3&width=800&height=600&mobile_width=450&mobile_height=400" style="padding: 4px; border: none;" alt="Step 3 image" />
      </p>
    
      <p class="pstyle2">
      <b class="bstyle1">
      <span class="spanstyle1">4</span>
        </b>
        <span class="spanstyle2">Select <b style="font-weight: bold; color: #FF00D6;">Category type.</b></span>
      </p>
      <p style="text-align: center; padding-bottom: 42px; padding-top: 20px;">
        <img src="https://www.iorad.com/api/tutorial/stepScreenshot?tutorial_id=1618264&step_number=4&width=800&height=600&mobile_width=450&mobile_height=400" style="padding: 4px; border: none;" alt="Step 4 image" />
      </p>
    
      <p class="pstyle2">
      <b class="bstyle1">
      <span class="spanstyle1">5</span>
        </b>
        <span class="spanstyle2">Click <b style="font-weight: bold; color: #FF00D6;">Submit.</b></span>
      </p>
      <p style="text-align: center; padding-bottom: 42px; padding-top: 20px;">
        <img src="https://www.iorad.com/api/tutorial/stepScreenshot?tutorial_id=1618264&step_number=5&width=800&height=600&mobile_width=450&mobile_height=400" style="padding: 4px; border: none;" alt="Step 5 image" />
      </p>
    
      <p class="pstyle2">
      <b class="bstyle1">
      <span class="spanstyle1">6</span>
        </b>
        <span class="spanstyle2">On edit page, click <b style="font-weight: bold; color: #FF00D6;">plus sign&nbsp;</b>to reveal a new line.<b style="font-weight: bold; color: #FF00D6;"></b></span>
      </p>
      <p style="text-align: center; padding-bottom: 42px; padding-top: 20px;">
        <img src="https://www.iorad.com/api/tutorial/stepScreenshot?tutorial_id=1618264&step_number=6&width=800&height=600&mobile_width=450&mobile_height=400" style="padding: 4px; border: none;" alt="Step 6 image" />
      </p>
    
      <p class="pstyle2">
      <b class="bstyle1">
      <span class="spanstyle1">7</span>
        </b>
        <span class="spanstyle2">Select any input box to enter any digit 0-7.</span>
      </p>
      <p style="text-align: center; padding-bottom: 42px; padding-top: 20px;">
        <img src="https://www.iorad.com/api/tutorial/stepScreenshot?tutorial_id=1618264&step_number=7&width=800&height=600&mobile_width=450&mobile_height=400" style="padding: 4px; border: none;" alt="Step 7 image" />
      </p>
    
      <p class="pstyle2">
      <b class="bstyle1">
      <span class="spanstyle1">8</span>
        </b>
        <span class="spanstyle2"></span>
      </p>
      <p style="text-align: center; padding-bottom: 42px; padding-top: 20px;">
        <img src="https://www.iorad.com/api/tutorial/stepScreenshot?tutorial_id=1618264&step_number=8&width=800&height=600&mobile_width=450&mobile_height=400" style="padding: 4px; border: none;" alt="Step 8 image" />
      </p>
    </div>
    
    <h3 style="display: none;font-size: 18px; padding-bottom: 20px; color: #000000">
      Here's an interactive tutorial for the visual learners
    </h3>
    <p style="display: none;">
      <a href="https://www.iorad.com/player/1618264/How-to-create-a-new-score">https://www.iorad.com/player/1618264/How-to-create-a-new-score</a>
    </p>
    <p style="border: 0; min-width: 100%; margin-bottom: 0; height: 501px;">
    <iframe src="https://www.iorad.com/player/1618264/How-to-create-a-new-score?src=iframe&oembed=1"
            width="100%" height="500px"
            style="width: 100%; height: 500px; "
            frameborder="0" webkitallowfullscreen="webkitallowfullscreen"
            mozallowfullscreen="mozallowfullscreen" allowfullscreen="allowfullscreen"></iframe></p>
  
    
    
  
  
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )  
    }
}

export default withRouter(Tutorials);