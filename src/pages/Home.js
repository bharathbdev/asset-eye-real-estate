import React, { useState, useEffect } from "react";
import { Container, Button, Row, Col, Card, Carousel, Badge } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import DemoSession from "./DemoSession";
import FAQ from "./FAQ";
import LatestUpdates from "./LatestUpdates";
import Courses from "./Courses";

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
  const [activeSlide, setActiveSlide] = useState(0);

  // Carousel slides data
  const carouselSlides = [
    {
      id: 1,
      title: "Transform Your Future with CODE2DREAM",
      subtitle: "Not just a Training. It's your next big step",
      description: "Where Dreams Meet Reality - Master cutting-edge technologies, land your dream job, and build the future you deserve!",
      icon: "🚀",
      gradient: "linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1)"
    },
    {
      id: 2,
      title: "What We Teach",
      subtitle: "Industry-Ready Skills That Matter",
      description: "Full Stack Development • Data Analytics • Python • Testing • Career Guidance • Real Projects • 1:1 Mentoring",
      icon: "🎓",
      gradient: "linear-gradient(45deg, #667eea, #764ba2, #896dcf)"
    },
    {
      id: 3,
      title: "Who Should Join & Why",
      subtitle: "Any Degree, Any Background - We Welcome All!",
      description: "Career Changers • Fresh Graduates • Working Professionals • Homemakers • Students • Anyone Passionate About Tech",
      icon: "👥",
      gradient: "linear-gradient(45deg, #f093fb, #f5576c, #4facfe)"
    }
  ];

  return (
    <>
      {/* CodeBasics-Inspired Hero Carousel */}
      <div 
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          minHeight: '100vh',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Subtle Pattern Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.05) 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px, 40px 40px',
          opacity: 0.4
        }} />

        <Carousel 
          activeIndex={activeSlide} 
          onSelect={(selectedIndex) => setActiveSlide(selectedIndex)}
          controls={false}
          indicators={false}
          interval={6000}
          fade={true}
          style={{ position: 'relative', zIndex: 2 }}
        >
          {/* Slide 1: Transform Your Future with Statistics */}
          <Carousel.Item>
            <Container fluid className="px-4 py-5" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
              <Row className="align-items-center w-100">
                <Col lg={6} md={12} className="text-white">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Badge 
                      className="mb-3"
                      style={{
                        fontSize: '14px',
                        padding: '8px 16px',
                        borderRadius: '25px',
                        background: 'rgba(255, 255, 255, 0.15)',
                        color: 'white',
                        fontWeight: '500'
                      }}
                    >
                      🚀 Transform Your Career
                    </Badge>

                    <h1 style={{
                      fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                      fontWeight: '700',
                      lineHeight: '1.2',
                      marginBottom: '24px',
                      color: 'white'
                    }}>
                      Launch Your Tech Career with
                      <span style={{ color: '#ffd700', display: 'block' }}>
                        Code2Dream
                      </span>
                    </h1>

                    <p style={{
                      fontSize: '1.2rem',
                      lineHeight: '1.6',
                      opacity: 0.9,
                      marginBottom: '40px',
                      color: 'white'
                    }}>
                      Join thousands of successful professionals who transformed their careers 
                      through our industry-leading bootcamps and courses.
                    </p>

                    {/* Statistics - CodeBasics Style */}
                    <Row className="mb-4">
                      <Col md={4} className="text-center mb-3">
                        <div style={{
                          background: 'rgba(255, 255, 255, 0.1)',
                          borderRadius: '16px',
                          padding: '24px 16px',
                          border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}>
                          <h3 style={{ color: '#ffd700', fontSize: '2.2rem', fontWeight: '700', margin: '0 0 8px' }}>
                            50+
                          </h3>
                          <p style={{ fontSize: '14px', opacity: 0.8, margin: 0, fontWeight: '500' }}>
                            Students Trained
                          </p>
                        </div>
                      </Col>
                      <Col md={4} className="text-center mb-3">
                        <div style={{
                          background: 'rgba(255, 255, 255, 0.1)',
                          borderRadius: '16px',
                          padding: '24px 16px',
                          border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}>
                          <h3 style={{ color: '#ffd700', fontSize: '2.2rem', fontWeight: '700', margin: '0 0 8px' }}>
                            95%
                          </h3>
                          <p style={{ fontSize: '14px', opacity: 0.8, margin: 0, fontWeight: '500' }}>
                            Placement Rate
                          </p>
                        </div>
                      </Col>
                      <Col md={4} className="text-center mb-3">
                        <div style={{
                          background: 'rgba(255, 255, 255, 0.1)',
                          borderRadius: '16px',
                          padding: '24px 16px',
                          border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}>
                          <h3 style={{ color: '#ffd700', fontSize: '2.2rem', fontWeight: '700', margin: '0 0 8px' }}>
                            50+
                          </h3>
                          <p style={{ fontSize: '14px', opacity: 0.8, margin: 0, fontWeight: '500' }}>
                            Hiring Partners
                          </p>
                        </div>
                      </Col>
                    </Row>

                    <div className="d-flex gap-3 flex-wrap">
                      <Button
                        as={Link}
                        to="/courses"
                        size="lg"
                        style={{
                          background: 'linear-gradient(135deg, #ffd700, #ffeb3b)',
                          border: 'none',
                          borderRadius: '8px',
                          padding: '14px 28px',
                          fontSize: '16px',
                          fontWeight: '600',
                          color: '#333',
                          boxShadow: '0 4px 20px rgba(255, 215, 0, 0.4)',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        Explore Bootcamps
                      </Button>
                      
                      <Button
                        as={Link}
                        to="/contact"
                        variant="outline-light"
                        size="lg"
                        style={{
                          borderRadius: '8px',
                          padding: '14px 28px',
                          fontSize: '16px',
                          fontWeight: '600',
                          border: '2px solid rgba(255, 255, 255, 0.3)',
                          background: 'rgba(255, 255, 255, 0.1)',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        Book Free Demo
                      </Button>
                    </div>
                  </motion.div>
                </Col>

                <Col lg={6} md={12} className="text-center mt-4 mt-lg-0">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: '20px',
                      padding: '40px 20px',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <div style={{ fontSize: '4rem', marginBottom: '20px' }}>💻</div>
                    <h3 style={{ color: 'white', fontSize: '1.5rem', fontWeight: '600', marginBottom: '12px' }}>
                      Start Your Journey Today
                    </h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1rem', marginBottom: '15px' }}>
                      From beginner to professional in just 12 weeks
                    </p>
                    <div style={{
                      color: '#ffd700',
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      fontStyle: 'italic',
                      textAlign: 'center',
                      background: 'rgba(255, 215, 0, 0.1)',
                      padding: '10px 15px',
                      borderRadius: '10px',
                      border: '1px solid rgba(255, 215, 0, 0.3)',
                      margin: '0 auto'
                    }}>
                      "Not just a Training. It's your next big step"
                    </div>
                  </motion.div>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>

          {/* Slide 2: What We Teach */}
          <Carousel.Item>
            <Container fluid className="px-4 py-5" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
              <Row className="align-items-center w-100 text-center text-white">
                <Col lg={12}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Badge 
                      className="mb-4"
                      style={{
                        fontSize: '16px',
                        padding: '10px 20px',
                        borderRadius: '25px',
                        background: 'rgba(255, 255, 255, 0.15)',
                        color: 'white',
                        fontWeight: '500'
                      }}
                    >
                      🎯 Industry-Ready Curriculum
                    </Badge>
                    
                    <h1 style={{
                      fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                      fontWeight: '700',
                      marginBottom: '24px',
                      color: 'white'
                    }}>
                      What We Teach
                    </h1>
                    
                    <p style={{
                      fontSize: '1.2rem',
                      opacity: 0.9,
                      marginBottom: '50px',
                      maxWidth: '700px',
                      margin: '0 auto 50px'
                    }}>
                      Master the most in-demand technologies with hands-on projects
                    </p>
                  </motion.div>

                  <Row>
                    {[
                      { icon: '⚛️', title: 'Full Stack Development', desc: 'React, Node.js, MongoDB, Express' },
                      { icon: '📊', title: 'Data Analytics', desc: 'Python, SQL, Power BI, Excel' },
                      { icon: '🤖', title: 'AI & Machine Learning', desc: 'Python, TensorFlow, PyTorch' },
                      { icon: '☁️', title: 'Cloud & DevOps', desc: 'AWS, Azure, Docker, Kubernetes' }
                    ].map((course, idx) => (
                      <Col md={6} lg={3} key={idx} className="mb-4">
                        <motion.div
                          style={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            borderRadius: '16px',
                            padding: '30px 20px',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            height: '100%',
                            transition: 'all 0.3s ease'
                          }}
                          whileHover={{ y: -5 }}
                        >
                          <div style={{ fontSize: '3rem', marginBottom: '16px' }}>
                            {course.icon}
                          </div>
                          <h4 style={{ 
                            fontSize: '1.2rem', 
                            fontWeight: '600', 
                            marginBottom: '12px',
                            color: '#ffd700'
                          }}>
                            {course.title}
                          </h4>
                          <p style={{ 
                            fontSize: '0.95rem', 
                            opacity: 0.8, 
                            margin: 0,
                            lineHeight: '1.4'
                          }}>
                            {course.desc}
                          </p>
                        </motion.div>
                      </Col>
                    ))}
                  </Row>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>

          {/* Slide 3: Success Stories */}
          <Carousel.Item>
            <Container fluid className="px-4 py-5" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
              <Row className="align-items-center w-100">
                <Col lg={6} md={12} className="text-white">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Badge 
                      className="mb-3"
                      style={{
                        fontSize: '14px',
                        padding: '8px 16px',
                        borderRadius: '25px',
                        background: 'rgba(255, 215, 0, 0.2)',
                        color: '#ffd700',
                        fontWeight: '500'
                      }}
                    >
                      ⭐ Success Stories
                    </Badge>
                    
                    <h1 style={{
                      fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                      fontWeight: '700',
                      lineHeight: '1.2',
                      marginBottom: '24px'
                    }}>
                      Join Our Alumni at
                      <span style={{ display: 'block', color: '#ffd700' }}>
                        Top Companies
                      </span>
                    </h1>
                    
                    <p style={{
                      fontSize: '1.2rem',
                      lineHeight: '1.6',
                      opacity: 0.9,
                      marginBottom: '40px'
                    }}>
                      Our graduates work at leading tech companies with an average salary increase of 150%.
                    </p>

                    <div style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '16px',
                      padding: '24px',
                      marginBottom: '30px',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}>
                      <div style={{ fontSize: '1.8rem', marginBottom: '8px' }}>💼</div>
                      <h4 style={{ color: '#ffd700', marginBottom: '8px', fontSize: '1.3rem' }}>
                        Career Transformation Guaranteed
                      </h4>
                      <p style={{ margin: '0 0 8px', opacity: 0.8, fontStyle: 'italic' }}>
                        "From zero coding experience to landing my dream job at a Fortune 500 company!"
                      </p>
                      <small style={{ opacity: 0.6 }}>- Sarah K., Full Stack Developer</small>
                    </div>

                    <Button
                      as={Link}
                      to="/contact"
                      size="lg"
                      style={{
                        background: 'linear-gradient(135deg, #ffd700, #ffeb3b)',
                        border: 'none',
                        borderRadius: '8px',
                        padding: '14px 28px',
                        fontSize: '16px',
                        fontWeight: '600',
                        color: '#333'
                      }}
                    >
                      Start Your Success Story
                    </Button>
                  </motion.div>
                </Col>

                <Col lg={6} md={12} className="mt-4 mt-lg-0">
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <Row>
                      {[
                        { company: 'Google', logo: '🔍', count: '12+ Alumni' },
                        { company: 'Microsoft', logo: '🪟', count: '18+ Alumni' },
                        { company: 'Amazon', logo: '📦', count: '25+ Alumni' },
                        { company: 'Netflix', logo: '🎬', count: '8+ Alumni' }
                      ].map((item, idx) => (
                        <Col md={6} key={idx} className="mb-3">
                          <motion.div
                            style={{
                              background: 'rgba(255, 255, 255, 0.1)',
                              borderRadius: '16px',
                              padding: '20px',
                              border: '1px solid rgba(255, 255, 255, 0.1)',
                              textAlign: 'center'
                            }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>
                              {item.logo}
                            </div>
                            <h5 style={{ color: 'white', marginBottom: '4px', fontSize: '1.1rem' }}>
                              {item.company}
                            </h5>
                            <small style={{ color: '#ffd700', fontWeight: '600' }}>
                              {item.count}
                            </small>
                          </motion.div>
                        </Col>
                      ))}
                    </Row>
                  </motion.div>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
        </Carousel>

        {/* Custom Carousel Indicators */}
        <div style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '12px',
          zIndex: 10
        }}>
          {carouselSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: 'none',
                background: activeSlide === idx 
                  ? 'linear-gradient(135deg, #ffd700, #ffeb3b)' 
                  : 'rgba(255, 255, 255, 0.5)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: activeSlide === idx 
                  ? '0 0 20px rgba(255, 215, 0, 0.6)' 
                  : 'none'
              }}
            />
          ))}
        </div>
      </div>

      {/* Enhanced Course Section */}
      <section className="py-5 bg-light">
        <Container>
          <motion.div
            className="text-center mb-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2
              className="display-4 mb-3"
              style={{
                background: "linear-gradient(135deg, #667eea, #764ba2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontWeight: "800"
              }}
            >
              Popular Courses
            </h2>
            <p className="lead text-muted">
              Choose from our industry-leading courses designed to get you job-ready
            </p>
          </motion.div>
          
          <Courses />
        </Container>
      </section>

      <LatestUpdates />
      <DemoSession />
      <FAQ />
    </>
  );
};

export default Home;
