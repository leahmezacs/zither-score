import React, { Component } from 'react';
import { Auth } from 'aws-amplify';

class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {}
        };
    }
   
    async componentDidMount() {
        const info = await Auth.currentAuthenticatedUser();
        this.setState({ userInfo: info });
    } 

    render () {
        console.log(this.state.userInfo.attributes);
        // console.log(this.state.userInfo.attributes.email);
        return (
            <div className = "container">
                <p>Username: {this.state.userInfo.username}</p>
                <p>password: </p> 
                <p>email: {this.state.userInfo.attributes.email}</p>
            </div>
        )  
    }
}

export default Settings;