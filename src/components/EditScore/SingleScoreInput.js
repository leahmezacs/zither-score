import React, { Component } from "react";
import AddIcon from '@material-ui/icons/Add';
import "../../stylesheets/style.css"
import { Auth, graphqlOperation, API } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import * as subscriptions from '../../graphql/subscriptions';
import Container from "@material-ui/core/Container";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import Button from "@material-ui/core/Button";
import { Dropdown } from "react-bootstrap";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import MinimizeIcon from '@material-ui/icons/Minimize';
import DragHandleIcon from '@material-ui/icons/DragHandle';

class SingleScoreInput extends Component {

  render() {
    return (
      <div>
        <div>
          <button
            key="0"
            className="button-style"
          >
            <AddIcon fontsize="small"/>
          </button>
          <button
            key="1"
            className="button-style"
          >
            <AddIcon fontsize="small"/>
          </button>
          <button
            key="2"
            className="button-style"
          >
            <AddIcon fontsize="small"/>
          </button>
          <button
            key="3"
            className="button-style"
          >
            <AddIcon fontsize="small"/>
          </button>
        </div>
        <div>
          <input
            key="0"
            className="singleNote"
            type="number"
            min="0"
            max="7"
            pos="0"
          />
          <input
            key="1"
            className="singleNote"
            type="number"
            min="0"
            max="7"
            pos="1"
          />
          <input
            key="2"
            className="singleNote"
            type="number"
            min="0"
            max="7"
            pos="2"
          />
          <input
            key="3"
            className="singleNote"
            type="number"
            min="0"
            max="7"
            pos="3"
          />
          <span className="lineInBetween">|</span>
          <div>
            <button
              key="0"
              className="button-style"
            >
              <AddIcon fontsize="small"/>
            </button>
            <button
              key="1"
              className="button-style"
            >
              <AddIcon fontsize="small"/>
            </button>
            <button
              key="2"
              className="button-style"
            >
              <AddIcon fontsize="small"/>
            </button>
            <button
              key="3"
              className="button-style"
            >
              <AddIcon fontsize="small"/>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleScoreInput;
