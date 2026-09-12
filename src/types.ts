export type SectionId = 
  | 'home'
  | 'about'
  | 'case-studies'
  | 'how-i-work'
  | 'skills'
  | 'cs-strategy'
  | 'incident-management'
  | 'experience'
  | 'resume'
  | 'cover-letter'
  | 'contact';

export interface MetricItem {
  value: string;
  label: string;
  description: string;
}

export interface SupportScenario {
  id: string;
  title: string;
  category: 'Billing & Subscriptions' | 'Onboarding & Adoption' | 'Account Security & Access' | 'Workflow & Feature Guidance' | 'Crisis Communication & De-escalation';
  priority: 'Urgent' | 'High Priority' | 'Standard Inquiry';
  customerType: 'Enterprise Client' | 'SMB Customer' | 'Trial User' | 'Individual Pro';
  channel: 'Live Chat' | 'Email / Ticket' | 'Phone / Screen Share';
  summary: string;
  customerFrustration: string;
  incomingMessage: string;
  empathyResponse: string;
  investigationAndAction: string[];
  resolutionOutcome: string;
  csatScore: string;
  retentionImpact: string;
  keyTakeaway: string;
}

export interface SupportSkillGroup {
  title: string;
  description: string;
  skills: {
    name: string;
    description: string;
    proficiency: 'Expert' | 'Advanced' | 'Proficient';
  }[];
}

export interface SupportPrinciple {
  title: string;
  tagline: string;
  description: string;
  iconName: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  summary: string;
  achievements: string[];
  toolsUsed: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  year: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  year?: string;
}
