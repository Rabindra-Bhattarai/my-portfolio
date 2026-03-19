export type Insight = {
  num: string
  category: string
  title: string
  excerpt: string
  readTime: string
  tags: string[]
}

export const insights: Insight[] = [
  {
    num: '01',
    category: 'Fullstack · Testing',
    title: 'Why Integration Tests Saved NepaLink at 2am',
    excerpt:
      "We pushed a contract update that silently broke chat unlocking for every existing member. Here's how our Supertest + mongodb-memory-server setup caught it before a single user noticed — and what that taught me about testing philosophy.",
    readTime: '5 min read',
    tags: ['Testing'],
  },
  {
    num: '02',
    category: 'Data Analytics',
    title: "Tableau Taught Me That Data Is Just a Story Waiting to Be Told",
    excerpt:
      "The first time I built a dashboard that made a non-technical stakeholder go 'oh, I get it now' — I understood why visualization matters more than the data itself. On building charts people actually read, not just charts that exist.",
    readTime: '6 min read',
    tags: ['Tableau', 'Visualization'],
  },
  {
    num: '03',
    category: 'AI Integration',
    title: "Wiring Groq into a Production App Without Making It Weird",
    excerpt:
      "Adding AI to NepaLink via ai_summary wasn't about hype — it was about a real user problem: nurses have rich profiles, but members don't have time to read them. How I integrated Groq's inference into a live system, and what I'd do differently.",
    readTime: '7 min read',
    tags: ['Groq', 'AI', 'Fullstack'],
  },
  {
    num: '04',
    category: 'Healthcare Data',
    title: "What Hospital Data Actually Looks Like (And Why It's Hard)",
    excerpt:
      "Working on my thesis — a real-time hospital dashboard for bed occupancy and staff allocation — I've come face-to-face with messy, inconsistent, deeply human data. This is what I learned about the gap between dashboards and decisions.",
    readTime: '8 min read',
    tags: ['Data', 'Healthcare'],
  },
]