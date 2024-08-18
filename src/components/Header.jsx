// src/components/Header.jsx
import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import icons

const Header = () => {
  return (
    <>
      <Navbar className="header-navbar" expand="lg">
        <Container>
          <Navbar.Brand href="/" className="navbar-brand">Recipe App</Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="social-icons">
              <a
                href="https://github.com/farhankhan101"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-farhan-khan-0202b31b6/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <FaLinkedin size={24} />
              </a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
