export const siteContent = {
  name: "Bart Chou",
  title: "Full Stack Developer",
  email: "bart@example.com",
  github: "https://github.com/nkbartc",
  linkedin: "https://linkedin.com/in/bartchou",
  twitter: "https://twitter.com/bartchou",
  
  about: {
    title: "About Me",
    bio: `I am a full-stack software engineer with 5 years of experience delivering cloud-native, 
    event-driven systems end-to-end—from infrastructure to UI. Hands-on with LLMs in production 
    and driven to solve real-world problems at scale. Passionate about building great systems 
    and always eager to collaborate with different teams, understand their needs, and offer 
    solutions beyond my core responsibilities.`,
    values: [
      "Accessibility-first development",
      "Clean, maintainable code",
      "User-centered design",
      "Continuous learning"
    ],
    techStack: [
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "Node.js",
      "Python",
      "PostgreSQL",
      "AWS",
      "Docker"
    ]
  },
  
  experiences: [
    {
      id: "exp1",
      role: "Senior Software Engineer",
      company: "Morph Technologies",
      location: "Redmond, Washington, USA",
      startDate: "January 2025",
      endDate: "Present",
      description: "Develop an LLM-powered home inspection platform using Django and orchestrated AI workflows, deployed on AWS.",
      technologies: ["Python", "Django", "LangGraph", "RAG", "React", "AWS"],
      highlights: [
        "Built AI-powered inspection platform (Python, LangGraph, RAG) — cut report prep time.",
        "Created AWS Lambda + ECS microservices — reduced task latency by 40%.",
        "Integrated Stripe & HubSpot — automated billing and CRM workflows.",
        "Built n8n workflows — reduced manual integrations by 50%+."
      ],
      companyLogo: "/logos/morph.png",
      media: [
        {
          id: "media1",
          type: "link" as const,
          title: "Morph Technologies Platform Demo",
          description: "AI-powered home inspection platform built with React and Django",
          url: "https://morph-technologies.com/",
          thumbnail: "/media/morph-platform.png"
        },
        {
          id: "media2",
          type: "image" as const,
          title: "System Architecture Diagram",
          description: "AWS microservices architecture with Lambda and ECS",
          url: "/media/morph-architecture.png"
        }
      ]
    },
    {
      id: "exp2",
      company: "BeeHex Automation",
      location: "Columbus, Ohio, USA",
      description: "Own, architect, and develop scalable, event-driven full-stack solutions for robotic automation from 0 to 1—leveraging AWS infrastructure to deliver SPA dashboards, adaptive APIs, and machine communication modules for real-time control and monitoring.",
      technologies: ["Python", "Django", "AWS", "React"],
      highlights: [
        "Built bakery automation systems with Django, React, AWS — deployed to Kroger",
        "Developed pipelines processing millions of daily events — reduced reporting time",
        "Led 5-person team in cross-functional agile workflows — improved delivery speed",
        "Launched MVP in 4 months — boosted adoption via rapid UI/UX iteration"
      ],
      companyLogo: "/logos/beehex.png",
      roles: [
        {
          title: "Lead Software Engineer",
          startDate: "May 2024",
          endDate: "Present"
        },
        {
          title: "Software Engineer",
          startDate: "December 2022",
          endDate: "May 2024"
        },
        {
          title: "Software Engineer Co-op",
          startDate: "May 2022",
          endDate: "December 2022"
        }
      ],
      media: [
        {
          id: "media3",
          type: "video" as const,
          title: "BeeHex Automation Demo at Kroger",
          description: "3D food printing technology deployed at Kroger stores",
          url: "https://youtube.com/watch?v=f4nEwsk46Ug",
          embedUrl: "https://www.youtube.com/embed/f4nEwsk46Ug?si=NfpZF7TTEioddGBF",
          thumbnail: "/media/beehex-demo.png"
        },
        {
          id: "media5",
          type: "video" as const,
          title: "Tray and Rack Moving Robot",
          description: "A facility robot that can be programmed to work for you, including moving trays onto racks and organizing racks.",
          url: "https://www.youtube.com/watch?v=EFKmRLHfgQA",
          embedUrl: "https://www.youtube.com/embed/EFKmRLHfgQA?si=Q_Di-gaCHdXj_BmC&amp;start=5",
        },
        {
          id: "media4",
          type: "link" as const,
          title: "BeeHex Company Website",
          description: "Food automation and 3D printing solutions",
          url: "https://beehex.com",
          thumbnail: "/media/beehex-website.png"
        },
      ]
    },
    {
      id: "exp3",
      role: "Software Engineer",
      company: "Open Access Technology International",
      location: "Minneapolis, Minnesota, USA",
      startDate: "February 2020",
      endDate: "November 2020",
      description: "Created responsive web applications for various clients.",
      technologies: ["React", "JavaScript", "SASS", "Webpack"],
      highlights: [
        "Developed SaaS energy trading platform — supported thousands of endpoints.",
        "Built C# APIs + optimized MSSQL — cut query latency by 60%",
        "Engineered real-time visualizations — improved decision-making for traders."
      ],
      companyLogo: "/logos/oati.png",
      media: [
        {
          id: "media6",
          type: "link" as const,
          title: "OATI Energy Trading Platform",
          description: "Enterprise-grade energy trading and market analytics platform",
          url: "https://oati.com",
          thumbnail: "/media/oati-platform.png"
        },
        {
          id: "media7",
          type: "image" as const,
          title: "Real-time Trading Dashboard",
          description: "Interactive data visualizations for energy market analysis",
          url: "/media/oati-dashboard.png"
        }
      ]
    },
    {
      id: "exp4",
      role: "Software Engineer Co-op",
      company: "BeeHex Automation",
      location: "Columbus, Ohio, USA",
      startDate: "December 2018",
      endDate: "August 2019",
      description: "Created responsive web applications for various clients.",
      technologies: ["Python", "Django", "Qt", "AWS"],
      highlights: [
        "Built Qt genetic data visualization tool — NIH GWAS integration.",
        "Created Django eCommerce site — enabled 3D-printed product sales.",
        "Optimized backend — reduced response time by 60%."
      ],
      companyLogo: "/logos/oati.png",
      media: [
        {
          id: "media6",
          type: "link" as const,
          title: "OATI Energy Trading Platform",
          description: "Enterprise-grade energy trading and market analytics platform",
          url: "https://oati.com",
          thumbnail: "/media/oati-platform.png"
        },
        {
          id: "media7",
          type: "image" as const,
          title: "Real-time Trading Dashboard",
          description: "Interactive data visualizations for energy market analysis",
          url: "/media/oati-dashboard.png"
        }
      ]
    }
  ],
  
  projects: [
    {
      id: "proj1",
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform with real-time inventory management and personalized recommendations.",
      image: "/project1.png",
      technologies: ["React", "Node.js", "MongoDB", "Redis", "Stripe API"],
      githubUrl: "https://github.com/username/ecommerce-platform",
      liveUrl: "https://demo-ecommerce.com",
      featured: true
    },
    {
      id: "proj2",
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team analytics.",
      image: "/project2.png",
      technologies: ["Vue.js", "Firebase", "Vuex", "Chart.js"],
      githubUrl: "https://github.com/username/task-manager",
      liveUrl: "https://demo-taskmanager.com",
      featured: true
    },
    {
      id: "proj3",
      title: "Weather Dashboard",
      description: "A beautiful weather dashboard with location-based forecasts and interactive maps.",
      image: "/project3.png",
      technologies: ["React", "TypeScript", "OpenWeather API", "Mapbox"],
      githubUrl: "https://github.com/username/weather-dashboard",
      liveUrl: "https://demo-weather.com",
      featured: false
    },
    {
      id: "proj4",
      title: "Portfolio Generator",
      description: "A CLI tool that generates beautiful portfolio websites from JSON configuration.",
      image: "/project4.png",
      technologies: ["Node.js", "TypeScript", "Handlebars", "CSS"],
      githubUrl: "https://github.com/username/portfolio-generator",
      liveUrl: null,
      featured: false
    }
  ]
};

// Define role type for multiple roles within same company
export type Role = {
  title: string;
  startDate: string;
  endDate: string;
};

// Define media types for LinkedIn-style experience posts
export type MediaItem = {
  id: string;
  type: 'image' | 'video' | 'link' | 'document';
  title: string;
  description?: string;
  url: string;
  thumbnail?: string;
  embedUrl?: string; // For YouTube videos
};

// Base experience type with optional role field for backwards compatibility
type BaseExperience = {
  id: string;
  company: string;
  location: string;
  description: string;
  technologies: string[];
  highlights: string[];
  companyLogo?: string;
  media?: MediaItem[];
};

// Experience can have either a single role OR multiple roles
export type Experience = BaseExperience & (
  | {
      role: string;
      startDate: string;
      endDate: string;
      roles?: never;
    }
  | {
      role?: never;
      startDate?: never;
      endDate?: never;
      roles: Role[];
    }
);

export type SiteContent = typeof siteContent;
export type Project = typeof siteContent.projects[0];