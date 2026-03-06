import { ProjectCard } from '@/entities/project'
import { projects } from '@/shared/config'
import { AnimatedSection } from '@/shared/ui'
import styles from './Projects.module.scss'

export const Projects = () => {
  return (
    <AnimatedSection delay={200}>
      <div className={styles.section}>
        <h2 className={styles.title}>Портфолио</h2>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
