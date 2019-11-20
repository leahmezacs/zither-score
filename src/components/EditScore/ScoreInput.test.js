import React from 'react';
import { shallow } from 'enzyme';
import ScoreInput from './ScoreInput';

describe("ScoreInput", () => {
    it('render scoreinput without crashing', () => {  
        const ScoreInputComp = shallow(<div><ScoreInput /></div>);
        expect(ScoreInputComp).toMatchSnapshot();
    });
});