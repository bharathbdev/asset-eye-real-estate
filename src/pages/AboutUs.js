import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div>
        <section id="about" className="about-section py-5 mb-4">
        <motion.div
          className="container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-5">
            <h2 className="section-title text-center mb-4" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>About Code2Dream</h2>
            <p className="lead" style={{ maxWidth: "600px", margin: "0 auto", fontSize: '1.2rem', color: '#666' }}>
              Transforming coding dreams into reality through quality education and industry expertise.
            </p>
          </div>
          
          <Row className="align-items-center mb-5">
            <Col lg={6} className="mb-4">
              <div className="p-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '12px', border: '1px solid #e9ecef' }}>
                <h3 style={{ color: '#2d3748', marginBottom: '1.5rem' }}>Our Story</h3>
                <p style={{ color: '#4a5568', lineHeight: '1.6' }}>
                  At <strong>CODE2DREAM</strong>, we believe coding is more than just writing programs—it's about 
                  transforming dreams into reality and building the future through technology. Whether you're a 
                  fresh graduate, experienced professional looking to switch careers, or someone with a career gap, 
                  we're here to guide you every step of your coding journey.
                </p>
                <p style={{ color: '#4a5568', lineHeight: '1.6' }}>
                  Established in <strong>2025</strong>, we are a new but ambitious software training institute in Bangalore. 
                  In our first year, we have successfully trained <strong>10+ students</strong> and helped them achieve 
                  their career goals, proving our commitment to quality education and results.
                </p>
              </div>
            </Col>
            <Col lg={6} className="mb-4">
              <div className="p-4" style={{ backgroundColor: '#667eea', borderRadius: '12px', color: 'white' }}>
                <h3 style={{ color: 'white', marginBottom: '1.5rem' }}>Our Mission</h3>
                <p style={{ color: '#e2e8f0', lineHeight: '1.6', fontSize: '1.1rem' }}>
                  To bridge the gap between academic knowledge and industry requirements by providing 
                  world-class training with personalized attention and hands-on experience.
                </p>
              </div>
            </Col>
          </Row>

          <div className="text-center mb-5">
            <h3 style={{ color: '#2d3748', marginBottom: '2rem', fontSize: '2.2rem', fontWeight: 'bold' }}>What Makes Us Unique</h3>
            <Row>
              <Col md={4} className="mb-4">
                <div className="p-4 h-100" style={{ backgroundColor: '#fff5f5', borderRadius: '12px', border: '2px solid #fed7d7' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>👥</div>
                  <h5 style={{ color: '#c53030' }}>Small Batch Size</h5>
                  <p style={{ color: '#4a5568' }}>Maximum 15 students for personalized attention</p>
                </div>
              </Col>
              <Col md={4} className="mb-4">
                <div className="p-4 h-100" style={{ backgroundColor: '#f0fff4', borderRadius: '12px', border: '2px solid #c6f6d5' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎯</div>
                  <h5 style={{ color: '#38a169' }}>1:1 Mentoring</h5>
                  <p style={{ color: '#4a5568' }}>Personal guidance from industry professionals</p>
                </div>
              </Col>
              <Col md={4} className="mb-4">
                <div className="p-4 h-100" style={{ backgroundColor: '#fffaf0', borderRadius: '12px', border: '2px solid #fbd38d' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>💰</div>
                  <h5 style={{ color: '#d69e2e' }}>Flexible Payment</h5>
                  <p style={{ color: '#4a5568' }}>30% upfront, rest as per progress</p>
                </div>
              </Col>
            </Row>
          </div>

          <div className="text-center p-4" style={{ backgroundColor: '#1a202c', borderRadius: '12px', color: 'white' }}>
            <h4 style={{ color: '#ffc107', marginBottom: '1rem' }}>Our Guarantee</h4>
            <p style={{ fontSize: '1.1rem', marginBottom: '0' }}>
              <strong>10-day money-back guarantee</strong> • Demo sessions before enrollment • 
              Both online and offline training available
            </p>
          </div>
        </motion.div>
      </section>

      {/* Our Features Section */}
      <section className="features-section py-5" style={{ backgroundColor: '#2d3748', color: 'white' }}>
        <Container>
          <Row className="text-center">
            <Col md={4} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h4 style={{ color: '#ffc107', marginBottom: '1rem' }}>IT Experts as Trainers</h4>
                <p style={{ color: '#e2e8f0' }}>Learning with professionals who have real industry experience solves 60% of your career needs.</p>
              </motion.div>
            </Col>
            <Col md={4} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 style={{ color: '#ffc107', marginBottom: '1rem' }}>100% Hands-on Training</h4>
                <p style={{ color: '#e2e8f0' }}>We focus on practical, hands-on training with real-world projects and scenarios.</p>
              </motion.div>
            </Col>
            <Col md={4} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h4 style={{ color: '#ffc107', marginBottom: '1rem' }}>Placement Assistance</h4>
                <p style={{ color: '#e2e8f0' }}>100% placement assistance with interview preparation and career guidance.</p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-5">
        <Container>
          <Row className="text-center">
            <Col md={3} className="mb-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-warning">15</h2>
                <p>Max Students Per Batch</p>
              </motion.div>
            </Col>
            <Col md={3} className="mb-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-warning">20+</h2>
                <p>Courses Available</p>
              </motion.div>
            </Col>
            <Col md={3} className="mb-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h2 className="text-warning">10+</h2>
                <p>Students Placed</p>
              </motion.div>
            </Col>
            <Col md={3} className="mb-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-warning">1</h2>
                <p>Year of Excellence</p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default AboutUs