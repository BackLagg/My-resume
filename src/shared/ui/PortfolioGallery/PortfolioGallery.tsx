import { ExpandableProjectCard } from '@/entities/project'
import { Project } from '@/shared/types'
import styles from './PortfolioGallery.module.scss'

interface PortfolioGalleryProps {
  projects: Project[]
  title?: string
  className?: string
}

export const PortfolioGallery = ({ 
  projects, 
  title = 'Портфолио',
  className = ''
}: PortfolioGalleryProps) => {
  return (
    <div className={`${styles.gallery} ${className}`}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <div className={styles.projectsList}>
        {projects.map((project, index) => (
          <ExpandableProjectCard 
            key={`${project.title}-${index}`} 
            project={project} 
            index={index} 
          />
        ))}
      </div>
    </div>
  )
}
