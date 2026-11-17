export interface CvLink {
  label: string;
  url?: string;
}

export interface CvExperience {
  role: string;
  company: string;
  companyTitle?: string;
  period: string;
  rolePeriod?: string;
  bullets: string[];
  technologies: string[];
}

export interface CvProject {
  name: string;
  description: string;
  technologies: string[];
}

export interface CvData {
  documentTitle: string;
  name: string;
  title: string;
  photo?: string;
  contact: {
    email: string;
    phone: string;
    location: string;
  };
  availability?: string;
  links: CvLink[];
  profile: string;
  experience: CvExperience[];
  projects?: CvProject[];
  skills: { label: string; items: string[] }[];
  education: {
    institution: string;
    program: string;
    location?: string;
    period: string;
    detail?: string;
  }[];
  languages: { name: string; level: string }[];
  sections: {
    profile: string;
    experience: string;
    skills: string;
    projects?: string;
    education: string;
    languages: string;
    contact: string;
    technologies: string;
  };
  controls: {
    ats: string;
    designed: string;
    print: string;
    switchVariant: string;
    printHint: string;
  };
}
