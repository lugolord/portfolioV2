import WorkTimeline from './WorkTimeline'
import { works } from '../data/works.ts'

function WorkContainer () {
  return (
    <div className='mt-16'>
      <h2 className="text-2xl sm:text-4xl text-gray-800 dark:text-white font-mono mb-4">
        Experiencia laboral
      </h2>
      <WorkTimeline works={works} />
    </div>
  )
}

export default WorkContainer
