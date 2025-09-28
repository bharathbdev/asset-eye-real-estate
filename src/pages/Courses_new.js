import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Badge, Accordion, Modal } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const courseCategories = {
    "Full Stack Development": [
      {
        id: "mern",
        title: "MERN Stack",
        icon: "⚛️",
        duration: "4 months",
        topics: ["MongoDB", "Express.js", "React.js", "Node.js", "JavaScript", "HTML/CSS", "Bootstrap"],
        description: "Complete MERN stack development with hands-on projects",
        hours: "120 hours"
      },
      {
        id: "mean",
        title: "MEAN Stack", 
        icon: "🅰️",
        duration: "4 months",
        topics: ["MongoDB", "Express.js", "Angular", "Node.js", "TypeScript", "HTML/CSS", "Bootstrap"],
        description: "Full MEAN stack development with enterprise applications",
        hours: "120 hours"
      },
      {
        id: "html-css",
        title: "HTML CSS Bootstrap",
        icon: "🎨",
        duration: "2 months",
        topics: ["HTML5", "CSS3", "Bootstrap", "Responsive Design", "SASS", "JavaScript Basics"],
        description: "Frontend fundamentals with responsive design",
        hours: "80 hours"
      }
    ],
    "Programming Languages": [
      {
        id: "javascript",
        title: "JavaScript & TypeScript",
        icon: "📜",
        duration: "3 months",
        topics: ["ES6+", "TypeScript", "DOM Manipulation", "Async Programming", "APIs", "Modern JS"],
        description: "Complete JavaScript and TypeScript mastery",
        hours: "100 hours"
      },
      {
        id: "nodejs",
        title: "Node.js",
        icon: "🟢",
        duration: "2 months", 
        topics: ["Server-side JavaScript", "Express.js", "APIs", "Authentication", "File System", "NPM"],
        description: "Backend development with Node.js",
        hours: "80 hours"
      },
      {
        id: "python",
        title: "Python",
        icon: "🐍",
        duration: "3 months",
        topics: ["Python Basics", "OOP", "Data Structures", "Libraries", "Web Scraping", "APIs"],
        description: "Complete Python programming from basics to advanced",
        hours: "100 hours"
      }
    ],
    "Database Technologies": [
      {
        id: "sql",
        title: "SQL",
        icon: "🗄️",
        duration: "2 months",
        topics: ["MySQL", "PostgreSQL", "Queries", "Joins", "Stored Procedures", "Database Design"],
        description: "Complete database management with SQL",
        hours: "70 hours"
      },
      {
        id: "mongodb",
        title: "MongoDB",
        icon: "🍃",
        duration: "1.5 months",
        topics: ["NoSQL Concepts", "CRUD Operations", "Aggregation", "Indexing", "Mongoose", "Atlas"],
        description: "NoSQL database management with MongoDB",
        hours: "50 hours"
      }
    ],
    "Data Analytics & BI": [
      {
        id: "powerbi",
        title: "Power BI",
        icon: "📊",
        duration: "2 months",
        topics: ["Data Modeling", "DAX", "Visualizations", "Reports", "Dashboards", "Power Query", "SQL", "VBA"],
        description: "Business Intelligence with Microsoft Power BI, SQL, and VBA automation",
        hours: "70 hours"
      },
      {
        id: "excel",
        title: "Excel & Advanced Excel",
        icon: "📈",
        duration: "2 months",
        topics: ["Advanced Formulas", "Pivot Tables", "Macros", "VBA", "Data Analysis", "Charts"],
        description: "Complete Excel mastery for data analysis",
        hours: "60 hours"
      },
      {
        id: "tableau",
        title: "Tableau",
        icon: "📋",
        duration: "2 months",
        topics: ["Data Visualization", "Dashboards", "Calculated Fields", "Parameters", "Stories", "Server"],
        description: "Data visualization and analytics with Tableau",
        hours: "70 hours"
      }
    ],
    "Testing & Quality Assurance": [
      {
        id: "manual-testing",
        title: "Manual Testing",
        icon: "🔍",
        duration: "2 months",
        topics: ["Testing Fundamentals", "Test Cases", "Bug Reporting", "SDLC", "STLC", "Agile Testing"],
        description: "Complete manual testing methodology",
        hours: "80 hours"
      },
      {
        id: "selenium",
        title: "Selenium Automation",
        icon: "🤖",
        duration: "3 months",
        topics: ["Selenium WebDriver", "TestNG", "Page Object Model", "Data Driven Testing", "Jenkins", "Git"],
        description: "Automated testing with Selenium",
        hours: "100 hours"
      },
      {
        id: "cypress",
        title: "Cypress Testing",
        icon: "🌲",
        duration: "2 months",
        topics: ["Cypress Framework", "API Testing", "E2E Testing", "Component Testing", "CI/CD", "Debugging"],
        description: "Modern testing with Cypress framework",
        hours: "80 hours"
      }
    ],
    "AI & Modern Tools": [
      {
        id: "ai-toolkit",
        title: "AI Tool Kit for Professionals",
        icon: "🤖",
        duration: "1.5 months",
        topics: ["ChatGPT", "GitHub Copilot", "AI Writing Tools", "Automation Tools", "Productivity Hacks", "AI Integration"],
        description: "Master AI tools to boost your productivity and stay ahead in the digital age - Any degree welcome!",
        hours: "45 hours"
      }
    ],
    "Career Development": [
      {
        id: "aptitude",
        title: "Aptitude",
        icon: "🧠",
        duration: "1 month",
        topics: ["Quantitative Aptitude", "Logical Reasoning", "Verbal Ability", "Problem Solving", "Time Management"],
        description: "Complete aptitude training for placements",
        hours: "40 hours"
      },
      {
        id: "dsa",
        title: "DSA & Algorithms",
        icon: "🔢",
        duration: "3 months",
        topics: ["Data Structures", "Algorithms", "Time Complexity", "Problem Solving", "Coding Practice", "Interview Prep"],
        description: "Data Structures and Algorithms for technical interviews",
        hours: "120 hours"
      },
      {
        id: "coding-problems",
        title: "Coding Problems",
        icon: "💻",
        duration: "2 months",
        topics: ["LeetCode", "HackerRank", "Problem Patterns", "Optimization", "Debugging", "Code Review"],
        description: "Intensive coding problem solving practice",
        hours: "80 hours"
      },
      {
        id: "resume-prep",
        title: "Resume Preparation",
        icon: "📄",
        duration: "2 weeks",
        topics: ["Resume Writing", "ATS Optimization", "Portfolio Development", "LinkedIn Profile", "Cover Letters"],
        description: "Professional resume and profile development",
        hours: "20 hours"
      },
      {
        id: "mock-interviews",
        title: "Mock Interviews",
        icon: "🎤",
        duration: "1 month",
        topics: ["Technical Interviews", "HR Rounds", "Behavioral Questions", "Communication Skills", "Confidence Building"],
        description: "Complete interview preparation with mock sessions",
        hours: "30 hours"
      }
    ]
  };

  const handleCourseClick = (course) => {
    // Navigate to specific course page based on course ID
    const courseRoutes = {
      "mern": "/courses/mern-stack",
      "mean": "/courses/mean-stack", 
      "html-css": "/courses/html-css-bootstrap",
      "javascript": "/courses/javascript-typescript",
      "nodejs": "/courses/nodejs",
      "python": "/courses/python",
      "sql": "/courses/sql",
      "mongodb": "/courses/mongodb",
      "powerbi": "/courses/power-bi",
      "excel": "/courses/excel",
      "tableau": "/courses/tableau",
      "manual-testing": "/courses/manual-testing",
      "selenium": "/courses/selenium-automation",
      "cypress": "/courses/cypress-testing",
      "ai-toolkit": "/courses/ai-toolkit",
      "aptitude": "/courses/aptitude",
      "dsa": "/courses/data-structures-algorithms",
      "coding-problems": "/courses/coding-problems",
      "resume-prep": "/courses/resume-preparation",
      "mock-interviews": "/courses/mock-interviews"
    };

    const routePath = courseRoutes[course.id];
    if (routePath) {
      navigate(routePath, { state: { course } });
    } else {
      // Fallback to modal for courses without dedicated pages
      setSelectedCourse(course);
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCourse(null);
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="courses-hero py-5" style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white'
      }}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h1 className="display-4 mb-3">Our Training Courses</h1>
            <p className="lead">
              Comprehensive courses designed to make you industry-ready
            </p>
            <div className="mt-4">
              <Badge bg="warning" text="dark" className="me-2 p-2">100% Job Guarantee</Badge>
              <Badge bg="success" className="me-2 p-2">Small Batch Size (Max 15)</Badge>
              <Badge bg="info" className="me-2 p-2">1:1 Mentoring Available</Badge>
              <Badge bg="danger" className="p-2">10 Days Money Back Guarantee</Badge>
            </div>
          </motion.div>
        </Container>
      </div>

      {/* Course Categories */}
      <section className="py-5">
        <Container>
          <Accordion defaultActiveKey="0">
            {Object.entries(courseCategories).map(([category, courses], categoryIndex) => (
              <Accordion.Item eventKey={categoryIndex.toString()} key={categoryIndex}>
                <Accordion.Header>
                  <h4 className="mb-0">{category}</h4>
                </Accordion.Header>
                <Accordion.Body>
                  <Row className="g-4">
                    {courses.map((course, courseIndex) => (
                      <Col xl={4} lg={6} md={6} sm={12} className="d-flex" key={course.id}>
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: courseIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="w-100"
                        >
                          <Card 
                            className="h-100 shadow-sm course-card border-0" 
                            style={{
                              cursor: 'pointer',
                              transition: 'all 0.3s ease',
                              background: 'linear-gradient(145deg, #ffffff, #f8f9ff)',
                              border: '1px solid rgba(102, 126, 234, 0.1)',
                              borderRadius: '15px',
                              overflow: 'hidden'
                            }}
                            onClick={() => handleCourseClick(course)}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = 'translateY(-8px)';
                              e.currentTarget.style.boxShadow = '0 15px 35px rgba(102, 126, 234, 0.2)';
                              e.currentTarget.style.borderColor = '#667eea';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = 'translateY(0)';
                              e.currentTarget.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
                              e.currentTarget.style.borderColor = 'rgba(102, 126, 234, 0.1)';
                            }}
                          >
                            <div style={{
                              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                              padding: '20px 20px 0',
                              textAlign: 'center',
                              position: 'relative'
                            }}>
                              <div style={{ 
                                fontSize: '3.5rem',
                                marginBottom: '10px',
                                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                              }}>
                                {course.icon}
                              </div>
                              <Card.Title 
                                style={{ 
                                  color: '#fff', 
                                  fontWeight: '600',
                                  fontSize: '1.2rem',
                                  marginBottom: '10px',
                                  textShadow: '0 1px 2px rgba(0,0,0,0.1)'
                                }}
                              >
                                {course.title}
                              </Card.Title>
                            </div>
                            
                            <Card.Body className="d-flex flex-column" style={{ padding: '20px' }}>
                              <Card.Text 
                                style={{ 
                                  color: '#666', 
                                  fontSize: '14px',
                                  lineHeight: '1.5',
                                  marginBottom: '15px',
                                  flex: '0 0 auto'
                                }}
                              >
                                {course.description}
                              </Card.Text>
                              
                              <div className="mb-3" style={{ flex: '0 0 auto' }}>
                                <div className="d-flex justify-content-center gap-2 mb-2">
                                  <Badge 
                                    bg="warning" 
                                    text="dark"
                                    style={{ 
                                      fontSize: '11px', 
                                      padding: '5px 10px',
                                      borderRadius: '15px'
                                    }}
                                  >
                                    ⏱️ {course.duration}
                                  </Badge>
                                  <Badge 
                                    bg="info"
                                    style={{ 
                                      fontSize: '11px', 
                                      padding: '5px 10px',
                                      borderRadius: '15px'
                                    }}
                                  >
                                    📖 {course.hours}
                                  </Badge>
                                </div>
                              </div>

                              <div className="mb-3" style={{ flex: '1 1 auto' }}>
                                <small style={{ 
                                  color: '#888', 
                                  fontSize: '12px',
                                  fontWeight: '600',
                                  textTransform: 'uppercase',
                                  letterSpacing: '0.5px'
                                }}>
                                  Key Topics:
                                </small>
                                <div className="d-flex flex-wrap gap-1 mt-1">
                                  {course.topics.slice(0, 3).map((topic, i) => (
                                    <Badge 
                                      key={i} 
                                      bg="secondary" 
                                      className="small"
                                      style={{ 
                                        fontSize: '10px',
                                        padding: '3px 8px',
                                        borderRadius: '10px',
                                        background: 'linear-gradient(45deg, #6c757d, #5a6268)',
                                        border: 'none'
                                      }}
                                    >
                                      {topic}
                                    </Badge>
                                  ))}
                                  {course.topics.length > 3 && (
                                    <Badge 
                                      bg="secondary" 
                                      className="small"
                                      style={{ 
                                        fontSize: '10px',
                                        padding: '3px 8px',
                                        borderRadius: '10px',
                                        background: 'linear-gradient(45deg, #28a745, #20c997)',
                                        border: 'none'
                                      }}
                                    >
                                      +{course.topics.length - 3} more
                                    </Badge>
                                  )}
                                </div>
                              </div>

                              <div style={{ marginTop: 'auto' }}>
                                <Button 
                                  variant="warning" 
                                  size="sm"
                                  className="w-100"
                                  style={{
                                    background: 'linear-gradient(135deg, #ffd700, #ffeb3b)',
                                    border: 'none',
                                    borderRadius: '25px',
                                    padding: '8px 15px',
                                    fontSize: '13px',
                                    fontWeight: '600',
                                    color: '#333',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px',
                                    transition: 'all 0.3s ease'
                                  }}
                                  onMouseEnter={(e) => {
                                    e.target.style.background = 'linear-gradient(135deg, #ffeb3b, #ffd700)';
                                    e.target.style.transform = 'scale(1.05)';
                                  }}
                                  onMouseLeave={(e) => {
                                    e.target.style.background = 'linear-gradient(135deg, #ffd700, #ffeb3b)';
                                    e.target.style.transform = 'scale(1)';
                                  }}
                                >
                                  📋 View Details
                                </Button>
                              </div>
                            </Card.Body>
                          </Card>
                        </motion.div>
                      </Col>
                    ))}
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Container>
      </section>

      {/* Course Details Modal */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedCourse?.icon} {selectedCourse?.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedCourse && (
            <div>
              <p className="lead">{selectedCourse.description}</p>
              
              <Row>
                <Col md={6}>
                  <h6>Duration:</h6>
                  <p>{selectedCourse.duration}</p>
                  
                  <h6>Total Hours:</h6>
                  <p>{selectedCourse.hours}</p>
                </Col>
                <Col md={6}>
                  <h6>Training Mode:</h6>
                  <p>Online & Offline Available</p>
                  
                  <h6>Batch Size:</h6>
                  <p>Maximum 15 students</p>
                </Col>
              </Row>
              
              <h6>Topics Covered:</h6>
              <div className="d-flex flex-wrap gap-2 mb-3">
                {selectedCourse.topics.map((topic, i) => (
                  <Badge key={i} bg="primary">
                    {topic}
                  </Badge>
                ))}
              </div>
              
              <div className="alert alert-info">
                <h6>Special Features:</h6>
                <ul className="mb-0">
                  <li>1:1 mentoring sessions available</li>
                  <li>Real-time project work</li>
                  <li>Industry expert trainers</li>
                  <li>Flexible payment options</li>
                  <li>Job placement assistance</li>
                </ul>
              </div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="warning" as={Link} to="/contact" onClick={handleCloseModal}>
            Enroll Now
          </Button>
        </Modal.Footer>
      </Modal>

      {/* USP Section */}
      <section className="py-5 bg-light">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-center mb-5">Why Choose Code2Dream?</h2>
            <Row>
              <Col md={4} className="mb-4 text-center">
                <div style={{ fontSize: '3rem' }} className="mb-3">👨‍🏫</div>
                <h5>Small Batch Training</h5>
                <p>Maximum 15 students per batch for personalized attention, unlike other institutes with 50+ students</p>
              </Col>
              <Col md={4} className="mb-4 text-center">
                <div style={{ fontSize: '3rem' }} className="mb-3">🎯</div>
                <h5>Quality Over Quantity</h5>
                <p>We focus on quality education with 1:1 mentoring sessions and real industry project experience</p>
              </Col>
              <Col md={4} className="mb-4 text-center">
                <div style={{ fontSize: '3rem' }} className="mb-3">💰</div>
                <h5>Flexible Payment</h5>
                <p>Pay only 30% initially, rest according to syllabus completion. 10 days money back guarantee</p>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* Target Roles Section */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5">Roles We Target</h2>
          <Row className="text-center">
            <Col md={6} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <div style={{ fontSize: '3rem' }} className="mb-3">💻</div>
                  <h4>Full Stack Developer</h4>
                  <p>Both Frontend and Backend development roles in top companies</p>
                  <Badge bg="success">High Demand</Badge>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <div style={{ fontSize: '3rem' }} className="mb-3">📊</div>
                  <h4>Data Analyst</h4>
                  <p>Data analysis, reporting, and business intelligence roles</p>
                  <Badge bg="success">Growing Field</Badge>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          
          <div className="text-center mt-4">
            <div className="alert alert-info">
              <h5>🎓 Any Degree Welcome!</h5>
              <p className="mb-0">
                We welcome students from ANY branch - Engineering, Arts, Commerce, Science. 
                Your degree doesn't matter, your passion for coding does!
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Courses;