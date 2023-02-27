import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {Link} from "react-router-dom";


export const NavBar =() => {
    return (
      <>
    <div style={{ height: '56px' }}></div>
    <Navbar bg="success" variant='dark' expand="lg" fixed="top">
    <Container>
        <Navbar.Brand>NervevSeg-US</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-seg"/>
        <Navbar.Collapse id="navbar-seg" className="justify-content-end">
          <Nav>
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/doctorlog">Doctor</Nav.Link>
            <Nav.Link href="/patientlog">Patient</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
      </>
    )
  }