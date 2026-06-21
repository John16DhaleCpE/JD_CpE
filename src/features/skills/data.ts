// ──────────────────────────────────────────────
// Skills — data layer
// ──────────────────────────────────────────────
// All skill data extracted from the Skills component.
// This keeps the UI clean and makes skills easy to update.
//
// Each skill group has a label, code comment (displayed
// below the title), color, and list of skills.
// ──────────────────────────────────────────────

import { SkillGroup } from './types'

export const skillGroups: SkillGroup[] = [
  {
    label: 'Web & Software',
    code: '// web & software development',
    color: 'var(--accent)',
    skills: [
      { name: 'HTML', accent: true },
      { name: 'CSS', accent: true },
      { name: 'Tailwind CSS', accent: true },
      { name: 'JavaScript', accent: true },
      { name: 'TypeScript', accent: true },
      { name: 'React', accent: true },
      { name: 'Next.js', accent: true },
      { name: 'Node.js', accent: true },
      { name: 'Vercel', secondary: true },
    ],
  },
  {
    label: 'AI & Productivity',
    code: '// ai & productivity tools',
    color: '#a78bfa',
    skills: [
      { name: 'OpenCode', accent: true },
      { name: 'Claude', accent: true },
      { name: 'Notion', secondary: true },
    ],
  },
  {
    label: 'Computer Engineering',
    code: '// computer engineering',
    color: 'var(--secondary)',
    skills: [
      { name: 'Arduino', accent: true },
      { name: 'Arduino IDE', accent: true },
      { name: 'Embedded Systems', accent: true },
      { name: 'Microcontrollers', secondary: true },
      { name: 'Sensors', secondary: true },
      { name: 'OLED / SH110x', secondary: true },
      { name: 'Circuit Design', secondary: true },
    ],
  },
  {
    label: 'Design & Optimization',
    code: '// design & optimization',
    color: '#f472b6',
    skills: [
      { name: 'Canva', accent: true },
      { name: 'Squoosh', secondary: true },
    ],
  },
  {
    label: 'Workflow & Mindset',
    code: '// workflow & engineering mindset',
    color: 'var(--muted)',
    skills: [
      { name: 'Git', accent: true },
      { name: 'GitHub', accent: true },
      { name: 'VS Code', secondary: true },
      { name: 'WSL / Linux', secondary: true },
      { name: 'Debugging', secondary: true },
      { name: 'Documentation', secondary: true },
      { name: 'Agile Mindset', secondary: true },
    ],
  },
]
