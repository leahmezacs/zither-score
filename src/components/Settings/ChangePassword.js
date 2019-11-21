import React, { Component } from "react";
import { Auth } from "aws-amplify";
import { FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { Button } from "react-bootstrap";
import LoaderButton from "./LoaderButton";
import './Settings.css';

class ChangePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newPassword: "",
            oldPassword: "",
            isChanging: false,
            confirmPassword: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeClick = this.handleChangeClick.bind(this);
        this.validateForm = this.validateForm.bind(this);
    }

    validateForm() {
        return (
            this.state.oldPassword.length > 0 &&
            this.state.newPassword.length > 0 &&
            this.state.newPassword === this.state.confirmPassword
        );
    }

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    async handleChangeClick(e) {
        e.preventDefault();
        this.setState({
            isChanging: true
        });

        try {
            const currentUser = await Auth.currentAuthenticatedUser();
            await Auth.changePassword(
                currentUser,
                this.state.oldPassword,
                this.state.newPassword
            );
            this.props.history.push("/Settings");
        }
        catch(e) {
            alert(e.message);
            this.setState({
                isChanging: false
            });
        }
    }

    render() {
        return (
          <div className="ChangePassword">
            <form onSubmit={this.handleChangeClick}>
              <FormGroup bsSize="large" controlId="oldPassword">
                <FormLabel>Old Password</FormLabel>
                <FormControl
                  type="password"
                  onChange={this.handleChange}
                  value={this.state.oldPassword}
                />
              </FormGroup>
              <hr />
              <FormGroup bsSize="large" controlId="newPassword">
                <FormLabel>New Password</FormLabel>
                <FormControl
                  type="password"
                  value={this.state.newPassword}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup bsSize="large" controlId="confirmPassword">
                <FormLabel>Confirm Password</FormLabel>
                <FormControl
                  type="password"
                  onChange={this.handleChange}
                  value={this.state.confirmPassword}
                />
              </FormGroup>
              <LoaderButton
                block
                type="submit"
                bsSize="large"
                text="Change Password"
                loadingText="Changing…"
                disabled={!this.validateForm()}
                isLoading={this.state.isChanging}
              />
            </form>
          </div>
        );
      
    }
}

export default ChangePassword;