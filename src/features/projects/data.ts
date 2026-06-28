// ──────────────────────────────────────────────
// Projects — data layer
// ──────────────────────────────────────────────
// All project data extracted from the Projects
// component. Update projects here without touching
// the UI code.
// ──────────────────────────────────────────────

import { Project } from './types'

export const projects: Project[] = [
  {
    num: '02 // embedded systems',
    name: 'Memory Game — Arduino',
    desc: 'A Simon Says-style memory game built on a microcontroller. Uses LEDs and push buttons to generate and test sequences, testing user attention and reaction. Implements real-time input handling and sequential logic from scratch.',
    tags: ['Arduino', 'C/C++', 'LEDs', 'Game Logic', 'Embedded'],
    dashed: false,
  },
  {
    num: '03 // sensor integration',
    name: 'Heartbeat Monitor',
    desc: 'A real-time heart rate monitoring system using a pulse sensor and OLED display (SH110x library). Reads biometric data, processes it, and renders live output on screen — showcasing hardware integration and real-time data handling.',
    tags: ['Arduino', 'Pulse Sensor', 'OLED / SH110x', 'Real-time', 'Biomedical'],
    dashed: false,
  },
  {
    num: '04 // web application',
    name: 'Calculator Noir',
    desc: 'A dark-themed, cinematic calculator with a noir aesthetic. Features responsive arithmetic operations, calculation history tracking, and a sleek UI — blending design sensibility with functional web development.',
    tags: ['Next.js', 'TypeScript', 'React', 'UI/UX'],
    dashed: false,
    href: 'https://next-calc-john-dhale.vercel.app/',
    images: ['/calcu noir.jpg'],
  },
  {
    num: '05 // flagship thesis',
    name: 'Sheep Disease Diagnostic System',
    desc: 'An academic capstone project applying machine learning techniques to assist in diagnosing sheep diseases. Built as a data-driven diagnostic tool combining research, problem-solving, and intelligent system design — demonstrating how engineering can drive real-world impact in agriculture.',
    tags: ['Deep Learning', 'Disease Diagnosis', 'Data-Driven', 'Research', 'Python'],
    dashed: false,
  },
  {
    num: '06 // coming soon',
    name: 'Web Projects',
    desc: 'Task manager, IoT dashboard, and more in development. Combining CpE hardware background with modern web tech for unique full-stack projects.',
    tags: ['Next.js', 'TypeScript', 'React', 'In Progress'],
    dashed: true,
  },
]
