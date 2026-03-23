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
    link: 'https://kropify.vercel.app/',
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
    link: 'https://alertest.vercel.app/',
    github: '#',
    featured: true,
  },
  {
    id: 4,
    title: 'Agency Portfolio',
    description: 'Website development Agency Portioflio website',
    longDescription:
      'Devnio is an onlin agency which developes websites for their clients',
    tech: ['Next.js', 'React', 'Node.js',],
    category: ['Frontend'],
    year: 2023,
    color: '#ec4899',
    accentColor: '#f472b6',
    link: 'https://devnio2.vercel.app/',
    github: '#',
    featured: false,
  },
  {
    id: 5,
    title: 'Devdome',
    description: 'A globe for worldwide events',
    longDescription:
      'Devdome is web platform in which all the events location , details are shown on the earth globe and user can directly redirect to their application page from it ',
    tech: ['Next.js', 'TypeScript', 'Globe.gl', 'React','Express'],
    category: ['Fullstack', '3D-Frontend'],
    year: 2023,
    color: '#8b5cf6',
    accentColor: '#a78bfa',
    link: '#',
    github: '#',
    featured: false,
  }
]

export const categories = ['All', 'AI', 'Fullstack', 'Developer Tools', 'Data', 'Realtime', 'SaaS', 'Voice']
