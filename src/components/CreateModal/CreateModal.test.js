import React from 'react';
import {shallow} from 'enzyme';
import CreateModal from './CreateModal'

describe("CreateModal", () => {
    it('render a createmodal component', () => {  
        const CreateModalComp = shallow(<div><CreateModal /></div>);
        expect(CreateModalComp).toMatchSnapshot();
    });
});