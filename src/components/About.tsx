const tags = [
  '#frontend',
  '#anime',
  '#coffee',
  '#videogames',
  '#music',
  '#marvel',
  '#fromVenezuela',
  '#argentina'
]

function About () {
  return (
    <div className='mt-16'>
      <h2 className="text-2xl sm:text-4xl text-gray-800 dark:text-white font-mono mb-4">
        Sobre mí
      </h2>
      <div className='flex gap-3 items-center mb-3 flex-wrap'>
        {tags.map(tag => <span key={tag} className="badge bg-gray-900 text-white p-3 dark:bg-white dark:text-black">{tag}</span>)}
      </div>
    </div>
  )
}

export default About
