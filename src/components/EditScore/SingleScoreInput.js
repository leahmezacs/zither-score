import React, { Component } from "react";
import "../../stylesheets/style.css"
import { Auth, graphqlOperation, API } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import * as subscriptions from '../../graphql/subscriptions';

class SingleScoreInput extends Component {

  render() {
    return (
      <div>
        <input
          key="0"
          className="singleNote"
          type="number"
          min="0"
          max="7"
        />
        <input
          key="1"
          className="singleNote"
          type="number"
          min="0"
          max="7"
        />
        <input
          key="2"
          className="singleNote"
          type="number"
          min="0"
          max="7"
        />
        <input
          key="3"
          className="singleNote"
          type="number"
          min="0"
          max="7"
        />
        <span className="lineInBetween">|</span>
      </div>
    );
  }
}

export default SingleScoreInput;
