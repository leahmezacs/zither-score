import React from 'react';
import {renderer, mount } from 'enzyme';
import CreateModal from './CreateModal'
import App from '../../App'

describe("CreateModal", () => {
    it('render modal component properly', () => {
        const noOp = () => {};
        mount(
            <Modal.Title>Music File</Modal.Title>,
        )
          .find('Modal.Title')
          .text()
          .should.equal('Music File');
    });
});