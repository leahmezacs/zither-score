import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import { Auth } from 'aws-amplify';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render = { props =>
            console.log(Auth.currentUserInfo()) ? (
                <Component {...props} />
            ) : (
                <Redirect 
                    to = {{
                        pathname: "/Login",
                        state: { from: props.location }
                    }}
                />
            )
        }
    />
);

export default PrivateRoute;