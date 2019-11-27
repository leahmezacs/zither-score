import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount, shallow } from 'enzyme';
import { Modal } from 'react-bootstrap';
import CreateModal from './CreateModal';

// describe("CreateModal", () => {
//     it('render createmodal without crashing', () => {  
//         const CreateModalComp = shallow(<div><CreateModal /></div>);
//         expect(CreateModalComp).toMatchSnapshot();
//     });

//     it('renders Modal component', () => {  
//         const CreateModalComp = shallow(<CreateModal />);
//         expect(CreateModalComp.find(CreateModal).length).toEqual(1);  
//     });


// });


let modalShow = true;  
let componentToTest = {  
    title: 'CreateModal: ',  
    html: <CreateModal show={modalShow}/>  
};

const app = mount (
    <Router initialEntries={[ '/random' ]}>
      componentToTest.html
    </Router>
)

let wrapper = app,  
    elementToSearch;  

it(componentToTest.title + 'renders without crashing', () => {  
    app;  
});

it(componentToTest.title + 'renders Modal component', () => {  
    expect(wrapper.find(CreateModal).length).toEqual(1);  
});

it(componentToTest.title + 'renders major html elements', () => {  
    // Test whether modal-content element has 1 html children elements (which is <form>).  
    expect(wrapper.find('.modal-content').length).toEqual(1);  
    expect(wrapper.find('.modal-content').children()).toHaveLength(1);  

    // Test whether modal-header element has 2 html children elements (title and closeButton).  
    expect(wrapper.find('.modal-header').length).toEqual(1);  
    expect(wrapper.find('.modal-header').children()).toHaveLength(2);  

    // Test whether modal-body element has 1 html child element.  
    expect(wrapper.find('.modal-body').length).toEqual(1);  
    expect(wrapper.find('.modal-body').children()).toHaveLength(1);  

    // Test whether modal-footer element has 2 html children element (close and submit buttons).  
    expect(wrapper.find('.modal-footer').length).toEqual(1);  
    expect(wrapper.find('.modal-footer').children()).toHaveLength(2);  

    elementToSearch = <p>Lannisters always pay their debt</p>;  
    expect(wrapper.contains(elementToSearch)).toEqual(false);  
});

 