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
                <a 
                  href="tel:+919538802191" 
                  style={{ 
                    color: '#fff', 
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#ffd700'}
                  onMouseLeave={(e) => e.target.style.color = '#fff'}
                >
                  📞 +91 9538802191
                </a><br/>
                <a 
                  href="tel:+919620044797" 
                  style={{ 
                    color: '#fff', 
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#ffd700'}
                  onMouseLeave={(e) => e.target.style.color = '#fff'}
                >
                  📞 +91 9620044797
                </a><br/>
                <a 
                  href="tel:+919986740534" 
                  style={{ 
                    color: '#fff', 
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#ffd700'}
                  onMouseLeave={(e) => e.target.style.color = '#fff'}
                >
                  📞 +91 9986740534
                </a>
              </li>
              <li>
                <strong>Email:</strong><br/>
                <a 
                  href="mailto:code2dream@gmail.com?subject=Course Inquiry" 
                  style={{ 
                    color: '#fff', 
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#ffd700'}
                  onMouseLeave={(e) => e.target.style.color = '#fff'}
                >
                  📧 code2dream@gmail.com
                </a>
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
            <h6 className="footer-subtitle">Follow Us & Connect</h6>
            <div className="social-media-section">
              {/* Social Media Icons */}
              <div className="d-flex flex-wrap gap-3 mb-4">
                <a 
                  href="https://facebook.com/code2dream" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon facebook"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '45px',
                    height: '45px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #1877f2, #42a5f5)',
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '1.4rem',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(24, 119, 242, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-3px) scale(1.1)';
                    e.target.style.boxShadow = '0 8px 25px rgba(24, 119, 242, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.boxShadow = '0 4px 15px rgba(24, 119, 242, 0.3)';
                  }}
                  title="Follow us on Facebook"
                >
                  📘
                </a>
                
                <a 
                  href="https://instagram.com/code2dream" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon instagram"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '45px',
                    height: '45px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #fd1d1d, #fcb045)',
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '1.4rem',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(253, 29, 29, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-3px) scale(1.1)';
                    e.target.style.boxShadow = '0 8px 25px rgba(253, 29, 29, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.boxShadow = '0 4px 15px rgba(253, 29, 29, 0.3)';
                  }}
                  title="Follow us on Instagram"
                >
                  �
                </a>
                
                <a 
                  href="https://linkedin.com/company/code2dream" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon linkedin"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '45px',
                    height: '45px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #0077b5, #00a0dc)',
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '1.4rem',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(0, 119, 181, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-3px) scale(1.1)';
                    e.target.style.boxShadow = '0 8px 25px rgba(0, 119, 181, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.boxShadow = '0 4px 15px rgba(0, 119, 181, 0.3)';
                  }}
                  title="Connect with us on LinkedIn"
                >
                  💼
                </a>
                
                <a 
                  href="https://youtube.com/@code2dream" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon youtube"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '45px',
                    height: '45px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #ff0000, #ff4500)',
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '1.4rem',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(255, 0, 0, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-3px) scale(1.1)';
                    e.target.style.boxShadow = '0 8px 25px rgba(255, 0, 0, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.boxShadow = '0 4px 15px rgba(255, 0, 0, 0.3)';
                  }}
                  title="Subscribe to our YouTube channel"
                >
                  🎥
                </a>
                
                <a 
                  href="https://twitter.com/code2dream" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon twitter"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '45px',
                    height: '45px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #1da1f2, #0d8bd9)',
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '1.4rem',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(29, 161, 242, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-3px) scale(1.1)';
                    e.target.style.boxShadow = '0 8px 25px rgba(29, 161, 242, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.boxShadow = '0 4px 15px rgba(29, 161, 242, 0.3)';
                  }}
                  title="Follow us on Twitter"
                >
                  🐦
                </a>
                
                <a 
                  href="https://wa.me/919538802191?text=Hi%20Code2Dream%2C%20I%27m%20interested%20in%20your%20courses" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon whatsapp"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '45px',
                    height: '45px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #25d366, #128c7e)',
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '1.4rem',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-3px) scale(1.1)';
                    e.target.style.boxShadow = '0 8px 25px rgba(37, 211, 102, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.boxShadow = '0 4px 15px rgba(37, 211, 102, 0.3)';
                  }}
                  title="Chat with us on WhatsApp"
                >
                  �
                </a>

                <a 
                  href="https://discord.gg/code2dream" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon discord"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '45px',
                    height: '45px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #7289da, #5865f2)',
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '1.4rem',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(114, 137, 218, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-3px) scale(1.1)';
                    e.target.style.boxShadow = '0 8px 25px rgba(114, 137, 218, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.boxShadow = '0 4px 15px rgba(114, 137, 218, 0.3)';
                  }}
                  title="Join our Discord community"
                >
                  🎮
                </a>

                <a 
                  href="https://github.com/code2dream" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon github"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '45px',
                    height: '45px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #333, #24292e)',
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '1.4rem',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(51, 51, 51, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-3px) scale(1.1)';
                    e.target.style.boxShadow = '0 8px 25px rgba(51, 51, 51, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.boxShadow = '0 4px 15px rgba(51, 51, 51, 0.3)';
                  }}
                  title="Check out our GitHub repositories"
                >
                  🔧
                </a>
              </div>

              {/* Social Media Engagement */}
              <div style={{
                background: 'linear-gradient(135deg, #ffd700, #ffeb3b)',
                padding: '15px',
                borderRadius: '12px',
                color: '#333',
                fontSize: '13px',
                fontWeight: '600',
                textAlign: 'center',
                boxShadow: '0 4px 15px rgba(255, 215, 0, 0.3)'
              }}>
                � Join 500+ students in our community!<br/>
                <small style={{fontSize: '11px', fontWeight: '400'}}>
                  Get daily coding tips, placement updates & more
                </small>
              </div>
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
