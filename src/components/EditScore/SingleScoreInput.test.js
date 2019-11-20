import React from 'react';
import { shallow } from 'enzyme';
import SingleScoreInput from './SingleScoreInput';

describe("SSI", () => {
    it('render ssi without crashing', () => {  
        const SSIComp = shallow(<div><SingleScoreInput /></div>);
        expect(SSIComp).toMatchSnapshot();
    });
});