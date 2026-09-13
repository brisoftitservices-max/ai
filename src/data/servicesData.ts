import { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'business-intelligence',
    number: '01',
    title: 'Business Intelligence',
    headline: 'Turn Business Data Into Confident Decisions',
    shortDesc: 'Transform fragmented business information into unified, executive-grade intelligence systems.',
    fullDesc: 'Brisoft engineers unified BI architectures that eliminate reporting silos, replace manual spreadsheet cycles with automated governance, and empower C-suite and departmental leaders to make faster, evidence-backed decisions.',
    iconName: 'BarChart3',
    badge: 'Decision Intelligence',
    architectureTags: ['Semantic Modeling', 'Automated Lineage', 'C-Suite Control Towers', 'Self-Service Governance'],
    problem: 'Leadership teams frequently suffer from conflicting metrics, siloed departmental reporting, and multi-day delays compiling monthly figures in brittle spreadsheets, leading to decision paralysis and missed market windows.',
    approach: 'We architect enterprise semantic layers and single-source-of-truth frameworks that decouple reporting from operational databases. By establishing standardized KPI taxonomies and interactive visual control towers, data becomes directly actionable across every tier of management.',
    capabilities: [
      'Enterprise BI Strategy & Roadmapping',
      'Executive Dashboards & Control Towers',
      'Unified Semantic Layer Modeling',
      'Standardized KPI Taxonomy Definition',
      'Real-Time Operational Monitoring',
      'Self-Service Analytics Governance',
      'Automated Multi-Source Management Reporting',
      'Embedded Analytics & Decision Support Systems'
    ],
    businessValue: [
      'Reduction in executive reporting latency from days to real-time',
      'Complete elimination of conflicting cross-departmental figures',
      'Freed managerial bandwidth from manual data reconciliation',
      'Auditable data lineage ensuring corporate governance compliance',
      'High-velocity decision loops driving margin optimization'
    ],
    typicalUseCases: [
      'Global revenue and margin variance tracking across business units',
      'Supply chain inventory turnaround and supplier SLA dashboards',
      'Customer lifetime value (LTV) and churn velocity monitoring',
      'Board-ready financial performance and cash burn reporting'
    ],
    challenges: [
      'Conflicting departmental numbers creating executive gridlock',
      'Fragile manual spreadsheets prone to formula corruption',
      'High engineering backlog for ad-hoc leadership reporting requests',
      'Zero auditable lineage between raw transactions and executive charts'
    ],
    outcomes: [
      'Sub-second query responses on multi-million row datasets',
      '100% unified organizational metric definitions',
      'Autonomous scheduled executive briefing digests',
      'Self-service enablement for non-technical stakeholders'
    ],
    ctaText: 'Design Your BI Architecture'
  },
  {
    id: 'data-engineering',
    number: '02',
    title: 'Data Engineering',
    headline: 'Build the Resilient Foundation for AI & Analytics',
    shortDesc: 'Architect scalable modern lakehouses, robust streaming pipelines, and automated data quality frameworks.',
    fullDesc: 'Reliable AI and analytics require bulletproof data infrastructure. Brisoft designs, builds, and modernizes cloud data pipelines, lakehouses, and governance frameworks that ensure clean, low-latency, and auditable data flows enterprise-wide.',
    iconName: 'Database',
    badge: 'Core Infrastructure',
    architectureTags: ['Lakehouse Architecture', 'Idempotent Pipelines', 'Data Mesh', 'Streaming ETL/ELT'],
    problem: 'Legacy batch jobs break unpredictably under high concurrency, data arrives stale or corrupted with schema drift, and data engineers spend 80% of their capacity fixing fragile pipelines instead of delivering strategic capability.',
    approach: 'We implement modern lakehouse architectures and automated CI/CD pipelines with schema contracts, automated regression testing, and declarative orchestration. Data is ingested, cleaned, deduplicated, and cataloged through fault-tolerant, idempotent pipelines.',
    capabilities: [
      'Modern Lakehouse & Cloud Warehouse Architecture',
      'High-Throughput Streaming & Batch ETL/ELT',
      'Automated Data Quality & Schema Drift Prevention',
      'Enterprise Data Cataloging & Lineage Tracking',
      'Distributed Data Ingestion & Transformation',
      'Cloud Data Lake Modernization & Migration',
      'Data Mesh & Domain-Oriented Decentralization',
      'REST & Event-Driven Integration Endpoints'
    ],
    businessValue: [
      'Zero unplanned downtime in daily analytical workloads',
      '99.9%+ pipeline data delivery reliability within agreed SLAs',
      'Drastic reduction in cloud compute waste via query optimization',
      'Production-ready data availability for downstream AI models',
      'Strict regulatory data sovereignty and role-based access'
    ],
    typicalUseCases: [
      'Consolidating multi-region ERP, CRM, and transactional databases',
      'Sub-second clickstream and IoT telemetry ingestion for real-time alerts',
      'Legacy on-premise warehouse modernization to scalable cloud platforms',
      'Automated regulatory compliance pipelines (GDPR/HIPAA/SOX)'
    ],
    challenges: [
      'Brittle overnight ETL jobs failing and blocking morning operations',
      'Siloed on-premise relational databases failing to scale with volume',
      'Lack of automated validation allowing bad data to contaminate reports',
      'Spiraling cloud storage and compute costs from unoptimized queries'
    ],
    outcomes: [
      'P95 pipeline latency reduced from hours to minutes',
      'Zero silent data corruption with automated assertions',
      'Clean, documented schemas ready for data science teams',
      'Elastic cloud scaling with predictable cost controls'
    ],
    ctaText: 'Modernize Your Data Pipeline'
  },
  {
    id: 'artificial-intelligence',
    number: '03',
    title: 'Artificial Intelligence',
    headline: 'Deploy High-Conviction AI That Solves Core Business Friction',
    shortDesc: 'Cut through generative AI hype to engineer secure, observable, enterprise-ready cognitive solutions.',
    fullDesc: 'Brisoft helps enterprise leaders identify high-impact, defensible AI opportunities and engineers robust systems—from domain-specific LLM copilots and retrieval-augmented generation (RAG) to autonomous document intelligence—that directly enhance operational velocity.',
    iconName: 'Sparkles',
    badge: 'Applied Enterprise AI',
    architectureTags: ['RAG Architectures', 'Domain LLMs', 'Agentic Workflows', 'Guardrails & Observability'],
    problem: 'Enterprises struggle to move beyond superficial chat prototypes. They face hallucinations, unvetted data leaks, unclear ROI, and steep engineering hurdles when integrating foundation models with complex internal business data.',
    approach: 'We apply pragmatic, enterprise-hardened AI engineering: grounding generative models via private vector indexes and hybrid semantic search, enforcing strict safety guardrails, monitoring token economics, and integrating directly into mission-critical operational software.',
    capabilities: [
      'Enterprise LLM Adaptation & Private RAG Pipelines',
      'Domain-Specific Cognitive Copilots & Assistants',
      'Intelligent Unstructured Document Extraction',
      'Semantic Search & Enterprise Knowledge Graphs',
      'Agentic Multi-Step Workflow Orchestration',
      'AI Safety, Hallucination Guardrails & Audit Logging',
      'Prompt Engineering & Continuous Evaluation Harnesses',
      'Custom NLP & Text Categorization Engines'
    ],
    businessValue: [
      '80%+ compression in manual document synthesis turnaround',
      'Preserved intellectual property with zero external data leakage',
      'Instant institutional knowledge retrieval across millions of files',
      'Accelerated customer response resolution without scaling head count',
      'High-accuracy automated processing of complex multi-page contracts'
    ],
    typicalUseCases: [
      'Automated analysis and compliance flagging of supplier contracts',
      'Internal technical support and policy copilots for distributed teams',
      'Intelligent extraction of unstructured invoices, bills of lading, and RFPs',
      'Customer sentiment distillation and triage across omnichannel feedback'
    ],
    challenges: [
      'Generic public AI models hallucinating confidential enterprise figures',
      'Vast corporate knowledge trapped in disconnected PDFs, slides, and emails',
      'Risk of leaking proprietary intellectual property to public model providers',
      'Difficulty quantifying the financial ROI of speculative AI experiments'
    ],
    outcomes: [
      'Defensible, auditable AI outputs backed by source citations',
      'Hours of repetitive manual research compressed into seconds',
      'Enterprise-grade security adhering to SOC2 and ISO standards',
      'Direct operational cost savings with measured productivity gains'
    ],
    ctaText: 'Evaluate Your AI Roadmap'
  },
  {
    id: 'machine-learning',
    number: '04',
    title: 'Machine Learning',
    headline: 'Predict Trends, Optimize Resources, and Prevent Risk',
    shortDesc: 'Turn historical transactional data into predictive models and automated mathematical optimization engines.',
    fullDesc: 'Moving machine learning from academic theory into resilient production environments. Brisoft builds custom predictive algorithms, demand forecasting models, and MLOps pipelines that continuously learn and optimize operational decisions.',
    iconName: 'Cpu',
    badge: 'Predictive Engineering',
    architectureTags: ['MLOps Pipelines', 'Feature Stores', 'Continuous Retraining', 'Drift Monitoring'],
    problem: 'Organizations rely on lagging indicators and gut feeling to forecast inventory, price contracts, or detect churn, while existing ML initiatives get stuck in data science notebooks without robust CI/CD or production reliability.',
    approach: 'We establish full-lifecycle MLOps: rigorous feature store architecture, automated backtesting against holdout data, containerized low-latency serving APIs, and continuous drift monitoring to guarantee models perform reliably in production.',
    capabilities: [
      'End-to-End MLOps & Continuous Training Pipelines',
      'Time-Series Forecasting & Demand Prediction',
      'Customer Churn & Propensity Scoring Engines',
      'Real-Time Anomaly & Fraud Detection',
      'Algorithmic Pricing & Resource Optimization',
      'Predictive Maintenance & Asset Health Modeling',
      'Model Explainability & Feature Attribution',
      'Low-Latency Inference APIs & Microservices'
    ],
    businessValue: [
      'Significant reduction in inventory holding costs and stockout occurrences',
      'Early identification of at-risk revenue and accounts prior to churn',
      'Automated pre-emption of equipment failure before costly downtime',
      'Consistent risk pricing backed by empirical statistical distributions',
      'Continuous model accuracy through automated drift detection'
    ],
    typicalUseCases: [
      'Predicting SKU-level retail demand taking seasonality into account',
      'Proactive credit risk profiling and loan default probability modeling',
      'Predictive telemetry monitoring for industrial machinery and fleet assets',
      'Dynamic dynamic routing and dispatch optimization in logistics networks'
    ],
    challenges: [
      'Models degrading silently in production due to concept and feature drift',
      'Data science notebooks failing to scale into production microservices',
      'Inaccurate demand forecasts causing either inventory shortages or tied-up capital',
      'Black-box models failing regulatory explainability requirements'
    ],
    outcomes: [
      'Automated model retraining pipelines triggered by data drift',
      'Measurably superior prediction accuracy over static heuristics',
      'Sub-50ms inference latency for mission-critical transactional paths',
      'Transparent SHAP-value feature attribution for executive trust'
    ],
    ctaText: 'Discuss Predictive Capabilities'
  },
  {
    id: 'robotics-automation',
    number: '05',
    title: 'Robotics & Intelligent Automation',
    headline: 'Eliminate Repetitive Operational Bottlenecks at Scale',
    shortDesc: 'Orchestrate robotic process automation and computer vision to deliver touchless business operations.',
    fullDesc: 'Brisoft connects digital robotic process automation (RPA) and industrial automation principles with intelligent cognitive systems to automate complex, multi-system workflows, eliminate human data re-entry, and ensure operational precision.',
    iconName: 'Cog',
    badge: 'Autonomous Operations',
    architectureTags: ['Intelligent RPA', 'Computer Vision', 'Orchestration Engines', 'Exception Handling'],
    problem: 'Skilled knowledge workers spend 30-40% of their day manually copying data between legacy green-screens, portals, and spreadsheets, causing high error rates, operational bottlenecks, and burnout.',
    approach: 'We deploy resilient software bots and API orchestrators equipped with computer vision and machine intelligence. Our solutions include built-in fallback mechanisms, human-in-the-loop exception handling, and enterprise audit logging.',
    capabilities: [
      'Intelligent Robotic Process Automation (RPA)',
      'Cross-System Enterprise Workflow Orchestration',
      'Computer Vision for Visual Quality Inspection',
      'Automated Data Reconciliation & Settlement',
      'Human-in-the-Loop Exception Management',
      'Legacy System Modernization via API Wrappers',
      'Warehouse & Fulfillment Process Automation',
      'End-to-End Bot Lifecycle & Monitoring Governance'
    ],
    businessValue: [
      '95%+ reduction in manual transactional data-entry turnaround',
      'Near-zero error rates in high-stakes compliance and accounting workflows',
      '24/7 continuous process execution without staffing bottlenecks',
      'Seamless bridging between modern SaaS and decades-old legacy software',
      'Significant elevation in employee retention by eliminating grunt work'
    ],
    typicalUseCases: [
      'Automated invoice-to-PO three-way matching and ERP booking',
      'End-to-end customer onboarding and multi-agency KYC verification',
      'Automated parts inspection on manufacturing lines via computer vision',
      'Cross-portal carrier status updates and bill of lading reconciliation'
    ],
    challenges: [
      'High operational costs associated with manual data re-keying',
      'Slow order-to-cash processing times hampering customer satisfaction',
      'Legacy applications lacking modern APIs preventing standard integration',
      'Frequent human transcription mistakes causing billing discrepancies'
    ],
    outcomes: [
      'Touchless execution on over 85% of standard transactions',
      'Zero-defect rate across auditable financial workflows',
      'Operational capacity scaled 3-5x without linear hiring',
      'Comprehensive real-time telemetry on every bot transaction'
    ],
    ctaText: 'Automate Core Workflows'
  },
  {
    id: 'data-analytics',
    number: '06',
    title: 'Data Analytics',
    headline: 'Uncover What Happened, Why It Happened, and What to Do Next',
    shortDesc: 'Extract deep commercial insights from complex datasets to drive operational and financial performance.',
    fullDesc: 'Beyond basic descriptive charts, Brisoft applies diagnostic, exploratory, and prescriptive analytics. We connect fragmented behavioral, operational, and financial data points to identify revenue leakages, optimize pricing, and accelerate growth.',
    iconName: 'LineChart',
    badge: 'Commercial Insights',
    architectureTags: ['Cohort Analysis', 'Attribution Modeling', 'Root Cause Diagnostics', 'Prescriptive Insights'],
    problem: 'Companies collect massive volumes of operational data, yet business leaders still operate with partial visibility, unable to pinpoint why margins dropped in a specific region or which customer cohorts drive true profitability.',
    approach: 'We combine rigorous statistical exploration with commercial understanding. By unifying disparate transactional logs and applying multi-touch attribution and root-cause analysis, we surface high-leverage business recommendations.',
    capabilities: [
      'Diagnostic & Root-Cause Operational Analytics',
      'Customer Acquisition, Retention & Cohort Analytics',
      'Revenue Leakage & Cost Attribution Modeling',
      'Price Elasticity & Discounting Analytics',
      'Product Usage & Feature Adoption Tracking',
      'Marketing Multi-Touch Attribution Modeling',
      'Supply Chain Velocity & Lead-Time Analysis',
      'Statistical Hypothesis Testing & Experimentation'
    ],
    businessValue: [
      'Immediate discovery and closure of margin erosion channels',
      'Clear identification of most profitable customer archetypes',
      'Data-backed pricing strategies that protect market share',
      'Optimized marketing spend allocated to highest-yielding channels',
      'Clear root-cause diagnoses for sudden operational variances'
    ],
    typicalUseCases: [
      'Identifying root causes of manufacturing yield loss across production shifts',
      'Diagnosing enterprise subscription churn by customer engagement tier',
      'Optimizing regional product catalog mix based on basket affinity analysis',
      'Analyzing cross-dock logistics turnaround to eliminate carrier detention fees'
    ],
    challenges: [
      'Massive telemetry logs with zero actionable executive takeaways',
      'Disagreement between sales, marketing, and finance on channel performance',
      'Unnoticed margin decay due to bundled discounts and shipping slippage',
      'Inability to separate cyclical market noise from genuine organic growth'
    ],
    outcomes: [
      'Identified margin recovery opportunities within the first 60 days',
      'Consensus on cross-departmental customer acquisition metrics',
      'Automated variance alerts triggered when operational KPIs drift',
      'Executive playbooks based on empirical statistical findings'
    ],
    ctaText: 'Analyze Your Performance'
  },
  {
    id: 'digital-transformation',
    number: '07',
    title: 'Digital Transformation',
    headline: 'Modernize Systems and Operating Models for the Digital Era',
    shortDesc: 'Re-platform legacy architectures into agile, cloud-native, data-driven enterprise engines.',
    fullDesc: 'Digital transformation is not simply moving servers to the cloud; it is re-engineering how your business operates, delivers value, and scales. Brisoft guides enterprise modernization roadmaps, ensuring technical architecture directly reinforces business strategy.',
    iconName: 'Layers',
    badge: 'Enterprise Evolution',
    architectureTags: ['Cloud Modernization', 'API-First Platforms', 'Microservices', 'Operational Agility'],
    problem: 'Legacy monolithic core systems prevent new digital product launches, create extreme security vulnerabilities, and require expensive specialized maintenance, leaving organizations vulnerable to nimble, digital-native competitors.',
    approach: 'We design pragmatically phased modernization roadmaps. Using strangler-fig migration patterns, API-first microservices, and automated DevOps pipelines, we replace brittle legacy modules without halting ongoing business operations.',
    capabilities: [
      'Legacy Core Modernization & Cloud Migration',
      'API-First Enterprise Architecture & Microservices',
      'DevOps, CI/CD & Automated Deployment Pipelines',
      'Digital Operating Model & Technology Strategy',
      'Customer Portal & Enterprise Application Modernization',
      'Data-Driven Process Re-Engineering',
      'Enterprise Integration Platforms (iPaaS)',
      'Security Hardening & Cloud Infrastructure Governance'
    ],
    businessValue: [
      'Time-to-market for new digital features reduced by 60%+',
      'Substantial reduction in legacy licensing and maintenance fees',
      'Resilient, self-healing cloud infrastructure handling traffic surges',
      'Empowered engineering teams operating with modern CI/CD tooling',
      'Future-proof foundation ready for emerging AI capabilities'
    ],
    typicalUseCases: [
      'Migrating legacy on-premise transactional cores to cloud microservices',
      'Consolidating disparate acquisitions onto a single API-driven platform',
      'Building secure, real-time client-facing self-service portals',
      'Automating infrastructure provisioning with Infrastructure-as-Code (Terraform)'
    ],
    challenges: [
      'Decades-old legacy systems with zero documentation and high failure risk',
      'Monolithic release cycles taking months to deploy minor bug fixes',
      'Escalating on-premise hardware refresh costs and datacenter lock-in',
      'Fragmented customer experiences across disconnected brand touchpoints'
    ],
    outcomes: [
      'Phased zero-downtime migration completed without business disruption',
      'Standardized CI/CD reducing release cycles from months to days',
      '99.95%+ uptime with automated failover and multi-zone redundancy',
      'High-velocity innovation pipeline driven by modular architecture'
    ],
    ctaText: 'Plan Your Modernization'
  },
  {
    id: 'technology-consulting',
    number: '08',
    title: 'Technology Consulting',
    headline: 'Strategic Advisory Grounded in Practical Engineering Realities',
    shortDesc: 'Objective technical leadership, vendor-neutral assessments, and architectural governance.',
    fullDesc: 'Brisoft acts as your trusted technical advisor. We assist executive boards, CTOs, and CIOs in evaluating technology stacks, auditing existing codebases, assessing technical debt, and formulating multi-year roadmaps that protect capital and maximize strategic advantage.',
    iconName: 'Compass',
    badge: 'Strategic Advisory',
    architectureTags: ['Architecture Audit', 'Vendor Neutrality', 'Tech Debt Remediation', 'Due Diligence'],
    problem: 'Executives are bombarded with vendor sales pitches, conflicting internal opinions, and buzzword-laden proposals, resulting in millions wasted on software licenses that fail to deliver expected business transformation.',
    approach: 'We provide vendor-neutral, engineering-led counsel. We conduct deep-dive architectural audits, interview operational stakeholders, benchmark existing capabilities, and deliver clear, prioritized technical roadmaps aligned with corporate balance sheets.',
    capabilities: [
      'Enterprise Architecture Audits & Health Assessments',
      'Technology Strategy & Multi-Year Roadmap Definition',
      'Vendor-Neutral Tool Selection & RFP Technical Advisory',
      'Technical Debt Quantification & Remediation Planning',
      'Technical Due Diligence for M&A and Private Equity',
      'Data Privacy, Security Architecture & Compliance Audits',
      'Cloud TCO Optimization & License Rationalization',
      'Fractional CTO / Technical Steering Committee Advisory'
    ],
    businessValue: [
      'Guaranteed avoidance of costly, misaligned multi-year software contracts',
      'Clear, prioritized technical investment roadmap backed by C-suite consensus',
      'Rapid identification and remediation of critical security & scalability risks',
      'Substantial savings through redundant cloud and tool rationalization',
      'Objective, vendor-agnostic recommendations focused solely on client ROI'
    ],
    typicalUseCases: [
      'Independent technical due diligence on target software acquisitions',
      'Evaluating enterprise cloud migration feasibility and cost models',
      'Benchmarking internal data engineering capabilities against industry leaders',
      'Rationalizing overlapping analytics and BI tools across global business units'
    ],
    challenges: [
      'Vendor bias from implementation partners pushing specific software stacks',
      'Accumulated technical debt slowing new initiatives to a complete crawl',
      'Uncertainty whether existing systems can support 3-5x business growth',
      'Over-spending on redundant enterprise SaaS and cloud infrastructure'
    ],
    outcomes: [
      'Actionable, board-ready architectural roadmap with clear ROI metrics',
      'Identified 20-35% recurring savings in software licensing and cloud spend',
      'Eliminated high-risk architectural vulnerabilities before exploitation',
      'Consensus between executive leadership and engineering teams'
    ],
    ctaText: 'Schedule Strategic Consultation'
  }
];
