import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavLink, NavItem} from 'reactstrap';

function TopMenu( { onClick, isOpen } ) {
    return (
        <div>
            <Navbar color="light" light expand="md" fixed="top" style={{ borderBottom: '3px solid #c1d62e'}}>
                <NavbarBrand href="/"><i className="fa fa-film" aria-hidden="true"></i></NavbarBrand>
                <NavbarToggler onClick={ onClick } />
                <Collapse isOpen={ isOpen } navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink to="/movies" activeClassName="active" tag={RRNavLink}>Movies</NavLink> 
                        </NavItem>
                        <NavItem>
                            <NavLink to="/shows" activeClassName="active" tag={RRNavLink}>Tv-Shows</NavLink> 
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default TopMenu;
