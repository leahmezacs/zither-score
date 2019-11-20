import React from 'react';
import {renderer, shallow} from 'enzyme';
import NavBar from '../NavBar/NavBar'
import CreateModal from './CreateModal'

describe("CreateModal", () => {
    it('render a createmodal component', () => {  
        const CreateModalComp = shallow(<div><CreateModal /></div>);
        expect(CreateModalComp).toMatchSnapshot();
    });
});