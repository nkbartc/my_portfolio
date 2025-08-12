import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { siteContent } from '../content/site';
import { scrollToSection } from '../utils/scroll';
import { useScrollSpy } from '../hooks/useIntersection';

const NavbarMobile: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const sections = ['about', 'experience', 'projects'];
  const activeSection = useScrollSpy(sections);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setExpanded(false);
  };

  return (
    <Navbar 
      expand="md" 
      expanded={expanded}
      onToggle={setExpanded}
      className="navbar-mobile d-md-none"
      fixed="top"
      variant="dark"
    >
      <Container fluid>
        <Navbar.Brand href="#" className="navbar-brand-custom">
          {siteContent.name}
        </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="mobile-navbar-nav"
          className="navbar-toggler-custom"
        >
          <span className="navbar-toggler-line"></span>
          <span className="navbar-toggler-line"></span>
          <span className="navbar-toggler-line"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="mobile-navbar-nav">
          <Nav className="ms-auto">
            {sections.map((section) => (
              <Nav.Link
                key={section}
                onClick={() => handleNavClick(section)}
                className={activeSection === section ? 'active' : ''}
                aria-current={activeSection === section ? 'page' : undefined}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Nav.Link>
            ))}
          </Nav>
          <div className="mobile-social-links">
            {siteContent.github && (
              <a
                href={siteContent.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-social-link"
                aria-label="GitHub"
              >
                GitHub
              </a>
            )}
            {siteContent.linkedin && (
              <a
                href={siteContent.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-social-link"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarMobile;