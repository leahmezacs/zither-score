import React from 'react';
import {renderer, mount } from 'enzyme';
import NavBar from '../NavBar/NavBar'
import CreateModal from './CreateModal'

describe("CreateModal", () => {
    it('renders modal when show is true', () => {
        const props = { show: true }; 
        const wrapper = mount(
          <div id="root">
            <CreateModal {...props} />
          </div>
        );
      
        wrapper.update();
        
        expect(wrapper.find('.my-modal-window').exists()).toEqual(true);
        expect(wrapper.text()).toContain('Hello World');
      });
});