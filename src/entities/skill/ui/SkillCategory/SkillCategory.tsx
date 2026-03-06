import { SkillCategory as SkillCategoryType } from '@/shared/types'
import styles from './SkillCategory.module.scss'

interface SkillCategoryProps {
  category: SkillCategoryType
  isActive: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
}

export const SkillCategory = ({ category, isActive, onMouseEnter, onMouseLeave }: SkillCategoryProps) => {
  return (
    <div 
      className={`${styles.category} ${isActive ? styles.active : ''}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <h3 className={styles.title}>
        <span className={styles.icon}>{category.icon}</span>
        {category.title}
      </h3>
      <div className={styles.tags}>
        {category.skills.map((skill) => (
          <span key={skill} className={styles.tag}>{skill}</span>
        ))}
      </div>
    </div>
  )
}
