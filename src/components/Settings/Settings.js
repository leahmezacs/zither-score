import React, { Component } from 'react';
import { Auth } from 'aws-amplify';

class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: { }
        };
    }
   
    async componentDidMount() {
        const userInfo = await Auth.currentUserInfo()
        this.setState({ userInfo });
    }

    render () {
        const { userInfo }= this.state;
        const { username } = userInfo;
        
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