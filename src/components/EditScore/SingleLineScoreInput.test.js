import React from 'react';
import { shallow } from 'enzyme';
import SingleLineScoreInput from './SingleLineScoreInput';

describe("SLSI", () => {
    it('render slsi without crashing', () => {  
        const SLSIComp = shallow(<div><SingleLineScoreInput /></div>);
        expect(SLSIComp).toMatchSnapshot();
    });
});