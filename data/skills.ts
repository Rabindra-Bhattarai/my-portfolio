export type SkillTag = {
  label: string
  color?: 'default' | 'ai' | 'data'
}

export type SkillDomain = {
  icon: string
  title: string
  tags: SkillTag[]
}

export const skillDomains: SkillDomain[] = [
  {
    icon: '🌐',
    title: 'Fullstack',
    tags: [
      { label: 'Next.js' }, { label: 'React' }, { label: 'Node.js' },
      { label: 'Flutter' }, { label: 'REST API' }, { label: 'MongoDB' },
      { label: 'PostgreSQL' }, { label: 'HATEOAS' },
      { label: 'Clean Architecture' }, { label: 'Jest' }, { label: 'Supertest' },
    ],
  },
  {
    icon: '🤖',
    title: 'AI & LLM',
    tags: [
      { label: 'Groq API', color: 'ai' }, { label: 'ai_summary', color: 'ai' },
      { label: 'LLM Integration', color: 'ai' }, { label: 'Prompt Engineering', color: 'ai' },
      { label: 'Intelligent Summarization', color: 'ai' },
      { label: 'AI-powered Features', color: 'ai' },
    ],
  },
  {
    icon: '📊',
    title: 'Data & Analytics',
    tags: [
      { label: 'Tableau', color: 'data' }, { label: 'Power BI', color: 'data' },
      { label: 'Python', color: 'data' }, { label: 'pandas', color: 'data' },
      { label: 'R', color: 'data' }, { label: 'SQL', color: 'data' },
      { label: 'Data Visualization', color: 'data' },
      { label: 'Dashboard Design', color: 'data' },
      { label: 'Statistical Analysis', color: 'data' },
    ],
  },
  {
    icon: '🛠',
    title: 'Tools & Workflow',
    tags: [
      { label: 'Git' }, { label: 'GitHub' }, { label: 'Postman' },
      { label: 'VS Code' }, { label: 'Figma' }, { label: 'Docker' },
      { label: 'Agile / Scrum' },
    ],
  },
]