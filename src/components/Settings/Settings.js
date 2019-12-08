import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
import { Button } from "react-bootstrap";
import './Settings.css';
import ChangePassword from "./ChangePassword";

class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };
    }

    async componentDidMount() {
        const info = await Auth.currentAuthenticatedUser();
        this.setState({ user: info });
    } 

    render () {
        console.log(this.state.user.attributes);
        return (
            <div className = "setting-container">
                <div className = "content">
                    <h4>Username</h4> 
                    <p>{this.state.user.username}</p><hr />
                    <h4>Password</h4> 
                    <p>*********</p><hr />
                    <h4>Email</h4>
                    <p>{this.state.user.attributes ? this.state.user.attributes.email : ''}</p><hr />
                    <Button variant="light" href="/Settings/ChangePassword">Change Password</Button>
                </div>
            </div>
        )  
    }
}

export default Settings;