import React, { Component } from 'react';
import { Auth } from 'aws-amplify';

class Settings extends Component {
    state = {
        info: {}
    }
   
    async componentDidMount() {
        const info = await Auth.currentUserInfo();
        this.setState({ info });
    }

    render () {
        const { info } = this.state
        const { username } = info
        return (
            <div>
                <p>Username: {username}</p>
                <p>password: </p> 
                <p>email: </p>
                
            </div>
        )  
    }
}

export default Settings;