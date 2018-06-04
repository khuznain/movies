import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavLink, NavItem} from 'reactstrap';

function TopMenu( { onClick, isOpen } ) {
    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Movies</NavbarBrand>
                <NavbarToggler onClick={ onClick } />
                <Collapse isOpen={ isOpen } navbar>
                    {
                        /*
                            In Case if you are adding new navigation item 
                            
                            <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="#">Components</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Components</NavLink>
                            </NavItem>
                            
                            </Nav>   
                        */
                    }
                </Collapse>
            </Navbar>
        </div>
    )
}

export default TopMenu;
