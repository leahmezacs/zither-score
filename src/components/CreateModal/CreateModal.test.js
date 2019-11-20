import React from 'react';
import {renderer, shallow} from 'enzyme';
import NavBar from '../NavBar/NavBar'
import CreateModal from './CreateModal'
import { Button, Modal} from 'react-bootstrap';

describe("CreateModal", () => {
    it('renders modal when show is true', () => {
        const props = { show: true }; 
        const wrapper = shallow(
          <Modal.Header closeButton>
            <Modal.Title id="title">Music File</Modal.Title>
          </Modal.Header>
        );
      
        expect(wrapper.text()).toContain('Music File');
      });
});