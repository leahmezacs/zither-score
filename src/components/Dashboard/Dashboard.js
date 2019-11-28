import React, { Component } from 'react';
import { Dropdown, FormControl } from "react-bootstrap";
import { Auth, graphqlOperation, API } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import * as subscriptions from '../../graphql/subscriptions';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
        }
        
    }
    
    render() {
        return (
            <div>
                <p>
                    Dashboard
                </p>
            </div>
        )
    }
}

export default Dashboard;