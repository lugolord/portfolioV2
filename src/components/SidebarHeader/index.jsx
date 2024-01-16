import mainPic from '../../assets/me.jfif'
import styles from './SidebarHeader.module.css'

export default function SidebarHeader () {
  return (
    <header className={styles.header}>
      <img src={mainPic} alt='Luis Gonzalez' className={styles.minPhoto} />
      <div className={styles.name}>
        <h2>Luis Gonzalez</h2>
        <h3>
          Web <span className={styles.dev}>developer</span>
        </h3>
      </div>
    </header>
  )
}
