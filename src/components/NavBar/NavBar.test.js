import React from 'react';
import { shallow } from 'enzyme';
import NavBar from './NavBar'

describe("NavBar", () => {
    it('render navbar without crashing', () => {  
        const NavBarComp = shallow(<div><NavBar /></div>);
        expect(NavBarComp).toMatchSnapshot();
    });
});