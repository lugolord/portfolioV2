import { motion } from 'motion/react'

function Project ({ title, repo, preview } : { title: string, repo: string, preview?: string }) {
  return (
    <div className='bg-black dark:bg-white rounded mb-5'>
      <motion.div 
        className='flex flex-col sm:flex-row items-stretch sm:items-center border border-gray-300 rounded p-3 justify-between bg-white dark:bg-black'
        whileHover={{ x: 5, y: 5 }}
      >
        <p className='mb-3 sm:mb-0'>{title}</p>
        <div className='flex justify-between gap-3'>
          <a  
            className='flex-1 px-5 py-3 sm:py-1 rounded border hover:scale-105 transition cursor-pointer dark:bg-white dark:text-black'
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
          >
            repo
          </a>
          
          <a 
            className={`flex-1 bg-gray-800 dark:bg-black text-white px-5 py-3 sm:py-1 rounded border hover:scale-105 cursor-pointer ${preview ? '' : 'opacity-70'}`}
            href={preview}
            target="_blank"
            rel="noopener noreferrer"
          >
            preview
          </a>      
        </div>
      </motion.div>
    </div>
  )
}

export default Project
