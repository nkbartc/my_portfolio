export const siteContent = {
  name: "Bart Chou",
  title: "Software Engineer",
  email: "bartchouf@gmail.com",
  github: "https://github.com/nkbartc",
  linkedin: "https://www.linkedin.com/in/bart-chou/",
  profileImage: "./assets/profile.jpeg",
  
  about: {
    title: "About Me",
    bio: `Senior Software Engineer with 5 years of experience driving end-to-end delivery of cloud-native
platforms—spanning backend services, event-driven data pipelines, frontend applications, and DevOps
automation. Skilled in Python, C#, Java, React, AWS, Docker, and CI/CD, with a proven ability to lead teams,
architect 0→1 solutions, and scale MVPs to enterprise-grade production. Experienced in high-velocity
startup environments and distinguished by hands-on integration of LLM/AI technologies in production
systems, with a consistent focus on performance, scalability, and business impact.`,
    values: [
      "Accessibility-first development",
      "Clean, maintainable code",
      "User-centered design",
      "Continuous learning"
    ],
    techStack: [
      "Python",
      "Django",
      "React",
      "LangGraph",
      "Python",
      "PostgreSQL",
      "AWS",
      "Docker"
    ]
  },
  
  educations: [
    {
      id: "edu1",
      degree: "Master of Science",
      field: "Computer Science",
      school: "Virginia Polytechnic Institute and State University",
      location: "Blacksburg, Virginia, USA",
      graduationDate: "December 2022",
      gpa: "",
      honors: [],
      coursework: [],
      logo: "./assets/vt_logo.png"
    },
    {
      id: "edu2", 
      degree: "Bachelor of Science",
      field: "Computer Science",
      school: "University of Minnesota Twin Cities",
      location: "Minneapolis, Minnesota, USA", 
      graduationDate: "December 2019",
      gpa: "",
      honors: [],
      coursework: [],
      logo: "./assets/um_logo.png"
    }
  ],
  
  experiences: [
    {
      id: "exp1",
      role: "Senior Software Engineer",
      company: "Morph Technologies",
      location: "Redmond, Washington, USA",
      startDate: "January 2025",
      endDate: "Present",
      description: "At Morph, I led a 4-person team to build an AI-powered home inspection SaaS platform. I designed LLM workflows with RAG, deployed scalable microservices on AWS (Lambda, ECS, Celery, Redis), and integrated Stripe and HubSpot to streamline business operations. I also built no-code AI pipelines with n8n to accelerate prototyping and reduce cross-team overhead.",
      technologies: ["Python", "Django", "LangGraph", "RAG", "React", "AWS - CloudWatch, Lambda, EC2, ECS, S3, RDS, CodePipeline"],
      highlights: [
        // "Built AI-powered inspection platform (Python, LangGraph, RAG) — cut report prep time.",
        // "Created AWS Lambda + ECS microservices — reduced task latency by 40%.",
        // "Integrated Stripe & HubSpot — automated billing and CRM workflows.",
        // "Built n8n workflows — reduced manual integrations by 50%+."
      ],
      companyLogo: "./assets/morphLogo.svg",
      media: [
        {
          id: "media1",
          type: "link" as const,
          title: "Morph Technologies Platform Demo",
          description: "AI-powered home inspection platform built with React and Django",
          url: "https://morph-technologies.com/",
          thumbnail: "./assets/morphLogo.svg"
        },
      ]
    },
    {
      id: "exp2",
      company: "BeeHex Automation",
      location: "Columbus, Ohio, USA",
      description: "During my time at BeeHex Automation, I architected end-to-end pipelines with AWS IoT Core and SQS to process millions of daily telemetry events in real time. I built APIs with Python, Java (Spring Boot), and React-based dashboards, ensuring both technical performance and excellent user experience. My work involved troubleshooting production systems under tight deadlines, reviewing peer code, and improving CI/CD pipelines.",
      technologies: ["Python", "Django", "React", "Java", "C/C++", "Docker", "AWS - CloudWatch, IoT Core, Lambda, EC2, ECS, S3, RDS, CodePipeline"],
      highlights: [
        // "Built bakery automation systems with Django, React, AWS — deployed to Kroger",
        // "Developed pipelines processing millions of daily events — reduced reporting time",
        // "Led 5-person team in cross-functional agile workflows — improved delivery speed",
        // "Launched MVP in 4 months — boosted adoption via rapid UI/UX iteration"
      ],
      companyLogo: "./assets/beehex_logo.png",
      roles: [
        {
          title: "Lead Software Engineer",
          startDate: "May 2024",
          endDate: "October 2025"
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
          title: "Cake Writer at Kroger",
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
          thumbnail: "./assets/beehex_logo.png"
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
      description: "At OATI, I contributed to building a SaaS energy trading platform from the ground up. I developed RESTful APIs in C# (.NET Core) and optimized MSSQL queries, cutting data fetch latency by 60% and improving system throughput under heavy load. On the frontend, I built real-time visualizations with TypeScript and ExtJS, giving traders instant insights into commodity trades and energy flow data across thousands of endpoints.",
      technologies: ["C#", ".NET Core", "JavaScript", "MSSQL"],
      highlights: [
        // "Developed SaaS energy trading platform — supported thousands of endpoints.",
        // "Built C# APIs + optimized MSSQL — cut query latency by 60%",
        // "Engineered real-time visualizations — improved decision-making for traders."
      ],
      companyLogo: "./assets/oati_logo.png",
      media: [
        {
          id: "media6",
          type: "link" as const,
          title: "OATI Energy Trading Platform",
          description: "Enterprise-grade energy trading and market analytics platform",
          url: "https://oati.com",
          thumbnail: "./assets/oati_logo.png"
        },
      ]
    },
    {
      id: "exp4",
      role: "Software Engineer Co-op",
      company: "BeeHex Automation",
      location: "Columbus, Ohio, USA",
      startDate: "December 2018",
      endDate: "August 2019",
      description: "During my early co-op at BeeHex, I built a Qt-based genetic data visualization tool using NIH datasets, developed an eCommerce platform with Django and Python for 3D-printed products, and optimized backend processing to cut response times by 60%.",
      technologies: ["Python", "Django", "Qt C++", "AWS"],
      highlights: [
        // "Built Qt genetic data visualization tool — NIH GWAS integration.",
        // "Created Django eCommerce site — enabled 3D-printed product sales.",
        // "Optimized backend — reduced response time by 60%."
      ],
      companyLogo: "./assets/beehex_logo.png",
    }
  ],
  
};

// Define education type
export type Education = {
  id: string;
  degree: string;
  field: string;
  school: string;
  location: string;
  graduationDate: string;
  gpa?: string;
  honors?: string[];
  coursework?: string[];
  logo?: string;
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