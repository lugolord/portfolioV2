import styles from '../../Documentation.module.css'
import DocCode from '../../DocCode'

const Instruction = ({ heading, parag, text }) => {
  return (
    <div className={styles.docInstruction}>
      <h2 className={styles.subHeading}>{heading}</h2>
      <p>{parag}</p>
      <DocCode text={text} type='code' />
    </div>
  )

}

export default Instruction
