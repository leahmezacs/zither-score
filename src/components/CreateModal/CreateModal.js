import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button, Modal} from 'react-bootstrap';
import { Auth, graphqlOperation, API } from 'aws-amplify';
import * as mutations from '../../graphql/mutations';

class CreateModal extends Component {
    constructor(props) {
      super(props);

      this.state = {
        score_id: "",
        name: "",
        status: "PRIVATE",
        category: "Folk"
      };

      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleStatusChange = this.handleStatusChange.bind(this);
      this.handleCategoryChange = this.handleCategoryChange.bind(this);
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

    handleCategoryChange(event) {
      this.setState({
        category: event.target.value
      });
    }

    handleSubmit(event) {
      event.preventDefault();
      this.props.handleShow();
      this.handleCreateScore().then(result => {
        this.setState({
          score: result
        }, () => {
          this.props.history.push({
            pathname: '/EditScore',
            search: result.data.createScore.id,
            state: {
              score_id: result.data.createScore.id
            }
          });
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
              category: this.state.category,
              scoreUserId: userId
          }
      }));
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
                  <div className="form-group col-md-6">
                    <label>Category:</label>
                    <select value={this.state.category} onChange={this.handleCategoryChange} className="browser-default custom-select">
                          <option value="Folk">Folk</option>
                          <option value="Contemporary">Contemporary</option>
                          <option value="Classic">Classic</option>
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

/* this create modal is for creating the music score, it contains options with 
public/private, and type of music score sheets.  the score sheet's name it required 
to fill, if there is no name, the score sheet would not able to be created */