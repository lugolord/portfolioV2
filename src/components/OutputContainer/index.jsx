import Output from '../Output'
import styles from './OutputContainer.module.css'

export default function OutputContainer ({ codeOut }) {
  return (
    <>
      <h3 style={{ marginBottom: 20 }}>Output</h3>
      <div className={styles.output}>
        <Output code={codeOut} />
      </div>  
    </>
  )
}
