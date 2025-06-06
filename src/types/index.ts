export interface Project {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  technologies: string[];
  impact: string;
  link?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  responsibilities: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
}

export interface Certification {
  id: string;
  title: string;
  institution: string;
  year: string;
}

export interface Skill {
  id: string;
  name: string;
  icon?: string;
}