import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../assets/logo2.png';

function NavBar() {
  return (
    <Navbar bg="light" expand="md" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            alt="logo"
            height="45"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">
              <i className="fas fa-home"></i> Home
            </Nav.Link>
            <Nav.Link href="#signin">
              <i className="fas fa-sign-in-alt"></i> Sign in
            </Nav.Link>
            <Nav.Link href="#signup">
              <i className="fas fa-user-plus"></i> Sign up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;