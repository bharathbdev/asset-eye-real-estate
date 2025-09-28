import React, { useState, useEffect } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import LoginModal from "./LoginModal";
import logo from "../assets/c2dlogo.jpg";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const location = useLocation();  // Get the current location

  // Function to determine if the current path is active
  const isActive = (path) => {
    return location.pathname === path ? 'active' : ''; // Return 'active' if the path matches
  };

  useEffect(() => {
   setTimeout(() => {
     setShowLogin(true)
   }, 5000);
  
  }, [])
  

  return (
    <>
      <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
        <div className="container-fluid">
          <Navbar.Brand as={Link} to="/">
            <img
              src={logo}
              height="55px"
              width="auto"
              alt="Code2Dream Logo"
              style={{ 
                marginRight: "15px",
                borderRadius: "8px",
                objectFit: "contain"
              }}
            />
            Code2Dream
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-auto" style={{ gap: "30px" }}>
              <Nav.Link as={Link} to="/" className={isActive("/")}>
                Home
              </Nav.Link>
             

                <Nav.Link as={Link} to="/aboutus" className={isActive("/aboutus")}>
                About Us
              </Nav.Link>
              <Nav.Link as={Link} to="/courses" className={isActive("/courses")}>
                Courses
              </Nav.Link>
              <Nav.Link as={Link} to="/training" className={isActive("/training")}>
                Training Programs
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className={isActive("/contact")}>
                Contact
              </Nav.Link>

              <Button
                variant="warning"
                className="btn-animated"
                onClick={() => setShowLogin(true)}
              >
                Enroll Now
              </Button>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <LoginModal show={showLogin} onHide={() => setShowLogin(false)} />
    </>
  );
};

export default Header;
