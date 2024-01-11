import styles from './DocCode.module.css'

const DocCode = ({ text }) => {
  return (
    <div className={styles.docCodeCont}>
      <p className={styles.docCode}>{text}</p>
    </div>
  )
}

export default DocCode
