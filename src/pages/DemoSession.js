import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { motion } from "framer-motion";

const demoSessions = [
  {
    course: "MERN Stack",
    trainer: "Yogesh & Bharath",
    techStack: "React.js, Node.js, MongoDB",
    date: "Oct 5, 2025",
    time: "10:00 AM",
    meetingLink: "https://meet.google.com/abc-defg-hij",
    batchStart: "Oct 10, 2025",
    icon: "⚛️",
    color: "#61dafb"
  },
  {
    course: "Data Analyst",
    trainer: "Harish", 
    techStack: "PowerBI, SQL, Excel, VBA, Tableau",
    date: "Oct 7, 2025",
    time: "2:00 PM",
    meetingLink: "https://meet.google.com/xyz-uvwx-rst",
    batchStart: "Oct 12, 2025",
    icon: "�",
    color: "#f39c12"
  },
  {
    course: "Programming Languages",
    trainer: "Bharath",
    techStack: "JavaScript, TypeScript, OOPS, Coding Problems",
    date: "Oct 8, 2025", 
    time: "11:00 AM",
    meetingLink: "https://meet.google.com/def-ghij-klm",
    batchStart: "Oct 15, 2025",
    icon: "💻",
    color: "#e74c3c"
  },
  {
    course: "Aptitude",
    trainer: "Yogesh",
    techStack: "Aptitude, Verbal, Non-Verbal",
    date: "Oct 8, 2025", 
    time: "3:00 PM",
    meetingLink: "https://meet.google.com/apt-itud-xyz",
    batchStart: "Oct 15, 2025",
    icon: "🧠",
    color: "#9b59b6"
  },
];

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const DemoSession = () => (
  <section
    style={{ 
      background: "linear-gradient(135deg, #1a1a1a, #2d2d2d)",
      color: "#fff", 
      padding: "5rem 0" 
    }}
  >
    <Container>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-5"
      >
        <h2 
          style={{ 
            fontWeight: "900", 
            fontSize: "3rem",
            background: "linear-gradient(135deg, #ffd700, #ffeb3b)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            marginBottom: "15px"
          }}
        >
          📅 Upcoming Demo Sessions
        </h2>
        <p style={{ 
          fontSize: "1.2rem", 
          color: "#ccc", 
          maxWidth: "600px", 
          margin: "0 auto" 
        }}>
          Join our free demo sessions and get a taste of our comprehensive training programs
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Row>
          {demoSessions.map((session, index) => (
            <Col md={6} lg={3} key={index} className="mb-4">
              <motion.div 
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  style={{
                    background: `linear-gradient(145deg, #2a2a2a, #1e1e1e)`,
                    border: `2px solid ${session.color}`,
                    borderRadius: "20px",
                    minHeight: "420px",
                    boxShadow: `0 10px 30px ${session.color}20`,
                    overflow: "hidden",
                    position: "relative"
                  }}
                  className="h-100"
                >
                  {/* Decorative header strip */}
                  <div style={{
                    background: `linear-gradient(135deg, ${session.color}, ${session.color}80)`,
                    height: "8px",
                    width: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0
                  }}></div>
                  
                  <Card.Body className="p-4">
                    {/* Course Header */}
                    <div className="text-center mb-4">
                      <div style={{
                        fontSize: "3rem",
                        background: `linear-gradient(135deg, ${session.color}, #fff)`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        marginBottom: "10px"
                      }}>
                        {session.icon}
                      </div>
                      <h5 style={{ 
                        color: session.color, 
                        fontWeight: "700",
                        fontSize: "1.3rem",
                        marginBottom: "5px"
                      }}>
                        {session.course}
                      </h5>
                      <Badge 
                        style={{ 
                          backgroundColor: `${session.color}20`, 
                          color: session.color,
                          border: `1px solid ${session.color}`,
                          fontSize: "11px"
                        }}
                      >
                        By {session.trainer}
                      </Badge>
                    </div>

                    {/* Session Details */}
                    <div style={{ fontSize: "14px", color: "#ccc", lineHeight: "1.8" }}>
                      <div className="mb-3">
                        <div style={{ 
                          background: `linear-gradient(135deg, ${session.color}20, ${session.color}10)`,
                          padding: "15px",
                          borderRadius: "12px",
                          border: `1px solid ${session.color}30`
                        }}>
                          <div style={{ 
                            color: "#fff", 
                            fontWeight: "600", 
                            marginBottom: "8px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between"
                          }}>
                            <span>📅 {session.date}</span>
                            <Badge style={{ 
                              backgroundColor: session.color, 
                              color: "#fff",
                              fontSize: "10px"
                            }}>
                              {session.time}
                            </Badge>
                          </div>
                          <div style={{ fontSize: "13px", color: "#bbb" }}>
                            � <strong>Tech Stack:</strong><br/>
                            {session.techStack}
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-3">
                        <div style={{ 
                          padding: "12px",
                          borderRadius: "10px",
                          backgroundColor: "#333",
                          border: "1px solid #444"
                        }}>
                          <div style={{ color: "#ffd700", fontWeight: "600", marginBottom: "5px" }}>
                            🚀 Batch Starts: {session.batchStart}
                          </div>
                          <small style={{ color: "#999" }}>
                            Early bird discounts available!
                          </small>
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="mt-auto">
                      <Button
                        href={session.meetingLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          background: `linear-gradient(135deg, ${session.color}, ${session.color}cc)`,
                          border: "none",
                          borderRadius: "50px",
                          padding: "12px 20px",
                          width: "100%",
                          fontWeight: "600",
                          fontSize: "14px",
                          boxShadow: `0 5px 15px ${session.color}40`,
                          transition: "all 0.3s ease"
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.transform = "translateY(-2px)";
                          e.target.style.boxShadow = `0 8px 25px ${session.color}60`;
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = "translateY(0)";
                          e.target.style.boxShadow = `0 5px 15px ${session.color}40`;
                        }}
                      >
                        🎯 Join Demo Session
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-center mt-5"
      >
        <Card style={{
          background: "linear-gradient(135deg, #667eea, #764ba2)",
          border: "none",
          borderRadius: "20px",
          boxShadow: "0 15px 35px rgba(102, 126, 234, 0.3)"
        }}>
          <Card.Body className="p-4">
            <h4 style={{ color: "#fff", fontWeight: "700", marginBottom: "15px" }}>
              🎯 Can't Attend Live Demo?
            </h4>
            <p style={{ color: "#e0e0e0", fontSize: "16px", marginBottom: "20px" }}>
              No worries! Contact us for personalized one-on-one demo sessions at your convenient time.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "15px", flexWrap: "wrap" }}>
              <Button
                style={{
                  background: "linear-gradient(135deg, #ffd700, #ffeb3b)",
                  border: "none",
                  borderRadius: "25px",
                  padding: "12px 25px",
                  color: "#000",
                  fontWeight: "600",
                  boxShadow: "0 5px 15px rgba(255, 215, 0, 0.3)"
                }}
              >
                📞 Call +91 9538802191
              </Button>
              <Button
                style={{
                  background: "transparent",
                  border: "2px solid #fff",
                  borderRadius: "25px",
                  padding: "12px 25px",
                  color: "#fff",
                  fontWeight: "600"
                }}
              >
                📧 Email Us
              </Button>
            </div>
          </Card.Body>
        </Card>
      </motion.div>
    </Container>
  </section>
);

export default DemoSession;