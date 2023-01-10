import styles from './Documentation.module.css'
import Home from './Home'
import Stack from './Stack'
import Projects from './Projects'
import { useThemeContext } from '../../context/ThemeContext'

const Documentation = ({ view }) => {
  const { darkMode } = useThemeContext()

  return (
    <div className={`${styles.container} ${darkMode ? styles.darkContainer : ''}`}>
      {view === 'home' && <Home />}
      {view === 'stack' && <Stack />}
      {view === 'projects' && <Projects />}
    </div>
  )
}

export default Documentation