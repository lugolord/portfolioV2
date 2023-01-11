import styles from './Sidebar.module.css'
import 'react-toastify/dist/ReactToastify.css'
import mainPic from '../../assets/me.jfif'
import Switch from '@mui/material/Switch'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'
import { useThemeContext } from '../../context/ThemeContext'
import { ToastContainer, toast } from 'react-toastify'

const Sidebar = ({ setView }) => {
  const { darkMode, setDarkMode } = useThemeContext()

  const goTo = (url) => window.open(url, '_blank', 'noopener noreferrer')

  const showEmail = () => toast('lugo50635@gmail.com')

  return (
    <div className={`${darkMode ? styles.darkContainer : styles.container}`}>
      <div>
        <div className={styles.header}>
          <img src={mainPic} alt='Luis Gonzalez' className={styles.minPhoto} />
          <div className={styles.name}>
            <h2>Luis Gonzalez</h2>
            <h3>
              Web <span className={styles.dev}>developer</span>
            </h3>
          </div>
        </div>
        <div className={styles.networks}>
          <FaGithub
            className={styles.icon}
            size={'10%'}
            onClick={() => goTo('https://github.com/lugolord')} 
          />
          <FaLinkedin
            className={styles.icon}
            size={'10%'} 
            onClick={() => goTo('https://www.linkedin.com/in/lugolord')}
          />
          <IoMail
            className={styles.icon}
            size={'10%'}
            onClick={showEmail}
          />
        </div>
        <ul className={styles.list}>
          <li onClick={() => setView('home')}>Home</li>
          <li onClick={() => setView('stack')}>Stack</li>
          <li onClick={() => setView('projects')}>Projects</li>
        </ul>
        <div className={styles.switcher}>
          <Switch onClick={() => setDarkMode(!darkMode)} color='warning' />
          {darkMode ? '🌙' : '🌞'}
        </div>
      </div>
      <ToastContainer
        position='top-right'
        autoClose={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        theme='light'
      />
    </div>
  )
}

export default Sidebar
