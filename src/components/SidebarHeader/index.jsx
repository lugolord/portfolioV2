import mainPic from '../../assets/me.jfif'

export default function SidebarHeader ({ styles }) {
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
