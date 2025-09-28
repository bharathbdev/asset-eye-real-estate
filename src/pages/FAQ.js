import React from "react";
import { Container, Accordion } from "react-bootstrap";
import { motion } from "framer-motion";

const FAQ = () => {
  const faqData = [
    {
      question: "Can I learn development like MERN, MEAN without any prior experience or technical background?",
      answer: "Absolutely! Our MERN and MEAN stack courses are designed for complete beginners. We start from the basics of HTML, CSS, JavaScript and gradually build your skills in React, Angular, Node.js, MongoDB, and Express.js. Many of our successful students came from non-technical backgrounds like mechanical engineering, commerce, and arts. Your passion to learn matters more than your previous experience."
    },
    {
      question: "Can I learn data analysis like SQL, PowerBI, Excel without any prior experience or technical background?",
      answer: "Yes! Our Data Analysis courses are perfect for beginners. We start with Excel basics, move to SQL fundamentals, and then advance to PowerBI and Tableau. You'll learn to analyze real business data, create powerful dashboards, and generate insights. No prior technical knowledge is required - we build everything from scratch."
    },
    {
      question: "Do I get hands-on experience with real projects during the training?",
      answer: "Yes! Every course includes multiple hands-on projects. For development courses, you'll build complete web applications like e-commerce sites, social media platforms, and deploy them live. For data analysis, you'll work with real datasets from various industries like retail, healthcare, and finance. You'll graduate with a strong portfolio that showcases your skills to potential employers."
    },
    {
      question: "What makes Code2Dream different from other institutes?",
      answer: "We focus on quality over quantity with maximum 15 students per batch (others have 50+). We offer 1:1 mentoring, flexible payment options (30% upfront, rest as per progress), 10-day money-back guarantee, and our trainers are working IT professionals with real industry experience. We emphasize practical learning over theoretical concepts."
    },
    {
      question: "Do you provide job placement assistance and career guidance?",
      answer: "Yes, we offer 100% job placement assistance including portfolio development, resume preparation, interview training, mock technical interviews, and direct connections with hiring companies. We focus on building your skills to industry standards so you can confidently face technical interviews."
    },
    {
      question: "Can I attend classes online or do I need to come to the center?",
      answer: "We offer both online and offline training modes. You can choose what works best for you. Our online sessions are live and interactive with screen sharing and code collaboration tools. We also offer hybrid options where you can switch between online and offline as needed."
    },
    {
      question: "What if I'm not satisfied with the training quality?",
      answer: "We offer a 10-day money-back guarantee. If you're not satisfied with our training quality within the first 10 days, you can get a complete refund without any questions asked. We're confident in our practical, project-based teaching methodology."
    },
    {
      question: "Do you accept students from any educational background for programming courses?",
      answer: "Yes! We welcome students from ANY educational background - Engineering, Commerce, Arts, Science, Diploma holders, and even those with career gaps. Your degree doesn't determine your coding potential. We've had successful developers and data analysts from mechanical engineering, B.Com, BA, and various other backgrounds."
    }
  ];

  return (
    <section className="py-5" style={{ backgroundColor: '#1a1a1a', color: 'white' }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center mb-4" style={{ color: 'white' }}>Frequently Asked Questions</h2>
          <p className="text-center mb-5" style={{ color: '#ccc' }}>
            Please contact us if you cannot find an answer to your question.
          </p>

          <Accordion>
            {faqData.map((faq, index) => (
              <Accordion.Item eventKey={index.toString()} key={index}>
                <Accordion.Header>
                  <span className="fw-bold">{faq.question}</span>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="mb-0">{faq.answer}</p>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </motion.div>
      </Container>
    </section>
  );
};

export default FAQ;