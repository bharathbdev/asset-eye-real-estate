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
      <Navbar 
        expand="lg" 
        variant="light" 
        sticky="top"
        style={{
          background: '#ffffff',
          boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
          padding: '8px 0',
          minHeight: '70px'
        }}
      >
        <Container fluid style={{ maxWidth: '1400px' }}>
          {/* Logo positioned at far left */}
          <Navbar.Brand 
            as={Link} 
            to="/"
            style={{
              fontWeight: '700',
              fontSize: '1.8rem',
              color: '#1a1a1a',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              transition: 'all 0.3s ease',
              margin: 0,
              padding: 0,
              flexShrink: 0
            }}
          >
            <img
              src={logo}
              height="50px"
              width="auto"
              alt="Code2Dream Logo"
              style={{ 
                marginRight: "15px",
                borderRadius: "8px",
                objectFit: "contain",
                flexShrink: 0
              }}
            />
            <span style={{
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              whiteSpace: 'nowrap'
            }}>
              Code2Dream
            </span>
          </Navbar.Brand>
          
          <Navbar.Toggle 
            aria-controls="basic-navbar-nav"
            className="d-lg-none"
            style={{
              border: 'none',
              outline: 'none',
              boxShadow: 'none'
            }}
          />
          
          <Navbar.Collapse id="basic-navbar-nav" style={{ flexGrow: 1 }}>
            {/* Navigation layout with all buttons moved to right */}
            <div className="d-flex w-100 align-items-center">
              {/* Spacer to push all navigation items to right */}
              <div style={{ flex: '1 1 auto' }}></div>
              
              {/* All navigation items positioned towards right */}
              <Nav className="d-flex align-items-center" style={{ 
                gap: "24px",
                flex: '0 0 auto'
              }}>
              <Nav.Link 
                as={Link} 
                to="/" 
                className={isActive("/")}
                style={{
                  color: '#4a5568',
                  fontWeight: '500',
                  fontSize: '15px',
                  padding: '10px 16px',
                  borderRadius: '8px',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  height: '40px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#f7fafc';
                  e.target.style.color = '#667eea';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#4a5568';
                }}
              >
                Home
              </Nav.Link>

              <Nav.Link 
                as={Link} 
                to="/courses" 
                className={isActive("/courses")}
                style={{
                  color: '#4a5568',
                  fontWeight: '500',
                  fontSize: '15px',
                  padding: '10px 16px',
                  borderRadius: '8px',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  height: '40px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#f7fafc';
                  e.target.style.color = '#667eea';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#4a5568';
                }}
              >
                Courses
              </Nav.Link>

              <Nav.Link 
                as={Link} 
                to="/training" 
                className={isActive("/training")}
                style={{
                  color: '#4a5568',
                  fontWeight: '500',
                  fontSize: '15px',
                  padding: '10px 16px',
                  borderRadius: '8px',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  height: '40px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#f7fafc';
                  e.target.style.color = '#667eea';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#4a5568';
                }}
              >
                Training
              </Nav.Link>
              
              <Nav.Link 
                as={Link} 
                to="/aboutus" 
                className={isActive("/aboutus")}
                style={{
                  color: '#4a5568',
                  fontWeight: '500',
                  fontSize: '15px',
                  padding: '10px 16px',
                  borderRadius: '8px',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  height: '40px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#f7fafc';
                  e.target.style.color = '#667eea';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#4a5568';
                }}
              >
                About
              </Nav.Link>
              
              <Nav.Link 
                as={Link} 
                to="/contact" 
                className={isActive("/contact")}
                style={{
                  color: '#4a5568',
                  fontWeight: '500',
                  fontSize: '15px',
                  padding: '10px 16px',
                  borderRadius: '8px',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  height: '40px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#f7fafc';
                  e.target.style.color = '#667eea';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#4a5568';
                }}
              >
                Contact
              </Nav.Link>
              
              {/* Enroll Now button aligned with other navigation items */}
              <Button
                variant="primary"
                onClick={() => setShowLogin(true)}
                style={{
                  background: 'linear-gradient(135deg, #667eea, #764ba2)',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '10px 20px',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: 'white',
                  boxShadow: '0 4px 14px rgba(102, 126, 234, 0.3)',
                  transition: 'all 0.2s ease',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  whiteSpace: 'nowrap'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-1px)';
                  e.target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 14px rgba(102, 126, 234, 0.3)';
                }}
              >
                Enroll Now
              </Button>
              </Nav>
              
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <LoginModal show={showLogin} onHide={() => setShowLogin(false)} />
    </>
  );
};

export default Header;
