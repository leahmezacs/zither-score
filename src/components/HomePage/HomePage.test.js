import React from 'react';
import { shallow, mount, render } from 'enzyme';
import HomePage from './HomePage'

describe("HomePage", () => {
    it("Renders properly", () => {
        const wrapper = shallow(<HomePage />);
        expect(wrapper.find(".homepage-header").text()).toEqual("NumScore");
      });
});