import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

import "./Navbar.css";

function NavigationBar() {
  return (
    <Navbar className="container-nav" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <div className="nav-logo">
            <div className="logo-name1">
              <a href="#">Green</a>
            </div>
            <div className="logo-name2">
              <a href="#">Pioneers</a>
            </div>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mx-auto my-lg-0 wrapper-navlist" navbarScroll>
            <Link to="/" className="nav-list">
              Home
            </Link>

            <Link to="/list-news" className="nav-list">
              News
            </Link>

            <Link to="/list-tips" className="nav-list">
              Tips
            </Link>

            <Link to="#action1" className="nav-list">
              Program
            </Link>
          </Nav>
          <div className="d-flex gap-2 btn-nav">
            <Button variant="outline-success" className="w-100 btn-login">
              Login
            </Button>
            <Button variant="outline-success" className="w-100 btn-register">
              Register
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;