import Project from './Project'

function ProjectsContainer () {
  return (
    <div className='mt-16 flex flex-col'>
      <h2 className="text-2xl sm:text-4xl text-gray-800 dark:text-white font-mono mb-4">
        Últimos proyectos
      </h2>
      <Project 
        title='React Ecommerce Front'
        repo='https://github.com/lugolord/my-commerce-front'
        preview='https://my-commerce-front-psi.vercel.app/' 
      />
      <Project 
        title='React Ecommerce Server'
        repo='https://github.com/lugolord/my-commerce-server' 
      />
    </div>
  )
}

export default ProjectsContainer
