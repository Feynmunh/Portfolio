export interface FeedPost {
  id: number
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  category: 'Development' | 'AI' | 'Design' | 'Thoughts'
  readTime: string
  tags: string[]
  featured?: boolean
}

export const feedPosts: FeedPost[] = [
  {
    id: 1,
    slug: 'integrating-gpt4-production-apps',
    title: 'Integrating GPT-4 into Production Applications',
    excerpt:
      'A deep dive into the patterns, pitfalls, and best practices for building reliable AI-powered features that scale — from prompt engineering to streaming responses.',
    content: `
      Building production-ready AI applications is fundamentally different from building demos.
      The gap between a working prototype and a production system is where most teams struggle.

      In this post, I'll share the lessons I've learned shipping AI features to real users —
      covering everything from prompt design to error handling, cost optimization, and observability.
    `,
    date: '2024-12-18',
    category: 'AI',
    readTime: '7 min read',
    tags: ['GPT-4', 'OpenAI', 'Next.js', 'Production'],
    featured: true,
  },
  {
    id: 2,
    slug: 'architecture-ai-first-applications',
    title: 'The Architecture of AI-First Applications',
    excerpt:
      'How to design your fullstack application from the ground up with AI at its core — not bolted on as an afterthought. A framework for thinking about AI-native products.',
    content: `
      Most applications treat AI as a feature. AI-first applications treat intelligence as infrastructure.

      This distinction shapes every architectural decision — from your data model to your API design,
      from your state management to your deployment strategy.
    `,
    date: '2024-12-05',
    category: 'Development',
    readTime: '9 min read',
    tags: ['Architecture', 'AI', 'System Design', 'Fullstack'],
    featured: true,
  },
  {
    id: 3,
    slug: 'realtime-ai-streaming-nextjs',
    title: 'Building Real-Time AI Streaming with Next.js',
    excerpt:
      'How to implement token-by-token streaming from LLMs in your Next.js app using Server-Sent Events and the Vercel AI SDK for a ChatGPT-like experience.',
    content: `
      Users expect instant feedback. Waiting 10 seconds for an AI response feels broken,
      even if the response is excellent. Streaming changes everything.

      In this tutorial, we'll build a complete streaming pipeline from the OpenAI API
      all the way to a React component that updates in real-time.
    `,
    date: '2024-11-22',
    category: 'Development',
    readTime: '11 min read',
    tags: ['Streaming', 'Next.js', 'SSE', 'Vercel AI SDK'],
  },
  {
    id: 4,
    slug: 'prompt-engineering-to-production',
    title: 'From Prompt Engineering to Production',
    excerpt:
      'Prompt engineering is just the beginning. Learn how to version, test, evaluate, and iterate on prompts at scale — treating them as first-class code artifacts.',
    content: `
      The term "prompt engineering" undersells the discipline. A better frame is "prompt lifecycle management."

      Like code, prompts need to be versioned, reviewed, tested, and monitored in production.
      Here's the system I use to manage prompts across multiple projects.
    `,
    date: '2024-11-10',
    category: 'AI',
    readTime: '6 min read',
    tags: ['Prompts', 'LLM', 'Engineering', 'Testing'],
  },
  {
    id: 5,
    slug: 'building-dark-mode-design-system',
    title: 'Building a Dark-Mode-First Design System',
    excerpt:
      'Why I build all my projects dark-mode-first and how a consistent design system in Tailwind CSS speeds up every project from day one.',
    content: `
      Dark mode is no longer optional. It's expected — especially in developer tools, AI interfaces,
      and data-heavy applications.

      Building dark-first forces you to think in contrast and hierarchy,
      which produces cleaner designs in both modes.
    `,
    date: '2024-10-28',
    category: 'Design',
    readTime: '5 min read',
    tags: ['Design System', 'Tailwind', 'Dark Mode', 'UI'],
  },
  {
    id: 6,
    slug: 'why-i-chose-fullstack-ai',
    title: 'Why I Chose to Be a Fullstack AI Developer',
    excerpt:
      'A personal reflection on why the convergence of AI and fullstack development is the most exciting place to build right now — and how I got here.',
    content: `
      Two years ago, I was a fullstack developer who was "interested in AI."
      Today, AI is embedded in every line of code I write.

      This is the story of that shift — and why I think the fullstack AI developer
      is the most valuable role in tech right now.
    `,
    date: '2024-10-14',
    category: 'Thoughts',
    readTime: '4 min read',
    tags: ['Career', 'AI', 'Fullstack', 'Personal'],
  },
  {
    id: 7,
    slug: 'vector-databases-explained',
    title: 'Vector Databases Explained for Fullstack Developers',
    excerpt:
      'Everything you need to know about vector embeddings, semantic search, and RAG — explained for developers who are more comfortable with SQL than linear algebra.',
    content: `
      When I first heard "vector database," I assumed it was a data science problem.
      It's not. It's a product problem — and one that fullstack developers are uniquely positioned to solve.

      Here's the mental model that made vector search click for me.
    `,
    date: '2024-09-30',
    category: 'AI',
    readTime: '8 min read',
    tags: ['Vector DB', 'RAG', 'Embeddings', 'Pinecone'],
  },
  {
    id: 8,
    slug: 'speed-of-shipping',
    title: 'The Speed of Shipping Is a Moat',
    excerpt:
      'In the AI era, the developers who ship fast, iterate faster, and learn fastest are the ones who win. Here\'s how I optimized my personal shipping velocity.',
    content: `
      The half-life of a feature idea is about 48 hours. After that, someone else has shipped it,
      the market has moved, or you've talked yourself out of it.

      Speed isn't about cutting corners. It's about removing the friction between idea and user feedback.
    `,
    date: '2024-09-15',
    category: 'Thoughts',
    readTime: '5 min read',
    tags: ['Productivity', 'Shipping', 'Mindset', 'Startup'],
  },
]

export const categories = ['All', 'Development', 'AI', 'Design', 'Thoughts'] as const
export type Category = (typeof categories)[number]
