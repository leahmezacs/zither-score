import React from 'react';
import { shallow } from 'enzyme';
import Library from './Library';

describe("Library", () => {
    it('render library without crashing', () => {  
        const LibraryComp = shallow(<div><Library /></div>);
        expect(LibraryComp).toMatchSnapshot();
    });
});