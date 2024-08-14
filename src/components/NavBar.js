import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FaHome, FaUser, FaCog, FaSearch } from 'react-icons/fa'; // Importing icons from Font Awesome
import logo from '../assets/logo.png'; // Your logo path

function NavBar() {
  return (
    <Navbar bg="light" expand="md" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            alt="Fit Share logo"
            height="45"
          />
          Fit Share
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">
              <FaHome /> Home
            </Nav.Link>
            <Nav.Link href="#explore">
              <FaSearch /> Explore
            </Nav.Link>
            <Nav.Link href="#profile">
              <FaUser /> Profile
            </Nav.Link>
            <Nav.Link href="#settings">
              <FaCog /> Settings
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
