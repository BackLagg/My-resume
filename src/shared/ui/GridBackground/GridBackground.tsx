import { useState } from 'react'
import styles from './GridBackground.module.scss'

export const GridBackground = () => {
  const [hoveredSquares, setHoveredSquares] = useState<Set<string>>(new Set())
  const rows = 6
  const cols = 8

  const handleMouseEnter = (id: string) => {
    setHoveredSquares(prev => new Set(prev).add(id))
    setTimeout(() => {
      setHoveredSquares(prev => {
        const next = new Set(prev)
        next.delete(id)
        return next
      })
    }, 600)
  }

  // Right side: inverted staircase pattern (starts from top-left)
  const getRightSquareOpacity = (row: number, col: number) => {
    const startCol = Math.floor(row * 1.2)
    return col >= startCol ? 1 : 0
  }

  // Left side: pyramid pattern (expands downward)
  const getLeftSquareOpacity = (row: number, col: number) => {
    const maxColsInRow = Math.floor((row + 1) * 1.3)
    return col < maxColsInRow ? 1 : 0
  }

  const renderGrid = (side: 'left' | 'right') => {
    const getOpacity = side === 'right' ? getRightSquareOpacity : getLeftSquareOpacity
    
    return (
      <div className={`${styles.gridContainer} ${styles[side]}`}>
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div key={rowIndex} className={styles.row}>
            {Array.from({ length: cols }).map((_, colIndex) => {
              const id = `${side}-${rowIndex}-${colIndex}`
              const opacity = getOpacity(rowIndex, colIndex)
              
              if (opacity === 0) {
                return <div key={id} className={styles.emptySquare} />
              }

              return (
                <div
                  key={id}
                  className={`${styles.square} ${
                    hoveredSquares.has(id) ? styles.highlighted : ''
                  }`}
                  onMouseEnter={() => handleMouseEnter(id)}
                />
              )
            })}
          </div>
        ))}
      </div>
    )
  }

  return (
    <>
      {renderGrid('right')}
      {renderGrid('left')}
    </>
  )
}
