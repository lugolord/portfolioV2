import DocCode from '../../components/DocCode'
import StackAccordion from '../../components/StackAccordion'
import { frontStack, backStack } from '../../stacks'
import styles from './Stack.module.css'

export default function Stack () {
  return (
    <>
      <h1>Stack ⚒️</h1>
      <p>Aca podras ver las tecnologias que domino actualmente 🥷</p>
      <p>Puedes elegir entre ver todo mi stack o solo el de frontend o backend.</p>
      <div className={styles.stackCodes}>
        <DocCode text='getFullStack' type='code' />
        <DocCode text='getFrontStack' type='code' />
        <DocCode text='getBackStack' type='code' />
      </div>
      <p>
        Si lo prefieres, puedes ver directamente mi stack 👇
      </p>
      <StackAccordion title='Front end' stack={frontStack} />
      <StackAccordion title='Back end' stack={backStack} />
    </>
  )
}
