import styles from './App.module.css'
import Sidebar from './components/Sidebar'
import Documentation from './components/Documentation'
import Editor from './components/Editor'
import { useState } from 'react'
import { useThemeContext } from './context/ThemeContext'

function App() {
  const [view, setView] = useState('home')
  const { darkMode } = useThemeContext()

  return (
    <div className={`${styles.container} ${darkMode ? styles.darkMode : ''}`}>
      <Sidebar setView={setView} />
      <Documentation view={view} />
      <Editor />
    </div>
  )
}

export default App
