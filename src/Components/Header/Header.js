import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import navimg from "../header-img/2747279.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header-part">
      <div className="nav-background">
        <Navbar expand="lg" variant="light">
          <Container>
            <Navbar.Brand href="#home">
              <img
                src={navimg}
                width="50"
                height="40"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#login">Login</Nav.Link>
              <Nav.Link href="#book">Book</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <div className="header-body">
          <p>Burj Al Arab</p>
          <p>A global icon of Arabian luxury</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
