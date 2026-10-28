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
  resume: string
}

export type Screen = {
  title: string
  caption: string
  /** Caminho da imagem a partir de /public, ex.: '/projects/bora-onde/01-login.webp' */
  image?: string
  alt?: string
  /** Cor do topo do print, usada na faixa da barra de status do celular */
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

export type RepoLink = {
  /** Texto do botão */
  label: string
  url: string
}

export type Project = {
  id: string
  name: string
  category: string
  scope: string
  year: string
  status: string
  /** Para projetos feitos em equipe: aparece como selo ao lado do ano e do status */
  collaboration?: string
  description: string
  features: Feature[]
  stack: StackGroup[]
  screens: Screen[]
  /** Largura ÷ altura dos prints do projeto; define a proporção da tela do celular */
  screenAspect?: number
  /** Um botão por repositório (ex.: frontend e backend separados) */
  repos?: RepoLink[]
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
