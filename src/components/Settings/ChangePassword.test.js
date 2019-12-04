import React from 'react';
import ChangePassword from './ChangePassword';
import { Button } from 'react-bootstrap';
import LoaderButton from "./LoaderButton";
import { shallow, mount } from 'enzyme';

test("expect component is called at least once", () => {
    const wrapper = shallow(<ChangePassword />);
    expect(wrapper.find(".ChangePassword").length).toEqual(1);
});