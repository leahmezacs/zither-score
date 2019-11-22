import React, { Component } from "react";
import "../../stylesheets/style.css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import AddIcon from "@material-ui/icons/Add";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Dot from "@material-ui/icons/FiberManualRecord";
import Line from "@material-ui/icons/Remove";
import DoubleLine from "@material-ui/icons/DragHandle";
import { Dropdown } from "react-bootstrap";
import { Auth, graphqlOperation, API } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import * as subscriptions from '../../graphql/subscriptions';

// Four inputs in one componenet
class SingleScoreInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
    console.log(this.props.score);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const updatedData = { ...this.state.data };
    let { value, min, max } = e.target;
    value = Math.max(Number(min), Math.min(Number(max), Number(value)));
    updatedData[e.target.name] = value;
    
    this.setState({
      data: updatedData
    });
    console.log(this.state.data);
  };

  async handleCreateNote() {
    try {

    }
    catch(e) {
      alert(e.message);
    }
  }
    
  

  //console.log(props.nodeLength);
  render() {
    return this.props.lineLength.map(row => (
      <Container className="lineSpacing" key={row} maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={2}>
              <span className="lineBegin">|</span>
              <Grid item>
                {this.props.nodeLength.map(column => (
                  <span key={column}>
                    <span className="row">
                      <span className="dropdown col-xs-12">
                        <Dropdown key="0">
                          <Dropdown.Toggle className="btn btn-sm btn-light">
                            <AddIcon fontSize="small" color="action" />
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item>
                              <Dot fontSize="small" />
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <Line fontSize="small" />
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <DoubleLine fontSize="small" />
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </span>
                      <span className="dropdown col-xs-12">
                        <Dropdown key="1">
                          <Dropdown.Toggle className="btn btn-sm btn-light">
                            <AddIcon fontSize="small" color="action" />
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item>
                              <Dot fontSize="small" />
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <Line fontSize="small" />
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <DoubleLine fontSize="small" />
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </span>
                      <span className="dropdown col-xs-12">
                        <Dropdown key="2">
                          <Dropdown.Toggle className="btn btn-sm btn-light">
                            <AddIcon fontSize="small" color="action" />
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item>
                              <Dot fontSize="small" />
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <Line fontSize="small" />
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <DoubleLine fontSize="small" />
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </span>
                      <span className="dropdown col-xs-12">
                        <Dropdown key="3">
                          <Dropdown.Toggle className="btn btn-sm btn-light">
                            <AddIcon fontSize="small" color="action" />
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item>
                              <Dot fontSize="small" />
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <Line fontSize="small" />
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <DoubleLine fontSize="small" />
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </span>
                    </span>
                    <span key={column}>
                      <input
                        key="0"
                        name={[row, column, 0]}
                        className="singleNote"
                        type="number"
                        min="0"
                        max="7"
                        onChange={this.handleChange}
                      />
                      <input
                        key="1"
                        name={[row, column, 1]}
                        className="singleNote"
                        type="number"
                        min="1"
                        max="7"
                        onChange={this.handleChange}
                      />
                      <input
                        key="2"
                        name={[row, column, 2]}
                        className="singleNote"
                        type="number"
                        min="1"
                        max="7"
                        onChange={this.handleChange}
                      />
                      <input
                        key="3"
                        name={[row, column, 3]}
                        className="singleNote"
                        type="number"
                        min="1"
                        max="7"
                        onChange={this.handleChange}
                      />
                      <span className="lineInBetween">|</span>
                    </span>
                  </span>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    ));
  }
};

export default SingleScoreInput;