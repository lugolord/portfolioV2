import DocCode from '../../components/DocCode'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { MdArrowDownward } from "react-icons/md";
import { DiCss3, DiJavascript1, DiReact, DiNpm } from 'react-icons/di'
import { AiFillHtml5 } from 'react-icons/ai'
import { FaBootstrap, FaNodeJs } from 'react-icons/fa'
import { SiStyledcomponents, SiExpress, SiFirebase, SiGit } from 'react-icons/si'

export default function Stack () {
  return (
    <>
      <h1>Stack ⚒️</h1>
      <p>Aca podras ver las tecnologias que domino actualmente 🥷</p>
      <p>Puedes elegir entre ver todo mi stack o solo el de frontend o backend.</p>
      <div style={{ display: 'flex', gap: 10 }}>
        <DocCode text='getFullStack' type='code' />
        <DocCode text='getFrontStack' type='code' />
        <DocCode text='getBackStack' type='code' />
      </div>
      <p>
        En caso de que no quieras interactuar con el editor (lo cual esta perfecto 👌), puedes ver
        todo mi stack aca:
      </p>
      <Accordion style={{ width: '80%', backgroundColor: '#000', color: '#fff' }}>
        <AccordionSummary
          expandIcon={<MdArrowDownward color='#fff' />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Front end
        </AccordionSummary>
        <AccordionDetails>
          <ul style={{ padding: 0, display: 'flex', flexWrap: 'wrap' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 5, width: '50%' }}>HTML <AiFillHtml5 color='#f69206' /></li>
            <li style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 5, width: '50%' }}>CSS <DiCss3 color='#0632f6' /></li>
            <li style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 5, width: '50%' }}>JavaScript <DiJavascript1 color='#f9ed02' /></li>
            <li style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 5, width: '50%' }}>ReactJS <DiReact color='#149eca' /></li>
            <li style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 5, width: '50%' }}>Bootstrap <FaBootstrap color='#6d0eea' /></li>
            <li style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 5, width: '50%' }}>Styled components <SiStyledcomponents color='#fff' size={25} /></li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </>
  )
}
