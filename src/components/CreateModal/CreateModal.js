import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button, Modal} from 'react-bootstrap';
import { Auth, graphqlOperation, API } from 'aws-amplify';
import * as mutations from '../../graphql/mutations';
import * as subscriptions from '../../graphql/subscriptions';

class CreateModal extends Component {
    constructor(props) {
      super(props);

      this.state = {
        score_id: "",
        name: "",
        status: "PRIVATE"
      };

      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleStatusChange = this.handleStatusChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleCreateScore = this.handleCreateScore.bind(this);
    }

    handleNameChange(event) {
      this.setState({
        name: event.target.value
      });
    }

    handleStatusChange(event) {
      this.setState({
        status: event.target.value
      });
    }

    handleSubmit(event) {
      this.handleCreateScore().then(result => this.setState({
        score: result
      }))
      event.preventDefault();
      this.props.handleShow();
      this.handleCreateScore().then(result => {
        this.props.history.push({
          pathname: '/EditScore',
          search: result.data.createScore.id,
          state: {
            score_id: result.data.createScore.id
          }
        });
      });      
    }

    handleCreateScore = async () => {
      const user = await Auth.currentAuthenticatedUser();
      const userId = user.username;
      const scoreCreated = await API.graphql(graphqlOperation(mutations.createScore, {
          input: {
              name: this.state.name,
              status: this.state.status,
              scoreUserId: userId
          }
      }));
      console.log(scoreCreated);
      return scoreCreated;
    }

    render(){
      return (
        <>     
          <Modal show={this.props.modal} onHide={this.props.handleShow}>
            <form onSubmit={this.handleSubmit}>
              <Modal.Header closeButton>
                <Modal.Title>Music File</Modal.Title>
              </Modal.Header>

              <Modal.Body>

                <div className="column">
                  <div className="form-group col-md-4">
                    <label>Name:</label>
                    <input type="text" value={this.state.name} onChange={this.handleNameChange} className="form-control" required/>                   
                  </div>  
                  <div className="form-group col-md-4">
                    <label>Privacy:</label>
                    <select value={this.state.status} onChange={this.handleStatusChange} className="browser-default custom-select">
                          <option value="PRIVATE">Private</option>
                          <option value="PUBLIC">Public</option>
                    </select>
                  </div>
                </div>
              </Modal.Body>

              <Modal.Footer>
                <Button variant="danger" onClick={this.props.handleShow}>Cancel</Button>
                <input type="submit" value="Submit" color="primary" className="btn btn-primary" />
              </Modal.Footer>
            </form>
          </Modal>
        </>
      );
    }

}

export default withRouter(CreateModal);