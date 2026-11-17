import { CvData } from "./cvData";

// Keep this data independent so the CodeCompass CV can be tailored separately.
export const codecompassCvData: CvData = {
  documentTitle: "Raúl Alejandro Chávez Valenzuela - CodeCompass CV",
  name: "Raúl Alejandro Chávez Valenzuela",
  title: "Software Engineer | .NET Backend Developer",
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
    "Hands-on .NET backend engineer with 4+ years of professional experience building C# REST APIs and government and enterprise systems. Tech Lead experience proposing practical implementation approaches, debugging inherited code, and coordinating delivery across a large microservices environment. Built ASP.NET Core services deployed on IIS and supported CI/CD and release coordination through Azure DevOps.",
  experience: [
    {
      role: "Tech Lead – Allianz Project",
      company: "Deloitte",
      companyTitle: "Analyst in AI&Engineering",
      period: "Mar 2026 – Present",
      rolePeriod: "May 2026 – Present",
      bullets: [
        "Proposed a simpler Sitecore solution for the mass registration-link change—content renames and redirects instead of extensive code changes; the team adopted the approach and it worked as intended.",
        "Updated the site navigation header for the new registration links with a configurable C# feature toggle.",
        "Contributed to the Allianz Login modernization, moving from internally managed to third-party-managed authentication to improve security and user experience.",
        "Proactively debugged issues in the inherited C#/.NET codebase and validated QA and staging data with SQL queries, supporting team debugging sessions.",
        "Coordinated delivery across 100+ microservices (hands-on in 2 services), ~10 core teams, ~10 supporting teams and 3 external vendors; managed releases and deployments through Azure DevOps repositories, pull requests and CI/CD pipelines.",
      ],
      technologies: ["C#", ".NET", "SQL Server", "Sitecore", "Microservices", "Azure DevOps", "CI/CD", "SCRUM"],
    },
    {
      role: "Software Developer",
      company: "CISZ (Government Entity)",
      period: "May 2025 – Mar 2026",
      bullets: [
        "Developed a custom C# work-order management system for a municipal vehicle workshop, replacing a legacy application with fewer clicks, a smoother workflow and auto-generated documents that reduced rework; aligned requirements with end users, management and internal IT/accounting.",
        "Built C# backend services and REST APIs with ASP.NET Core and Entity Framework on SQL Server; deployed on IIS with an auto-deploy pipeline (YAML), with frontends in Next.js and Tailwind and S3 storage.",
        "Integrated the system directly with government databases, eliminating the dependency on a third-party vendor and manually updated Excel files of the vehicle registry.",
        "Added a basic inventory module and contributed to the design of a larger warehouse management system.",
      ],
      technologies: ["C#", ".NET", "ASP.NET Core", "Entity Framework", "SQL Server (SSMS)", "IIS", "Next.js", "Tailwind CSS", "S3", "CI/CD"],
    },
    {
      role: "Jr IT Consultant & Software Developer",
      company: "Gebertech",
      period: "Jan 2024 – Nov 2024",
      bullets: [
        "Gathered client and end-user requirements and delivered tailored web applications end to end.",
      ],
      technologies: ["Next.js", "React", "TypeScript", "Express", "Bootstrap", "MongoDB"],
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
  skills: [
    {
      label: "Core",
      items: ["C#", ".NET", "ASP.NET Core", "Entity Framework Core", "SQL Server", "Azure DevOps", "CI/CD", "Git", "REST APIs", "Microservices", "Unit Testing", "Agile"],
    },
    {
      label: "Also",
      items: ["React", "TypeScript", "Next.js", "MongoDB", "Tailwind CSS", "Python", "SCRUM", "Design Patterns", "Requirements Engineering"],
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
