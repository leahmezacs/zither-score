import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import { Auth } from 'aws-amplify';

export const PrivateROute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render = { props =>
            await Auth.currentAuthenticatedUser() ? (
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