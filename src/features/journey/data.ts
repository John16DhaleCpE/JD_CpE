// ──────────────────────────────────────────────
// Journey — data layer
// ──────────────────────────────────────────────
// Timeline data extracted from the Journey component.
// Each item represents a phase in the learning/career journey.
// ──────────────────────────────────────────────

import { TimelineItemData } from './types'

export const timelineItems: TimelineItemData[] = [
  {
    date: 'FOUNDATION',
    title: 'Computer Engineering Degree',
    desc: 'Built a strong foundation in hardware, digital systems, embedded programming, and engineering fundamentals. Developed a systems-thinking mindset that shapes how I approach every technical problem.',
    active: false,
  },
  {
    date: 'EXPLORATION',
    title: 'Discovering Web Development',
    desc: 'Started self-studying HTML, CSS, and JavaScript. Realized the same problem-solving skills from CpE apply beautifully to building for the web. Began understanding the full stack from the ground up.',
    active: false,
  },
  {
    date: 'ACCELERATION',
    title: 'Modern Stack & Tooling',
    desc: 'Diving deep into TypeScript, React, and Next.js. Learning real developer workflows — Git, GitHub, WSL, Linux terminal. Integrating AI-assisted development tools to sharpen productivity and learning speed.',
    active: false,
  },
  {
    date: 'NOW →',
    title: 'Building & Shipping',
    desc: 'Turning skills into real products. Building a portfolio of meaningful projects that combine my hardware engineering background with modern web development — aiming for roles where both worlds intersect.',
    active: true,
  },
]
