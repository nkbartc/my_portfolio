import React from 'react';
import { motion } from 'framer-motion';
import { useIntersection } from '../hooks/useIntersection';
import { siteContent } from '../content/site';
import MediaGrid from './MediaGrid';
import type { Experience, Role } from '../content/site';

const ExperienceCard: React.FC<{ 
  experience: Experience; 
  index: number; 
  isVisible: boolean 
}> = ({ experience, index, isVisible }) => {
  const getDateRange = (exp: Experience): string => {
    if (exp.roles) {
      const sortedRoles = [...exp.roles].sort((a, b) => 
        new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
      );
      const startDate = sortedRoles[0]?.startDate;
      const endDate = sortedRoles[sortedRoles.length - 1]?.endDate;
      return `${startDate} - ${endDate}`;
    }
    return `${exp.startDate} - ${exp.endDate}`;
  };

  const getLatestRole = (exp: Experience): string => {
    if (exp.roles) {
      // Sort by start date descending to get the most recent role
      const sortedRoles = [...exp.roles].sort((a, b) => 
        new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
      );
      return sortedRoles[0]?.title || '';
    }
    return exp.role || '';
  };

  return (
    <motion.div
      className="experience-card"
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.15,
        ease: [0.645, 0.045, 0.355, 1]
      }}
    >
      <div className="experience-header">
        <div className="company-logo">
          {experience.companyLogo ? (
            <img 
              src={experience.companyLogo} 
              alt={`${experience.company} logo`}
              onError={(e) => {
                // Fallback to company initial if logo fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                if (target.nextElementSibling) {
                  target.nextElementSibling.textContent = experience.company.charAt(0);
                  target.nextElementSibling.classList.remove('hidden');
                }
              }}
            />
          ) : null}
          <div className={`company-initial ${experience.companyLogo ? 'hidden' : ''}`}>
            {experience.company.charAt(0)}
          </div>
        </div>
        
        <div className="experience-info">
          <div className="experience-primary">
            <h3 className="position-title">{getLatestRole(experience)}</h3>
            <h4 className="company-name">
              {experience.company} · {experience.location}
            </h4>
            <p className="experience-duration">{getDateRange(experience)}</p>
          </div>

          {experience.roles && experience.roles.length > 1 && (
            <div className="role-progression">
              <span className="progression-label">Career Progression:</span>
              <div className="roles-list">
                {experience.roles
                  .sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime())
                  .map((role: Role, roleIndex: number) => (
                  <motion.div
                    key={roleIndex}
                    className="role-entry"
                    initial={{ opacity: 0, x: -15 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -15 }}
                    transition={{ duration: 0.3, delay: index * 0.15 + roleIndex * 0.05 }}
                  >
                    <span className="role-title-small">{role.title}</span>
                    <span className="role-duration">{role.startDate} - {role.endDate}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="experience-body">
        <p className="experience-description">{experience.description}</p>

        <ul className="experience-highlights">
          {experience.highlights.map((highlight, highlightIndex) => (
            <motion.li
              key={highlightIndex}
              className="highlight-item"
              initial={{ opacity: 0, x: -10 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ 
                duration: 0.25, 
                delay: index * 0.15 + highlightIndex * 0.03 
              }}
            >
              <span className="highlight-dot"></span>
              {highlight}
            </motion.li>
          ))}
        </ul>

        {experience.media && experience.media.length > 0 && (
          <div className="experience-media">
            <MediaGrid media={experience.media} isVisible={isVisible} />
          </div>
        )}

        <div className="experience-skills">
          <span className="skills-label">Skills:</span>
          <div className="skills-list">
            {experience.technologies.map((tech, techIndex) => (
              <motion.span
                key={techIndex}
                className="skill-tag"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ 
                  duration: 0.2, 
                  delay: index * 0.15 + techIndex * 0.02 
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ExperienceSection: React.FC = () => {
  const [ref, isVisible] = useIntersection({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="experience" className="section-experience">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="section-content"
      >
        <h2 className="section-title">
          <span className="section-number">02.</span> Experience
        </h2>

        <div className="experiences-container">
          {siteContent.experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;