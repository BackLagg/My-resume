export interface Project {
  title: string
  description: string
  tech: string[]
  link?: string
  images?: string[]
  preview?: string
}

export interface ContactLink {
  icon: string
  label: string
  href: string
  external?: boolean
}

export interface SkillCategory {
  title: string
  icon: string
  skills: string[]
}
