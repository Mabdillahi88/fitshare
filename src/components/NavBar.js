import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../assets/logo2.png';
import { FaHome, FaSignInAlt, FaUserPlus } from 'react-icons/fa';

function NavBar() {
  return (
    <Navbar bg="light" expand="md" fixed="top" style={{ padding: '10px 20px' }}>
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            alt="FitShare logo"
            height="45"
            style={{ paddingRight: '10px', maxHeight: '45px' }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ borderColor: 'rgba(0,0,0,0.1)' }} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home" aria-label="Home">
              <FaHome style={{ marginRight: "8px" }} /> Home
            </Nav.Link>
            <Nav.Link href="#signin" aria-label="Sign in">
              <FaSignInAlt style={{ marginRight: "8px" }} /> Sign in
            </Nav.Link>
            <Nav.Link href="#signup" aria-label="Sign up">
              <FaUserPlus style={{ marginRight: "8px" }} /> Sign up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
