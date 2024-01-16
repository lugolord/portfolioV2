import DocCode from '../DocCode'
import styles from './Project.module.css'
import ProjectTechnologies from '../ProjectTechnologies'

const Project = ({ heading, img, alt, technologies, command }) => {
  return (
    <article className={styles.projectContainer}>
      <h2 className={styles.projectTitle}>{heading}</h2>
      <img src={img} alt={alt} className={styles.projectImage} />
      <ProjectTechnologies technologies={technologies} />
      <p style={{ marginBottom: 20 }}>
        Si te interesa ver el deploy del proyecto ejecuta el siguiente comando
        y haz click en la salida:
      </p>
      <DocCode type='code' text={command} />
    </article>
  )
}

export default Project
