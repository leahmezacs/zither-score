import React from 'react';
import { Button, Modal} from 'react-bootstrap';

const PopUpWindow = (props) => {
    return (
      <>     
        <Modal show={props.showPopOut} onHide={props.handlePopOut}>
          <Modal.Header closeButton>
            <Modal.Title>Music File</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div className="row">
              <div className="form-group col-md-4">
                <label>Name:</label>
                <input type="text" value="name" className="form-control" />
              </div>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="danger" onClick={props.handlePopOut}>Cancel</Button>
            <Button Variant="green" onClick ={props.handlePopOut}>Submit</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default PopUpWindow;