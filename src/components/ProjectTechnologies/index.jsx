import { Chip } from '@mui/material'
import styles from './ProjectTechnologies.module.css'

export default function ProjectTechnologies ({ technologies }) {
  return (
    <div className={styles.techList}>
      {technologies.map((tech, index) => (
        <Chip key={index} label={tech} variant='outlined' size='small' color='warning' />
      ))}
    </div>
  )
}
