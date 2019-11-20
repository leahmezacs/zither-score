import React from 'react';
import { shallow } from 'enzyme';
import NavBar from './NavBar'

describe("NavBar", () => {
    it('render a navbar component', () => {  
        const NavBarComp = shallow(<div><NavBar /></div>);
        expect(NavBarComp).toMatchSnapshot();
    });
});