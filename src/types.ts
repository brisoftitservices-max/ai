export type PageRoute = 
  | 'home' 
  | 'what-we-do' 
  | 'services' 
  | 'who-we-are' 
  | 'insights' 
  | 'careers' 
  | 'contact';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  headline: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  badge: string;
  problem: string;
  approach: string;
  capabilities: string[];
  businessValue: string[];
  typicalUseCases: string[];
  challenges?: string[];
  outcomes?: string[];
  ctaText: string;
  architectureTags?: string[];
}

export interface EcosystemStep {
  id: string;
  stepNumber: string;
  name: string;
  tagline: string;
  description: string;
  details: string[];
  technologies: string[];
  impactMetric: string;
}

export interface CaseStudyItem {
  id: string;
  title: string;
  industry: string;
  badge: string;
  challenge: string;
  solution: string;
  capabilities: string[];
  illustrativeOutcome: string;
  ctaText: string;
}

export interface InsightArticle {
  id: string;
  title: string;
  slug: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  authorRole: string;
  excerpt: string;
  content: string[];
  keyTakeaways: string[];
}

export interface IndustryArea {
  id: string;
  name: string;
  tagline: string;
  iconName: string;
  applications: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  attributionRole: string;
  note: string;
}

export interface ContactFormData {
  fullName: string;
  company: string;
  businessEmail: string;
  phone: string;
  country: string;
  serviceOfInterest: string;
  projectChallenge: string;
  expectedTimeline: string;
  message: string;
}
