import React, { Component } from 'react';
import NavBar from './NavBar';
import { Auth } from 'aws-amplify';

class Library extends Component {
    render () {
        return (
            <div>
                    <NavBar id="nav-bar" className="fixed-top"></NavBar>
                    
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
                        </div>
                    </div>

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
            </div>
        )
    }
}

export default Library;