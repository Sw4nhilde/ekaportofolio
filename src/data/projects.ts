export interface Project {
  name: string;
  sector: string;
  delta: string;
  status: 'P1' | 'P2' | 'P3' | 'WIP';
  description: string;
  tech: string[];
  liveUrl: string | null;
  codeUrl: string | null;
}

export const projects: Project[] = [
  {
    name: 'PajaKUY',
    sector: 'WEB APPLICATION',
    delta: '+0.842s',
    status: 'P1',
    description: 'Interactive Indonesian tax calculator with responsive design and accurate computation based on latest tax regulations.',
    tech: ['JavaScript', 'Tailwind CSS', 'HTML5'],
    liveUrl: 'https://pajak-calc-portfolio-r64z.vercel.app/',
    codeUrl: 'https://github.com/Sw4nhilde/Hitung-Pajak'
  },
  {
    name: 'YDjob',
    sector: 'MOBILE APPLICATION',
    delta: '+1.204s',
    status: 'P2',
    description: 'Mobile marketplace app for job seekers with category filters, job details, and Play Store integration.',
    tech: ['Android SDK', 'Kotlin', 'REST API'],
    liveUrl: 'https://play.google.com/store/apps/details?id=lat.pam.ydjob',
    codeUrl: 'https://github.com/Sw4nhilde/YDjob'
  },
  {
    name: 'Sentiment Analysis',
    sector: 'AI / NLP',
    delta: '+0.567s',
    status: 'P1',
    description: 'Interactive NLP playground for sentiment analysis with IndoBERT model integration.',
    tech: ['Python', 'PyTorch', 'Hugging Face', 'Next.js'],
    liveUrl: 'https://demo-playground-xi.vercel.app/',
    codeUrl: 'https://github.com/Sw4nhilde/demo-playground'
  },
  {
    name: 'DocuMind AI',
    sector: 'ENTERPRISE AI / RAG',
    delta: 'IN DEV',
    status: 'WIP',
    description: 'Enterprise multimodal document intelligence platform for PDF parsing, semantic vector retrieval (pgvector), citation verification, and low-latency streaming responses.',
    tech: ['Next.js 15', 'FastAPI', 'LangChain', 'pgvector', 'Groq API'],
    liveUrl: null,
    codeUrl: null
  },
  {
    name: 'VisionPose AI',
    sector: 'EDGE AI / COMPUTER VISION',
    delta: 'IN DEV',
    status: 'WIP',
    description: 'Client-side posture correction and real-time motion tracking engine executing 60fps computer vision inference entirely in-browser without server roundtrips.',
    tech: ['MediaPipe', 'ONNX Runtime Web', 'WebGL', 'Web Workers', 'Next.js'],
    liveUrl: null,
    codeUrl: null
  },
  {
    name: 'AudioScribe AI',
    sector: 'MULTIMEDIA AI / NLP',
    delta: 'IN DEV',
    status: 'WIP',
    description: 'End-to-end multimedia audio/video transcription pipeline with synchronized waveform scrubbing and dynamic node-based knowledge graph generation.',
    tech: ['OpenAI Whisper', 'FastAPI', 'React Flow', 'Wavesurfer.js', 'Python'],
    liveUrl: null,
    codeUrl: null
  },
  {
    name: 'SynchroSpace',
    sector: 'DISTRIBUTED SYSTEMS',
    delta: 'IN DEV',
    status: 'WIP',
    description: 'High-concurrency collaborative workspace featuring multiplayer live cursor presence, optimistic drag-and-drop state, and real-time database synchronization.',
    tech: ['Next.js', 'TypeScript', 'Supabase Realtime', 'dnd-kit', 'Tailwind CSS'],
    liveUrl: null,
    codeUrl: null
  }
];
