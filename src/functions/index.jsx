import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3, DiJavascript1, DiReact, DiNpm } from 'react-icons/di'
import { FaBootstrap, FaNodeJs } from 'react-icons/fa'
import { SiStyledcomponents, SiExpress, SiFirebase, SiGit } from 'react-icons/si'

const capitalEslovenia = () => ({ value: 'Liubliana', type: 'p' })

const jsEcommerce = () => ({
  value: 'jsEcommerce 👈',
  href: 'https://lugolord.github.io/flatnwhite/index.html',
  type: 'a'
})

const reactEcommerce = () => ({
  value: 'reactEcommerce 👈',
  href: 'https://lugolord.github.io/flatnwhiteReact/',
  type: 'a'
})

const todoApp = () => ({
  value: 'todoApp 👈',
  href: 'https://lugolord.github.io/toDoFuckingApp/',
  type: 'a'
})

const getFullStack = () => {
  return ({ value: 'fullstack', type: 'component'})
}

const getFrontStack = () => {
  return ({ value: 'front', type: 'component'})
}

const getBackStack = () => {
  return ({ value: 'back', type: 'component'})
}

export const FullStack = () => {
  const styles = {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    marginTop: 10,
    marginBottom: 10
  }

  return (
    <>
      <p style={styles}>HTML <AiFillHtml5 color='orange'  size={30} /></p>
      <p style={styles}>CSS <DiCss3 color='blue' size={30} /></p>
      <p style={styles}>JavaSscript <DiJavascript1 color='yellow' size={30} /></p>
      <p style={styles}>React <DiReact color='#61dafb' size={30} /></p>
      <p style={styles}>Bootstrap <FaBootstrap color='#6f2cf3' size={30} /></p>
      <p style={styles}>Styled-components <SiStyledcomponents color='#ea05f2' size={30} /></p>
      <p style={styles}>CSS modules</p>
      <p style={styles}>NodeJS <FaNodeJs color='#026e00' size={30} /></p>
      <p style={styles}>npm <DiNpm color='red' size={30} /></p>
      <p style={styles}>Express <SiExpress size={30} /></p>
      <p style={styles}>Firebase <SiFirebase color='orange' size={30} /></p>
      <p style={styles}>Git <SiGit color='orange' size={30} /></p>
    </>
  )
}

export const FrontStack = () => {
  const styles = {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    marginTop: 10,
    marginBottom: 10
  }

  return (
    <>
      <p style={styles}>HTML <AiFillHtml5 color='orange'  size={30} /></p>
      <p style={styles}>CSS <DiCss3 color='blue' size={30} /></p>
      <p style={styles}>JavaSscript <DiJavascript1 color='yellow' size={30} /></p>
      <p style={styles}>React <DiReact color='#61dafb' size={30} /></p>
      <p style={styles}>Bootstrap <FaBootstrap color='#6f2cf3' size={30} /></p>
      <p style={styles}>Styled-components <SiStyledcomponents color='#ea05f2' size={30} /></p>
      <p style={styles}>CSS modules</p>
    </>
  )
}

export const BackStack = () => {
  const styles = {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    marginTop: 10,
    marginBottom: 10
  }

  return (
    <>
      <p style={styles}>NodeJS <FaNodeJs color='#026e00' size={30} /></p>
      <p style={styles}>Express <SiExpress size={30} /></p>
      <p style={styles}>Firebase <SiFirebase color='orange' size={30} /></p>
    </>
  )
}

export const functions = [
  capitalEslovenia,
  jsEcommerce,
  reactEcommerce,
  todoApp,
  getFullStack,
  getFrontStack,
  getBackStack
]