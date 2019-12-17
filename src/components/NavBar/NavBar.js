import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusicOutlined";
import "../../stylesheets/style.css";
import CreateModal from "../CreateModal/CreateModal";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      group: ""
    };
    this.handleShow = this.handleShow.bind(this);
  }

  handleShow = () => {
    this.setState(prevState => {
      return {
        modal: !prevState.modal
      };
    });
  };

  render() {
    if (this.props.loggedInUser && this.props.location.pathname === "/Login") {
      return <Redirect to="/" />;
    }
    console.log(this.props.loggedInUser);

    return (
      <div>
        <Navbar className="NavBarBackground" expand="lg">
          <Navbar.Brand href="/">
            <LibraryMusicIcon fontSize="large" className="text-light" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link
                className="text-light link font-weight-bold"
                href="/Discovery"
              >
                Discover
              </Nav.Link>
              <Nav.Link
                className="text-light link font-weight-bold"
                href="/HelpFAQ"
              >
                Help
              </Nav.Link>
            </Nav>

            {this.props.loggedInUser ? (
              this.props.loggedInUser.signInUserSession.accessToken.payload[
                "cognito:groups"
              ] == "User" ? (
                <>
                  <Nav className="ml-auto">
                    <Nav.Link
                      className="link font-weight-bold"
                      onClick={this.handleShow}
                    >
                      Create
                    </Nav.Link>
                  </Nav>

                  <NavDropdown
                    title={<AccountCircle fontSize="large" color="disabled" />}
                    id="basic-nav-dropdown"
                    className="float-right"
                  >
                    <NavDropdown.Item href="/Library">Library</NavDropdown.Item>
                    <NavDropdown.Item href="/Settings">
                      Settings
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/" onClick={this.props.onSignOut}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <>
                  <NavDropdown
                    title={<AccountCircle fontSize="large" color="disabled" />}
                    id="basic-nav-dropdown"
                    className="float-right"
                  >
                    <NavDropdown.Item href="/Dashboard">
                      Dashboard
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/" onClick={this.props.onSignOut}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              )
            ) : (
              <Nav.Link
                className="text-light link font-weight-bold"
                href="/Login"
              >
                Login
              </Nav.Link>
            )}
          </Navbar.Collapse>
        </Navbar>
        <CreateModal modal={this.state.modal} handleShow={this.handleShow} />
      </div>
    );
  }
}

export default withRouter(NavBar);
