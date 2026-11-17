import { CvData } from "./cvData";

export const helixCvData: CvData = {
  documentTitle: "Raúl Alejandro Chávez Valenzuela - Helix CV",
  name: "Raúl Alejandro Chávez Valenzuela",
  title: "Software Engineer | Backend Services & AI-Assisted Development",
  photo: "/images/me.jpg",
  contact: {
    email: "chavezra.work@gmail.com",
    phone: "(+52) 33 5120 3757",
    location: "Guadalajara, Mexico",
  },
  availability: "Available late January 2027",
  links: [
    { label: "https://raulalex.vercel.app", url: "https://raulalex.vercel.app/" },
    { label: "linkedin.com/in/raulalexchavez", url: "https://www.linkedin.com/in/raulalexchavez/" },
  ],
  profile:
    "Software engineer with 4+ years of professional experience building backend services and integrations, primarily in C#. I use Claude Code and Copilot daily in an AI-native workflow, validating generated code with tests and code review. I bring hands-on implementation judgment from technical approach through CI/CD and deployment, with backend experience transferable beyond the .NET stack.",
  experience: [
    {
      role: "Tech Lead – Allianz Project",
      company: "Deloitte",
      companyTitle: "Analyst, AI & Engineering",
      period: "Mar 2026 – Present",
      rolePeriod: "May 2026 – Present",
      bullets: [
        "Managed release planning and deployments through Azure DevOps repositories, pull requests and CI/CD pipelines; worked hands-on in 2 services within an environment spanning 100+ microservices.",
        "Ran and modified SQL queries against QA and staging databases to validate data while proactively debugging issues in a large inherited C#/.NET codebase and supporting team debugging sessions.",
        "Proposed a simpler Sitecore solution for the mass registration-link change—content renames and redirects instead of extensive code modifications; the team adopted the approach and it worked as intended.",
        "Updated the site navigation header for the new registration links with a configurable C# feature toggle.",
        "Contributed to the Allianz Login modernization, moving from internally managed to third-party-managed authentication to improve security and user experience.",
      ],
      technologies: ["C#", ".NET", "SQL Server", "Azure DevOps", "CI/CD", "Microservices", "Sitecore", "SCRUM"],
    },
    {
      role: "Software Developer",
      company: "CISZ (Government Entity)",
      period: "May 2025 – Mar 2026",
      bullets: [
        "Developed a custom C# work-order management system for a municipal vehicle workshop, replacing a legacy application with fewer clicks, a smoother workflow and auto-generated documents that reduced rework.",
        "Built backend services and REST APIs with C#, ASP.NET Core and Entity Framework on SQL Server; deployed on IIS with an auto-deploy pipeline (YAML), alongside Next.js and Tailwind frontends and S3 storage.",
        "Integrated the system directly with government databases, eliminating dependency on a third-party vendor and manually updated Excel files for the vehicle registry.",
        "Aligned requirements with end users, management and internal IT/accounting; added a basic inventory module and contributed to the design of a larger warehouse management system.",
      ],
      technologies: ["C#", ".NET", "ASP.NET Core", "Entity Framework", "SQL Server (SSMS)", "IIS", "CI/CD", "S3"],
    },
    {
      role: "Jr IT Consultant & Software Developer",
      company: "Gebertech",
      period: "Jan 2024 – Nov 2024",
      bullets: [
        "Gathered client and end-user requirements and delivered tailored web applications end to end.",
      ],
      technologies: ["Next.js", "React", "TypeScript", "Express", "MongoDB"],
    },
    {
      role: "Game Developer",
      company: "BC Media Lab",
      period: "Dec 2021 – Oct 2023",
      bullets: [
        "Built multiplayer, data persistence, RPG stats and combat systems in Unity/C#; contributed to a mobile game published on Google Play; used Git/GitLab and SCRUM.",
      ],
      technologies: ["C#", "Unity", "Git", "GitLab", "SCRUM"],
    },
  ],
  projects: [
    {
      name: "Recruiter-Profile Matching API",
      description:
        "Built an AI-native recruiter-matching internal tool end-to-end: a .NET API deployed on Azure that integrates Azure AI through Microsoft.Extensions.AI for LLM-based matching of a professional profile to recruiter search criteria.",
      technologies: [".NET", "Azure", "Azure AI", "Microsoft.Extensions.AI"],
    },
  ],
  skills: [
    {
      label: "Backend & APIs",
      items: ["C#", ".NET", "ASP.NET Core", "Entity Framework Core", "REST APIs", "Microservices", "Unit Testing", "Python", "TypeScript"],
    },
    {
      label: "Databases",
      items: ["SQL Server", "SQL query validation", "Government database integrations", "MongoDB"],
    },
    {
      label: "Cloud & DevOps",
      items: ["Azure", "Azure DevOps", "CI/CD", "Git", "IIS deployments", "YAML deployment pipeline", "S3 storage"],
    },
    {
      label: "AI-assisted development",
      items: [
        "Claude Code (daily)",
        "Copilot (daily)",
        "Test and code-review validation",
        "Review and correct agent output like a teammate's PR",
      ],
    },
  ],
  education: [
    {
      institution: "UABC",
      program: "B.Sc. Computational Systems",
      location: "Mexico",
      period: "Aug 2018 – Jul 2024",
      detail: "Honors (top 1%), 96.64/100. Software Engineering, SDLC, UML, Agile Methodologies, Algorithms & Data Structures, OOP. Competitive Programming Club, Tutoring Program.",
    },
    {
      institution: "UGR ETSIIT",
      program: "Informatics exchange",
      location: "Granada, Spain",
      period: "Sep 2023 – Feb 2024",
      detail: "Scholarship-funded semester. Coursework: Computer Vision, OpenGL, Qt, Linear Algebra.",
    },
  ],
  languages: [
    { name: "Spanish", level: "Native" },
    { name: "English", level: "Advanced, C1; daily international use" },
    { name: "French", level: "B2" },
  ],
  sections: {
    profile: "Profile",
    experience: "Professional Experience",
    projects: "Projects",
    skills: "Skills",
    education: "Education",
    languages: "Languages",
    contact: "Contact",
    technologies: "Tech:",
  },
  controls: {
    ats: "ATS-friendly",
    designed: "Designed",
    print: "Print / Save as PDF",
    switchVariant: "CV layout",
    printHint: "A4 · In Chrome, choose Save as PDF; verify text by selecting all and copying.",
  },
};
