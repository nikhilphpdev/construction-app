import React from 'react'
import { Link, NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const Header = () => {
  return (
    <>
    <header>
        <div className="container py-3">
          <Navbar expand="lg">
             <Navbar.Brand as={Link} to="/" className="logo">
              <span>Indian Constructions</span>
                {/* <img src={logo} className="w-100" /> */}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                    <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/" end>
                Home
              </Nav.Link>

              <Nav.Link as={NavLink} to="/about">
                About Us
              </Nav.Link>

              <Nav.Link as={NavLink} to="/service">
                Services
              </Nav.Link>

              <Nav.Link as={NavLink} to="/project">
                Projects
              </Nav.Link>

              <Nav.Link as={NavLink} to="/blog">
                Blogs
              </Nav.Link>

              <Nav.Link as={NavLink} to="/contactUs">
                Contact Us
              </Nav.Link>
            </Nav>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </header>
    </>
  )
}
