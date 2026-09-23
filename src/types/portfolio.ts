export interface PersonalInfo {
  name: string;
  username: string;
  title: string;
  tagline: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  avatar: string;
  social: {
    github: string;
    linkedin: string;
    leetcode: string;
  };
  stats: {
    publicRepos: number;
    openSourcePRs: number;
    featuredProjects: number;
  };
}

export interface FreelanceProject {
  id: string;
  title: string;
  client: string;
  liveUrl: string;
  mainSiteUrl: string;
  role: string;
  category: string;
  tagline: string;
  description: string;
  techStack: string[];
  highlights: string[];
}

export interface OpenSourceContribution {
  repo: string;
  repoUrl: string;
  prNumber: number;
  prUrl: string;
  title: string;
  status: "merged" | "open" | "closed";
  date: string;
  metrics: string;
  description: string;
  techStack: string[];
}

export interface AgentTooling {
  name: string;
  title: string;
  repoUrl: string;
  category: string;
  description: string;
  skillsIncluded?: string[];
  techStack: string[];
}

export interface FeaturedProject {
  id: string;
  title: string;
  repoUrl: string;
  tagline: string;
  description: string;
  techStack: string[];
  highlights?: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  grade: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  period?: string;
  modules?: string[];
  link?: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  freelanceAndClientWork: FreelanceProject[];
  openSourceContributions: OpenSourceContribution[];
  agentToolingAndAI: AgentTooling[];
  featuredProjects: FeaturedProject[];
  skills: {
    languages: string[];
    frontend: string[];
    backend: string[];
    databases: string[];
    cloudDevOps: string[];
    aiAndProtocols: string[];
  };
  education: EducationItem[];
  certifications: CertificationItem[];
}
