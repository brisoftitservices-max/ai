import { EcosystemStep } from '../types';

export const ECOSYSTEM_STEPS: EcosystemStep[] = [
  {
    id: 'data-engineering',
    stepNumber: '01',
    name: 'Data Engineering',
    tagline: 'Foundational Ingestion & Quality',
    description: 'Ingest, cleanse, normalize, and pipeline disparate structured and unstructured data sources into high-integrity unified streams.',
    details: [
      'Multi-source batch and streaming data ingestion',
      'Robust schema enforcement, validation, and deduplication',
      'Automated data lineage and audit logging'
    ],
    technologies: ['Apache Kafka', 'Airflow', 'Spark', 'dbt', 'SQL'],
    impactMetric: 'Zero Raw Data Silos'
  },
  {
    id: 'data-platform',
    stepNumber: '02',
    name: 'Data Platform',
    tagline: 'Scalable Unified Storage & Lakehouse',
    description: 'Provide an enterprise-grade cloud warehouse and lakehouse layer that decouples compute and storage while strictly enforcing governance.',
    details: [
      'Cloud data warehouse and medallion lakehouse architecture',
      'Row- and column-level security with role-based access control',
      'High-concurrency query optimization for real-time reads'
    ],
    technologies: ['Snowflake', 'BigQuery', 'Databricks', 'AWS Redshift', 'Azure Synapse'],
    impactMetric: 'Sub-Second Analytical Queries'
  },
  {
    id: 'business-intelligence',
    stepNumber: '03',
    name: 'Business Intelligence',
    tagline: 'Unified Reporting & Executive Visibility',
    description: 'Transform unified warehouse models into interactive semantic models, executive KPI dashboards, and self-service reporting layers.',
    details: [
      'C-suite executive KPI control towers',
      'Departmental operational scorecards with drill-down capability',
      'Standardized business metric definitions across all branches'
    ],
    technologies: ['Power BI', 'Tableau', 'Looker', 'ThoughtSpot', 'Cube.js'],
    impactMetric: 'Single Version of the Truth'
  },
  {
    id: 'analytics',
    stepNumber: '04',
    name: 'Analytics',
    tagline: 'Diagnostic & Prescriptive Insights',
    description: 'Uncover why metrics shifted, model cohorts and behavioral funnels, and identify key drivers behind revenue and efficiency changes.',
    details: [
      'Root-cause statistical diagnostics',
      'Customer lifetime value & cohort retention modeling',
      'Interactive scenario simulations and sensitivity models'
    ],
    technologies: ['Python', 'R', 'DuckDB', 'Pandas', 'Jupyter'],
    impactMetric: 'Deep Root-Cause Clarity'
  },
  {
    id: 'machine-learning',
    stepNumber: '05',
    name: 'Machine Learning',
    tagline: 'Predictive Modeling & Pattern Discovery',
    description: 'Train and deploy robust machine learning models that forecast demand, detect anomalies, predict churn, and calculate dynamic risk.',
    details: [
      'Time-series forecasting and demand planning algorithms',
      'Real-time anomaly and fraud detection mechanisms',
      'Continuous model monitoring, drift detection, and automated retraining'
    ],
    technologies: ['Scikit-Learn', 'XGBoost', 'TensorFlow', 'PyTorch', 'MLflow'],
    impactMetric: 'Anticipatory Decision-Making'
  },
  {
    id: 'artificial-intelligence',
    stepNumber: '06',
    name: 'Artificial Intelligence',
    tagline: 'Cognitive Reasoning & Generative Knowledge',
    description: 'Embed foundation models, document intelligence, and multi-modal generative AI into mission-critical business workflows.',
    details: [
      'Enterprise retrieval-augmented generation (RAG) on private corpora',
      'Automated semantic extraction from contracts, invoices, and schematics',
      'Cognitive copilot assistants for knowledge workers and frontline teams'
    ],
    technologies: ['Gemini Pro', 'Claude', 'OpenAI', 'LangChain', 'Vector DBs (Pinecone, pgvector)'],
    impactMetric: 'Context-Aware Intelligence'
  },
  {
    id: 'automation-robotics',
    stepNumber: '07',
    name: 'Automation & Robotics',
    tagline: 'Autonomous Execution & Process Flow',
    description: 'Bridge software automation, vision systems, and robotic process orchestration to trigger automated actions without manual overhead.',
    details: [
      'End-to-end multi-system workflow orchestration',
      'Computer vision inspection for industrial quality verification',
      'Intelligent bot task execution with human-in-the-loop validation'
    ],
    technologies: ['RPA Systems', 'OpenCV', 'Temporal.io', 'BPMN Engines', 'Industrial IoT APIs'],
    impactMetric: 'Continuous Touchless Operations'
  },
  {
    id: 'business-value',
    stepNumber: '08',
    name: 'Business Value',
    tagline: 'Measurable ROI & Competitive Advantage',
    description: 'The culmination of the entire ecosystem: revenue acceleration, lowered operational risk, reduced waste, and superior customer retention.',
    details: [
      'Direct reduction in operational cycle times and manual overhead',
      'High-confidence leadership decisions driven by verified metrics',
      'Sustainable organizational scalability without linear headcount growth'
    ],
    technologies: ['Executive Governance', 'Strategic Agility', 'Enterprise Resilience'],
    impactMetric: 'Scalable Enterprise Impact'
  }
];
