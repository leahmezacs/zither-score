import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './HomePage'

describe("HomePage", () => {
    it('render a homepage component', () => {  
        const HomePageComp = shallow(<div><HomePage /></div>);
        expect(HomePageComp).toMatchSnapshot();
    });
});