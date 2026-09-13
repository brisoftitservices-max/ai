import { CaseStudyItem } from '../types';

export const CASE_STUDIES_DATA: CaseStudyItem[] = [
  {
    id: 'unified-bi-platform',
    title: 'From Fragmented Reporting to a Unified Business Intelligence Platform',
    industry: 'Manufacturing / Industrial Operations',
    badge: 'Representative Solution',
    challenge: 'Management teams relied on spreadsheets and reports generated from multiple operational systems. Reporting required significant manual effort and different teams often worked with different versions of performance data.',
    solution: 'Brisoft designed a centralized data and BI architecture connecting operational data sources into a unified reporting environment.',
    capabilities: [
      'Data integration',
      'Data engineering',
      'Data transformation',
      'Business intelligence',
      'KPI dashboards',
      'Executive reporting'
    ],
    illustrativeOutcome: 'Management gained a single view of operational performance, reduced dependency on manually prepared reports and improved the speed at which business teams could access key performance indicators.',
    ctaText: 'Discuss Your BI Challenge'
  },
  {
    id: 'predictive-analytics-planning',
    title: 'Building a Predictive Analytics Foundation for Better Planning',
    industry: 'Supply Chain / Distribution',
    badge: 'Representative Solution',
    challenge: 'The organization needed better visibility into demand patterns and wanted to move from reactive planning toward more data-driven forecasting.',
    solution: 'Brisoft designed a data pipeline and analytical model that consolidated historical operational information and prepared it for forecasting and machine-learning use cases.',
    capabilities: [
      'Data engineering',
      'Data analytics',
      'Machine learning',
      'Forecasting',
      'Dashboarding'
    ],
    illustrativeOutcome: 'The organization gained a more structured analytical foundation for forecasting and could evaluate demand patterns using a consistent data model.',
    ctaText: 'Explore Predictive Analytics'
  },
  {
    id: 'ai-document-processing',
    title: 'Using AI to Reduce Manual Document Processing',
    industry: 'Professional Services / Enterprise Operations',
    badge: 'Representative Solution',
    challenge: 'Teams spent significant time reviewing and extracting information from repetitive business documents.',
    solution: 'An AI-assisted document processing workflow was designed to extract relevant information, classify documents and route information into downstream business processes.',
    capabilities: [
      'Artificial intelligence',
      'Document intelligence',
      'Natural language processing',
      'Workflow automation',
      'Data extraction'
    ],
    illustrativeOutcome: 'The solution created a more structured document workflow and reduced repetitive manual handling, allowing employees to focus on higher-value activities.',
    ctaText: 'Explore AI Automation'
  }
];
