import type { IconType } from 'react-icons'
import { FaCheck as CheckIcon } from "react-icons/fa6"
import toast, { Toaster } from 'react-hot-toast'

function TopBadge ({ label, Icon, type, url } : { label: string, Icon: IconType, type?: 'link', url?: string }) {
  const handleClick = () => {
    navigator.clipboard.writeText('luisgonz.dev@gmail.com');
    toast('correo copiado', { position: 'top-right', icon: <CheckIcon />, duration: 1500 })
  }

  if (type === 'link') {
    return (
      <a 
        className='cursor-pointer border border-gray-300 w-fit px-3 py-1 rounded-2xl flex items-center gap-1
        hover:bg-black hover:text-white transition-all duration-150 dark:text-white dark:hover:bg-white dark:hover:text-black'
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon /> {label}
      </a>
    )
  }
  
  return (
    <button 
      className='cursor-pointer border border-gray-300 w-fit px-3 py-1 rounded-2xl flex items-center gap-1 
      hover:bg-black hover:text-white transition-all duration-150 dark:text-white dark:hover:bg-white dark:hover:text-black'
      onClick={handleClick}
    >
      <Icon /> <span>{label}</span>
      <Toaster />
    </button>
  )
}

export default TopBadge
