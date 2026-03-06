import { useState, useEffect } from 'react'
import { Project } from '@/shared/types'
import styles from './ExpandableProjectCard.module.scss'

interface ExpandableProjectCardProps {
  project: Project
  index: number
}

interface ImageDimensions {
  [key: string]: 'vertical' | 'horizontal'
}

export const ExpandableProjectCard = ({ project, index }: ExpandableProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [imageDimensions, setImageDimensions] = useState<ImageDimensions>({})

  const handleToggle = () => {
    setIsExpanded(!isExpanded)
  }

  const displayImages = project.images || []
  const previewImage = project.preview || displayImages[0]

  useEffect(() => {
    const loadImageDimensions = async () => {
      const dimensions: ImageDimensions = {}
      
      for (const image of displayImages) {
        const img = new Image()
        img.src = image
        
        await new Promise((resolve) => {
          img.onload = () => {
            dimensions[image] = img.height > img.width ? 'vertical' : 'horizontal'
            resolve(null)
          }
          img.onerror = () => {
            dimensions[image] = 'horizontal'
            resolve(null)
          }
        })
      }
      
      setImageDimensions(dimensions)
    }

    if (displayImages.length > 0) {
      loadImageDimensions()
    }
  }, [displayImages])

  return (
    <div className={`${styles.card} ${isExpanded ? styles.expanded : ''}`}>
      <div className={styles.cardContent} onClick={handleToggle}>
        <div className={styles.preview}>
          {previewImage ? (
            <img 
              src={previewImage} 
              alt={project.title}
              className={styles.previewImage}
            />
          ) : (
            <div className={styles.placeholderPreview}>
              <span className={styles.number}>{String(index + 1).padStart(2, '0')}</span>
            </div>
          )}
          <div className={styles.overlay}>
            <button className={styles.expandButton} aria-label={isExpanded ? 'Свернуть' : 'Развернуть'}>
              <svg 
                className={styles.expandIcon} 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <polyline points={isExpanded ? "18 15 12 9 6 15" : "6 9 12 15 18 9"} />
              </svg>
            </button>
          </div>
        </div>

        <div className={styles.info}>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.description}>{project.description}</p>
          <div className={styles.tech}>
            {project.tech.map((tech) => (
              <span key={tech} className={styles.badge}>{tech}</span>
            ))}
          </div>
        </div>
      </div>

      {isExpanded && displayImages.length > 0 && (
        <div className={styles.gallery}>
          <div className={styles.galleryGrid}>
            {displayImages.map((image, idx) => {
              const orientation = imageDimensions[image] || 'horizontal'
              return (
                <div 
                  key={idx} 
                  className={`${styles.galleryItem} ${styles[orientation]}`}
                >
                  <img 
                    src={image} 
                    alt={`${project.title} - изображение ${idx + 1}`}
                    className={styles.galleryImage}
                  />
                </div>
              )
            })}
          </div>
          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.projectLink}
              onClick={(e) => e.stopPropagation()}
            >
              Посмотреть проект
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          )}
        </div>
      )}
    </div>
  )
}
