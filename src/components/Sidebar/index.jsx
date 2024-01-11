import { useState } from 'react'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import SidebarHeader from '../SidebarHeader'
import Networks from '../Networks'
import MailToast from '../MailToast'
import NavItem from '../NavItem'
import styles from './Sidebar.module.css'
import 'react-toastify/dist/ReactToastify.css'

const Prueba = () => {
  const [text, setText] = useState('copiar')
  const [color, setColor] = useState('warning')
  
  return (
    <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
      <p>luisgonz.dev@gmail.com</p>
      <Button
        variant='contained'
        color={color}
        style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}
        onClick={() => {
          navigator.clipboard.writeText('luisgonz.dev@gmail.com')
          setText('listo👍')
          setColor('success')
        }}
      >
        {text}
      </Button>
    </div>
  )
}

const Sidebar = () => {
  const goTo = (url) => window.open(url, '_blank', 'noopener noreferrer')

  const showEmail = () => toast.dark(<Prueba />)

  return (
    <aside className={styles.container}>
      <SidebarHeader styles={styles} />
      <Networks styles={styles} goTo={goTo} showEmail={showEmail} /> 
      <nav className={styles.list}>
        <NavItem path='/' text='Home' />
        <NavItem path='/stack' text='Stack' />
        <NavItem path='/projects' text='Projects' />
      </nav>
      <MailToast />
    </aside>
  )
}

export default Sidebar
