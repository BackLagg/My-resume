import { Project } from '@/shared/types'
import styles from './ProjectCard.module.scss'

interface ProjectCardProps {
  project: Project
  index: number
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.number}>{String(index + 1).padStart(2, '0')}</div>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.description}>{project.description}</p>
      <div className={styles.tech}>
        {project.tech.map((tech) => (
          <span key={tech} className={styles.badge}>{tech}</span>
        ))}
      </div>
    </div>
  )
}
