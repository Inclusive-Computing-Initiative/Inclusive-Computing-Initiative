import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './logo.png'
import { Outlet, Link } from "react-router-dom";
import './Navigationbar.css'

function Navigationbar() {
  return (
    <>
    <Navbar expand="lg" bg="custom" style = {{zIndex:"100"}}>
    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Container fluid style={{}}>
            <Nav className="me-auto">
              <Nav.Link as = {Link} to = {"/"} className = "px-5"> <p className='link'> Home </p> </Nav.Link>
              <Nav.Link as = {Link} to = {"/about"} className = "px-5"> <p className='link'> About </p> </Nav.Link>
              <Nav.Link as = {Link} to = {"/classes"} className = "px-5"> <p className='link'> Classes </p> </Nav.Link>
              <Nav.Link as = {Link} to = {"/contact"} className = "px-5"> <p className='link'> Contact </p> </Nav.Link>
            </Nav>
          </Container>
      </Navbar.Collapse>
      </Navbar>

      </>
  );
}

export default Navigationbar;
