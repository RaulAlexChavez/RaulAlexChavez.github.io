import { CvData } from "./cvData";

// EDIT: update this object to maintain the CV content; add new roles to experience.
export const bairesdevCvData: CvData = {
  documentTitle: "Raúl Alejandro Chávez Valenzuela - Bairesdev CV",
  name: "Raúl Alejandro Chávez Valenzuela",
  title: "Software Engineer | .NET Backend Developer",
  photo: "/images/me.jpg",
  contact: {
    email: "chavezra.work@gmail.com",
    phone: "(+52) 33 5120 3757",
    location: "Guadalajara, Jalisco, México",
  },
  links: [
    { label: "https://raulalex.vercel.app", url: "https://raulalex.vercel.app/" },
    { label: "linkedin.com/in/raulalexchavez", url: "https://www.linkedin.com/in/raulalexchavez/" },
  ],
  profile:
    "Software engineer with 4+ years of professional experience (since 2021), primarily in C#, building .NET backend and REST API systems for government and enterprise clients. Recent technical leadership in a large microservices environment (Allianz), strengthening skills in inherited-code debugging, cross-team delivery and release coordination. Combine technical depth with business and end-user focus; seeking a hands-on engineering role.",
  experience: [
    {
      role: "Tech Lead – Allianz Project",
      company: "Deloitte",
      companyTitle: "Analyst, AI & Engineering",
      period: "Mar 2026 – Present",
      rolePeriod: "May 2026 – Present",
      bullets: [
        "Contributed to the Allianz Login modernization, moving from internally managed to third-party-managed authentication to improve security and user experience.",
        "Proposed a simpler solution to a mass registration-link change in Sitecore (content renames and redirects instead of extensive code changes); adopted by the team and worked as intended.",
        "Updated the site navigation header for the new registration links, with a configurable feature toggle (C#).",
        "Proactively debugged issues in a large inherited C#/.NET codebase, validating data with SQL queries on QA and staging and supporting the team in debugging and working sessions.",
        "Coordinated delivery across 100+ microservices (hands-on in 2 services), ~10 core teams, ~10 supporting teams and 3 external vendors, working daily in English with teams in the US and India; managed releases and deployments through Azure DevOps (repos, pull requests, CI/CD pipelines).",
      ],
      technologies: ["C#", ".NET", "SQL Server", "Sitecore", "Microservices", "Azure DevOps", "CI/CD", "SCRUM"],
    },
    {
      role: "Software Developer",
      company: "CISZ (Government Entity)",
      period: "May 2025 – Mar 2026",
      bullets: [
        "Developed a custom work-order management system for a municipal vehicle workshop, replacing a legacy application: fewer clicks, smoother workflow and auto-generated documents, reducing rework; aligned requirements with end users, management and internal IT/accounting.",
        "Integrated it directly with government databases, eliminating the dependency on a third-party vendor and manually updated Excel files of the vehicle registry.",
        "Built backend services and REST APIs with C#, ASP.NET Core and Entity Framework on SQL Server, deployed on IIS; frontends in Next.js and Tailwind with S3 storage and an auto-deploy pipeline (YAML).",
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
      items: ["C#", ".NET", "ASP.NET Core", "REST APIs", "Microservices", "Azure DevOps", "CI/CD", "Entity Framework Core", "SQL Server (MSSQL)", "Unit Testing", "Git"]    },
    {
      label: "Also",
      items: ["TypeScript", "Next.js", "React", "MongoDB", "Tailwind", "Python", "SCRUM", "Design Patterns", "Requirements Engineering"],
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
      detail: "Scholarship-funded semester. Final project: computer vision prototype comparing two human poses to evaluate choreography and martial arts form. Coursework: Computer Vision, OpenGL, Qt, Linear Algebra.",
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