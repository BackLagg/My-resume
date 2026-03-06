import { ProjectCard } from '@/entities/project'
import { projects } from '@/shared/config'
import styles from './Projects.module.scss'

export const Projects = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Портфолио</h2>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
