import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rabindra Bhattarai — Architecting Care, Code & Clarity',
  description:
    'Fullstack developer, AI integrator, and data storyteller based in Kathmandu, Nepal. Architect of NepaLink — a dual-platform caregiving ecosystem.',
  keywords: [
    'Rabindra Bhattarai',
    'Fullstack Developer',
    'Next.js',
    'Flutter',
    'AI Integration',
    'Groq',
    'Data Analytics',
    'Tableau',
    'NepaLink',
    'Nepal',
  ],
  authors: [{ name: 'Rabindra Bhattarai' }],
  openGraph: {
    title: 'Rabindra Bhattarai — Architecting Care, Code & Clarity',
    description: 'Fullstack developer, AI integrator, and data storyteller.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}