export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: 'experience' | 'education';
  description: string;
  tags: string[];
  telemetry: {
    stint: string;
    lapDelta?: string;
    status: 'ACTIVE' | 'COMPLETED' | 'IN_PROGRESS';
  };
}

export const experiences: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'SECRETARY GENERAL',
    organization: 'BSO Robotika — UIN Sunan Gunung Djati Bandung',
    period: '2025 — PRESENT',
    type: 'experience',
    description: 'Stepped into General Secretary for the robotics collective. Overhauled the proposal lifecycle moving from ad-hoc brainstorming to structured stage-gate workflows with clear milestones, review checkpoints, and accountability matrices. Standardized documentation templates and version-controlled review loops.',
    tags: ['Leadership', 'Robotics', 'Workflow Engineering', 'Operations'],
    telemetry: {
      stint: 'STINT 01',
      status: 'ACTIVE'
    }
  },
  {
    id: 'exp-2',
    role: 'HEAD OF EVENT DIVISION',
    organization: 'Sunan Gunung Djati Robotic Competition (SGDRC)',
    period: '2025',
    type: 'experience',
    description: 'Steered Event Division: architected end-to-end workflows, enforced cross-functional sync cadences, and executed high-stakes planning under tight SLAs for a national-scale robotics competition. Navigated real-time bottlenecks with agile triage and resource reallocation.',
    tags: ['Event Management', 'Agile Execution', 'Cross Division', 'Operations'],
    telemetry: {
      stint: 'STINT 02',
      status: 'COMPLETED'
    }
  },
  {
    id: 'exp-3',
    role: 'INTERNAL DEPARTMENT SUPERVISOR',
    organization: 'BSO Robotika — UIN Sunan Gunung Djati Bandung',
    period: '2025',
    type: 'experience',
    description: 'Oversaw departmental programs, organizational compliance, internal evaluation, and strategic coordination. Guided division heads in execution and maintaining team operational standards.',
    tags: ['Internal Affairs', 'Compliance', 'Mentorship'],
    telemetry: {
      stint: 'STINT 03',
      status: 'COMPLETED'
    }
  },
  {
    id: 'exp-4',
    role: 'SOFTWARE & ML PROJECTS',
    organization: 'Independent & Applied AI Initiatives',
    period: '2024 — PRESENT',
    type: 'experience',
    description: 'Developing full-stack web applications and intelligent systems across modern web dev, machine learning, deep learning, IndoBERT NLP models, and data science pipelines. Balancing intuitive frontend UX with robust backend logic.',
    tags: ['FullStack', 'NLP', 'Machine Learning', 'Deep Learning'],
    telemetry: {
      stint: 'STINT 04',
      status: 'ACTIVE'
    }
  },
  {
    id: 'edu-1',
    role: 'INFORMATICS ENGINEERING',
    organization: 'UIN Sunan Gunung Djati Bandung (Faculty of Science & Tech)',
    period: '2023 — PRESENT',
    type: 'education',
    description: 'Building expertise across software engineering and artificial intelligence, with hands-on work in full-stack development, machine learning, deep learning, NLP, data science, and distributed systems.',
    tags: ['AI & ML', 'Data Science', 'NLP', 'Distributed Systems'],
    telemetry: {
      stint: 'ACADEMY 01',
      status: 'IN_PROGRESS'
    }
  },
  {
    id: 'edu-2',
    role: 'AI ENGINEERING PROGRAM',
    organization: 'Pijak by Dicoding',
    period: 'FEB 2026 — JUL 2026',
    type: 'education',
    description: 'Intensive industry-oriented training in AI engineering and machine learning, covering model development, deployment, and production workflows. Hands-on with MLflow, Docker, and MLOps.',
    tags: ['MLOps', 'Docker', 'MLflow', 'Model Deployment'],
    telemetry: {
      stint: 'ACADEMY 02',
      status: 'COMPLETED'
    }
  }
];
