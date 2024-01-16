import styles from './layout.module.css'
import Sidebar from '../components/Sidebar'
import Editor from '../components/Editor'

export default function Layout ({ children }) {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <main className={styles.main}>{children}</main>
      <Editor />
    </div>
  )
}
