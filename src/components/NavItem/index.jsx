import { Link } from 'react-router-dom'
import styles from './NavItem.module.css'

export default function NavItem ({ path, text }) {
  return (
    <Link to={path} className={styles.link}>{text}</Link>
  )
}
