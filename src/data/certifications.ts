export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  status: 'VERIFIED' | 'ACCREDITED';
  serialNumber: string;
  year: string;
  description: string;
  skills: string[];
  pdfUrl: string;
  thumbnailUrl: string;
  credentialUrl?: string;
}

export const certificationsData: CertificationItem[] = [
  {
    id: 'cert-mlops',
    title: 'Membangun Sistem Machine Learning',
    issuer: 'Dicoding Academy Indonesia',
    status: 'VERIFIED',
    serialNumber: 'EYX4Q5206PDL',
    year: '2026',
    description: 'Advanced production machine learning systems, data ingestion pipelines, feature stores, model monitoring, concept drift mitigation, and automated CI/CD MLOps deployment.',
    skills: ['MLOps', 'Machine Learning Systems', 'Data Pipelines', 'Model Monitoring'],
    pdfUrl: '/files/sertifikat/membangun-sistem-machine-learning.pdf',
    thumbnailUrl: '/files/sertifikat/thumbnails/membangun-sistem-machine-learning.png',
    credentialUrl: 'https://www.dicoding.com/certificates/EYX4Q5206PDL',
  },
  {
    id: 'cert-dl',
    title: 'Belajar Fundamental Deep Learning',
    issuer: 'Dicoding Academy Indonesia',
    status: 'VERIFIED',
    serialNumber: '0LZ0YY35RX65',
    year: '2026',
    description: 'Artificial neural network architectures, backpropagation mathematics, computer vision with Convolutional Neural Networks (CNN), and recurrent LSTM units using TensorFlow.',
    skills: ['Deep Learning', 'TensorFlow', 'Neural Networks', 'Computer Vision'],
    pdfUrl: '/files/sertifikat/belajar-fundamental-deep-learning.pdf',
    thumbnailUrl: '/files/sertifikat/thumbnails/belajar-fundamental-deep-learning.png',
    credentialUrl: 'https://www.dicoding.com/certificates/0LZ0YY35RX65',
  },
  {
    id: 'cert-ml',
    title: 'Belajar Machine Learning untuk Pemula',
    issuer: 'Dicoding Academy Indonesia',
    status: 'VERIFIED',
    serialNumber: '0LZ0Y2D23X65',
    year: '2026',
    description: 'Supervised & unsupervised learning algorithms, regression, classification pipelines, cross-validation, hyperparameter tuning, and data preparation using Scikit-Learn.',
    skills: ['Machine Learning', 'Scikit-Learn', 'Supervised Learning', 'Model Evaluation'],
    pdfUrl: '/files/sertifikat/belajar-machine-learning-untuk-pemula.pdf',
    thumbnailUrl: '/files/sertifikat/thumbnails/belajar-machine-learning-untuk-pemula.png',
    credentialUrl: 'https://www.dicoding.com/certificates/0LZ0Y2D23X65',
  },
  {
    id: 'cert-ai',
    title: 'Belajar Dasar AI',
    issuer: 'Dicoding Academy Indonesia',
    status: 'VERIFIED',
    serialNumber: 'QLZ96JRVMZ5D',
    year: '2026',
    description: 'Fundamental concepts of Artificial Intelligence, generative AI models, deep learning concepts, natural language processing, and ethical AI development.',
    skills: ['Artificial Intelligence', 'Generative AI', 'NLP', 'AI Ethics'],
    pdfUrl: '/files/sertifikat/belajar-dasar-ai.pdf',
    thumbnailUrl: '/files/sertifikat/thumbnails/belajar-dasar-ai.png',
    credentialUrl: 'https://www.dicoding.com/certificates/QLZ96JRVMZ5D',
  },
  {
    id: 'cert-python',
    title: 'Memulai Pemrograman dengan Python',
    issuer: 'Dicoding Academy Indonesia',
    status: 'VERIFIED',
    serialNumber: '1OP8R660LZQK',
    year: '2026',
    description: 'Core Python programming, data types, control flow, functions, object-oriented programming (OOP), unit testing, and standard library manipulation.',
    skills: ['Python', 'OOP', 'Data Structures', 'Algorithms'],
    pdfUrl: '/files/sertifikat/memulai-pemrograman-dengan-python.pdf',
    thumbnailUrl: '/files/sertifikat/thumbnails/memulai-pemrograman-dengan-python.png',
    credentialUrl: 'https://www.dicoding.com/certificates/1OP8R660LZQK',
  },
  {
    id: 'cert-git',
    title: 'Belajar Dasar Git dengan GitHub',
    issuer: 'Dicoding Academy Indonesia',
    status: 'VERIFIED',
    serialNumber: 'L4PQ2O8G2ZO1',
    year: '2026',
    description: 'Version control management, command line Git workflows, branching models, pull request triage, merge conflict resolution, and GitHub collaboration.',
    skills: ['Git', 'GitHub', 'Version Control', 'Collaboration'],
    pdfUrl: '/files/sertifikat/belajar-dasar-git-dengan-github.pdf',
    thumbnailUrl: '/files/sertifikat/thumbnails/belajar-dasar-git-dengan-github.png',
    credentialUrl: 'https://www.dicoding.com/certificates/L4PQ2O8G2ZO1',
  },
  {
    id: 'cert-se',
    title: 'Memulai Dasar Pemrograman untuk Menjadi Pengembang Software',
    issuer: 'Dicoding Academy Indonesia',
    status: 'VERIFIED',
    serialNumber: 'MRZM62LQKPYQ',
    year: '2026',
    description: 'Software engineering lifecycle (SDLC), computational logic, architecture design patterns, clean coding practices, and professional developer fundamentals.',
    skills: ['Software Engineering', 'SDLC', 'Clean Code', 'System Design'],
    pdfUrl: '/files/sertifikat/memulai-dasar-pemrograman-untuk-menjadi-pengembang-software.pdf',
    thumbnailUrl: '/files/sertifikat/thumbnails/memulai-dasar-pemrograman-untuk-menjadi-pengembang-software.png',
    credentialUrl: 'https://www.dicoding.com/certificates/MRZM62LQKPYQ',
  },
  {
    id: 'cert-logic',
    title: 'Pengenalan ke Logika Pemrograman (Programming Logic 101)',
    issuer: 'Dicoding Academy Indonesia',
    status: 'VERIFIED',
    serialNumber: 'JMZVVY193ZN9',
    year: '2026',
    description: 'Algorithmic problem-solving frameworks, pseudocode design, structured conditional logic, loop optimization, and computational reasoning.',
    skills: ['Computational Thinking', 'Logic Design', 'Algorithms', 'Problem Solving'],
    pdfUrl: '/files/sertifikat/pengenalan-ke-logika-pemrograman-programming-logic-101.pdf',
    thumbnailUrl: '/files/sertifikat/thumbnails/pengenalan-ke-logika-pemrograman-programming-logic-101.png',
    credentialUrl: 'https://www.dicoding.com/certificates/JMZVVY193ZN9',
  },
];
