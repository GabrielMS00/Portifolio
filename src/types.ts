import type { LucideIcon } from 'lucide-react'

export type Profile = {
  name: string
  headline: string
  role: string
  summary: string
  availability: string
  focus: string[]
  baseStack: string[]
  education: string
  email: string
  github: string
  linkedin: string
}

export type Screen = {
  title: string
  caption: string
  image?: string
  alt?: string
  statusColor?: string
}

export type Feature = {
  icon: LucideIcon
  title: string
  text: string
}

export type StackGroup = {
  label: string
  items: string[]
}

export type Project = {
  id: string
  name: string
  category: string
  scope: string
  year: string
  status: string
  description: string
  features: Feature[]
  stack: StackGroup[]
  screens: Screen[]
  screenAspect?: number
  repoUrl?: string
  demoUrl?: string
}

export type Skill = {
  name: string
}

export type SkillGroup = {
  title: string
  icon: LucideIcon
  skills: Skill[]
}
