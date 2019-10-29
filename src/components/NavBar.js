import React, {Component} from 'react';
import {
    Navbar,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button
    } from 'react-bootstrap';


class NavBar extends Component {
    render(){
        return (
            <div>
                <Navbar bg="secondary" expand="lg">
                {/* Logo will be later insert as image */}
                <Navbar.Brand href="#">Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#">Discover</Nav.Link>
                    </Nav>

                    <Form inline className="mx-auto">
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-warning">Search</Button>
                    </Form>
                    
                    <Nav className="ml-auto">
                        <Nav.Link href="#">Create</Nav.Link>
                        <Nav.Link href="#">Notification</Nav.Link>
                    </Nav>
                            
                    {/* Icon will later be change to icon */}
                    <NavDropdown title="Icon" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/Settings">Settings</NavDropdown.Item>
                        <NavDropdown.Item href="#">Libary</NavDropdown.Item>
                        <NavDropdown.Item href="#">Profile</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#">Help</NavDropdown.Item>
                        <NavDropdown.Item href="#">Logout</NavDropdown.Item>
                    </NavDropdown> 
                </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default NavBar;