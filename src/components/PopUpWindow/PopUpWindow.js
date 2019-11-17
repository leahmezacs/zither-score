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
                <input type="text" value={props.name} onChange={props.handleName} className="form-control" />
              </div>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="danger" onClick={props.handlePopOut}>Cancel</Button>
            <Button Variant="green" onClick ={props.handlePopOut} href='/EditScore'>Submit</Button>
            <select>
              <option value="Public">Public</option>
              <option value="Private">Private</option>
            </select>
          </Modal.Footer>
        </Modal>
      </>
    );
}
/*
this.props.history.push({
  pathname: '/EditScore',
  state: {
    name: props.name
  }
});
*/

export default PopUpWindow;