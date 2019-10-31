import React, {Component} from 'react';
import NavBar from './NavBar.js';

class Settings extends Component{
    render () {
        return (
            <div>
                <NavBar />
                {/* change after backend setup */}
                
                <p>Username: </p>
                <p>password: </p> 
                <p>email: </p>
                
            </div>
        )  
    }
}

export default Settings;