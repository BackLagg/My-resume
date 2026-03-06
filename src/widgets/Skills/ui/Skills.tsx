import { useState } from 'react'
import { SkillCategory } from '@/entities/skill'
import { skillCategories } from '@/shared/config'
import styles from './Skills.module.scss'

export const Skills = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Технологии</h2>
      <div className={styles.grid}>
        {skillCategories.map((category) => (
          <SkillCategory
            key={category.title}
            category={category}
            isActive={activeSection === category.title}
            onMouseEnter={() => setActiveSection(category.title)}
            onMouseLeave={() => setActiveSection(null)}
          />
        ))}
      </div>
    </section>
  )
}
