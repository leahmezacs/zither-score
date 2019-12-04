import React from 'react';
import Settings from './Settings';
import { shallow } from 'enzyme';

test("expect component is called at least once", () => {
    const wrapper = shallow(<Settings />);
    expect(wrapper.find(".container").length).toEqual(1);
    expect(wrapper.find(".content").length).toEqual(1);
});