import { functions } from '../../functions'
import { FullStack, FrontStack, BackStack } from '../../functions'
import styles from './Output.module.css'

export default function Output ({ code }) {
  const findFunction = command => {
    const lookedFunction = functions.find(f => f.name === command)

    if (lookedFunction) return lookedFunction()

    return { value: 'command does not exist', type: 'notfound' }
  }

  const foundFunction = findFunction(code)

  if (foundFunction.type === 'a') {
    return (
    <a
      key={self.crypto.randomUUID()}
      href={foundFunction.href}
      target='_blank'
      rel='noopener noreferrer'
      className={styles.link}
    >
      {foundFunction.value}
    </a>
    )
  }

  if (foundFunction.type === 'component') {
    switch (foundFunction.value) {
      case 'fullstack':
        return <FullStack key={self.crypto.randomUUID()} />
      case 'front':
        return <FrontStack key={self.crypto.randomUUID()} />
      case 'back':
        return <BackStack key={self.crypto.randomUUID()} />
    }
  }

  if (code !== '') {
    return <p key={self.crypto.randomUUID()} className={styles.output}>{foundFunction.value}</p>
  }
}
