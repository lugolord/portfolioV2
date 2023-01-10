import styles from '../../Documentation.module.css'
import DocCode from '../../DocCode'

const Project = (props) => {
  return (
    <div className={styles.project}>
      <h2>{props.heading}</h2>
      <img src={props.img} alt={props.alt} />
      <h3>Tecnologias usadas</h3>
      <ul>
        {props.technologies.map((tech, index) => <li key={index}>🔸 {tech}</li>)}
      </ul>
      <p>
        Si te interesa ver el deploy del proyecto ejecuta el siguiente comando
        y haz click en la salida:
      </p>
      <DocCode type='code' text={props.command} />
    </div>
  )
}

export default Project
