import React from "react";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import DemoSession from "./DemoSession";
import FAQ from "./FAQ";
import LatestUpdates from "./LatestUpdates";
import backgroundImage from "../assets/backgroundc2c.jpg";

const testimonials = [
  {
    name: "Rajesh Kumar",
    feedback:
      "Code2Dream helped me transition from mechanical engineer to Full Stack Developer with 6.5 LPA package!",
    location: "Bangalore",
    course: "Full Stack Development",
  },
  {
    name: "Priya Sharma",
    feedback:
      "Amazing training institute! Got placed as Data Analyst with 7.5 LPA after 12 years career break.",
    location: "Hyderabad",
    course: "Data Science",
  },
  {
    name: "Arun Patel",
    feedback:
      "Excellent hands-on training in Python. Now working as AI/ML Engineer with 5 LPA package.",
    location: "Chennai",
    course: "Python & Machine Learning",
  },
];

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div 
        className="home-hero d-flex align-items-center justify-content-center text-center text-white"
        style={{
          background: `linear-gradient(135deg, rgba(0,0,0,0.8), rgba(0,0,0,0.6)), url("${backgroundImage}")`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          minHeight: '80vh',
          position: 'relative'
        }}
      >
        {/* Overlay pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 193, 7, 0.3) 0%, transparent 50%)',
          pointerEvents: 'none'
        }}></div>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, type: "spring", stiffness: 100 }}
            className="text-center"
          >
            <h1 
              className="display-3 mb-4"
              style={{
                background: "linear-gradient(135deg, #ffd700, #ffeb3b, #fff9c4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontWeight: "900",
                textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                letterSpacing: "2px",
                fontFamily: "'Poppins', sans-serif"
              }}
            >
              🚀 Transform Your Future with 
              <br/>
              <span style={{
                background: "linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontSize: "1.2em",
                display: "inline-block",
                transform: "perspective(1000px) rotateY(-15deg)",
                textShadow: "none"
              }}>
                CODE2DREAM
              </span>
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="lead mb-5"
            style={{
              fontSize: "1.4rem",
              fontWeight: "300",
              color: "#e0e0e0",
              textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: "1.6"
            }}
          >
            ✨ Where Dreams Meet Reality - Master cutting-edge technologies, 
            land your dream job, and build the future you deserve!
          </motion.p>
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 1, duration: 0.8, type: "spring" }}
            className="d-flex flex-wrap justify-content-center gap-3"
          >
            <Button
              as={Link}
              to="/courses"
              size="lg"
              className="custom-btn-primary"
              style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                border: "none",
                borderRadius: "50px",
                padding: "15px 35px",
                fontSize: "1.1rem",
                fontWeight: "600",
                color: "white",
                textTransform: "uppercase",
                letterSpacing: "1px",
                fontFamily: "'Dancing Script', cursive",
                boxShadow: "0 8px 25px rgba(102, 126, 234, 0.4)",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                position: "relative",
                overflow: "hidden"
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-3px) scale(1.05)";
                e.target.style.boxShadow = "0 15px 35px rgba(102, 126, 234, 0.6)";
                e.target.style.background = "linear-gradient(135deg, #764ba2 0%, #667eea 100%)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0) scale(1)";
                e.target.style.boxShadow = "0 8px 25px rgba(102, 126, 234, 0.4)";
                e.target.style.background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
              }}
            >
              🎓 Explore Courses
            </Button>

            <Button
              as={Link}
              to="/contact"
              size="lg"
              className="custom-btn-secondary"
              style={{
                background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                border: "none",
                borderRadius: "50px",
                padding: "15px 35px",
                fontSize: "1.1rem",
                fontWeight: "600",
                color: "white",
                textTransform: "uppercase",
                letterSpacing: "1px",
                fontFamily: "'Dancing Script', cursive",
                boxShadow: "0 8px 25px rgba(245, 87, 108, 0.4)",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                position: "relative",
                overflow: "hidden"
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-3px) scale(1.05)";
                e.target.style.boxShadow = "0 15px 35px rgba(245, 87, 108, 0.6)";
                e.target.style.background = "linear-gradient(135deg, #f5576c 0%, #f093fb 100%)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0) scale(1)";
                e.target.style.boxShadow = "0 8px 25px rgba(245, 87, 108, 0.4)";
                e.target.style.background = "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)";
              }}
            >
              📞 Enroll Now
            </Button>
          </motion.div>
        </Container>
      </div>
      
      {/* Freelance Services Section */}
      <section className="py-5 bg-light">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="mb-4">We Also Do Freelance Projects</h2>
            <p className="lead mb-4">
              Need a website, mobile app, or data analysis solution for your business? 
              Our expert team provides freelance development services.
            </p>
            <Row>
              <Col md={4} className="mb-3">
                <Card className="shadow-sm">
                  <Card.Body className="text-center">
                    <div style={{ fontSize: '3rem' }} className="mb-3">🌐</div>
                    <h5>Web Development</h5>
                    <p>Full-stack web applications, e-commerce sites, business websites</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-3">
                <Card className="shadow-sm">
                  <Card.Body className="text-center">
                    <div style={{ fontSize: '3rem' }} className="mb-3">📊</div>
                    <h5>Data Analysis</h5>
                    <p>Business intelligence, data visualization, reporting dashboards</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-3">
                <Card className="shadow-sm">
                  <Card.Body className="text-center">
                    <div style={{ fontSize: '3rem' }} className="mb-3">🤖</div>
                    <h5>Automation</h5>
                    <p>Process automation, testing automation, workflow optimization</p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Button variant="warning" size="lg" as={Link} to="/contact" className="mt-3">
              Start Your Coding Journey
            </Button>
          </motion.div>
        </Container>
      </section>
      
      <LatestUpdates />
      <DemoSession />
      <FAQ />
    </>
  );
};

export default Home;
