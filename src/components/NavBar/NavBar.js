import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  InputBase,
  Menu,
  MenuItem,
  IconButton
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import CssBaseline from "@material-ui/core/CssBaseline";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";


class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null,
      open: "",
    };

    this.setState({
      open: Boolean(this.state.anchorEl)
    });

    this.handleMenu = this.handleMenu.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleMenu = event => {
    this.setState({
      anchorEl: event.currentTarget,
      open: Boolean(this.state.anchorEl)
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null
    });
  };

  render() {
    console.log(this.props.location);
    if (this.props.loggedInUser && this.props.location.pathname === "/Login") {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <CssBaseline />
        <AppBar position="static">
          <Toolbar>
            <LibraryMusicIcon />
            {/* <ForumRoundedIcon edge="start" aria-label="UniFree-forum" /> */}
            <Typography variant="h6">zitherScore</Typography>
            <Typography variant="h6">Discover</Typography>
            <div>
              <div>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            {this.props.loggedInUser ? (
              <>
                <Typography variant="h6" component={Link} to="./EditScore">
                  Create
                </Typography>
                <Typography variant="h6">Notification</Typography>

                <div>
                  <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={this.handleMenu}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right"
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right"
                    }}
                    open={this.state.open}
                    onClose={this.handleClose}
                  >
                    <MenuItem component={Link} to="#">
                      Profile
                    </MenuItem>
                    <MenuItem component={Link} to="/Library">
                      Library
                    </MenuItem>
                    <MenuItem component={Link} to="/Settings">
                      Setting
                    </MenuItem>
                    <MenuItem component={Link} to="#">
                      Help
                    </MenuItem>
                    <MenuItem
                      component={Link}
                      to="/"
                      onClick={this.props.onSignOut}
                    >
                      Logout
                    </MenuItem>
                  </Menu>
                </div>
              </>
            ) : (
              <>
                <Button
                  data-testid="login-button"
                  variant="contained"
                  component={Link}
                  to="/Login"
                >
                  Login
                </Button>
              </>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withRouter(NavBar);
