import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavLink, NavItem} from 'reactstrap';

function TopMenu( { onClick, isOpen } ) {
    return (
        <div>
            <Navbar color="light" light expand="md" style={{ borderBottom: '3px solid #e7e7e7'}}>
                <NavbarBrand href="/"><i className="fa fa-film" aria-hidden="true"></i></NavbarBrand>
                <NavbarToggler onClick={ onClick } />
                <Collapse isOpen={ isOpen } navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="#">Movies</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Tv-Shows</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default TopMenu;
