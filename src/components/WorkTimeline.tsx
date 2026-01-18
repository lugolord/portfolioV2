import WorkItem from './WorkItem'

type Work = {
  id: number,
  title: string,
  time: string,
  description: string
}

export default function WorkTimeline ({ works } : { works: Work[]}) {
  return (
    <ul className="timeline timeline-vertical timeline-compact">
      {works.map(w => (
        <WorkItem
          key={w.id} 
          id={w.id}
          title={w.title}
          time={w.time}
          description={w.description}
        />
      ))}
    </ul>
  )
}
