import React from 'react';
import {shallow } from 'enzyme';
import { Modal } from 'react-bootstrap';
import CreateModal from './CreateModal'

describe("CreateModal", () => {
    it('render createmodal without crashing', () => {  
        const CreateModalComp = shallow(<div><CreateModal /></div>);
        expect(CreateModalComp).toMatchSnapshot();
    });

    it('renders Modal component', () => {  
        const CreateModalComp = shallow(<CreateModal />);
        expect(CreateModalComp.find(CreateModal).length).toEqual(1);  
    });


});

 