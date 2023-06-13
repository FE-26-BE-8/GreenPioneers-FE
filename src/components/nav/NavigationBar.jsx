import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function NavigationBar() {
  const navigate = useNavigate();
  function handleButton(url) {
    navigate(url);
  }
  return (
    <>
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
            <Nav
              className="m-auto my-lg-0 wrapper-navlist"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to="/" className="m-auto nav-list active">
                Home
              </Link>
              <Link to="/list-news" className="m-auto nav-list active">
                News
              </Link>
              <Link to="/list-tips" className="m-auto nav-list active">
                Tips
              </Link>
              <Link to="/list-programs" className="m-auto nav-list active">
                Program
              </Link>
            </Nav>
            <div className="d-flex gap-2 btn-nav">
              <Button
                onClick={() => handleButton("/login")}
                variant="outline-success"
                className="w-100 btn-login"
              >
                Login
              </Button>
              <Button
                onClick={() => handleButton("/register")}
                variant="outline-success"
                className="w-100 btn-register"
              >
                Register
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
