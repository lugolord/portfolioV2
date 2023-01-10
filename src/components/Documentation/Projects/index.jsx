import styles from '../Documentation.module.css'
import fnwJs from '../../../assets/fnwJsResized.png'
import fnwReact from '../../../assets/fnwReactResized.png'
import toDoApp from '../../../assets/toDoAppResized.png'
import Project from './Project'

const Projects = () => {
  return (
    <div className={styles.projects}>
      <h1>Projects 👨‍💻</h1>
      <p>
        Aca podras ver algunos proyectos personales que he realizado.
      </p>
      <Project
        heading='Ecommerce con JavaScript'
        img={fnwJs}
        technologies={['HTML', 'CSS', 'JavaScript', 'jQuery']}
        command='jsEcommerce'
      />
      <hr />
      <Project
        heading='Ecommerce con React'
        img={fnwReact}
        technologies={['React', 'Firebase',]}
        command='reactEcommerce'
      />
      <hr />
      <Project
        heading='ToDo App'
        img={toDoApp}
        technologies={['React']}
        command='todoApp'
      />
    </div>
  )
}

export default Projects
