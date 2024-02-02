
// Filename - "./components/Navbar.js

import './Navbar.css'
import React from "react";
import logo from './logo.jpg'
import { Nav, NavLink, NavMenu } from "./NavbarElements";
 
const Navbar = () => {
    return (
        <div class="Navbar">
            <div class="banner">
                <img src={logo} height="120" id="logo"/>
                <div id="title">
                    Car BCH
                </div>
            </div>
            <Nav>
                <NavMenu>
                    <NavLink to="/car" activeStyle>
                        Chercher une voiture
                    </NavLink>
                    <NavLink to="/create" activeStyle>
                        Enregistrer une voiture
                    </NavLink>
                    <NavLink to="/garage" activeStyle>
                        Garage
                    </NavLink>
                </NavMenu>
            </Nav>
        </div>
    );
};
 
export default Navbar;
