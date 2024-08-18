// src/components/Footer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <Container>
        <Row>
          <Col>&copy; 2024 <a href="https://www.linkedin.com/in/muhammad-farhan-khan-0202b31b6/" target="_blank">Farhan</a> </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
