import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css"
function NavigationBar() {
  return (
    <>
      <Navbar className="container-nav" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
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
            <Nav
              className="m-auto my-lg-0 wrapper-navlist"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
         
              <Nav.Link href="#action1" className="m-auto nav-list">Home</Nav.Link>
              <Nav.Link href="#action1" className="m-auto nav-list">News</Nav.Link>
              <Nav.Link href="#action1" className="m-auto nav-list">Tips</Nav.Link>
              <Nav.Link href="#action1" className="m-auto nav-list">Program</Nav.Link>
            </Nav>
            <div className="d-flex gap-2 btn-nav">
              <Button variant="outline-success" className="w-100 btn-login">Login</Button>
              <Button variant="outline-success" className="w-100 btn-register">Register</Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;