import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { MdArrowDownward } from 'react-icons/md'
import styles from './StackAccordion.module.css'

export default function StackAccordion ({ title, stack }) {
  return (
    <Accordion className={styles.accordion}>
      <AccordionSummary
        expandIcon={<MdArrowDownward color='#fff' />}
        aria-controls='panel1-content'
        id='panel1-header'
      >
        {title}
      </AccordionSummary>
      <AccordionDetails style={{ backgroundColor: '#131413' }}>
        <ul className={styles.stackList}>
          {stack.map(el => (
            <li key={el.title} className={styles.listItem}>{el.title} <el.icon color={el.color} /></li>
          ))}
        </ul>
      </AccordionDetails>
    </Accordion>
  )
}
