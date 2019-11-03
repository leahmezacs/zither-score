import React, { Component } from 'react';
import NavBar from './NavBar';
import { Auth } from 'aws-amplify';

class Library extends Component {
    render () {
        return (
            <div>
                    <div id="nav-bar">
                        <NavBar></NavBar>
                    </div>
            </div>
        )
    }
}

export default Library;