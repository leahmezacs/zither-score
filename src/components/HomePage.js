import React, {Component} from 'react';
import NavBar from './NavBar.js';

class HomePage extends Component{
    render () {
        return (
            <div>
                <NavBar />
                <div className="text-center">
                <h1>Home Page</h1>
                <p>Will be modify later</p>
                </div>    
            </div>
        )  
    }
}

export default HomePage;