import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
import { Button } from "react-bootstrap";
import './Settings.css'

class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {}
        };
    }

    render () {
        console.log(this.state.userInfo.attributes);
        return (
            <div className = "container">
                <div className = "content">
                    <h4>Username</h4> 
                    <p>{this.state.userInfo.username}</p><hr />
                    <h4>Password</h4> 
                    <p>*********</p><hr />
                    <h4>Email</h4>
                    <p>{this.state.userInfo.attributes ? this.state.userInfo.attributes.email : ''}</p><hr />
                </div>
            </div>
        )  
    }
    async componentDidMount() {
        const info = await Auth.currentAuthenticatedUser();
        this.setState({ userInfo: info });
    } 
}

export default Settings;