import React, { useRef, useState } from "react";
import { Container, Form, Button, Row, Col, Card, ButtonGroup, Badge } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion, AnimatePresence } from "framer-motion";
import { sendMail } from "./sendMail";

// Modern form styling
const styles = `
  .modern-input {
    background: linear-gradient(145deg, #2a2a2a, #1e1e1e) !important;
    border: 2px solid #333 !important;
    border-radius: 15px !important;
    color: #fff !important;
    padding: 15px 20px !important;
    font-size: 16px !important;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2) !important;
  }
  
  .modern-input:focus {
    border-color: #ffd700 !important;
    box-shadow: 0 0 0 0.2rem rgba(255, 215, 0, 0.25), 0 8px 25px rgba(255, 215, 0, 0.2) !important;
    background: linear-gradient(145deg, #2d2d2d, #212121) !important;
    transform: translateY(-2px) !important;
  }
  
  .modern-input:hover {
    border-color: #555 !important;
    transform: translateY(-1px) !important;
    box-shadow: 0 6px 20px rgba(0,0,0,0.3) !important;
  }

  .modern-select {
    background: linear-gradient(145deg, #2a2a2a, #1e1e1e) !important;
    border: 2px solid #333 !important;
    border-radius: 15px !important;
    color: #fff !important;
    padding: 15px 20px !important;
    transition: all 0.3s ease !important;
    cursor: pointer !important;
  }

  .modern-select:focus, .modern-select:hover {
    border-color: #ffd700 !important;
    box-shadow: 0 0 0 0.2rem rgba(255, 215, 0, 0.15) !important;
    transform: translateY(-1px) !important;
  }

  .modern-textarea {
    background: linear-gradient(145deg, #2a2a2a, #1e1e1e) !important;
    border: 2px solid #333 !important;
    border-radius: 15px !important;
    color: #fff !important;
    padding: 20px !important;
    font-size: 16px !important;
    transition: all 0.3s ease !important;
    resize: vertical !important;
    min-height: 120px !important;
  }

  .modern-textarea:focus {
    border-color: #ffd700 !important;
    box-shadow: 0 0 0 0.2rem rgba(255, 215, 0, 0.15), 0 8px 25px rgba(0,0,0,0.3) !important;
  }

  .submit-btn {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
    border: none !important;
    border-radius: 50px !important;
    padding: 18px 40px !important;
    font-size: 18px !important;
    font-weight: 600 !important;
    color: white !important;
    text-transform: uppercase !important;
    letter-spacing: 1px !important;
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4) !important;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
  }

  .submit-btn:hover {
    transform: translateY(-3px) scale(1.02) !important;
    box-shadow: 0 15px 35px rgba(102, 126, 234, 0.6) !important;
    background: linear-gradient(135deg, #764ba2 0%, #667eea 100%) !important;
    color: #fff !important;
  }

  .course-selection {
    background: linear-gradient(145deg, #2a2a2a, #1e1e1e);
    border: 2px solid #333;
    border-radius: 15px;
    padding: 20px;
    transition: all 0.3s ease;
  }

  .course-selection:hover {
    border-color: #555;
    box-shadow: 0 8px 25px rgba(0,0,0,0.3);
  }

  .course-category {
    background: linear-gradient(135deg, #444, #333);
    border: 1px solid #555;
    border-radius: 10px;
    padding: 12px 15px;
    margin: 5px;
    cursor: pointer;
    transition: all 0.2s ease;
    color: #fff;
    display: inline-block;
  }

  .course-category:hover {
    background: linear-gradient(135deg, #ffd700, #ffeb3b);
    color: #000;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 215, 0, 0.3);
  }

  .course-category.selected {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: #fff;
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
  }

  .subcourse-item {
    background: #333;
    color: #fff;
    border: 1px solid #444;
    border-radius: 8px;
    padding: 8px 12px;
    margin: 3px;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.2s ease;
    display: inline-block;
  }

  .subcourse-item:hover {
    background: #ffd700;
    color: #000;
    transform: scale(1.05);
  }

  .subcourse-item.selected {
    background: #667eea;
    color: #fff;
    box-shadow: 0 3px 10px rgba(102, 126, 234, 0.3);
  }

  .custom-placeholder::placeholder {
    color: #bbb !important;
    opacity: 1;
    font-style: italic;
  }
  .custom-placeholder::-webkit-input-placeholder {
    color: #bbb !important;
  }
  .custom-placeholder::-moz-placeholder {
    color: #bbb !important;
  }
  .custom-placeholder:-ms-input-placeholder {
    color: #bbb !important;
  }
`;

// Hierarchical course structure
const courseCategories = {
  "Programming Languages": {
    icon: "💻",
    subcourses: ["JavaScript", "TypeScript", "Python", "Java", "C++", "React.js", "Angular", "Vue.js"]
  },
  "Full Stack Development": {
    icon: "🚀",
    subcourses: ["MERN Stack", "MEAN Stack", "Django + React", "Spring Boot + React"]
  },
  "Backend Development": {
    icon: "⚙️", 
    subcourses: ["Node.js", "Express.js", "MongoDB", "SQL", "PostgreSQL", "REST APIs"]
  },
  "Data Analytics": {
    icon: "📊",
    subcourses: ["Power BI", "Excel & Advanced Excel", "Tableau", "Python for Data", "SQL Analytics"]
  },
  "Testing & QA": {
    icon: "🧪",
    subcourses: ["Manual Testing", "Selenium Automation", "Cypress Testing", "API Testing"]
  },
  "Frontend Development": {
    icon: "🎨",
    subcourses: ["HTML CSS Bootstrap", "React.js", "JavaScript", "Responsive Design"]
  },
  "Career Skills": {
    icon: "🎯",
    subcourses: ["DSA & Algorithms", "Coding Problems", "Aptitude", "Resume Preparation", "Mock Interviews"]
  }
};

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}

const Contact = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const messageRef = useRef();
  const experienceRef = useRef();
  const joiningDateRef = useRef();

  const [trainingMode, setTrainingMode] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);

  // Toggle category selection
  const toggleCategory = (category) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        // Remove category and its subcourses
        const newSelected = prev.filter(cat => cat !== category);
        setSelectedCourses(prevCourses => 
          prevCourses.filter(course => 
            !courseCategories[category].subcourses.includes(course)
          )
        );
        return newSelected;
      } else {
        return [...prev, category];
      }
    });
  };

  // Toggle individual course
  const toggleCourse = (course, category) => {
    setSelectedCourses(prev => {
      if (prev.includes(course)) {
        return prev.filter(c => c !== course);
      } else {
        // Auto-select category if not selected
        if (!selectedCategories.includes(category)) {
          setSelectedCategories(prevCat => [...prevCat, category]);
        }
        return [...prev, course];
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = nameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const phone = phoneRef.current.value.trim();
    const message = messageRef.current.value.trim();
    const experience = experienceRef.current.value;
    const joiningDate = joiningDateRef.current.value;

    // Use new course selection
    const selectedCoursesText = selectedCourses.length > 0 
      ? selectedCourses.join(', ') 
      : '';

    if (!name || !email || !phone || !trainingMode || !selectedCourses.length || !experience) {
      toast.error("Please fill all required fields and select at least one course.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      toast.error("Please enter a valid 10-digit phone number.");
      return;
    }

    const formData = {
      name,
      email,
      phoneNumber: phone,
      message: `Training Mode: ${trainingMode}\nSelected Courses: ${selectedCoursesText}\nExperience: ${experience}\nPreferred Joining Date: ${joiningDate}\n\nMessage: ${message}`,
      subject: "New Course Enquiry - Code2Dream",
    };

    try {
      await sendMail(formData);
      toast.success("Enquiry sent successfully! We'll contact you soon.");
      // Reset form
      nameRef.current.value = "";
      phoneRef.current.value = "";
      emailRef.current.value = "";
      messageRef.current.value = "";
      experienceRef.current.value = "";
      joiningDateRef.current.value = "";
      setTrainingMode('');
      setSelectedCategories([]);
      setSelectedCourses([]);
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send enquiry. Please try again or contact us directly.");
    }
  };

  return (
    <section
      style={{
        padding: "60px 0",
        background: "linear-gradient(135deg, #1a1a1a, #2d2d2d)",
        minHeight: "100vh",
        color: "#fff",
      }}
    >
      <ToastContainer />
      <Container>
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-5" 
          style={{ 
            color: "#ffc107",
            fontSize: "3rem",
            fontWeight: "800",
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)"
          }}
        >
          Contact Code2Dream Institute
        </motion.h2>
        
        {/* Contact Info Section */}
        <Row className="mb-5">
          <Col md={3} className="mb-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="h-100" style={{ backgroundColor: "#222", border: "1px solid #333", borderRadius: "12px" }}>
                <Card.Body className="text-center d-flex flex-column">
                  <div className="mb-3" style={{ fontSize: "3rem" }}>📍</div>
                  <h5 style={{ color: "#ffc107" }}>Our Location</h5>
                  <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                    <div className="text-center" style={{ color: "#ccc", lineHeight: "1.6" }}>
                      <div style={{ fontSize: "15px", fontWeight: "500" }}>#129 Rajeevgandhi Nagar</div>
                      <div style={{ fontSize: "15px", fontWeight: "500" }}>Laggere, Bangalore - 560058</div>
                      <small style={{ fontSize: "13px", color: "#999", marginTop: "8px", display: "block" }}>(Only Bangalore Branch)</small>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
          
          <Col md={3} className="mb-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="h-100" style={{ backgroundColor: "#222", border: "1px solid #333", borderRadius: "12px" }}>
                <Card.Body className="text-center d-flex flex-column">
                  <div className="mb-3" style={{ fontSize: "3rem" }}>📞</div>
                  <h5 style={{ color: "#ffc107" }}>Call Us</h5>
                  <p className="flex-grow-1 d-flex align-items-center justify-content-center" style={{ color: "#ccc" }}>
                    +91 9538802191<br />
                    +91 9620044797<br />
                    +91 9986740534<br />
                    Mon-Sun: 9AM-10PM
                  </p>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
          
          <Col md={3} className="mb-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="h-100" style={{ backgroundColor: "#222", border: "1px solid #333", borderRadius: "12px" }}>
                <Card.Body className="text-center d-flex flex-column">
                  <div className="mb-3" style={{ fontSize: "3rem" }}>✉️</div>
                  <h5 style={{ color: "#ffc107" }}>Email Us</h5>
                  <p className="flex-grow-1 d-flex align-items-center justify-content-center" style={{ color: "#ccc" }}>
                    code2dream@gmail.com<br />
                    Quick Response Guaranteed
                  </p>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
          
          <Col md={3} className="mb-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="h-100" style={{ backgroundColor: "#222", border: "1px solid #333", borderRadius: "12px" }}>
                <Card.Body className="text-center d-flex flex-column">
                  <div className="mb-3" style={{ fontSize: "3rem" }}>⏰</div>
                  <h5 style={{ color: "#ffc107" }}>Office Hours</h5>
                  <p className="flex-grow-1 d-flex align-items-center justify-content-center" style={{ color: "#ccc" }}>
                    Monday - Sunday<br />
                    9:00 AM - 10:00 PM<br />
                    <small>Including Holidays</small>
                  </p>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>

        {/* Main Contact Form */}
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card
                style={{
                  backgroundColor: "#222",
                  border: "1px solid #333",
                  borderRadius: "12px",
                }}
              >
                <Card.Body>
                  <h4 className="text-center mb-4" style={{ color: "#ffc107", fontSize: "2.5rem", fontWeight: "700" }}>
                    🎯 Course Enquiry Form
                  </h4>
                  
                  <Form onSubmit={handleSubmit}>
                    {/* Training Mode Selection */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <Form.Group className="mb-4">
                        <Form.Label style={{ color: "#ffd700", fontWeight: "600", fontSize: "18px" }}>
                          🎓 Training Mode *
                        </Form.Label>
                        <div>
                          <ButtonGroup className="w-100">
                            <Button
                              variant={trainingMode === 'online' ? 'warning' : 'outline-warning'}
                              onClick={() => setTrainingMode('online')}
                              type="button"
                              style={{ 
                                padding: "15px",
                                fontSize: "16px",
                                fontWeight: "600",
                                borderRadius: "10px 0 0 10px"
                              }}
                            >
                              💻 Online Training
                            </Button>
                            <Button
                              variant={trainingMode === 'offline' ? 'warning' : 'outline-warning'}
                              onClick={() => setTrainingMode('offline')}
                              type="button"
                              style={{ 
                                padding: "15px",
                                fontSize: "16px",
                                fontWeight: "600",
                                borderRadius: "0 10px 10px 0"
                              }}
                            >
                              🏫 Offline Training
                            </Button>
                          </ButtonGroup>
                        </div>
                      </Form.Group>
                    </motion.div>

                    {/* Personal Information */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <Row>
                        <Col md={6}>
                          <Form.Group controlId="formName" className="mb-4">
                            <Form.Label style={{ color: "#ffd700", fontWeight: "600", fontSize: "16px" }}>
                              ✨ Your Name *
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter your full name..."
                              ref={nameRef}
                              className="modern-input custom-placeholder"
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group controlId="formPhone" className="mb-4">
                            <Form.Label style={{ color: "#ffd700", fontWeight: "600", fontSize: "16px" }}>
                              📱 Your Phone Number *
                            </Form.Label>
                            <Form.Control
                              type="tel"
                              placeholder="Enter 10-digit mobile number..."
                              ref={phoneRef}
                              className="modern-input custom-placeholder"
                            />
                          </Form.Group>
                        </Col>
                      </Row>

                      <Form.Group controlId="formEmail" className="mb-4">
                        <Form.Label style={{ color: "#ffd700", fontWeight: "600", fontSize: "16px" }}>
                          ✉️ Email Address *
                        </Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter your email address..."
                          ref={emailRef}
                          className="modern-input custom-placeholder"
                        />
                      </Form.Group>
                    </motion.div>

                    {/* Experience and Date */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <Row>
                        <Col md={6}>
                          <Form.Group controlId="formExperience" className="mb-4">
                            <Form.Label style={{ color: "#ffd700", fontWeight: "600", fontSize: "16px" }}>
                              💼 Experience Level *
                            </Form.Label>
                            <Form.Select
                              ref={experienceRef}
                              className="modern-select"
                            >
                              <option value="">Select your experience level...</option>
                              <option value="Fresher">🌱 Fresher (No experience)</option>
                              <option value="0-1 years">📈 0-1 years experience</option>
                              <option value="1-3 years">🚀 1-3 years experience</option>
                              <option value="3-5 years">⭐ 3-5 years experience</option>
                              <option value="5+ years">🏆 5+ years experience</option>
                              <option value="Career Gap">🔄 Career Gap (Returning to work)</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group controlId="formJoiningDate" className="mb-4">
                            <Form.Label style={{ color: "#ffd700", fontWeight: "600", fontSize: "16px" }}>
                              📅 Preferred Joining Date
                            </Form.Label>
                            <Form.Control
                              type="date"
                              ref={joiningDateRef}
                              className="modern-input"
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                    </motion.div>

                    {/* Modern Course Selection */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="mb-4"
                    >
                      <Form.Label style={{ color: "#ffd700", fontWeight: "600", fontSize: "18px", marginBottom: "15px" }}>
                        🎯 Select Your Courses * 
                        <small style={{ color: "#ccc", fontSize: "14px", display: "block", marginTop: "5px" }}>
                          Choose categories first, then select specific courses within each category
                        </small>
                      </Form.Label>
                      
                      <div className="course-selection">
                        {/* Course Categories */}
                        <div className="mb-3">
                          <h6 style={{ color: "#fff", marginBottom: "10px" }}>Course Categories:</h6>
                          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                            {Object.entries(courseCategories).map(([category, data]) => (
                              <div
                                key={category}
                                className={`course-category ${selectedCategories.includes(category) ? 'selected' : ''}`}
                                onClick={() => toggleCategory(category)}
                              >
                                {data.icon} {category}
                                {selectedCategories.includes(category) && (
                                  <Badge bg="light" text="dark" style={{ marginLeft: "8px", fontSize: "10px" }}>
                                    ✓
                                  </Badge>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Selected Categories and their Subcourses */}
                        <AnimatePresence>
                          {selectedCategories.map(category => (
                            <motion.div
                              key={category}
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mb-3"
                            >
                              <h6 style={{ color: "#ffd700", marginBottom: "8px" }}>
                                {courseCategories[category].icon} {category} Courses:
                              </h6>
                              <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginLeft: "15px" }}>
                                {courseCategories[category].subcourses.map(course => (
                                  <div
                                    key={course}
                                    className={`subcourse-item ${selectedCourses.includes(course) ? 'selected' : ''}`}
                                    onClick={() => toggleCourse(course, category)}
                                  >
                                    {course}
                                    {selectedCourses.includes(course) && ' ✓'}
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          ))}
                        </AnimatePresence>

                        {/* Selected Courses Summary */}
                        {selectedCourses.length > 0 && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="mt-3 p-3"
                            style={{ 
                              background: "linear-gradient(135deg, #667eea, #764ba2)", 
                              borderRadius: "10px",
                              color: "#fff"
                            }}
                          >
                            <h6 style={{ marginBottom: "8px" }}>📚 Your Selected Courses ({selectedCourses.length}):</h6>
                            <div style={{ fontSize: "14px" }}>
                              {selectedCourses.join(' • ')}
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>

                    {/* Message */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <Form.Group controlId="formMessage" className="mb-4">
                        <Form.Label style={{ color: "#ffd700", fontWeight: "600", fontSize: "16px" }}>
                          💬 Message/Additional Requirements
                        </Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={4}
                          placeholder="Tell us about your career goals, specific requirements, or any questions you may have..."
                          ref={messageRef}
                          className="modern-textarea custom-placeholder"
                        />
                      </Form.Group>
                    </motion.div>

                    {/* Submit Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 }}
                      className="d-grid"
                    >
                      <Button
                        type="submit"
                        size="lg"
                        className="submit-btn"
                        style={{ marginTop: "10px" }}
                      >
                        🚀 Submit Enquiry & Get Course Information
                      </Button>
                    </motion.div>
                  </Form>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>

        {/* Additional Info */}
        <Row className="mt-5">
          <Col className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <h4 style={{ color: "#ffc107", fontSize: "2rem", marginBottom: "30px" }}>Why Contact Us?</h4>
              <Row className="mt-4">
                <Col md={3} className="mb-3">
                  <p style={{ color: "#ccc", fontSize: "16px" }}>
                    <strong>🆓 Free Demo Session</strong><br />
                    Attend demo before enrollment
                  </p>
                </Col>
                <Col md={3} className="mb-3">
                  <p style={{ color: "#ccc", fontSize: "16px" }}>
                    <strong>📋 Course Details</strong><br />
                    Complete curriculum & structure
                  </p>
                </Col>
                <Col md={3} className="mb-3">
                  <p style={{ color: "#ccc", fontSize: "16px" }}>
                    <strong>💼 Placement Info</strong><br />
                    100% job guarantee details
                  </p>
                </Col>
                <Col md={3} className="mb-3">
                  <p style={{ color: "#ccc", fontSize: "16px" }}>
                    <strong>💰 Flexible Payment</strong><br />
                    30% upfront, rest as per progress
                  </p>
                </Col>
              </Row>
            </motion.div>
          </Col>
        </Row>

        {/* Job Guarantee Banner */}
        <Row className="mt-5">
          <Col>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4 }}
            >
              <Card style={{ backgroundColor: "#ffc107", color: "#000", borderRadius: "12px" }}>
                <Card.Body className="text-center">
                  <h4 className="mb-3" style={{ fontSize: "2rem", fontWeight: "bold" }}>🎯 We Offer 100% Job Guarantee Courses</h4>
                  <p className="mb-2" style={{ fontSize: "18px", fontWeight: "600" }}>
                    <strong>Any Degree / Diploma Candidates / Year GAP / Non-IT / Any Passed Outs Welcome!</strong>
                  </p>
                  <div className="mt-3">
                    <small style={{ fontSize: "16px" }}>
                      📞 For all inquiries: +91 9538802191<br />
                      ✉️ Email: code2dream@gmail.com
                    </small>
                  </div>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;