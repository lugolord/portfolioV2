import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'

export default function Networks ({ styles, goTo, showEmail }) {
  return (
    <div className={styles.networks}>
      <FaGithub
        className={styles.icon}
        size='10%'
        onClick={() => goTo('https://github.com/lugolord')} 
      />
      <FaLinkedin
        className={styles.icon}
        size='10%' 
        onClick={() => goTo('https://www.linkedin.com/in/luisgonzr')}
      />
      <IoMail
        className={styles.icon}
        size='10%'
        onClick={showEmail}
      />
    </div>
  )
}
