import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FaHome, FaUser, FaCog, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from React Router
import logo from "../assets/logo.png";

function NavBar() {
  return (
    <Navbar bg="light" expand="md" fixed="top">
      <Container>
        {/* Logo and Branding */}
        <Navbar.Brand as={Link} to="/" aria-label="Fit Share">
          <img src={logo} alt="Fit Share logo" height="45" />
          <span style={{ marginLeft: "10px", fontWeight: "bold" }}>Fit Share</span>
        </Navbar.Brand>

        {/* Hamburger Toggle */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Collapsible Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" aria-label="Home">
              <FaHome /> Home
            </Nav.Link>
            <Nav.Link as={Link} to="/explore" aria-label="Explore">
              <FaSearch /> Explore
            </Nav.Link>
            <Nav.Link as={Link} to="/profile" aria-label="Profile">
              <FaUser /> Profile
            </Nav.Link>
            <Nav.Link as={Link} to="/settings" aria-label="Settings">
              <FaCog /> Settings
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
