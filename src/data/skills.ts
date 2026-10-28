import { CodeXml, Database, Layers, Server } from 'lucide-react'
import type { SkillGroup } from '../types'

export const skillGroups: SkillGroup[] = [
  {
    title: 'Linguagens',
    icon: CodeXml,
    skills: [{ name: 'JavaScript' }, { name: 'TypeScript' }, { name: 'Python' }, { name: 'SQL' }],
  },
  {
    title: 'Frameworks',
    icon: Layers,
    skills: [
      { name: 'React' },
      { name: 'React Native' },
      { name: 'Next.js' },
      { name: 'Vue.js' },
      { name: 'Expo' },
      { name: 'FastAPI' },
      { name: 'Django' },
    ],
  },
  {
    title: 'Banco de Dados',
    icon: Database,
    skills: [{ name: 'PostgreSQL' }, { name: 'Supabase' }, { name: 'pgvector' }],
  },
  {
    title: 'Infra & Ferramentas',
    icon: Server,
    skills: [
      { name: 'Docker' },
      { name: 'Git' },
      { name: 'GitHub Actions' },
      { name: 'Claude Code' },
      { name: 'Figma' },
    ],
  },
]
