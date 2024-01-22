import { useState } from 'react'
import OutputContainer from '../OutputContainer'
import styles from './Editor.module.css'

export default function Editor () {
  const [codeIn, setCodeIn] = useState('')
  const [codeOut, setCodeOut] = useState('')

  const handleChange = e => {
    if (e.key === 'Enter') {
      const command = e.target.value
      setCodeOut(command.replace('\n', ''))
      setCodeIn('')
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.codeInput}>
        <input
          className={styles.code}
          onKeyUp={handleChange}
          placeholder='code here...'
          onChange={e => setCodeIn(e.target.value)}
          value={codeIn}
        />
      </div>
      <OutputContainer codeOut={codeOut} />
    </div>
  )
}
