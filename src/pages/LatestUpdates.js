import React from "react";
import { Container, Card, Row, Col, Badge } from "react-bootstrap";
import { motion } from "framer-motion";

const LatestUpdates = () => {
  const updates = [
    {
      id: 1,
      title: "New MERN Stack Batch Starting Oct 10th",
      content: "Registration open for our comprehensive MERN Stack development course. Limited seats available - only 15 students per batch!",
      date: "Oct 1, 2025",
      type: "New Batch",
      priority: "high"
      
    },
    {
      id: 2,
      title: "🔥 New Data Analytics Batch Starting Oct 10th",
      content: "Registration open for our comprehensive Data Analytics course featuring SQL, Power BI, Excel VBA, and real-world projects. Limited seats - only 15 students per batch!",
      date: "Oct 1, 2025",
      type: "New Batch",
      priority: "high"
    },
    {
      id: 3,
      title: "Free Demo Sessions Every Weekend",
      content: "Join our free demo sessions every Saturday and Sunday. Experience our unique teaching methodology before you enroll.",
      date: "Sep 25, 2025",
      type: "Demo Session",
      priority: "medium"
    },
    {
      id: 4,
      title: "Python Data Science Course Updated",
      content: "Our Python Data Science curriculum has been updated with latest libraries and industry practices including Generative AI concepts.",
      date: "Sep 20, 2025",
      type: "Course Update",
      priority: "medium"
    },
    {
      id: 5,
      title: "Freelance Project Services Launched",
      content: "Code2Dream now offers freelance development services for businesses. Contact us for web development, data analysis, and automation projects.",
      date: "Sep 15, 2025",
      type: "Service Launch",
      priority: "medium"
    }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'danger';
      case 'medium': return 'warning';
      default: return 'info';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'New Batch': return 'success';
      case 'Demo Session': return 'info';
      case 'Course Update': return 'secondary';
      case 'Service Launch': return 'warning';
      default: return 'light';
    }
  };

  return (
    <section className="py-5">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center mb-5">Latest Updates</h2>
          
          <Row>
            {updates.map((update, index) => (
              <Col lg={6} className="mb-4" key={update.id}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-100 shadow-sm">
                    <Card.Body>
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <Badge bg={getTypeColor(update.type)} className="me-2">
                          {update.type}
                        </Badge>
                        <Badge bg={getPriorityColor(update.priority)}>
                          {update.priority === 'high' ? '🔥' : update.priority === 'medium' ? '📢' : '📝'}
                        </Badge>
                      </div>
                      
                      <Card.Title>{update.title}</Card.Title>
                      <Card.Text>{update.content}</Card.Text>
                      
                      <div className="text-muted small">
                        📅 {update.date}
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default LatestUpdates;