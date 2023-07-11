import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './logo.png'
import { Outlet, Link } from "react-router-dom";
import './Navigationbar.css'

function Navigationbar() {
  return (
    <>
    <Navbar bg="custom" variant="dark" style = {{zIndex:"100"}}>
        <Container>
          {/* <Navbar.Brand as = {Link} to = {"/"}>
          <img
            src = {Logo}
            width = '50'
            height = '50'
          /></Navbar.Brand> */}
          <Nav className="me-auto">
            <Nav.Link as = {Link} to = {"/"} className = "px-4"> Home </Nav.Link>
            <Nav.Link as = {Link} to = {"/about"} className = "px-4"> About </Nav.Link>
            <Nav.Link as = {Link} to = {"/classes"} className = "px-4"> Classes </Nav.Link>
            <Nav.Link as = {Link} to = {"/contact"} className = "px-4"> Contact </Nav.Link>
          </Nav>
          
        </Container>
      </Navbar>

      </>
  );
}

export default Navigationbar;
