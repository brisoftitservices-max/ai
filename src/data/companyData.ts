import { IndustryArea, ProcessStep, TestimonialItem } from '../types';

export const BRAND_INFO = {
  companyName: 'Brisoft IT Services',
  tagline: 'Engineering Intelligence for a Smarter Business',
  positioning: 'A strategic technology partner helping organizations transform data, AI and engineering into measurable business value.',
  secondaryTagline: 'Technology With a Business Purpose.',
  location: 'Gandhinagar, Gujarat, India',
  email: 'brisoftitservices@gmail.com',
  managingDirector: 'Kajal G',
  managingDirectorTitle: 'Managing Director & CEO',
  globalMarkets: [
    { country: 'USA', label: 'United States', region: 'Americas', activeClients: 'Enterprise & Mid-Market' },
    { country: 'European Union', label: 'European Union', region: 'Europe', activeClients: 'Industrial & Financial' },
    { country: 'United Kingdom', label: 'United Kingdom', region: 'Europe', activeClients: 'Consulting & Analytics' },
    { country: 'Canada', label: 'Canada', region: 'Americas', activeClients: 'Data & Supply Chain' },
    { country: 'UAE', label: 'United Arab Emirates', region: 'Middle East', activeClients: 'Automation & Retail' },
    { country: 'Singapore', label: 'Singapore', region: 'Asia Pacific', activeClients: 'Fintech & Logistics' },
    { country: 'India', label: 'India (Headquarters)', region: 'Asia Pacific', activeClients: 'Engineering Hub & Domestic Enterprises' }
  ]
};

export const LEADERSHIP_DATA = {
  name: 'Kajal G',
  title: 'Managing Director & CEO',
  photoUrl: '/Passport Size.png',
  fallbackPhotoUrl: '/kajal-g.png',
  bio: 'Kajal G leads Brisoft IT Services with a strong focus on building long-term client relationships and delivering technology solutions aligned with real business objectives. Her experience working with large and mid-sized organizations brings a practical, client-focused perspective to technology consulting and digital transformation.',
  quote: 'Technology consulting creates true value only when engineering rigour is directly tethered to a measurable business outcome.'
};

export const WHY_BRISOFT_PILLARS = [
  {
    id: 'business-understanding',
    number: '01',
    title: 'BUSINESS UNDERSTANDING',
    description: 'Technology decisions grounded in business objectives.',
    details: 'We begin by diagnosing the underlying business friction—revenue constraints, operational overhead, or governance needs—before proposing any architectural intervention.',
    iconName: 'TrendingUp'
  },
  {
    id: 'engineering-thinking',
    number: '02',
    title: 'ENGINEERING THINKING',
    description: 'Solutions designed with scalability, reliability and maintainability in mind.',
    details: 'Every pipeline, data model, and automation script is engineered with software craftsmanship, automated validation, and clear documentation to withstand organizational growth.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'data-first-mindset',
    number: '03',
    title: 'DATA-FIRST MINDSET',
    description: 'Strong data foundations for analytics and AI.',
    details: 'Reliable AI and analytics require pristine data integrity. We build robust ingestion, cleansing, and governance layers that eliminate data silos at their source.',
    iconName: 'Database'
  },
  {
    id: 'practical-ai',
    number: '04',
    title: 'PRACTICAL AI',
    description: 'Focus on AI applications that solve meaningful business problems.',
    details: 'We cut through experimental hype to deploy pragmatic AI, document intelligence, and predictive models that deliver demonstrable operational return on investment.',
    iconName: 'Sparkles'
  },
  {
    id: 'client-partnership',
    number: '05',
    title: 'CLIENT PARTNERSHIP',
    description: 'Work collaboratively with clients rather than operating as a transactional vendor.',
    details: 'We embed deeply with your executive and engineering teams, operating with complete transparency, open knowledge transfer, and shared accountability.',
    iconName: 'Users'
  },
  {
    id: 'long-term-value',
    number: '06',
    title: 'LONG-TERM VALUE',
    description: 'Build solutions designed to create sustainable business impact.',
    details: 'Rather than brittle quick-fixes, we architect modular, future-proof platforms that enable your organization to evolve independently as technological frontiers shift.',
    iconName: 'Target'
  }
];

export const CONSULTING_PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'DISCOVER',
    description: 'Understand business objectives, stakeholder expectations, and organizational challenges.',
    deliverables: [
      'Executive stakeholder interviews',
      'Business goal mapping & KPI alignment',
      'Initial problem scope definition'
    ]
  },
  {
    step: '02',
    title: 'ASSESS',
    description: 'Evaluate existing systems, data architecture, pipeline health, and operational processes.',
    deliverables: [
      'Technical architecture audit',
      'Data maturity & quality evaluation',
      'Gap analysis & risk identification'
    ]
  },
  {
    step: '03',
    title: 'STRATEGIZE',
    description: 'Create the technology and transformation roadmap with clear architectural blueprints.',
    deliverables: [
      'End-state solution architecture',
      'Phased implementation roadmap',
      'Resource & technology stack blueprint'
    ]
  },
  {
    step: '04',
    title: 'ENGINEER',
    description: 'Build the required technology, data platforms, and AI capabilities with modern rigor.',
    deliverables: [
      'Scalable data pipelines & repositories',
      'Model training & semantic layers',
      'Integration testing & CI/CD pipelines'
    ]
  },
  {
    step: '05',
    title: 'DEPLOY',
    description: 'Put solutions into practical business use with comprehensive verification and training.',
    deliverables: [
      'Production deployment & validation',
      'User enablement & operational playbooks',
      'Executive dashboard onboarding'
    ]
  },
  {
    step: '06',
    title: 'OPTIMIZE',
    description: 'Measure impact against baseline KPIs, iterate capabilities, and scale enterprise adoption.',
    deliverables: [
      'Performance & SLA monitoring',
      'Continuous feature refinement',
      'Scale-out planning across business units'
    ]
  }
];

export const WHAT_WE_DO_JOURNEY = [
  {
    number: '01',
    title: 'Understand',
    summary: 'Understand business objectives, processes and technology challenges.',
    body: 'We listen deeply to leadership and operational teams to diagnose the core economic levers and operational friction points.'
  },
  {
    number: '02',
    title: 'Design',
    summary: 'Define the right data, technology and AI strategy.',
    body: 'We construct pragmatic architectures tailored specifically to your organizational maturity, compliance obligations, and scale.'
  },
  {
    number: '03',
    title: 'Engineer',
    summary: 'Build scalable data and technology foundations.',
    body: 'We develop robust pipelines, clean data repositories, and reliable microservices that form the rock-solid backbone of your operations.'
  },
  {
    number: '04',
    title: 'Analyze',
    summary: 'Turn business data into actionable intelligence.',
    body: 'We illuminate performance drivers through interactive dashboards, KPI frameworks, and executive decision-support views.'
  },
  {
    number: '05',
    title: 'Apply AI',
    summary: 'Use machine learning and artificial intelligence where it creates measurable value.',
    body: 'We deploy predictive models and cognitive automation only where they generate demonstrable, high-ROI business outcomes.'
  },
  {
    number: '06',
    title: 'Automate',
    summary: 'Automate repetitive and complex processes using intelligent automation and robotics.',
    body: 'We orchestrate multi-system workflows and robotic processes to eliminate manual bottlenecks and accelerate cycle times.'
  },
  {
    number: '07',
    title: 'Scale',
    summary: 'Continuously improve and scale the solution.',
    body: 'We institute ongoing governance, MLOps, and monitoring frameworks that enable the solution to compound in value over time.'
  }
];

export const INDUSTRIES_DATA: IndustryArea[] = [
  {
    id: 'manufacturing',
    name: 'Manufacturing & Industrial',
    tagline: 'Operational visibility & predictive asset management',
    iconName: 'Factory',
    applications: [
      'Unified plant floor KPI dashboards',
      'Predictive equipment maintenance modeling',
      'Automated visual quality inspection with computer vision',
      'Supply chain inventory balancing & demand forecasting'
    ]
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Life Sciences',
    tagline: 'High-integrity clinical analytics & regulatory compliance',
    iconName: 'Activity',
    applications: [
      'Secure patient workflow and clinical reporting systems',
      'Healthcare operations capacity planning',
      'Automated medical document processing',
      'Compliance and audit trail automation'
    ]
  },
  {
    id: 'financial-services',
    name: 'Financial Services & Banking',
    tagline: 'Risk mitigation, transaction intelligence & audit integrity',
    iconName: 'Landmark',
    applications: [
      'Real-time anomaly and transaction risk detection',
      'Regulatory compliance reporting & data governance',
      'Customer churn and credit portfolio analytics',
      'Intelligent reconciliation automation'
    ]
  },
  {
    id: 'retail-ecommerce',
    name: 'Retail & E-commerce',
    tagline: 'Customer lifetime intelligence & demand forecasting',
    iconName: 'ShoppingBag',
    applications: [
      'Dynamic inventory optimization and demand planning',
      'Customer segmentation & personalized recommendation logic',
      'Multi-channel revenue and margin analytics',
      'Returns workflow and fulfillment automation'
    ]
  },
  {
    id: 'logistics-supply-chain',
    name: 'Logistics & Supply Chain',
    tagline: 'End-to-end visibility & route orchestration',
    iconName: 'Truck',
    applications: [
      'Real-time freight and fleet tracking dashboards',
      'Predictive delivery ETA & carrier performance scoring',
      'Automated bill of lading and manifest processing',
      'Warehouse slotting and throughput analytics'
    ]
  },
  {
    id: 'automotive',
    name: 'Automotive & Mobility',
    tagline: 'Engineering telemetry & connected fleet analytics',
    iconName: 'Car',
    applications: [
      'Component defect analysis and supplier quality tracking',
      'Fleet telemetry data ingestion and predictive servicing',
      'Dealer network sales & inventory forecasting',
      'Autonomous robotics integration in assembly lines'
    ]
  },
  {
    id: 'energy',
    name: 'Energy & Utilities',
    tagline: 'Grid load balancing & resource optimization',
    iconName: 'Zap',
    applications: [
      'Smart meter ingestion and consumption analytics',
      'Grid load forecasting using weather and macro models',
      'Asset condition monitoring in remote installations',
      'Carbon accounting and ESG compliance reporting'
    ]
  },
  {
    id: 'professional-services',
    name: 'Professional Services',
    tagline: 'Knowledge worker augmentation & automated documentation',
    iconName: 'Briefcase',
    applications: [
      'Intelligent contract analysis and document extraction',
      'Project profitability and resource utilization BI',
      'Enterprise semantic search across historical knowledge bases',
      'Automated billing and time-capture workflows'
    ]
  },
  {
    id: 'technology',
    name: 'Technology & SaaS',
    tagline: 'Product telemetry & scalable cloud data platforms',
    iconName: 'Server',
    applications: [
      'High-concurrency user analytics and product funnel metrics',
      'Real-time cloud infrastructure cost optimization',
      'Customer expansion modeling and churn early-warning alerts',
      'Embedded customer-facing analytics dashboards'
    ]
  },
  {
    id: 'education',
    name: 'Education & EdTech',
    tagline: 'Institutional outcomes & personalized learning insights',
    iconName: 'GraduationCap',
    applications: [
      'Student engagement and retention predictive analytics',
      'Institutional resource allocation and enrollment modeling',
      'Automated administrative workflow orchestration',
      'Curriculum performance and assessment metrics'
    ]
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 't1',
    quote: 'Brisoft brought a very practical approach to our technology requirements. They took the time to understand the business problem before discussing the technical solution, which made the engagement much more productive.',
    attributionRole: 'Technology Leadership Team',
    note: 'Illustrative testimonial — replace with approved client quote'
  },
  {
    id: 't2',
    quote: 'What stood out was the combination of business understanding and technical thinking. The discussions were focused on solving the actual problem rather than simply recommending technology.',
    attributionRole: 'Operations Leadership',
    note: 'Illustrative testimonial — replace with approved client quote'
  },
  {
    id: 't3',
    quote: 'The team approached our data challenges methodically and helped us think about the problem from both an engineering and business perspective.',
    attributionRole: 'Business Transformation Team',
    note: 'Illustrative testimonial — replace with approved client quote'
  }
];

export const CAREERS_DATA = {
  headline: 'Build What Comes Next',
  description: 'Join a technology consulting environment working at the intersection of data, artificial intelligence, engineering, analytics and intelligent automation.',
  cultureValues: [
    {
      title: 'LEARN',
      description: 'Continuously expand technical and business knowledge.',
      icon: 'BookOpen'
    },
    {
      title: 'BUILD',
      description: 'Turn ideas into practical technology solutions.',
      icon: 'Hammer'
    },
    {
      title: 'COLLABORATE',
      description: 'Work closely with clients and colleagues.',
      icon: 'Users'
    },
    {
      title: 'GROW',
      description: 'Build meaningful careers through challenging work.',
      icon: 'TrendingUp'
    }
  ],
  careerAreas: [
    'Data Engineering',
    'AI / ML',
    'Business Intelligence',
    'Data Analytics',
    'Software Engineering',
    'Robotics',
    'Cloud & DevOps',
    'Technology Consulting',
    'Business Development'
  ],
  openPositionsStatus: 'No current openings listed',
  subtext: 'We are always interested in connecting with passionate engineers, data architects, and consultants. Submit your resume to be considered for upcoming client initiatives.'
};
