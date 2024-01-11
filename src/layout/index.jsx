import styles from './layout.module.css'
import Sidebar from '../components/Sidebar'

export default function Layout ({ children }) {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <main className={styles.main}>{children}</main>
      <div>code</div>
    </div>
  )
}
