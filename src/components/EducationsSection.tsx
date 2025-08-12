import React from 'react';
import { motion } from 'framer-motion';
import { useIntersection } from '../hooks/useIntersection';
import { siteContent, type Education } from '../content/site';

const EducationCard: React.FC<{ 
  education: Education; 
  index: number; 
  isVisible: boolean 
}> = ({ education, index, isVisible }) => {
  return (
    <motion.div
      className="education-card"
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="education-header">
        <div className="school-logo">
          {education.logo ? (
            <img 
              src={education.logo} 
              alt={`${education.school} logo`}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const fallback = e.currentTarget.parentElement?.querySelector('.school-initial');
                fallback?.classList.remove('hidden');
              }}
            />
          ) : null}
          <div className={`school-initial ${education.logo ? 'hidden' : ''}`}>
            {education.school.charAt(0)}
          </div>
        </div>
        
        <div className="education-info">
          <div className="education-primary">
            <h3 className="degree-title">
              {education.degree} in {education.field}
            </h3>
            <h4 className="school-name">{education.school}</h4>
            <p className="education-location">{education.location}</p>
          </div>
          <div className="graduation-date">
            <span className="date-badge">{education.graduationDate}</span>
          </div>
        </div>
      </div>

      {(education.gpa || (education.honors && education.honors.length > 0) || (education.coursework && education.coursework.length > 0)) && (
        <div className="education-details">
          {education.gpa && (
            <div className="education-gpa">
              <strong>GPA:</strong> {education.gpa}
            </div>
          )}
          
          {education.honors && education.honors.length > 0 && (
            <div className="education-honors">
              <strong>Honors:</strong>
              <ul className="honors-list">
                {education.honors.map((honor, i) => (
                  <li key={i} className="honor-item">
                    <span className="honor-dot"></span>
                    {honor}
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {education.coursework && education.coursework.length > 0 && (
            <div className="education-coursework">
              <strong>Relevant Coursework:</strong>
              <div className="coursework-tags">
                {education.coursework.map((course, i) => (
                  <span key={i} className="course-tag">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
};

const EducationsSection: React.FC = () => {
  const [ref, isVisible] = useIntersection({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="education" className="section-education">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="section-content"
      >
        <h2 className="section-title">
          <span className="section-number">02.</span> Education
        </h2>
        
        <div className="educations-container">
          {siteContent.educations.map((education, index) => (
            <EducationCard
              key={education.id}
              education={education}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default EducationsSection;