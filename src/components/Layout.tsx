import React from 'react';
import Sidebar from './Sidebar';
import NavbarMobile from './NavbarMobile';
import AboutSection from './AboutSection';
import ExperienceSection from './ExperienceSection';
import ProjectsSection from './ProjectsSection';

const Layout: React.FC = () => {
  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to Content
      </a>
      
      <NavbarMobile />
      
      <div className="layout-container">
        <Sidebar />
        
        <main id="main-content" className="main-content">
          <div className="content-wrapper">
            <AboutSection />
            <ExperienceSection />
            <ProjectsSection />
          </div>
        </main>
      </div>
    </>
  );
};

export default Layout;