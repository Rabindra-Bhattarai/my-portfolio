export type StackTag = {
  label: string
  color?: 'default' | 'ai' | 'data'
}

export type ProjectMetric = {
  num: string
  label: string
}

export type NepaLinkTab = {
  id: 'web' | 'mobile' | 'ai'
  icon: string
  label: string
  platformLabel: string
  description: string
  impact: string
  stack: StackTag[]
}

export type Project = {
  id: string
  tag: string
  name: string
  description: string
  impact?: string
  stack: StackTag[]
  expandContent?: string
  featured?: boolean
}

// NepaLink tabs are handled separately as it's a special featured card
export const nepalinkTabs: NepaLinkTab[] = [
  {
    id: 'web',
    icon: '🌐',
    label: 'Web Platform',
    platformLabel: 'Member & Admin · Next.js Web',
    description:
      'The web platform serves <strong>members</strong> booking caregiving services and <strong>admins</strong> managing the entire ecosystem. Built with a full dashboard — nurse listings, booking flows, contract management, analytics, and a real-time notification centre.',
    impact:
      'The admin dashboard aggregates live booking data, nurse activity, and contract states — giving operations a single source of truth across the entire platform.',
    stack: [
      { label: 'Next.js' }, { label: 'Node.js' }, { label: 'MongoDB' },
      { label: 'REST API' }, { label: 'HATEOAS' }, { label: 'Jest' },
      { label: 'Supertest' }, { label: 'Clean Arch' },
    ],
  },
  {
    id: 'mobile',
    icon: '📱',
    label: 'Mobile App',
    platformLabel: 'Nurse Workflow · Flutter Mobile',
    description:
      'The Flutter mobile app is the nurse\'s command centre — accepting bookings, managing active contracts, receiving real-time push notifications, and communicating with members through the contract-gated chat. Designed for on-the-go use in the field.',
    impact:
      'ContractId persistence across app restarts means a nurse never loses their chat thread — even after a force-close or network dropout. That reliability is what trust is built on.',
    stack: [
      { label: 'Flutter' }, { label: 'Dart' },
      { label: 'Push Notifications' }, { label: 'Real-time Chat' },
      { label: 'Contract Flow' }, { label: 'Booking Management' },
    ],
  },
  {
    id: 'ai',
    icon: '🤖',
    label: 'AI Layer',
    platformLabel: 'AI Summary Model · Groq-powered',
    description:
      'Built <strong>ai_summary</strong> — an AI layer powered by Groq that generates intelligent summaries of nurse profiles, care histories, and booking patterns. It bridges clinical data with human-readable insights, helping members make faster, more confident care decisions.',
    impact:
      "Groq's low-latency inference made real-time profile summarization actually usable — not a loading spinner, but an instant, readable snapshot that contextualises the nurse's experience for the member.",
    stack: [
      { label: 'Groq API', color: 'ai' }, { label: 'ai_summary', color: 'ai' },
      { label: 'LLM Integration', color: 'ai' }, { label: 'Profile Analysis', color: 'ai' },
      { label: 'Care History', color: 'ai' }, { label: 'Node.js' },
    ],
  },
]

export const nepalinkMetrics: ProjectMetric[] = [
  { num: '2', label: 'Platforms' },
  { num: '3', label: 'Arch Layers' },
  { num: 'AI', label: 'Groq-Powered' },
  { num: 'Live', label: 'Status' },
]

export const nepalinkFeatures = [
  'Web: member booking + admin dashboard',
  'Mobile: nurse workflow app in Flutter',
  'Real-time chat with contract-gated access',
  'Push notification system (web + mobile)',
  'ai_summary — Groq-powered profile insights',
  'ContractId persistence across app restarts',
  'BookingEntity & ChatMessageEntity — immutable',
  'Modular test suites · Jest + Supertest',
]

export const otherProjects: Project[] = [
  {
    id: 'bloodaid',
    tag: 'Civic Tech',
    name: 'BloodAidOfficial',
    description:
      'Blood donation saves lives — but finding donors in Nepal is fragmented and slow. BloodAidOfficial bridges donors and recipients through a streamlined request-and-match system.',
    stack: [
      { label: 'Backend API' }, { label: 'MongoDB' }, { label: 'Donor Matching' },
    ],
    expandContent:
      'Real-time donor availability · Blood type filtering · Emergency request escalation · Community-driven platform for Nepal\'s healthcare gap.',
  },
  {
    id: 'hamrogym',
    tag: 'Fitness Platform',
    name: 'Hamro-Gym',
    description:
      'A gym management and membership platform for Nepal\'s growing fitness industry — member tracking, attendance, payments, and trainer assignments in one system.',
    stack: [
      { label: 'Node.js' }, { label: 'REST API' }, { label: 'Member Management' },
    ],
    expandContent:
      'Membership lifecycle management · Trainer assignment system · Payment tracking · Attendance analytics · Role-based access control.',
  },
  {
    id: 'dsa',
    tag: 'Academic · Algorithms',
    name: 'DSA Implementations',
    description:
      'A structured collection of Data Structures & Algorithms — not just for practice, but as the intellectual foundation behind every system I architect.',
    stack: [
      { label: 'Trees' }, { label: 'Graphs' }, { label: 'Sorting' },
      { label: 'Dynamic Programming' }, { label: 'Search Algorithms' },
    ],
    expandContent:
      'Binary search trees, graph traversal (BFS/DFS), dynamic programming patterns, sorting algorithms with complexity analysis, hash maps, heaps, and queue/stack implementations.',
  },
]