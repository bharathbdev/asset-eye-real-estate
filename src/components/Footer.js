import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row>
          <Col md={3} className="mb-4">
            <h5 className="footer-title">CODE2DREAM Institute</h5>
            <p className="footer-text">
              Transforming coding dreams into reality since 2025. 
              Leading software training institute with 
              proven track record of 10+ successful students in our first year.
            </p>
          </Col>

          <Col md={3} className="mb-4">
            <h6 className="footer-subtitle">Our Courses</h6>
            <ul className="footer-list" style={{ fontSize: '0.9rem', lineHeight: '1.8' }}>
              <li><Link to="/courses" className="text-decoration-none text-light">Full Stack Development</Link></li>
              <li><Link to="/courses" className="text-decoration-none text-light">Frontend Development</Link></li>
              <li><Link to="/courses" className="text-decoration-none text-light">Backend Development</Link></li>
              <li><Link to="/courses" className="text-decoration-none text-light">Data Analyst</Link></li>
              <li><Link to="/courses" className="text-decoration-none text-light">Programming Languages</Link></li>
              <li><Link to="/courses" className="text-decoration-none text-light">Testing</Link></li>
              <li><Link to="/courses" className="text-decoration-none text-light">Aptitude</Link></li>
            </ul>
          </Col>

          <Col md={3} className="mb-4">
            <h6 className="footer-subtitle">Contact Info</h6>
            <ul className="footer-list" style={{ fontSize: '0.9rem', lineHeight: '1.8' }}>
              <li>
                <strong>Phone:</strong><br/>
                +91 9538802191<br/>
                +91 9620044797<br/>
                +91 9986740534
              </li>
              <li>
                <strong>Email:</strong><br/>
                code2dream@gmail.com
              </li>
              <li>
                <strong>Address:</strong><br/>
                #129 Rajeevgandhi Nagar,<br/>
                Laggere, Bangalore - 560058
              </li>
              <li>
                <strong>Hours:</strong> Mon-Sun: 9AM-10PM
              </li>
            </ul>
          </Col>

          <Col md={3} className="mb-4">
            <h6 className="footer-subtitle">Follow Us</h6>
            <div className="d-flex gap-3 mb-3">
              <a href="#" className="text-warning" style={{fontSize: '1.5rem'}}>📘</a>
              <a href="#" className="text-warning" style={{fontSize: '1.5rem'}}>📷</a>
              <a href="#" className="text-warning" style={{fontSize: '1.5rem'}}>💼</a>
              <a href="#" className="text-warning" style={{fontSize: '1.5rem'}}>🎥</a>
            </div>

            <h6 className="footer-subtitle mt-4">Quick Links</h6>
            <ul className="footer-list" style={{ fontSize: '0.9rem', lineHeight: '1.8' }}>
              <li><Link to="/training" className="text-decoration-none text-light">Training</Link></li>
              <li><Link to="/aboutus" className="text-decoration-none text-light">About Us</Link></li>
              <li><Link to="/contact" className="text-decoration-none text-light">Contact</Link></li>
            </ul>
          </Col>
        </Row>
        <hr style={{ borderColor: "#d7d7d7" }} />
        <p className="text-center text-muted-info mb-0">
          &copy; {new Date().getFullYear()} CODE2DREAM INSTITUTE. All rights
          reserved. | Empowering careers through quality education.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
