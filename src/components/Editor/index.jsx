import { useState, useEffect } from 'react'
import Output from '../Output'
import styles from './Editor.module.css'

const Editor = () => {
  const [code, setCode] = useState('')
  const [commands, setCommands] = useState([])

  const handleKeyUp = e => {
    if (e.key === 'Enter') {
      const codeCopy = code.replace('\n', '')
      setCommands([...commands, codeCopy])
      setCode('')
    }
  }

  useEffect(() => {
    if (commands.includes('clear')) setCommands([])
  }, [commands])

  return (
    <div className={styles.container}>
      <textarea
        className={styles.code}
        onChange={e => setCode(e.target.value)}
        onKeyUp={handleKeyUp}
        value={code}
        placeholder='code here...'
      />
      <div className={styles.output}>
        <h3>Output</h3>
        <Output commands={commands} />
      </div>
    </div>
  )
}

export default Editor
