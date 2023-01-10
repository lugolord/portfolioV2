import DocCode from '../DocCode'
import Instruction from './Instruction'
import styles from '../Documentation.module.css'

const Stack = () => {
  return (
    <>
      <h1>Stack 🔨</h1>
      <p>
        Aca podras ver las tecnologias que mas uso 🐱‍👤.
      </p>
      <Instruction
        heading='Stack completo'
        parag='Para ver todas las tecnologias con las que he trabajado:'
        text='getFullStack'
      />
      <Instruction
        heading='Stack Front-end'
        parag='Para ver solo las tecnologias front-end:'
        text='getFrontStack'
      />
      <Instruction
        heading='Stack Back-end'
        parag='Para ver solo las tecnologias back-end:'
        text='getBackStack'
      />
    </>
  )
}

export default Stack
