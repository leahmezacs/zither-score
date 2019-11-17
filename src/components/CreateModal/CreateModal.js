import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button, Modal} from 'react-bootstrap';

class CreateModal extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: ''
      };

      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {
      this.setState({
        name: event.target.value
      });
    }

    handleSubmit(event) {
      event.preventDefault();
      this.props.handleShow();

      let path = {
        pathname: '/EditScore',
        query: this.state.name,
      }
      console.log(path);
      this.props.history.push(path);
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
                <div className="row">
                  <div className="form-group col-md-4">
                    <label>Name:</label>
                    <input type="text" value={this.state.name} onChange={this.handleNameChange} className="form-control" />
                    
                    
                  </div>
                  
                </div>
              </Modal.Body>

              <Modal.Footer>

                <select>
                      <option value="private">Private</option>
                      <option value="public">Public</option>
                </select>
                
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