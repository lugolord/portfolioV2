import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'
import styles from './Networks.module.css'

export default function Networks ({ goTo, showEmail }) {
  return (
    <div className={styles.networks}>
      <FaGithub
        className={styles.icon}
        onClick={() => goTo('https://github.com/lugolord')} 
      />
      <FaLinkedin
        className={styles.icon}
        onClick={() => goTo('https://www.linkedin.com/in/luisgonzr')}
      />
      <IoMail
        className={styles.icon}
        onClick={showEmail}
      />
    </div>
  )
}
