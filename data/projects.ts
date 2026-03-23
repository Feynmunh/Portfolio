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
    title: 'trackmebaby',
    description: 'A background desktop app that watches your projects folder and keeps track of what you are working on. Ask AI questions about your work history',
    longDescription:
      'trackmebaby is a lightweight desktop app that quietly watches your projects folder to build a rich history of your work. Say goodbye 👋 to manually opening and closing todos, forgetting where you left off, and maintaining a separate Notion page just to jot things down related to your project.',

    tech: ['elcrobun.js', 'Gemini', 'TypeScript', 'SQLite', 'TailwindCss', 'ReactJS'],
    category: ['AI', 'Fullstack'],
    year: 2024,
    color: '#6366f1',
    accentColor: '#818cf8',
    link: 'https://github.com/Feynmunh/trackmebaby',
    github: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Kropify',
    description: 'AI-powered Crop Yield Prediction and Recommendation System',
    longDescription:
      'Kropify is an intelligent crop yield prediction and recommendation system that helps farmers make informed decisions about their crops. It uses machine learning models to predict crop yields based on historical data, weather conditions, and soil properties. It also provides recommendations to farmers on how to improve their crop yields.',
    tech: ['Node.js', 'React', 'Next.js', 'Machine Learning', 'FastAPI,'],
    category: ['AI', 'Machine Learning'],
    year: 2024,
    color: '#10b981',
    accentColor: '#34d399',
    link: '#',
    github: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'Alertship',
    description: 'A web app for people to get notified about upcoming water and electricity outages on crowdsourced data',
    longDescription:
      'A data analytics platform that lets non-technical users query complex datasets using natural language. Translates questions into SQL, executes them, and renders results as beautiful interactive charts. Built with a Python/FastAPI backend, React frontend, and LangChain for query orchestration.',
    tech: ['React', 'Python', 'firestoredb', 'Google Maps API'],
    category: ['Data', 'Fullstack'],
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
  }
]

export const categories = ['All', 'AI', 'Fullstack', 'Developer Tools', 'Data', 'Realtime', 'SaaS', 'Voice']
