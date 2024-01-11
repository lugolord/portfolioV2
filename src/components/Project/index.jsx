import DocCode from '../DocCode'
import styles from './Project.module.css'
import { Chip } from '@mui/material'

const Project = ({ heading, img, alt, technologies, command }) => {
  return (
    <article className={styles.projectContainer}>
      <h2 className={styles.projectTitle}>{heading}</h2>
      <img src={img} alt={alt} className={styles.projectImage} />
      <div className={styles.techList}>
        {technologies.map((tech, index) => <Chip key={index} label={tech} variant='outlined' size='small' color='warning' />)}
      </div>
      <p style={{ marginBottom: 20 }}>
        Si te interesa ver el deploy del proyecto ejecuta el siguiente comando
        y haz click en la salida:
      </p>
      <DocCode type='code' text={command} />
    </article>
  )
}

export default Project
