import type { Stack } from './featuredProjects.types';

export interface iExperience {
  role: string;
  aboutRole: string;
  company: string;
  companyUrl?: string;
  companyLogo: any;
  location: string;
  technologies: Stack[];
  freelance: boolean;
  startDate: string;
  endDate: string;
  latest: boolean;
}
