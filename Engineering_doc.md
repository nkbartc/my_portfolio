# Project Overview  
Inspired by the minimal, modern aesthetic of **Brittany Chiang’s** portfolio, this is a single-page, responsive React + Bootstrap site featuring a sticky sidebar and smooth content navigation.

##  Key Design Elements Borrowed  
- **Dark, elegant color palette** akin to Brittany’s use of navy and slate tones :contentReference[oaicite:0]{index=0}.  
- **Sticky left sidebar** housing the nav and social links — always visible, always intuitive :contentReference[oaicite:1]{index=1}.  
- **Clear, scannable sections** with "About", "Experience", and "Projects": concise, content-forward layout :contentReference[oaicite:2]{index=2}.

---

# Requirements  

###  Layout & Structure  
- **Sidebar (desktop)**: Dark background; contains site title, social links, and nav items (About, Experience, Projects) that smooth-scroll to content sections.  
- **Collapsed Navbar (mobile)**: A top navbar (Bootstrap) that toggles nav items. Sidebar is visible on larger screens only.

###  Design & Theme  
- Color palette follows Brittany’s scheme: e.g., `#0a192f` (navy), `#112240` (light navy), `#8892b0` (slate), and accent **green “#64ffda”** :contentReference[oaicite:3]{index=3}.  
- Typography is clean and legible, with generous spacing and subtle animations for hover states.

###  Content Sections  
- **About**: Brief bio + personal values, highlighting accessibility and UI craftsmanship :contentReference[oaicite:4]{index=4}.  
- **Experiences**: Curated roles with timelines & tech stacks — mimic Brittany’s scannable experience layout :contentReference[oaicite:5]{index=5}.  
- **Projects**: Each project includes title, description, tech tags, GitHub/demo links — similar to Brittany’s clarity in project showcasing :contentReference[oaicite:6]{index=6}.

###  Animations & Interactions  
- Subtle fade-in when sections enter view. Smooth scroll for nav.  
- Hover effects (scale + shadow) on project cards and nav links. Simple, elegant — no flashy distractions.

###  Accessibility  
- All nav links keyboard-navigable. ARIA labels on `<nav>` and landmarks. Skip-to-content link.  
- High contrast text (AA level), alt tags on images. Emphasize accessibility as Brittany does :contentReference[oaicite:7]{index=7}.

---

# Technical Outline  

## Tech Stack  
- React 18 + Bootstrap 5 (CDN or npm).  
- Optional: Framer Motion for animations.  
- Smooth scroll with `scrollIntoView`, active spy using IntersectionObserver.

## File & Component Structure  
```text
src/
  components/
    Sidebar.tsx
    NavbarMobile.tsx
    AboutSection.tsx
    ExperienceSection.tsx
    ProjectsSection.tsx
    Layout.tsx
  content/site.ts
  utils/scroll.ts
  hooks/useIntersection.ts
  App.tsx
  main.tsx
