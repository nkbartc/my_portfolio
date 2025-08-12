import React from 'react';
import { motion } from 'framer-motion';
import { useIntersection } from '../hooks/useIntersection';
import { siteContent } from '../content/site';

const AboutSection: React.FC = () => {
  const [ref, isVisible] = useIntersection({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="about" className="section-about">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="section-content"
      >
        <h2 className="section-title">
          <span className="section-number">01.</span> About Me
        </h2>
        
        <div className="about-content">
          <div className="about-text">
            <p className="about-bio">{siteContent.about.bio}</p>
            
            <div className="about-values">
              <h3 className="subsection-title">What I Value</h3>
              <ul className="values-list">
                {siteContent.about.values.map((value, index) => (
                  <li key={index} className="value-item">
                    <span className="value-arrow">▹</span> {value}
                  </li>
                ))}
              </ul>
            </div>

            <div className="about-tech">
              <h3 className="subsection-title">Technologies I Work With</h3>
              <div className="tech-grid">
                {siteContent.about.techStack.map((tech, index) => (
                  <motion.div
                    key={index}
                    className="tech-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <span className="tech-arrow">▹</span> {tech}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="about-image">
            <div className="image-wrapper">
              <img 
                src={siteContent.profileImage} 
                alt={siteContent.name}
                className="profile-image"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;