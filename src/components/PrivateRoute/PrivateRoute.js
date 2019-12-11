import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import { Auth } from 'aws-amplify';

const PrivateRoute = ({ component: Component, ...rest }) => (
    console.log(localStorage.getItem('auth')),
    <Route
        {...rest}
        render = { props =>
            localStorage.getItem('auth') ? (
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