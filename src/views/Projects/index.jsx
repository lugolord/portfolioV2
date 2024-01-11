// import styles from '../Documentation.module.css'
import fnwJs from '../../assets/fnwJsResized.png'
import fnwReact from '../../assets/fnwReactResized.png'
import toDoApp from '../../assets/toDoAppResized.png'
import Project from '../../components/Project'

const Projects = () => {
  return (
    <>
      <h1>Projects 👨‍💻</h1>
      <p>
        Aca podras ver algunos proyectos personales que he realizado.
      </p>
      <Project
        heading='flat&white ecommerce'
        img={fnwReact}
        technologies={['react', 'firebase', 'formik', 'react-router', 'bootstrap']}
        command='reactEcommerce'
      />
    </>
  )
}

export default Projects
