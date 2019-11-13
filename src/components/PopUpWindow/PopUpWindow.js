import React from 'react';
import { Button, Modal} from 'react-bootstrap';
import EditScore from '../EditScore/EditScore'

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
                <input type="text" value="" className="form-control" />
              </div>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="danger" onClick={props.handlePopOut}>Cancel</Button>
            <Button Variant="green" onClick ={props.handlePopOut} href='/EditScore'>Submit</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default PopUpWindow;