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
                        <div className="divstyle2 w-100"> 
                            <img className="imagestyle2" src="https://i.imgur.com/5JETsNz.png" title="source: imgur.com" thumbnail />
                        </div>
                        <Carousel.Caption className="carouselstyle"> 
                            <h3><span className="spanstyle2">The first step is to click <b className="bstyle2">Create tab.&nbsp;</b></span></h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="divstyle2 w-100">
                            <img className="imagestyle2" src="https://i.imgur.com/xjRGk44.png" title="source: imgur.com" />
                        </div>
                        <Carousel.Caption className="carouselstyle">
                            <h3><span className="spanstyle2">Enter your Score&nbsp;<b className="bstyle2">Name:</b></span></h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="divstyle2 w-100">
                            <img className="imagestyle2" src="https://i.imgur.com/Z7xQ3j5.png" title="source: imgur.com" />
                        </div>
                        <Carousel.Caption className="carouselstyle">
                            <h3><span className="spanstyle2">Select <b className="bstyle2">Privacy type.</b></span></h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="divstyle2 w-100">
                            <img className="imagestyle2" src="https://i.imgur.com/L86Uyab.png" title="source: imgur.com" />
                        </div>
                        <Carousel.Caption className="carouselstyle">
                            <h3><span className="spanstyle2">Select <b className="bstyle2">Category type.</b></span></h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="divstyle2 w-100">
                            <img className="imagestyle2" src="https://i.imgur.com/ZkUXOrB.png" title="source: imgur.com" />
                        </div>
                        <Carousel.Caption className="carouselstyle">
                            <h3><span className="spanstyle2">Click <b className="bstyle2">Submit.</b></span></h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="divstyle2 w-100">
                            <img className="imagestyle2" src="https://i.imgur.com/bnctBjn.png" title="source: imgur.com" />
                        </div>
                        <Carousel.Caption className="carouselstyle">
                            <h3><span className="spanstyle2">On edit page, click <b className="bstyle2">plus sign&nbsp;</b>to reveal a new line.<b class="bstyle2"></b></span></h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="divstyle2 w-100">
                            <img className="imagestyle2" src="https://i.imgur.com/hGKtL6Z.png" title="source: imgur.com" />
                        </div>
                        <Carousel.Caption className="carouselstyle">
                            <h3><span className="spanstyle2">Select any input box to enter any digit 0-7.</span></h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            
        )  
    }
}

export default withRouter(Tutorials);