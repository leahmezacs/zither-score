import React from 'react';
import { shallow } from 'enzyme';
import EditScore from './EditScore';

describe("EditScore", () => {
    it('render editscore without crashing', () => {  
        const EditScoreComp = shallow(<div><EditScore /></div>);
        expect(EditScoreComp).toMatchSnapshot();
    });
});