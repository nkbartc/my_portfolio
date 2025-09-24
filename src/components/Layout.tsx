import React from 'react';
import Sidebar from './Sidebar';
import NavbarMobile from './NavbarMobile';
import AboutSection from './AboutSection';
import EducationsSection from './EducationsSection';
import ExperienceSection from './ExperienceSection';

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
            <EducationsSection />
            <ExperienceSection />
          </div>
        </main>
      </div>
    </>
  );
};

export default Layout;