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
      number: null,
      row: null,
      column: null,
      index: null
    };
    console.log(this.props.score);
    this.handleChange = this.handleChange.bind(this);
    this.handleCreateNote = this.handleCreateNote.bind(this);
    this.handleUpdateNote = this.handleUpdateNote.bind(this);
  }

  async componentDidMount() {
    const result = await API.graphql(graphqlOperation(queries.getNote, {
      row: this.state.row,
      column: this.state.column,
      index: this.state.index
    }));  
    if(result) {
      this.handleUpdateNote();
    }
    else {
      this.handleCreateNote();
    }
    console.log(this.state.row);
  }

  async handleChange(e) {
    try {
      let { value, min, max } = e.target;
      value = Math.max(Number(min), Math.min(Number(max), Number(value)));
      
      this.setState({
        number: value,
        row: e.target.getAttribute('row'),
        column: e.target.getAttribute('column'),
        index: e.target.getAttribute('index')
      });
      
    }
    catch(e) {
      alert(e.message);
    }
  };

  async handleCreateNote() {
    try {
      const scoreId = this.props.score.id;
      const noteCreated = await API.graphql(graphqlOperation(mutations.createNote, {
          input: {
              number: this.state.number,
              row: this.state.row,
              column: this.state.column,
              index: this.state.index,
              noteScoreId: scoreId
          }
      }));
      console.log(noteCreated);
    }
    catch(e) {
      alert(e.message);
    }
  }

  async handleUpdateNote() {
    try {
      const scoreId = this.props.score.id;
      const noteUpdated = await API.graphql(graphqlOperation(mutations.updateNote, {
          input: {
              number: this.state.number,
              row: this.state.row,
              column: this.state.column,
              index: this.state.index,
              noteScoreId: scoreId
          }
      }));
      console.log(noteUpdated);
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
                        row={row}
                        column={column}
                        index="0"
                        className="singleNote"
                        type="number"
                        min="0"
                        max="7"
                        onChange={this.handleChange}
                      />
                      <input
                        key="1"
                        row={row}
                        column={column}
                        index="1"
                        className="singleNote"
                        type="number"
                        min="1"
                        max="7"
                        onChange={this.handleChange}
                      />
                      <input
                        key="2"
                        row={row}
                        column={column}
                        index="2"
                        className="singleNote"
                        type="number"
                        min="1"
                        max="7"
                        onChange={this.handleChange}
                      />
                      <input
                        key="3"
                        row={row}
                        column={column}
                        index="3"
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