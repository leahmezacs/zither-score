import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
import { Authenticator } from 'aws-amplify-react';
import awsmobile from '../../aws-exports';

const authErrorMessageMapper = (message) => {
    if (/incorrect.*username.*password/i.test(message)) {
        return 'Incorrect username or password';
    }
    console.log("ERROR: " + message);
    return message;
}

class Login extends Component {
    render() {
        return (
            <div>
                <div>
                    <Authenticator
                        onStateChange={this.handleAuthStateChange}  
                        amplifyConfig={awsmobile}
                        errorMessage={authErrorMessageMapper}
                    />
                </div>
            </div>
        )
    }
    handleAuthStateChange = async (state) => {
        if (state === 'signedIn') {
            const cognitoUser = await Auth.currentAuthenticatedUser();
            this.props.onLogin(cognitoUser);
        }
    }
    
}
export default Login;