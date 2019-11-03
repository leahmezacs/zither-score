import React, { Component } from 'react';
import NavBar from './NavBar';
import { Auth } from 'aws-amplify';

class Library extends Component {
    render () {
        return (
            <div>
                    <NavBar id="nav-bar" className="fixed-top"></NavBar>
                    
                    <div id="left-bar">
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
        )
    }
}

export default Library;