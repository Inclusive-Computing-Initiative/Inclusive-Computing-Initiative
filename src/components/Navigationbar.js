import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './logo.png'
import { Outlet, Link } from "react-router-dom";
import './Navigationbar.css'

function Navigationbar() {
  return (
    <>
    <Navbar expand="lg" bg="custom" variant="dark" style = {{zIndex:"100"}}>
    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Container>
            <Nav className="me-auto">
              <Nav.Link as = {Link} to = {"/"} className = "px-4"> Home </Nav.Link>
              <Nav.Link as = {Link} to = {"/about"} className = "px-4"> About </Nav.Link>
              <Nav.Link as = {Link} to = {"/classes"} className = "px-4"> Classes </Nav.Link>
              <Nav.Link as = {Link} to = {"/contact"} className = "px-4"> Contact </Nav.Link>
            </Nav>
          </Container>
      </Navbar.Collapse>
      </Navbar>

      </>
  );
}

export default Navigationbar;
