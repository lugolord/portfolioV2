import styles from './DocCode.module.css'
import { useThemeContext } from '../../../context/ThemeContext'
import { useState } from 'react'

const DocCode = ({ text, type }) => {
  const { darkMode } = useThemeContext()

  if (type === 'code') {
    return (
      <div className={styles.docCodeCont}>
        <p className={`${darkMode ? styles.darkCode : styles.docCode}`}>{text}</p>
      </div>
    )
  }

  return <p className={`${darkMode ? styles.darkOutput : styles.docOutput}`}>{text}</p>
}

export default DocCode
