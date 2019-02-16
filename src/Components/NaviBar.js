import { Navbar, NavbarBrand } from 'reactstrap';
import React, { Component } from 'react';

class NaviBar extends Component {
    render() {
        return (
            <Navbar color="dark" dark expand="md"> 
                <NavbarBrand href="/">5/3/1</NavbarBrand>
            </Navbar>
        );
    }
}

export default NaviBar;