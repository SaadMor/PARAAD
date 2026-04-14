export interface Profile {
  name: string;
  title: string;
  contacts: string[];
  location: string;
}

export interface Summary {
  heading: string;
  content: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  institutionUrl: string;
  period: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  companyUrl: string;
  period: string;
  bullets: string[];
}

export interface SkillGroup {
  title: string;
  tags: string[];
}

export interface LanguageItem {
  name: string;
  level: string;
  rating: number;
}

export interface ResumeData {
  profile: Profile;
  summary: Summary;
  educationHeading: string;
  education: EducationItem[];
  experienceHeading: string;
  experience: ExperienceItem[];
  skillsHeading: string;
  skills: SkillGroup[];
  languagesHeading: string;
  languages: LanguageItem[];
}

export const resumeData: ResumeData = {
  profile: {
    name: 'Alex Morgan',
    title: 'Frontend Developer',
    contacts: ['alex.morgan@email.com', '+1 (555) 123-4567', 'linkedin.com/in/alexmorgan'],
    location: 'San Francisco, CA',
  },
  summary: {
    heading: 'Summary',
    content:
      'Frontend developer with 5+ years of experience building responsive and accessible web applications using React, TypeScript, and modern UI tooling.',
  },
  educationHeading: 'Education',
  education: [
    {
      degree: 'B.S. in Computer Science',
      institution: 'University of California, Berkeley',
      institutionUrl: 'https://www.berkeley.edu',
      period: '2016 - 2020',
    },
  ],
  experienceHeading: 'Experience',
  experience: [
    {
      role: 'Senior Frontend Developer',
      company: 'BrightTech Inc.',
      companyUrl: 'https://www.brighttech.com',
      period: 'Jan 2023 - Present',
      bullets: [
        'Led migration of a large React codebase to TypeScript, improving maintainability and reducing production bugs.',
        'Built reusable component libraries that accelerated new feature delivery by 30%.',
        'Collaborated with design and product teams to deliver accessible, mobile-first user experiences.',
      ],
    },
    {
      role: 'Frontend Developer',
      company: 'Nova Digital',
      companyUrl: 'https://www.novadigital.com',
      period: 'Jul 2020 - Dec 2022',
      bullets: [
        'Developed and maintained customer-facing pages with React and Vite.',
        'Optimized bundle sizes and page performance, increasing Lighthouse scores across key routes.',
        'Implemented unit and integration tests to improve deployment confidence.',
      ],
    },
  ],
  skillsHeading: 'Skills',
  skills: [
    {
      title: 'Frontend',
      tags: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      title: 'Tools',
      tags: ['Vite', 'Jest', 'Testing Library', 'Git', 'Figma'],
    },
  ],
  languagesHeading: 'Languages',
  languages: [
    {
      name: 'English',
      level: 'Native',
      rating: 5,
    },
    {
      name: 'Spanish',
      level: 'Professional',
      rating: 4,
    },
  ],
};
