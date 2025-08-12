# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

A modern, minimal portfolio website inspired by Brittany Chiang's design aesthetic. Built with React 18 + TypeScript + Bootstrap 5, featuring a sticky sidebar navigation, smooth scrolling, and elegant animations.

## Tech Stack

- **React 18** with TypeScript
- **Bootstrap 5** for responsive layout
- **Vite** as build tool
- **Framer Motion** for animations (optional)
- **IntersectionObserver** for scroll spy functionality

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run type checking
npm run type-check

# Run linting
npm run lint

# Run tests (if configured)
npm run test
```

## Project Architecture

### File Structure
```
src/
  components/
    Sidebar.tsx         # Sticky left sidebar with nav and social links
    NavbarMobile.tsx    # Collapsed navbar for mobile devices
    AboutSection.tsx    # About me section component
    ExperienceSection.tsx # Work experience timeline
    ProjectsSection.tsx # Project showcase cards
    Layout.tsx         # Main layout wrapper
  content/
    site.ts            # Site content and configuration
  utils/
    scroll.ts          # Smooth scroll utilities
  hooks/
    useIntersection.ts # Intersection Observer hook for scroll spy
  App.tsx             # Main app component
  main.tsx            # Entry point
  index.css           # Global styles
```

### Key Design System

**Color Palette** (Brittany Chiang inspired):
- Primary Navy: `#0a192f`
- Light Navy: `#112240` 
- Slate: `#8892b0`
- Light Slate: `#ccd6f6`
- Accent Green: `#64ffda`

**Typography**:
- Font: Clean, modern sans-serif
- Generous spacing
- High contrast for accessibility

### Component Architecture

1. **Layout System**:
   - Desktop: Fixed sidebar (left) + scrollable content (right)
   - Mobile: Collapsible top navbar + full-width content
   - Breakpoint: 768px (Bootstrap md)

2. **Navigation**:
   - Smooth scroll to sections via `scrollIntoView`
   - Active section highlighting using IntersectionObserver
   - Keyboard navigable with proper ARIA labels

3. **Content Sections**:
   - **About**: Personal bio, values, tech stack
   - **Experience**: Timeline format with role, company, dates, tech
   - **Projects**: Card layout with title, description, tech tags, links

4. **Animations**:
   - Fade-in on scroll (IntersectionObserver triggered)
   - Hover effects: scale + shadow on cards and links
   - Smooth transitions (300ms default)

### Accessibility Requirements

- All interactive elements keyboard accessible
- Skip-to-content link
- Proper ARIA labels on navigation
- AA contrast ratios minimum
- Alt text on all images
- Semantic HTML structure

### Performance Considerations

- Lazy load images
- Code splitting by route/section if needed
- Minimize bundle size
- Optimize fonts and assets

## Testing Strategy

- Component testing with React Testing Library
- Accessibility testing with axe-core
- Responsive design testing across devices
- Cross-browser compatibility (Chrome, Firefox, Safari, Edge)

## Deployment

- Build optimized for static hosting (Netlify, Vercel, GitHub Pages)
- Environment variables for API keys if needed
- CI/CD pipeline for automated deployment

## Git Workflow

- Main branch: `main`
- Feature branches: `feature/[feature-name]`
- Commit convention: conventional commits
- Repository: https://github.com/nkbartc/my_portfolio.git