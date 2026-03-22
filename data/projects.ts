export interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  tech: string[]
  category: string[]
  year: number
  color: string
  accentColor: string
  link: string
  github: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'NeuralChat',
    description: 'Real-time AI conversation platform with context memory and streaming responses.',
    longDescription:
      'A full-stack conversational AI platform built with Next.js and OpenAI GPT-4. Features include multi-turn context memory, streaming token output, conversation history, user authentication, and a clean minimal UI. Handles thousands of concurrent sessions with edge-deployed serverless functions.',
    tech: ['Next.js', 'OpenAI', 'TypeScript', 'PostgreSQL', 'Tailwind', 'Vercel AI SDK'],
    category: ['AI', 'Fullstack'],
    year: 2024,
    color: '#6366f1',
    accentColor: '#818cf8',
    link: '#',
    github: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'CodeMind',
    description: 'AI-powered code review tool that catches bugs, suggests refactors, and explains complexity.',
    longDescription:
      'An intelligent code review assistant integrated with GitHub. Uses GPT-4 to analyze pull requests, identify potential bugs, suggest performance improvements, and explain complex logic in plain English. Features a VS Code extension, CLI tool, and web dashboard with analytics.',
    tech: ['Node.js', 'GPT-4', 'GitHub API', 'React', 'Python', 'FastAPI'],
    category: ['AI', 'Developer Tools'],
    year: 2024,
    color: '#10b981',
    accentColor: '#34d399',
    link: '#',
    github: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'DataSense',
    description: 'Natural language analytics dashboard — ask questions about your data in plain English.',
    longDescription:
      'A data analytics platform that lets non-technical users query complex datasets using natural language. Translates questions into SQL, executes them, and renders results as beautiful interactive charts. Built with a Python/FastAPI backend, React frontend, and LangChain for query orchestration.',
    tech: ['React', 'Python', 'FastAPI', 'LangChain', 'PostgreSQL', 'D3.js'],
    category: ['AI', 'Data', 'Fullstack'],
    year: 2024,
    color: '#f59e0b',
    accentColor: '#fbbf24',
    link: '#',
    github: '#',
    featured: true,
  },
  {
    id: 4,
    title: 'VoiceOS',
    description: 'Voice-first AI operating interface with real-time speech recognition and TTS synthesis.',
    longDescription:
      'An experimental voice-controlled AI assistant that integrates speech recognition, LLM processing, and text-to-speech into a seamless conversational interface. Features wake-word detection, multi-language support, custom voice cloning, and smart home integration via webhooks.',
    tech: ['Next.js', 'Whisper API', 'ElevenLabs', 'WebRTC', 'Node.js', 'Redis'],
    category: ['AI', 'Voice', 'Realtime'],
    year: 2023,
    color: '#ec4899',
    accentColor: '#f472b6',
    link: '#',
    github: '#',
    featured: false,
  },
  {
    id: 5,
    title: 'PromptForge',
    description: 'Collaborative prompt engineering workspace with version control and performance benchmarking.',
    longDescription:
      'A developer tool for crafting, testing, and versioning AI prompts. Provides a collaborative workspace for teams, A/B testing different prompt versions, benchmarking against custom evaluation criteria, and exporting prompts as typed constants for use in production codebases.',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'OpenAI', 'Tailwind', 'Zustand'],
    category: ['AI', 'Developer Tools'],
    year: 2023,
    color: '#8b5cf6',
    accentColor: '#a78bfa',
    link: '#',
    github: '#',
    featured: false,
  },
  {
    id: 6,
    title: 'ShipFast AI',
    description: 'Boilerplate SaaS starter with AI features pre-wired — auth, billing, and LLM integrations.',
    longDescription:
      'A production-ready Next.js SaaS boilerplate with AI capabilities baked in from day one. Includes Stripe billing, NextAuth, OpenAI chat, image generation, document Q&A, rate limiting, usage tracking, and a beautiful UI component library. Helps developers ship AI products in days.',
    tech: ['Next.js', 'Stripe', 'Prisma', 'OpenAI', 'NextAuth', 'TypeScript'],
    category: ['Fullstack', 'SaaS', 'AI'],
    year: 2023,
    color: '#06b6d4',
    accentColor: '#22d3ee',
    link: '#',
    github: '#',
    featured: false,
  },
]

export const categories = ['All', 'AI', 'Fullstack', 'Developer Tools', 'Data', 'Realtime', 'SaaS', 'Voice']
