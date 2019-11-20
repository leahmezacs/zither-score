import React from 'react';
import { shallow, mount, render } from 'enzyme';
import NavBar from './NavBar'
import App from '../../App'

describe("NavBar", () => {
    it("displays sign in", () => {
        const wrapper = shallow(<App />);
        const NavBarWrapper = wrapper.find(NavBar).dive();
        expect(NavBarWrapper.text()).toEqual("Login");
      });
});