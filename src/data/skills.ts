import { CodeXml, Database, Layers, Server } from 'lucide-react'
import type { SkillGroup } from '../types'

export const skillGroups: SkillGroup[] = [
  {
    title: 'Linguagens',
    icon: CodeXml,
    skills: [{ name: 'TypeScript' }, { name: 'Python' }, { name: 'SQL' }, { name: 'JavaScript' }],
  },
  {
    title: 'Frameworks',
    icon: Layers,
    skills: [
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'React Native' },
      { name: 'Expo' },
      { name: 'FastAPI' },
    ],
  },
  {
    title: 'Banco de Dados',
    icon: Database,
    skills: [{ name: 'PostgreSQL' }, { name: 'Supabase', aliases: ['Supabase Auth'] }, { name: 'pgvector' }],
  },
  {
    title: 'Infra & Ferramentas',
    icon: Server,
    skills: [
      { name: 'Docker' },
      { name: 'GitHub Actions' },
      { name: 'Git' },
      { name: 'Figma' },
      { name: 'Claude Code' },
    ],
  },
]
