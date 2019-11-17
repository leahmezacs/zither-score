import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusicOutlined";
import "../../stylesheets/style.css";
import PopUpWindow from "../PopUpWindow/PopUpWindow";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import { Auth, graphqlOperation, API } from 'aws-amplify';
import * as mutations from '../../graphql/mutations';

class NavBar extends Component {
  state = {
    showPopOut: false,
    name: ""
  };

  handlePopOut = () => {
    this.setState(prevState => {
      return {
        showPopOut: !prevState.showPopOut
      };
    });
  };

  handleName = (e) => {
    this.setState({
      name: e.target.value
    });
  };

  async handleCreateScore() {
    const user = await Auth.currentAuthenticatedUser();
    const userId = user.username;
    const score = await API.graphql(graphqlOperation(mutations.createScore, {
      input: {
        id: this.state.name,
        name: this.state.name,
        status: "PRIVATE",
        createdDate: Date.now(),
        updatedDate: Date.now(),
        userId: userId
      }
    }));
  }
  

  render() {
    if (this.props.loggedInUser && this.props.location.pathname === "/Login") {
      return <Redirect to="/" />;
    }

    console.log(this.state.name);
    return (
      <div>
        <Navbar className="NavBarBackground" expand="lg">
          <Navbar.Brand href="/">
            <LibraryMusicIcon fontSize="default" className="text-light"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link className="text-light font-weight-bold" href="#">Discover</Nav.Link>
            </Nav>

            <Form inline className="mr-auto">
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-1"
              />
              <button className="btn btn-sm btn-light"><SearchIcon /></button>
            </Form>

            {this.props.loggedInUser ? (
              <>
                <Nav className="ml-auto">
                  <Nav.Link onClick={this.handlePopOut}>Create</Nav.Link>
                  <Nav.Link href="#">Notification</Nav.Link>
                </Nav>

                <NavDropdown title={<AccountCircle />} id="basic-nav-dropdown">
                  <NavDropdown.Item href="#">Profile</NavDropdown.Item>
                  <NavDropdown.Item href="/Library">Library</NavDropdown.Item>
                  <NavDropdown.Item href="/Settings">Settings</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#">Help</NavDropdown.Item>
                  <NavDropdown.Item href="/" onClick={this.props.onSignOut}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <Nav.Link className="text-light font-weight-bold" href="/Login">Login</Nav.Link>
            )}
          </Navbar.Collapse>
        </Navbar>
        <PopUpWindow
          showPopOut = {this.state.showPopOut}
          handlePopOut = {this.handlePopOut}
          name = {this.state.name}
          handleName = {this.handleName}
        />
      </div>
    );
  }
}

export default withRouter(NavBar);
