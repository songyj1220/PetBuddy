import React, { useState, useEffect } from 'react';
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import logo from '../images/logo.svg';
import './Navigation.css';


const Navigation = () =>
{
    return(
        <div className="Navigation">
           <Navbar className="color-nav" expand="lg">
            <Container>
                <Navbar.Brand href="/"><img src={logo} style={{width:100, marginTop: -7}} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                {/* <NavDropdown title="BREEDS" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Dog Breeds</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Cat Breeds</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#link">RESOURCES</Nav.Link> */}
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        </div>
    );

};

export default Navigation;