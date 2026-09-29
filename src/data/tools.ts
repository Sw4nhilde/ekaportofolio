export interface ToolItem {
  name: string;
  category: 'ai' | 'web' | 'lang' | 'devops';
  role: string;
  description: string;
  proficiency: number; // 0 - 100
  telemetryCode: string;
}

export const toolsData: ToolItem[] = [
  // AI & Machine Learning
  {
    name: 'Python',
    category: 'ai',
    role: 'Core AI Engine & Backend',
    description: 'Primary language for ML algorithms, deep neural networks, IndoBERT NLP models, and data manipulation pipelines.',
    proficiency: 95,
    telemetryCode: 'PYT-01'
  },
  {
    name: 'PyTorch',
    category: 'ai',
    role: 'Deep Learning & Neural Networks',
    description: 'Framework of choice for custom neural architectures, tensor autograd, loss computation, and IndoBERT fine-tuning.',
    proficiency: 88,
    telemetryCode: 'TOR-02'
  },
  {
    name: 'Hugging Face',
    category: 'ai',
    role: 'Transformers & NLP Models',
    description: 'IndoBERT tokenizers, pretrained foundation weights, evaluation benchmarks, and pipeline model hubs.',
    proficiency: 90,
    telemetryCode: 'HUG-03'
  },
  {
    name: 'TensorFlow / Keras',
    category: 'ai',
    role: 'Deep Learning Architectures',
    description: 'Sequential neural nets, CNN visual classifiers, and LSTM recurrent units for sequential and temporal data.',
    proficiency: 85,
    telemetryCode: 'TFL-04'
  },
  {
    name: 'Scikit-Learn',
    category: 'ai',
    role: 'Predictive Modeling & Clustering',
    description: 'Supervised classifiers, regression algorithms, hyperparameter tuning, and cross-validated metrics.',
    proficiency: 92,
    telemetryCode: 'SKL-05'
  },
  {
    name: 'Pandas & NumPy',
    category: 'ai',
    role: 'Data Science & Matrix Operations',
    description: 'Vectorized mathematical operations, high-throughput dataframe transformations, and exploratory cleaning.',
    proficiency: 94,
    telemetryCode: 'NUM-06'
  },

  // Web & Frameworks
  {
    name: 'Next.js 15',
    category: 'web',
    role: 'Fullstack React Architecture',
    description: 'Server Components, SSR/SSG caching, App Router architecture, and production API route infrastructure.',
    proficiency: 92,
    telemetryCode: 'NXT-07'
  },
  {
    name: 'React 19',
    category: 'web',
    role: 'Reactive UI Engine',
    description: 'Declarative component trees, custom hooks, concurrent transitions, and high-performance render lifecycles.',
    proficiency: 94,
    telemetryCode: 'RCT-08'
  },
  {
    name: 'Tailwind CSS',
    category: 'web',
    role: 'Styling & Design System',
    description: 'Utility-first token systems, custom clip-paths, responsive layouts, and telemetry color palettes.',
    proficiency: 95,
    telemetryCode: 'TLW-09'
  },
  {
    name: 'Laravel 10',
    category: 'web',
    role: 'PHP Backend Framework',
    description: 'Eloquent ORM, RESTful API architecture, Sanctum session/token auth, and background queue workers.',
    proficiency: 84,
    telemetryCode: 'LAR-10'
  },

  // Languages
  {
    name: 'TypeScript',
    category: 'lang',
    role: 'Type-Safe Software Engineering',
    description: 'Strict type contracts, generic inference, interfaces, and zero-defect compile-time safety.',
    proficiency: 92,
    telemetryCode: 'TSP-11'
  },
  {
    name: 'Kotlin',
    category: 'lang',
    role: 'Android Native Development',
    description: 'Modern Android SDK architecture, coroutines, jetpack components, and Play Store releases.',
    proficiency: 82,
    telemetryCode: 'KTN-12'
  },
  {
    name: 'PHP',
    category: 'lang',
    role: 'Backend Server Scripting',
    description: 'Server-side data management, REST API endpoints, and database connectivity.',
    proficiency: 85,
    telemetryCode: 'PHP-13'
  },
  {
    name: 'Java',
    category: 'lang',
    role: 'OOP & System Fundamentals',
    description: 'Object-oriented data structures, algorithmic design patterns, and JVM runtime optimization.',
    proficiency: 80,
    telemetryCode: 'JAV-14'
  },

  // DevOps & Cloud
  {
    name: 'Docker',
    category: 'devops',
    role: 'Containerization & MLOps',
    description: 'Containerized environments, reproducible ML training recipes, Dockerfiles, and multi-stage builds.',
    proficiency: 86,
    telemetryCode: 'DCK-15'
  },
  {
    name: 'Supabase',
    category: 'devops',
    role: 'Realtime Backend & Auth',
    description: 'PostgreSQL database, Row Level Security (RLS), edge functions, and Realtime websocket broadcasts.',
    proficiency: 90,
    telemetryCode: 'SPB-16'
  },
  {
    name: 'MySQL',
    category: 'devops',
    role: 'Relational Database Engine',
    description: 'Schema normalization, complex indexing, ACID transactions, and query optimization.',
    proficiency: 88,
    telemetryCode: 'MSQ-17'
  },
  {
    name: 'Git & GitHub',
    category: 'devops',
    role: 'Version Control & CI/CD',
    description: 'Git stage workflows, collaborative branch strategies, PR reviews, and automated CI workflows.',
    proficiency: 94,
    telemetryCode: 'GIT-18'
  }
];
