import { functions } from '../../../functions'
import styles from './Output.module.css'
import { FullStack, FrontStack, BackStack } from '../../../functions'

const Output = ({ commands }) => {
  const findFunction = (command) => {
    const lookedFunction = functions.find(f => f.name === command)
    if (lookedFunction) return lookedFunction()
    return { value: 'command does not exist' }
  }

  return (
    <>
      {commands.map((command, index) => {
        const output = findFunction(command)

        if (output.type === 'a') {
          return (
          <a
            key={index}
            href={output.href}
            target='_blank'
            rel='noopener noreferrer'
            className={styles.link}
          >
            {output.value}
          </a>
          )
        }

        if (output.type === 'component') {
          switch (output.value) {
            case 'fullstack':
              return <FullStack key={index} />
            case 'front':
              return <FrontStack key={index} />
            case 'back':
              return <BackStack key={index} />
          }
        }

        return <p key={index} className={styles.output}>{output.value}</p>
      })}
    </>
  )
}

export default Output
