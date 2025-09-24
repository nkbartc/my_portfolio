import React from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '../content/site';
import { scrollToSection } from '../utils/scroll';
import { useScrollSpy } from '../hooks/useIntersection';

const Sidebar: React.FC = () => {
  const sections = ['about', 'education', 'experience'];
  const activeSection = useScrollSpy(sections);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <motion.aside 
      className="sidebar"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="sidebar-content">
        <div className="sidebar-header">
          <h1 className="sidebar-name">{siteContent.name}</h1>
          <h2 className="sidebar-title">{siteContent.title}</h2>
          <p className="sidebar-tagline">I build things for the web</p>
        </div>

        <nav className="sidebar-nav" aria-label="Main navigation">
          <ul className="nav-list">
            {sections.map((section) => (
              <li key={section} className="nav-item">
                <a
                  href={`#${section}`}
                  className={`nav-link ${activeSection === section ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, section)}
                  aria-current={activeSection === section ? 'page' : undefined}
                >
                  <span className="nav-indicator"></span>
                  <span className="nav-text">
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sidebar-footer">
          <div className="social-links">
            {siteContent.linkedin && (
              <a
                href={siteContent.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            )}
            {siteContent.email && (
              <a
                href={`mailto:${siteContent.email}`}
                className="social-link"
                aria-label="Email"
              >
                <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.aside>
  );
};

export default Sidebar;