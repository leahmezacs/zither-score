import React from 'react';
import Settings from './Settings';
import { Button } from 'react-bootstrap';
import { shallow } from 'enzyme';

test("expect component is called at least once", () => {
    const wrapper = shallow(<Settings />);
    expect(wrapper.find(".container").length).toEqual(1);
    expect(wrapper.find(".content").length).toEqual(1);
});

const mockHandleClick = jest.fn();

test("Button component fires callback function onClick", () => {
    const component = shallow(<Button onClick={mockHandleClick}>Click here</Button>);
    component.find("button").simulate("click");
    expect(mockHandleClick).toHaveBeenCalled();
});